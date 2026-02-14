import React, { useState } from 'react';

export default function TrickQuestion({ onNext }) {
  const [showEasterEgg, setShowEasterEgg] = useState(false);

  const handleEasterEgg = () => {
    setShowEasterEgg(true);
    setTimeout(() => {
      onNext();
    }, 3000); // Wait 3 seconds for the message to be read
  };

  return (
    <div className="relative h-full w-full max-w-md mx-auto flex flex-col items-center justify-center overflow-hidden bg-background-light dark:bg-background-dark">

      {showEasterEgg ? (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fade-in">
          <h2 className="text-3xl font-bold text-white text-center px-6 animate-pulse-soft">
            The best answer I could ever get 🥺
          </h2>
        </div>
      ) : null}

      {/* Decorative faint background pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-primary/10 rounded-full blur-[120px]"></div>
      </div>

      {/* Progress Indicator */}
      <div className="absolute top-0 left-0 right-0 z-10 px-6 pt-12 pb-4 flex justify-center">
        <div className="flex gap-2">
          <div className="h-1.5 w-1.5 rounded-full bg-primary/30"></div>
          <div className="h-1.5 w-6 rounded-full bg-primary"></div> {/* Active Step 2 */}
          <div className="h-1.5 w-1.5 rounded-full bg-primary/30"></div>
          <div className="h-1.5 w-1.5 rounded-full bg-primary/30"></div>
          <div className="h-1.5 w-1.5 rounded-full bg-primary/30"></div>
          <div className="h-1.5 w-1.5 rounded-full bg-primary/30"></div>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 relative z-10 w-full">
        {/* Playful Icon */}
        <div className="mb-8 p-4 bg-white dark:bg-white/5 rounded-full shadow-sm text-primary animate-bounce" style={{ animationDuration: '3s' }}>
          <span className="material-icons text-4xl">favorite</span>
        </div>

        {/* Question Text */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white text-center leading-tight tracking-tight mb-2">
          Do you like me,<br />
          <span className="text-primary">Shatadha?</span>
        </h1>
        <p className="text-gray-500 dark:text-gray-400 text-sm font-medium mt-4 mb-12 text-center">
          Be honest... 👀
        </p>

        {/* Main "Yes" Button */}
        <button
          onClick={onNext}
          className="w-full max-w-[280px] py-5 px-8 bg-primary hover:bg-primary/90 text-white text-xl font-bold rounded-full shadow-lg shadow-primary/30 transition-all active:scale-95 animate-pulse-soft flex items-center justify-center gap-2 group"
        >
          <span>Yes</span>
          <span className="material-icons text-lg transition-transform group-hover:translate-x-1">arrow_forward</span>
        </button>
      </main>

      {/* Hidden Easter Egg Button (Bottom Right) */}
      <div className="absolute bottom-8 right-6 z-20">
        <button
          onClick={handleEasterEgg}
          className="opacity-10 hover:opacity-80 active:opacity-100 transition-opacity duration-500 bg-white/50 dark:bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg text-primary text-xs font-semibold transform rotate-[-2deg] hover:rotate-0 hover:scale-105 hover:shadow-sm border border-primary/20"
        >
          No, I love you ❤️
        </button>
      </div>

      {/* Hidden Easter Egg Hint (Top Left - Very subtle visual balance) */}
      <div className="absolute top-12 left-6 z-0 opacity-20 pointer-events-none">
        <span className="material-icons text-primary/40 text-6xl rotate-12">pattern</span>
      </div>

      {/* Floating particles/decorations for playful vibe */}
      <div className="absolute top-1/4 right-8 w-3 h-3 bg-primary/20 rounded-full animate-pulse" style={{ animationDuration: '4s' }}></div>
      <div className="absolute bottom-1/3 left-8 w-4 h-4 bg-primary/10 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-primary/30 rounded-full" style={{ opacity: 0.6 }}></div>
    </div>
  );
}
