// Theme Types and Constants - converted from TypeScript

// Predefined color schemes
export const COLOR_SCHEMES = {
  blue: { name: 'Blue', value: 'blue', color: '#339af0' },
  cyan: { name: 'Cyan', value: 'cyan', color: '#22b8cf' },
  teal: { name: 'Teal', value: 'teal', color: '#20c997' },
  green: { name: 'Green', value: 'green', color: '#51cf66' },
  lime: { name: 'Lime', value: 'lime', color: '#94d82d' },
  yellow: { name: 'Yellow', value: 'yellow', color: '#ffd43b' },
  orange: { name: 'Orange', value: 'orange', color: '#ff922b' },
  red: { name: 'Red', value: 'red', color: '#ff6b6b' },
  pink: { name: 'Pink', value: 'pink', color: '#f06292' },
  grape: { name: 'Grape', value: 'grape', color: '#cc5de8' },
  violet: { name: 'Violet', value: 'violet', color: '#845ef7' },
  indigo: { name: 'Indigo', value: 'indigo', color: '#5c7cfa' },
};

export const defaultThemeConfig = {
  layout: {
    sidebar: {
      variant: 'default',
      position: 'left',
      width: 180, // Reduced from 300 to 180px
      overlay: false,
      visible: true,
    },
    header: {
      variant: 'default',
      position: 'fixed',
      height: 60,
      showShadow: true,
    },
    content: {
      layout: 'full-width',
      padding: 'comfortable',
    },
  },
  appearance: {
    colorScheme: 'auto',
    primaryColor: 'blue',
    borderRadius: 'sm',
    compact: false,
    cardFeel: 'elevated',
  },
};
