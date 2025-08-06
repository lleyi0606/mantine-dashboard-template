import React, { useCallback, useEffect, useRef } from 'react';

import { Box } from '@mantine/core';

import classes from './ResizableHandle.module.css';

interface ResizableHandleProps {
  onResize: (width: number) => void;
  onResizeStart?: () => void;
  onResizeEnd?: () => void;
  position?: 'left' | 'right';
  minWidth?: number;
  maxWidth?: number;
  disabled?: boolean;
}

export function ResizableHandle({
  onResize,
  onResizeStart,
  onResizeEnd,
  position = 'right',
  minWidth = 240,
  maxWidth = 400,
  disabled = false,
}: ResizableHandleProps) {
  const isResizing = useRef(false);
  const startX = useRef(0);
  const startWidth = useRef(0);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (disabled) return;
    
    e.preventDefault();
    e.stopPropagation();
    
    isResizing.current = true;
    startX.current = e.clientX;
    
    // Get the sidebar element to determine current width
    const sidebar = e.currentTarget.closest('[data-resizable-sidebar]') as HTMLElement;
    if (sidebar) {
      startWidth.current = sidebar.offsetWidth;
    }
    
    onResizeStart?.();
    
    // Add global event listeners
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    document.body.style.cursor = 'col-resize';
    document.body.style.userSelect = 'none';
  }, [disabled, onResizeStart]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isResizing.current) return;
    
    e.preventDefault();
    
    const deltaX = e.clientX - startX.current;
    const newWidth = position === 'right' 
      ? startWidth.current + deltaX 
      : startWidth.current - deltaX;
    
    // Clamp width within bounds
    const clampedWidth = Math.max(minWidth, Math.min(maxWidth, newWidth));
    
    onResize(clampedWidth);
  }, [onResize, position, minWidth, maxWidth]);

  const handleMouseUp = useCallback(() => {
    if (!isResizing.current) return;
    
    isResizing.current = false;
    
    // Clean up global event listeners
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
    document.body.style.cursor = '';
    document.body.style.userSelect = '';
    
    onResizeEnd?.();
  }, [onResizeEnd, handleMouseMove]);

  // Cleanup on unmount
  useEffect(() => {
    const cleanupMouseMove = handleMouseMove;
    const cleanupMouseUp = handleMouseUp;
    
    return () => {
      document.removeEventListener('mousemove', cleanupMouseMove);
      document.removeEventListener('mouseup', cleanupMouseUp);
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
    };
  }, [handleMouseMove, handleMouseUp]);

  if (disabled) return null;

  return (
    <Box
      className={classes.handle}
      data-position={position}
      onMouseDown={handleMouseDown}
      role="separator"
      aria-orientation="vertical"
      aria-label="Resize sidebar"
    >
      <Box className={classes.handleIcon} />
    </Box>
  );
}
