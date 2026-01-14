"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark" | "system";
type FontSize = "small" | "medium" | "large";

interface ThemeContextType {
    theme: Theme;
    setTheme: (theme: Theme) => void;
    fontSize: FontSize;
    setFontSize: (size: FontSize) => void;
    highContrast: boolean;
    setHighContrast: (enabled: boolean) => void;
    dyslexicFont: boolean;
    setDyslexicFont: (enabled: boolean) => void;
    grayscale: boolean;
    setGrayscale: (enabled: boolean) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState<Theme>("system");
    const [fontSize, setFontSize] = useState<FontSize>("medium");
    const [highContrast, setHighContrast] = useState(false);
    const [dyslexicFont, setDyslexicFont] = useState(false);
    const [grayscale, setGrayscale] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        // Load saved settings from localStorage if available
        const savedTheme = localStorage.getItem("fiscalflow-theme") as Theme;
        const savedFontSize = localStorage.getItem("fiscalflow-fontsize") as FontSize;
        const savedHighContrast = localStorage.getItem("fiscalflow-highcontrast") === "true";
        const savedDyslexicFont = localStorage.getItem("fiscalflow-dyslexicfont") === "true";
        const savedGrayscale = localStorage.getItem("fiscalflow-grayscale") === "true";

        if (savedTheme) setTheme(savedTheme);
        if (savedFontSize) setFontSize(savedFontSize);
        setHighContrast(savedHighContrast);
        setDyslexicFont(savedDyslexicFont);
        setGrayscale(savedGrayscale);
    }, []);

    useEffect(() => {
        if (!mounted) return;

        const root = window.document.documentElement;

        // Handle Theme
        root.classList.remove("light", "dark");

        if (theme === "system") {
            const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
            root.classList.add(systemTheme);
        } else {
            root.classList.add(theme);
        }

        // Handle Font Size
        root.classList.remove("text-sm-mode", "text-base-mode", "text-lg-mode");
        if (fontSize === "small") root.style.fontSize = "14px";
        if (fontSize === "medium") root.style.fontSize = "16px";
        if (fontSize === "large") root.style.fontSize = "18px";

        // Handle Accessibility
        if (highContrast) root.classList.add("high-contrast");
        else root.classList.remove("high-contrast");

        if (dyslexicFont) root.classList.add("dyslexic-font");
        else root.classList.remove("dyslexic-font");

        if (grayscale) root.classList.add("grayscale-mode");
        else root.classList.remove("grayscale-mode");

        // Save to localStorage
        localStorage.setItem("fiscalflow-theme", theme);
        localStorage.setItem("fiscalflow-fontsize", fontSize);
        localStorage.setItem("fiscalflow-highcontrast", String(highContrast));
        localStorage.setItem("fiscalflow-dyslexicfont", String(dyslexicFont));
        localStorage.setItem("fiscalflow-grayscale", String(grayscale));

    }, [theme, fontSize, highContrast, dyslexicFont, grayscale, mounted]);

    return (
        <ThemeContext.Provider value={{
            theme, setTheme,
            fontSize, setFontSize,
            highContrast, setHighContrast,
            dyslexicFont, setDyslexicFont,
            grayscale, setGrayscale
        }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
}
