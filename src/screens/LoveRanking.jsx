import React, { useState } from 'react';
import { Reorder, motion } from 'framer-motion';

export default function LoveRanking({ onNext }) {
  const [items, setItems] = useState([
    { id: 1, text: "For your kindness" },
    { id: 2, text: "For your smile" },
    { id: 3, text: "For how hot and pretty you are" }
  ]);

  const [isProcessing, setIsProcessing] = useState(false);
  const [showGotcha, setShowGotcha] = useState(false);
  const [showReal, setShowReal] = useState(false);

  const handleSubmit = () => {
    setIsProcessing(true);

    // 5 seconds delay for "Gotcha"
    setTimeout(() => {
      setShowGotcha(true);
    }, 5000);

    // 15 seconds delay for Real Rankings (Total time from click)
    setTimeout(() => {
      setShowGotcha(false);
      setItems([
        { id: 1, text: "🥇 For your smile and your pretty eyes" },
        { id: 2, text: "🥈 For your intellect and the way your humour always gets me" },
        { id: 3, text: "🥉 I am your biggest fan because YOU ARE A MODEL" }
      ]);
      setShowReal(true);
      setIsProcessing(false);
    }, 15000);
  };

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-gray-800 dark:text-gray-100 min-h-screen relative overflow-hidden flex flex-col items-center justify-center selection:bg-primary selection:text-white">

      {/* Main Container */}
      <main className="relative z-10 w-full max-w-md h-full flex flex-col p-6 min-h-[600px]">

        {/* Header / Progress */}
        <header className="flex justify-between items-center mb-8 mt-2">
          <div className="h-1.5 w-1/3 bg-gray-200 dark:bg-white/10 rounded-full overflow-hidden">
            <div className="h-full bg-primary w-2/3 rounded-full"></div>
          </div>
          <span className="text-xs font-bold text-primary tracking-wider uppercase">Level 4/6</span>
        </header>

        {/* Question Title */}
        <section className="mb-8 text-center">
          <h1 className="text-3xl font-extrabold leading-tight text-gray-900 dark:text-white mb-2">
            {!showReal ? "Arranging priorities..." : "The Truth 💖"}
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
            {!showReal ? "Wait for it..." : "Here is what actually matters."}
          </p>
        </section>

        {/* Ranking List */}
        <section className="flex-1 flex flex-col justify-center relative">
          <div className="space-y-4">
            {items.map((item, index) => (
              <div key={item.id} className="group relative w-full">
                <div className="relative flex items-center bg-white dark:bg-white/5 border-2 border-primary/30 p-4 rounded-full shadow-sm">
                  <span className="flex-1 font-semibold text-gray-800 dark:text-gray-100 text-sm md:text-base">{item.text}</span>
                </div>
              </div>
            ))}
          </div>

          {/* The "GOT YOU" Overlay (Twist Element) */}
          {showGotcha && (
            <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
              <div
                className="bg-primary/90 text-white backdrop-blur-sm p-8 rounded-full shadow-2xl transform -rotate-6 border-4 border-white dark:border-white/20 text-center max-w-[90%] animate-bounce"
              >
                <h2 className="text-4xl font-extrabold mb-1 drop-shadow-md tracking-tight leading-none">HAHAHAH</h2>
                <p className="text-xl font-bold opacity-90">got you 😭</p>
              </div>
            </div>
          )}
        </section>

        {/* Bottom Actions */}
        <footer className="mt-auto pb-4 pt-6 z-30">
          {!showReal ? (
            <button
              onClick={handleSubmit}
              disabled={isProcessing}
              className={`w-full bg-gray-800 hover:bg-gray-900 text-white font-bold py-4 px-6 rounded-full shadow-lg transform transition active:scale-95 flex items-center justify-center gap-2 ${isProcessing ? 'opacity-50 cursor-wait' : ''}`}
            >
              {isProcessing ? (
                <>
                  <span className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></span>
                  <span>Processing...</span>
                </>
              ) : (
                <>
                  <span>Submit Ranking</span>
                  <span className="material-icons-round text-lg">check</span>
                </>
              )}
            </button>
          ) : (
            <button
              onClick={onNext}
              className="w-full bg-primary hover:bg-pink-600 text-white font-bold py-4 px-6 rounded-full shadow-lg shadow-primary/30 transform transition active:scale-95 flex items-center justify-center gap-2 animate-pulse"
            >
              <span>Awww, okay next 🥺</span>
              <span className="material-icons-round text-lg">arrow_forward</span>
            </button>
          )}
        </footer>
      </main>
      {/* Decorative floating elements */}
      <div className="fixed top-20 -left-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="fixed bottom-20 -right-10 w-60 h-60 bg-pink-400/10 rounded-full blur-3xl pointer-events-none"></div>
    </div>
  );
}
