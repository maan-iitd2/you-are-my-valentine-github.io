import React from 'react';

export default function WrongAnswer({ onRetry }) {
  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-6 animate-fade-in">
      {/* Modal Card */}
      <div className="relative w-full max-w-sm transform transition-all">
        {/* Decorative blobs behind the card */}
        <div className="absolute -top-12 -left-8 w-24 h-24 bg-primary rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>

        {/* Card Content */}
        <div className="relative bg-cream dark:bg-gray-800 rounded-lg shadow-2xl overflow-hidden border border-primary/20">
          {/* Close Icon (Optional) */}
          <button onClick={onRetry} className="absolute top-4 right-4 text-primary/40 hover:text-primary transition-colors">
            <span className="material-icons">close</span>
          </button>

          <div className="p-8 flex flex-col items-center text-center">
            {/* Hero Icon/Emoji */}
            <div className="mb-6 transform hover:scale-110 transition-transform duration-300 cursor-default select-none">
              <div className="text-7xl drop-shadow-sm filter">
                😉
              </div>
            </div>

            {/* Main Message */}
            <div className="space-y-3 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
                Hmmmm...
              </h2>
              <p className="text-lg font-medium text-gray-600 dark:text-gray-300 leading-relaxed">
                we might need to revisit our history books 📖
              </p>
            </div>

            {/* Action Button */}
            <button
              onClick={onRetry}
              className="w-full bg-primary hover:bg-red-600 text-white font-bold py-4 px-8 rounded-full shadow-lg shadow-primary/30 transform hover:-translate-y-1 transition-all duration-200 active:scale-95 flex items-center justify-center gap-2 group"
            >
              <span>Try Again? 🥺</span>
              <span className="material-icons text-sm opacity-70 group-hover:translate-x-1 transition-transform">refresh</span>
            </button>

            {/* Tiny Footer Text */}
            <p className="mt-6 text-xs font-medium text-primary/40 uppercase tracking-widest">
              Don't give up!
            </p>
          </div>

          {/* Subtle pattern overlay for texture */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent pointer-events-none"></div>
        </div>
      </div>
    </div>
  );
}
