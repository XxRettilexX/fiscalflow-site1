// import { Platform } from 'react-native';

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export const lightColors = {
    primary: "#4A90E2",
    primaryDark: "#357ABD",
    accent: "#50E3C2",
    danger: "#E35757",
    bg: "#F4F7FC",
    surface: "#FFFFFF",
    text: "#212121",
    textMuted: "#525252",
    white: "#FFFFFF",
};

export const darkColors = {
    primary: "#4A90E2",
    primaryDark: "#357ABD",
    accent: "#50E3C2",
    danger: "#E35757",
    bg: "#121212",
    surface: "#1E1E1E",
    text: "#E0E0E0",
    textMuted: "#757575",
    white: "#FFFFFF",
};

export const Colors = {
    light: {
        background: '#fff',
        tint: tintColorLight,
        icon: '#687076',
        tabIconDefault: '#687076',
        tabIconSelected: tintColorLight,
        ...lightColors
    },
    dark: {
        icon: '#9BA1A6',
        tabIconDefault: '#9BA1A6',
        tabIconSelected: tintColorDark,
        ...darkColors
    },
};

export const Fonts = {
    web: {
        sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
        serif: "Georgia, 'Times New Roman', serif",
        rounded: "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
        mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
    },
};
