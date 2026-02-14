import React, { useState } from 'react';
import WrongAnswer from './WrongAnswer';

export default function Anniversary({ onNext }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const options = [
    "18 November 2019",
    "18 December 2018",
    "7 July 2017"
  ];

  const correctOption = "18 November 2019";

  const handleConfirm = () => {
    if (!selectedOption) return;

    if (selectedOption === correctOption) {
      setShowSuccess(true);
      setTimeout(() => {
        onNext();
      }, 2000);
    } else {
      setShowError(true);
    }
  };

  return (
    <div className="bg-background-light dark:bg-background-dark font-display min-h-screen flex flex-col items-center justify-center text-gray-800 dark:text-white transition-colors duration-300 overflow-hidden relative">

      {/* Success Overlay */}
      {showSuccess && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-2xl transform scale-110 transition-transform">
            <h2 className="text-2xl font-bold text-primary text-center animate-bounce">
              Hash! You know at least something 😏
            </h2>
          </div>
        </div>
      )}

      {/* Error Overlay */}
      {showError && (
        <WrongAnswer onRetry={() => setShowError(false)} />
      )}

      {/* Mobile Container */}
      <div className="w-full max-w-md h-full flex flex-col relative z-10">

        {/* Ambient Background decoration */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[30%] bg-primary/20 rounded-full blur-[80px] pointer-events-none"></div>
        <div className="absolute bottom-[-5%] right-[-5%] w-[60%] h-[40%] bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>

        {/* Header / Progress */}
        <header className="px-6 pt-12 pb-4 flex flex-col w-full z-10">
          <div className="flex justify-between items-center mb-6">
            <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-500 dark:text-gray-400">
              <span className="material-icons-round">arrow_back</span>
            </button>
            <div className="text-sm font-semibold text-primary/80 uppercase tracking-widest">Memory Lane</div>
            <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-500 dark:text-gray-400">
              <span className="material-icons-round">close</span>
            </button>
          </div>
          {/* Progress Bar */}
          <div className="w-full bg-gray-100 dark:bg-white/10 h-2 rounded-full overflow-hidden">
            <div className="bg-primary h-full rounded-full w-3/6 transition-all duration-500 ease-out"></div>
          </div>
          <div className="flex justify-between mt-2 text-xs font-medium text-gray-400 dark:text-gray-500">
            <span>Question 3</span>
            <span>3 of 6</span>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 px-6 flex flex-col items-center w-full z-10 overflow-y-auto pb-24">

          {/* Hero Illustration Area */}
          <div className="w-full h-48 mb-6 relative flex items-center justify-center">
            {/* Decorative circle behind image */}
            <div className="absolute w-40 h-40 bg-primary/10 dark:bg-primary/20 rounded-full animate-pulse"></div>
            {/* Main Illustration - Using a placeholder or icon since image isn't available */}
            <div className="w-32 h-32 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border-4 border-white dark:border-white/10 rotate-3 z-10 transform hover:scale-105 transition-transform duration-300 flex items-center justify-center text-primary">
                <span className="material-icons-round text-6xl">calendar_today</span>
            </div>

            {/* Floating decorative elements */}
            <div className="absolute top-4 right-12 bg-white dark:bg-gray-800 p-2 rounded-lg shadow-md transform rotate-12">
              <span className="material-icons-round text-primary text-xl">favorite</span>
            </div>
            <div className="absolute bottom-4 left-12 bg-white dark:bg-gray-800 p-2 rounded-lg shadow-md transform -rotate-12">
              <span className="material-icons-round text-primary text-xl">event</span>
            </div>
          </div>

          {/* Question */}
          <div className="text-center mb-10 w-full">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white leading-tight mb-2">
              Since when have we been officially dating?
            </h1>
            <p className="text-gray-500 dark:text-gray-400 text-sm">Think back to that special day... no pressure! 😉</p>
          </div>

          {/* Options */}
          <div className="w-full space-y-4">
            {options.map((option, index) => (
              <label
                key={index}
                className={`group relative flex items-center p-4 rounded-full border-2 cursor-pointer transition-all duration-200 active:scale-[0.98] ${
                  selectedOption === option
                    ? 'border-primary bg-white dark:bg-white/5 shadow-md'
                    : 'border-transparent bg-white dark:bg-white/5 shadow-sm hover:border-primary/30 hover:shadow-md'
                }`}
              >
                <input
                  type="radio"
                  name="anniversary"
                  className="peer sr-only"
                  value={option}
                  checked={selectedOption === option}
                  onChange={() => setSelectedOption(option)}
                />

                <div className={`absolute inset-0 bg-primary/5 rounded-full transition-opacity ${selectedOption === option ? 'opacity-100' : 'opacity-0'}`}></div>

                <div className="flex items-center justify-between w-full px-2 z-10">
                  <span className={`font-medium text-lg transition-colors ${selectedOption === option ? 'text-primary font-bold' : 'text-gray-700 dark:text-gray-200'}`}>
                    {option}
                  </span>

                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                    selectedOption === option
                      ? 'border-primary bg-primary'
                      : 'border-gray-300 dark:border-gray-600'
                  }`}>
                    <span className={`material-icons-round text-white text-sm transform transition-all ${selectedOption === option ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
                      check
                    </span>
                  </div>
                </div>
              </label>
            ))}
          </div>
        </main>

        {/* Footer Action */}
        <footer className="absolute bottom-0 w-full p-6 bg-white/70 dark:bg-black/20 backdrop-blur-md border-t border-white/20 z-20">
          <button
            onClick={handleConfirm}
            className={`w-full bg-primary hover:bg-primary/90 text-white font-bold text-lg py-4 rounded-full shadow-lg shadow-primary/30 flex items-center justify-center gap-2 transition-all transform hover:-translate-y-1 active:scale-[0.98] ${!selectedOption ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={!selectedOption}
          >
            <span>Confirm Answer</span>
            <span className="material-icons-round">arrow_forward</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
