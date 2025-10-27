"use client";

import { useTheme } from "@/context/ThemeContext";

const ThemeSwitch = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-8 right-8 z-50 w-16 h-16 rounded-full border-2 border-gray-300 bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-gray-200"
      aria-label="Toggle theme"
    >
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Cara base */}
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Ojos */}
          <div className="flex space-x-2">
            <div className={`w-2 h-2 rounded-full transition-all duration-500 ${
              isDark ? 'bg-white' : 'bg-black'
            }`} />
            <div className={`w-2 h-2 rounded-full transition-all duration-500 ${
              isDark ? 'bg-white' : 'bg-black'
            }`} />
          </div>
        </div>
        
        {/* Boca que cambia */}
        <div className="absolute bottom-3 w-4 h-2 flex items-center justify-center">
          <div className={`w-3 h-1 rounded-full transition-all duration-500 ${
            isDark 
              ? 'bg-white transform rotate-180' // Sonrisa invertida para modo oscuro
              : 'bg-black' // Sonrisa normal para modo claro
          }`} />
        </div>

        {/* Efecto de "máscara" que se desliza */}
        <div className={`absolute inset-0 rounded-full transition-all duration-700 ${
          isDark 
            ? 'bg-gradient-to-b from-transparent via-gray-800 to-black' 
            : 'bg-gradient-to-b from-transparent via-gray-200 to-white'
        }`} />
        
        {/* Partículas flotantes */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-1 h-1 rounded-full transition-all duration-1000 ${
                isDark ? 'bg-white' : 'bg-gray-400'
              }`}
              style={{
                left: `${20 + i * 20}%`,
                top: `${30 + i * 15}%`,
                animationDelay: `${i * 0.2}s`,
                animation: isDark 
                  ? 'floatDark 3s ease-in-out infinite'
                  : 'floatLight 3s ease-in-out infinite'
              }}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes floatDark {
          0%, 100% { transform: translateY(0px) scale(1); opacity: 0.7; }
          50% { transform: translateY(-8px) scale(1.2); opacity: 1; }
        }
        
        @keyframes floatLight {
          0%, 100% { transform: translateY(0px) scale(1); opacity: 0.5; }
          50% { transform: translateY(-6px) scale(1.1); opacity: 0.8; }
        }
      `}</style>
    </button>
  );
};

export default ThemeSwitch;
