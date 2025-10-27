"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
  colors: {
    background: string;
    text: string;
    textSecondary: string;
    accent: string;
    granite: string;
    graniteOpacity: string;
  };
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [isDark, setIsDark] = useState(false);

  const colors = {
    background: isDark ? '#0a0a0a' : '#f9f4e1',
    text: isDark ? '#ffffff' : '#000000',
    textSecondary: isDark ? '#a0a0a0' : '#407375',
    accent: isDark ? '#ff6b35' : '#f97316',
    granite: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.15)',
    graniteOpacity: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.04)',
  };

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  useEffect(() => {
    // Aplicar colores al body
    document.body.style.backgroundColor = colors.background;
    document.body.style.color = colors.text;
    document.body.style.transition = 'background-color 0.5s ease, color 0.5s ease';
  }, [colors.background, colors.text]);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme, colors }}>
      {children}
    </ThemeContext.Provider>
  );
};

