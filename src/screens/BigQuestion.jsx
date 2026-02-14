import React, { useState } from 'react';
import confetti from 'canvas-confetti';

export default function BigQuestion({ onNext }) {
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [isMoved, setIsMoved] = useState(false);

  const handleNoHover = () => {
    const x = Math.random() * 200 - 100; // Random x between -100 and 100
    const y = Math.random() * 200 - 100; // Random y between -100 and 100
    setNoButtonPosition({ x, y });
    setIsMoved(true);
  };

  const handleYesClick = () => {
    // Fire confetti
    const duration = 3000;
    const end = Date.now() + duration;

    (function frame() {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#ee2b6c', '#ffb7c5', '#ffffff']
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#ee2b6c', '#ffb7c5', '#ffffff']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    }());

    // Wait for confetti a bit then proceed
    setTimeout(() => {
      onNext();
    }, 2000);
  };

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-100 font-display min-h-screen flex flex-col antialiased selection:bg-primary selection:text-white overflow-hidden relative">

      {/* Ambient Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {/* Abstract gradient blobs */}
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] animate-float"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-primary/10 rounded-full blur-[80px] animate-float" style={{ animationDelay: '2s' }}></div>

        {/* Decorative Background Hearts */}
        <span className="material-icons-round absolute text-6xl top-[15%] left-[10%] rotate-[-12deg] animate-pulse-fast text-primary/10" style={{ animationDuration: '3s' }}>favorite</span>
        <span className="material-icons-round absolute text-8xl top-[60%] right-[5%] rotate-[12deg] animate-pulse-fast text-primary/10" style={{ animationDuration: '4s' }}>favorite</span>
        <span className="material-icons-round absolute text-4xl top-[85%] left-[20%] rotate-[-6deg] animate-pulse-fast text-primary/10" style={{ animationDuration: '5s' }}>favorite</span>
        <span className="material-icons-round absolute text-5xl top-[25%] right-[20%] rotate-[24deg] animate-pulse-fast text-primary/10" style={{ animationDuration: '3.5s' }}>favorite_border</span>
      </div>

      {/* Main Container */}
      <main className="relative z-10 flex-grow flex flex-col items-center justify-between p-6 max-w-md mx-auto w-full h-full">

        {/* Top Section: Personalization & Progress */}
        <div className="w-full pt-8 flex flex-col items-center space-y-4 opacity-0 animate-fade-in">
          <div className="glass-panel bg-white/60 dark:bg-black/30 backdrop-blur-md border border-white/30 px-4 py-1.5 rounded-full flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
            <span className="text-xs font-bold tracking-widest uppercase text-primary">The Final Question</span>
          </div>
          <h2 className="text-sm font-medium tracking-wide text-slate-500 dark:text-slate-400">For Shatadha</h2>
        </div>

        {/* Middle Section: The Big Question */}
        <div className="flex-grow flex flex-col justify-center items-center text-center w-full space-y-8">

          {/* Hero Image / Visual Anchor */}
          <div className="relative w-48 h-48 md:w-56 md:h-56 mb-4">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl animate-pulse"></div>
            {/* Using a gradient placeholder as requested, simulating a romantic illustration */}
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-background-dark shadow-2xl transform hover:scale-105 transition-transform duration-500 bg-gradient-to-br from-pink-100 to-primary/20 flex items-center justify-center group">
              <span className="material-icons-round text-9xl text-primary animate-heartbeat drop-shadow-lg">favorite</span>
            </div>
            {/* Floating badges around image */}
            <div className="absolute -right-2 top-0 bg-white dark:bg-slate-800 p-2 rounded-xl shadow-lg rotate-12 animate-float" style={{ animationDelay: '1s' }}>
              <span className="text-2xl">💍</span>
            </div>
            <div className="absolute -left-4 bottom-4 bg-white dark:bg-slate-800 p-2 rounded-xl shadow-lg -rotate-6 animate-float" style={{ animationDelay: '0.5s' }}>
              <span className="text-2xl">✨</span>
            </div>
          </div>

          {/* Typography */}
          <div className="space-y-4 max-w-[320px]">
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 italic font-medium leading-relaxed">
              So after 6 years...
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight drop-shadow-sm">
              Will you be my <span className="text-primary inline-block transform hover:scale-110 transition-transform cursor-default">Valentine</span> again?
            </h1>
          </div>
        </div>

        {/* Bottom Section: Actions */}
        <div className="w-full flex flex-col items-center space-y-8 pb-10 relative">
          {/* YES Button (Primary) */}
          <button
            onClick={handleYesClick}
            className="group relative w-full max-w-[280px] bg-primary hover:bg-red-600 text-white font-bold text-2xl py-6 px-10 rounded-full shadow-[0_20px_50px_-12px_rgba(238,43,108,0.5)] transition-all duration-300 transform hover:-translate-y-1 active:scale-95 animate-heartbeat overflow-hidden z-20"
          >
            {/* Inner glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out"></div>
            <span className="relative z-10 flex items-center justify-center gap-3">
              YES!
              <span className="material-icons-round animate-bounce">favorite</span>
            </span>
          </button>

          {/* NO Button (Secondary/Trick) */}
          <button
            onMouseEnter={handleNoHover}
            onTouchStart={handleNoHover} // For mobile
            style={{
              transform: isMoved ? `translate(${noButtonPosition.x}px, ${noButtonPosition.y}px)` : 'none',
              transition: 'transform 0.2s ease-out'
            }}
            className="relative text-sm font-medium text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300 transition-colors px-6 py-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800/50 z-10"
          >
            <span className="relative z-10">No, thanks</span>
          </button>
        </div>
      </main>

      {/* Decorative Corner Bursts */}
      <div className="fixed bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-primary/20 to-transparent rounded-tr-full blur-2xl pointer-events-none"></div>
      <div className="fixed top-0 right-0 w-40 h-40 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full blur-3xl pointer-events-none"></div>
    </div>
  );
}
