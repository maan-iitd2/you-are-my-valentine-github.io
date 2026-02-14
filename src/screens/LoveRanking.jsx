import React, { useState } from 'react';
import { Reorder, motion } from 'framer-motion';

export default function LoveRanking({ onNext }) {
  const [items, setItems] = useState([
    { id: 1, text: "For your kindness" },
    { id: 2, text: "For your smile" },
    { id: 3, text: "For how hot and pretty you are" }
  ]);

  const [isGlitched, setIsGlitched] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);

  const handleSubmit = () => {
    // Trigger glitch effect
    setIsGlitched(true);

    // Slight delay before changing text to simulate processing
    setTimeout(() => {
      setItems(items.map(item => ({ ...item, text: "For how hot and pretty you are" })));
      setShowOverlay(true);
    }, 500);
  };

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-gray-800 dark:text-gray-100 min-h-screen relative overflow-hidden flex flex-col items-center justify-center selection:bg-primary selection:text-white">

      {/* Background Pattern */}
      <div className="fixed inset-0 bg-primary/5 pointer-events-none z-0" style={{
        backgroundImage: 'radial-gradient(#ee2b6c 0.5px, transparent 0.5px), radial-gradient(#ee2b6c 0.5px, #f8f6f6 0.5px)',
        backgroundSize: '20px 20px',
        backgroundPosition: '0 0, 10px 10px',
        opacity: 0.1
      }}></div>

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
            Now arrange why you think I love you most.
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
            Drag to reorder from most to least important!
          </p>
        </section>

        {/* Ranking List */}
        <section className="flex-1 flex flex-col justify-center relative">
          <Reorder.Group axis="y" values={items} onReorder={setItems} className="space-y-4">
            {items.map((item, index) => (
              <Reorder.Item key={item.id} value={item}>
                <div className={`group relative w-full touch-none select-none ${isGlitched ? 'animate-pulse' : ''}`}>
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-pink-400 rounded-full opacity-30 blur group-hover:opacity-50 transition duration-200"></div>
                  <div className="relative flex items-center bg-white dark:bg-white/5 border-2 border-primary/30 p-4 rounded-full shadow-sm cursor-grab active:cursor-grabbing">
                    <div className="bg-primary/10 text-primary p-2 rounded-full mr-3 flex items-center justify-center w-8 h-8">
                      <span className="font-bold text-sm">{index + 1}</span>
                    </div>
                    <span className="flex-1 font-semibold text-gray-800 dark:text-gray-100">{item.text}</span>
                    <div className="text-primary/40 p-1">
                      <span className="material-icons-round">drag_indicator</span>
                    </div>
                  </div>
                </div>
              </Reorder.Item>
            ))}
          </Reorder.Group>

          {/* The "GOT YOU" Overlay (Twist Element) */}
          {showOverlay && (
            <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="bg-primary/90 text-white backdrop-blur-sm p-8 rounded-full shadow-2xl transform -rotate-6 border-4 border-white dark:border-white/20 text-center max-w-[90%]"
              >
                <h2 className="text-4xl font-extrabold mb-1 drop-shadow-md tracking-tight leading-none">HAHAHAH</h2>
                <p className="text-xl font-bold opacity-90">got you 😭</p>
              </motion.div>
            </div>
          )}
        </section>

        {/* Bottom Actions */}
        <footer className="mt-auto pb-4 pt-6 z-30">
          {!showOverlay ? (
            <button
              onClick={handleSubmit}
              className="w-full bg-gray-800 hover:bg-gray-900 text-white font-bold py-4 px-6 rounded-full shadow-lg transform transition active:scale-95 flex items-center justify-center gap-2"
            >
              <span>Submit Ranking</span>
              <span className="material-icons-round text-lg">check</span>
            </button>
          ) : (
            <button
              onClick={onNext}
              className="w-full bg-primary hover:bg-pink-600 text-white font-bold py-4 px-6 rounded-full shadow-lg shadow-primary/30 transform transition active:scale-95 flex items-center justify-center gap-2 animate-bounce pointer-events-auto"
            >
              <span>Okay, fair enough 💖</span>
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
