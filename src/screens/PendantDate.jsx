import React, { useState } from 'react';
import PendantSuccess from './PendantSuccess';
import WrongAnswer from './WrongAnswer';

export default function PendantDate({ onNext }) {
  const [inputValue, setInputValue] = useState('');
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Correct date: 14/02/2023
  const correctDates = ["14/02/2023", "14-02-2023", "14.02.2023", "2023-02-14"];

  const handleInputChange = (e) => {
    let val = e.target.value.replace(/\D/g, ''); // Remove non-digits

    // Simple formatting mask DD / MM / YYYY
    if (val.length > 2) val = val.slice(0, 2) + ' / ' + val.slice(2);
    if (val.length > 7) val = val.slice(0, 7) + ' / ' + val.slice(7);
    if (val.length > 14) val = val.slice(0, 14);

    setInputValue(val);
  };

  const handleConfirm = () => {
    const rawDate = inputValue.replace(/\s/g, ''); // Remove spaces
    if (correctDates.includes(rawDate) || rawDate === "14/02/2023") {
      setShowSuccess(true);
    } else {
      setShowError(true);
    }
  };

  if (showSuccess) {
    return <PendantSuccess onNext={onNext} />;
  }

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-gray-800 dark:text-gray-100 h-screen w-full overflow-hidden relative selection:bg-primary/30 selection:text-primary flex flex-col items-center">

      {showError && <WrongAnswer onRetry={() => setShowError(false)} />}

      {/* Decorative Floating Hearts Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[10%] left-[10%] text-primary/20 animate-float-slow">
          <span className="material-icons text-6xl">favorite</span>
        </div>
        <div className="absolute top-[15%] right-[15%] text-primary/10 animate-float-medium" style={{ animationDirection: 'reverse' }}>
          <span className="material-icons text-8xl">favorite_border</span>
        </div>
        <div className="absolute bottom-[20%] left-[5%] text-primary/15 animate-float-fast">
          <span className="material-icons text-7xl">favorite</span>
        </div>
        <div className="absolute bottom-[25%] right-[10%] text-primary/20 animate-float-slow">
          <span className="material-icons text-5xl">favorite_border</span>
        </div>
        <div className="absolute top-[40%] left-[50%] text-primary/5 animate-float-medium" style={{ animationDirection: 'reverse' }}>
          <span className="material-icons text-9xl">favorite</span>
        </div>
      </div>

      {/* Main Content Container */}
      <main className="relative z-10 h-full w-full flex flex-col justify-between px-6 pt-12 pb-8 max-w-md mx-auto">

        {/* Header / Progress */}
        <header className="flex flex-col items-center space-y-4">
          {/* Progress Bar */}
          <div className="w-full bg-gray-200 dark:bg-gray-800 h-2 rounded-full overflow-hidden">
            <div className="bg-primary h-full rounded-full w-2/5 shadow-[0_0_10px_rgba(238,43,108,0.5)]"></div>
          </div>
          <div className="flex items-center justify-between w-full">
            <button className="text-gray-400 hover:text-primary transition-colors">
              <span className="material-icons">arrow_back</span>
            </button>
            <span className="text-primary font-bold tracking-widest uppercase text-sm">Question 2 of 5</span>
            <span className="w-6"></span> {/* Spacer for centering */}
          </div>
        </header>

        {/* Question Section */}
        <div className="flex-1 flex flex-col justify-center items-center text-center space-y-8">
          {/* Icon/Graphic */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-full shadow-xl shadow-primary/10 mb-4 transform hover:scale-105 transition-transform duration-300">
            <span className="material-icons text-6xl text-primary">edit_note</span>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-gray-500 dark:text-gray-400">Fill in the blank</h2>
            <h1 className="text-3xl md:text-4xl font-extrabold leading-tight text-gray-900 dark:text-white">
              I gifted you the <span className="text-primary">flower pendant</span> on...
            </h1>
          </div>

          {/* Input Area */}
          <div className="w-full max-w-xs pt-8 relative group">
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="DD / MM / YYYY"
              className="w-full text-2xl font-bold py-3 text-gray-800 dark:text-gray-100 placeholder-gray-300 dark:placeholder-gray-600 focus:placeholder-primary/30 transition-all border-b-4 border-dashed border-primary bg-transparent text-center focus:outline-none focus:border-solid"
            />
            {/* Animated decorative label or hint */}
            <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute -top-2 left-0 w-full text-center text-xs font-medium text-primary/70">
              Don't get it wrong! 😉
            </div>
          </div>
        </div>

        {/* Footer / Action */}
        <div className="w-full space-y-4">
          <button
            onClick={handleConfirm}
            className="w-full bg-primary hover:bg-rose-600 active:bg-rose-700 text-white font-bold text-lg py-5 rounded-full shadow-lg shadow-primary/30 transform active:scale-95 transition-all flex items-center justify-center gap-2 group"
          >
            <span>Submit Answer</span>
            <span className="material-icons group-hover:translate-x-1 transition-transform">arrow_forward_ios</span>
          </button>

          {/* Helper text */}
          <p className="text-center text-sm text-gray-400 dark:text-gray-500">
            Hint: It was a very sunny day ☀️
          </p>
        </div>
      </main>

      {/* Decorative corners */}
      <div className="fixed top-0 left-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent pointer-events-none rounded-br-full z-0"></div>
      <div className="fixed bottom-0 right-0 w-48 h-48 bg-gradient-to-tl from-primary/5 to-transparent pointer-events-none rounded-tl-full z-0"></div>
    </div>
  );
}
