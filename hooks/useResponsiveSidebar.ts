import { useCallback, useEffect, useState } from 'react';
import { useMediaQuery } from '@mantine/hooks';

interface ResponsiveSidebarConfig {
  minWidth: number;
  maxWidth: number;
  defaultWidth: number;
  autoCollapse: boolean;
  storageKey?: string;
}

const DEFAULT_CONFIG: ResponsiveSidebarConfig = {
  minWidth: 120, // Half of previous minimum width
  maxWidth: 400,
  defaultWidth: 180, // Reduced from 300 to 180px
  autoCollapse: true,
  storageKey: 'sidebar-width',
};

export interface ResponsiveSidebarState {
  width: number;
  isCollapsed: boolean;
  isResizing: boolean;
  isMini: boolean;
}

export interface ResponsiveSidebarActions {
  setWidth: (width: number) => void;
  toggleCollapse: () => void;
  startResizing: () => void;
  stopResizing: () => void;
  resetWidth: () => void;
  getResponsiveWidth: () => number;
}

export function useResponsiveSidebar(
  config: Partial<ResponsiveSidebarConfig> = {}
): ResponsiveSidebarState & ResponsiveSidebarActions {
  const finalConfig = { ...DEFAULT_CONFIG, ...config };
  
  // Media queries for responsive behavior
  const isXL = useMediaQuery('(min-width: 1440px)');
  const isLG = useMediaQuery('(min-width: 1200px) and (max-width: 1439px)');
  const isMD = useMediaQuery('(min-width: 1024px) and (max-width: 1199px)');
  const isSM = useMediaQuery('(min-width: 768px) and (max-width: 1023px)');
  const isXS = useMediaQuery('(max-width: 767px)');

  // Load initial width from localStorage or use default
  const getInitialWidth = useCallback(() => {
    if (typeof window === 'undefined') return finalConfig.defaultWidth;
    
    const stored = localStorage.getItem(finalConfig.storageKey!);
    if (stored) {
      const parsedWidth = parseInt(stored, 10);
      if (parsedWidth >= finalConfig.minWidth && parsedWidth <= finalConfig.maxWidth) {
        return parsedWidth;
      }
    }
    return finalConfig.defaultWidth;
  }, [finalConfig]);

  const [width, setWidthState] = useState(getInitialWidth);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isResizing, setIsResizing] = useState(false);

  // Calculate responsive width based on screen size
  const getResponsiveWidth = useCallback((): number => {
    if (isXS) return 280; // Mobile overlay - fixed width
    if (isSM) return Math.max(140, Math.min(width, 200)); // Small tablet - compact but flexible
    if (isMD) return Math.max(160, Math.min(width, 280)); // Medium - more flexible range
    if (isLG) return Math.max(180, Math.min(width, 320)); // Large - better flex for text content
    if (isXL) return width; // Extra large - user preference
    
    return width; // Fallback
  }, [width, isXS, isSM, isMD, isLG, isXL]);

  // Auto-collapse on small screens if enabled
  const isMini = finalConfig.autoCollapse && (isXS || isSM);

  // Persist width changes to localStorage
  const setWidth = useCallback((newWidth: number) => {
    const clampedWidth = Math.max(
      finalConfig.minWidth,
      Math.min(finalConfig.maxWidth, newWidth)
    );
    
    setWidthState(clampedWidth);
    
    if (typeof window !== 'undefined' && finalConfig.storageKey) {
      localStorage.setItem(finalConfig.storageKey, clampedWidth.toString());
    }
  }, [finalConfig]);

  const toggleCollapse = useCallback(() => {
    setIsCollapsed(prev => !prev);
  }, []);

  const startResizing = useCallback(() => {
    setIsResizing(true);
  }, []);

  const stopResizing = useCallback(() => {
    setIsResizing(false);
  }, []);

  const resetWidth = useCallback(() => {
    setWidth(finalConfig.defaultWidth);
  }, [setWidth, finalConfig.defaultWidth]);

  // Update width based on screen size changes
  useEffect(() => {
    // Don't auto-adjust width on desktop - preserve user preference
    if (isXL || isLG) return;
    
    // On smaller screens, adjust to responsive width if current width exceeds limits
    const responsiveWidth = getResponsiveWidth();
    if (width > responsiveWidth) {
      setWidthState(responsiveWidth);
    }
  }, [isXL, isLG, isMD, isSM, isXS, width, getResponsiveWidth]);

  return {
    width: getResponsiveWidth(),
    isCollapsed,
    isResizing,
    isMini,
    setWidth,
    toggleCollapse,
    startResizing,
    stopResizing,
    resetWidth,
    getResponsiveWidth,
  };
}
