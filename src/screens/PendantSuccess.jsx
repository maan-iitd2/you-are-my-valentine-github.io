import React from 'react';

export default function PendantSuccess({ onNext }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm animate-fade-in"></div>

      <div className="relative w-full max-w-sm bg-white/90 dark:bg-gray-800/90 backdrop-blur-md p-8 rounded-xl shadow-[0_0_30px_rgba(238,43,108,0.4)] text-center overflow-hidden border border-white/50 dark:border-gray-700/50 animate-pop-in">

        {/* Confetti Background in Modal */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 opacity-40">
          {[...Array(9)].map((_, i) => (
             <span key={i} className="material-icons text-xl absolute animate-float-fast" style={{
               left: `${(i+1)*10}%`,
               animationDelay: `${i * 0.5}s`,
               color: i % 2 === 0 ? '#ee2b6c' : '#ffb7c5'
             }}>favorite</span>
          ))}
        </div>

        <div className="relative z-10 space-y-6">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-500 mb-2 shadow-sm">
            <span className="material-icons text-4xl">check_circle</span>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 dark:text-white leading-snug">
            Okay okay,<br/>impressive memory 😌
          </h3>

          <button
            onClick={onNext}
            className="w-full bg-primary hover:bg-rose-600 active:bg-rose-700 text-white font-bold text-lg py-4 rounded-full shadow-lg shadow-primary/30 transform active:scale-95 transition-all flex items-center justify-center gap-2"
          >
            Next 💖
          </button>
        </div>
      </div>
    </div>
  );
}
