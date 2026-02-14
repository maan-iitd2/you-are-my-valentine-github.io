import React, { useState } from 'react';

export default function SingingMemory({ onNext }) {
  const [text, setText] = useState('');
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = () => {
    // No validation needed as per requirement: "No matter what she writes"
    setShowToast(true);
    setTimeout(() => {
      onNext();
    }, 2500);
  };

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-gray-800 dark:text-gray-100 min-h-screen flex flex-col items-center relative overflow-hidden selection:bg-primary/20 selection:text-primary">

      {/* Toast Overlay */}
      {showToast && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fade-in p-6">
           <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-2xl transform scale-105 transition-transform max-w-sm text-center">
            <h2 className="text-xl font-bold text-primary animate-pulse-soft leading-relaxed">
              Dang it! Absolutely in love with the way you remember things 😭❤️
            </h2>
          </div>
        </div>
      )}

      {/* Decorative Background Elements */}
      <div className="fixed top-[-10%] left-[-20%] w-[80%] h-[50%] bg-primary/10 rounded-full blur-3xl pointer-events-none mix-blend-multiply dark:mix-blend-normal dark:bg-primary/5"></div>
      <div className="fixed bottom-[-10%] right-[-20%] w-[80%] h-[50%] bg-primary/10 rounded-full blur-3xl pointer-events-none mix-blend-multiply dark:mix-blend-normal dark:bg-primary/5"></div>

      {/* Main Container: Mobile Form Factor */}
      <div className="w-full max-w-md flex flex-col h-screen relative z-10 px-6 py-6">

        {/* Top Navigation / Progress */}
        <header className="flex flex-col items-center justify-center space-y-4 pt-2">
          <div className="flex items-center space-x-2">
            <span className="h-1.5 w-8 rounded-full bg-primary/30"></span>
            <span className="h-1.5 w-8 rounded-full bg-primary/30"></span>
            <span className="h-1.5 w-8 rounded-full bg-primary/30"></span>
            <span className="h-1.5 w-8 rounded-full bg-primary/30"></span>
            <span className="h-1.5 w-12 rounded-full bg-primary shadow-lg shadow-primary/30"></span> {/* Active Step */}
          </div>
          <div className="text-xs font-bold uppercase tracking-widest text-primary/60">Question 5 of 6</div>
        </header>

        {/* Content Area */}
        <main className="flex-1 flex flex-col justify-center items-center text-center mt-4 mb-20">

          {/* Hero Icon/Illustration Placeholder */}
          <div className="w-20 h-20 bg-white dark:bg-white/10 rounded-full shadow-xl shadow-primary/10 flex items-center justify-center mb-8 rotate-3 transform transition hover:rotate-6">
            <span className="text-4xl">🎤</span>
          </div>

          <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white leading-tight mb-3">
            Why did I sing <br /> for you?
          </h1>
          <p className="text-lg font-medium text-primary-800/70 dark:text-primary-200/80 mb-8">
            What was the bet? 👀
          </p>

          {/* Input Card */}
          <div className="w-full relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-primary-200 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500 group-focus-within:opacity-60"></div>
            <div className="relative bg-white dark:bg-white/5 rounded-2xl p-1">
              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="w-full min-h-[180px] bg-transparent border-0 rounded-xl p-5 text-lg placeholder:text-gray-400 dark:placeholder:text-white/30 text-gray-800 dark:text-white focus:ring-0 resize-none leading-relaxed outline-none"
                placeholder="I remember exactly... it was because..."
              ></textarea>
            </div>
            {/* Cute floating helper */}
            <div className="absolute -right-2 -bottom-2 bg-white dark:bg-gray-800 shadow-lg shadow-primary/10 rounded-full p-2 rotate-12 animate-bounce" style={{ animationDuration: '3s' }}>
              <span className="text-xl">💭</span>
            </div>
          </div>
        </main>

        {/* Bottom Action Area */}
        <div className="w-full pb-6 pt-4 bg-gradient-to-t from-background-light via-background-light to-transparent dark:from-background-dark dark:via-background-dark fixed bottom-0 left-0 right-0 flex justify-center px-6 z-20">
          <button
            onClick={handleSubmit}
            className="w-full max-w-md bg-primary hover:bg-primary-800 active:scale-95 transition-all duration-300 text-white font-bold text-lg py-5 rounded-full shadow-xl shadow-primary/30 flex items-center justify-center group"
          >
            <span className="mr-2">Tell me!</span>
            <span className="material-icons text-white group-hover:animate-pulse">favorite</span>
          </button>
        </div>
      </div>
    </div>
  );
}
