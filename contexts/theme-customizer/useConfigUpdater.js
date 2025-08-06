import { useCallback } from 'react';

export function useConfigUpdater({
  config,
  previewConfig,
  isCustomizerOpen,
  updateConfig,
  updatePreviewConfig,
}) {
  const updateActiveConfig = useCallback(
    (newConfig) => {
      if (isCustomizerOpen) {
        updatePreviewConfig(newConfig);
      } else {
        updateConfig(newConfig);
      }
    },
    [isCustomizerOpen, updateConfig, updatePreviewConfig],
  );

  const getCurrentConfig = useCallback(() => {
    return isCustomizerOpen ? previewConfig : config;
  }, [isCustomizerOpen, config, previewConfig]);

  // Sidebar methods
  const toggleSidebarVisibility = useCallback(() => {
    const currentConfig = getCurrentConfig();
    const newConfig = {
      ...currentConfig,
      layout: {
        ...currentConfig.layout,
        sidebar: {
          ...currentConfig.layout.sidebar,
          visible: !currentConfig.layout.sidebar.visible,
        },
      },
    };
    updateActiveConfig(newConfig);
  }, [getCurrentConfig, updateActiveConfig]);

  const showSidebar = useCallback(() => {
    const currentConfig = getCurrentConfig();
    const newConfig = {
      ...currentConfig,
      layout: {
        ...currentConfig.layout,
        sidebar: {
          ...currentConfig.layout.sidebar,
          visible: true,
        },
      },
    };
    updateActiveConfig(newConfig);
  }, [getCurrentConfig, updateActiveConfig]);

  const hideSidebar = useCallback(() => {
    const currentConfig = getCurrentConfig();
    const newConfig = {
      ...currentConfig,
      layout: {
        ...currentConfig.layout,
        sidebar: {
          ...currentConfig.layout.sidebar,
          visible: false,
        },
      },
    };
    updateActiveConfig(newConfig);
  }, [getCurrentConfig, updateActiveConfig]);

  // Appearance methods
  const setPrimaryColor = useCallback(
    (color) => {
      const currentConfig = getCurrentConfig();
      const newConfig = {
        ...currentConfig,
        appearance: {
          ...currentConfig.appearance,
          primaryColor: color,
        },
      };
      updateActiveConfig(newConfig);
    },
    [getCurrentConfig, updateActiveConfig],
  );

  const setColorScheme = useCallback(
    (scheme) => {
      const currentConfig = getCurrentConfig();
      const newConfig = {
        ...currentConfig,
        appearance: {
          ...currentConfig.appearance,
          colorScheme: scheme,
        },
      };
      updateActiveConfig(newConfig);
    },
    [getCurrentConfig, updateActiveConfig],
  );

  const setBorderRadius = useCallback(
    (radius) => {
      const currentConfig = getCurrentConfig();
      const newConfig = {
        ...currentConfig,
        appearance: {
          ...currentConfig.appearance,
          borderRadius: radius,
        },
      };
      updateActiveConfig(newConfig);
    },
    [getCurrentConfig, updateActiveConfig],
  );

  const toggleCompactMode = useCallback(() => {
    const currentConfig = getCurrentConfig();
    const newConfig = {
      ...currentConfig,
      appearance: {
        ...currentConfig.appearance,
        compact: !currentConfig.appearance.compact,
      },
    };
    updateActiveConfig(newConfig);
  }, [getCurrentConfig, updateActiveConfig]);

  const setCardFeel = useCallback(
    (feel) => {
      const currentConfig = getCurrentConfig();
      const newConfig = {
        ...currentConfig,
        appearance: {
          ...currentConfig.appearance,
          cardFeel: feel,
        },
      };
      updateActiveConfig(newConfig);
    },
    [getCurrentConfig, updateActiveConfig],
  );

  return {
    toggleSidebarVisibility,
    showSidebar,
    hideSidebar,
    setPrimaryColor,
    setColorScheme,
    setBorderRadius,
    toggleCompactMode,
    setCardFeel,
  };
}
