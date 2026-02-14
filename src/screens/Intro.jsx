import React from 'react';

export default function Intro({ onNext }) {
  return (
    <div className="relative h-full w-full max-w-md mx-auto flex flex-col items-center justify-between p-6 bg-gradient-to-b from-primary-soft/50 via-background-light to-background-light dark:from-background-dark dark:via-background-dark dark:to-background-dark">
      {/* Background Floating Hearts (Decorative) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Heart 1 */}
        <div className="absolute top-[20%] left-[10%] text-primary opacity-10 animate-float-slow">
          <span className="material-icons-round text-6xl">favorite</span>
        </div>
        {/* Heart 2 */}
        <div className="absolute top-[60%] right-[15%] text-primary opacity-10 animate-float-medium delay-1000">
          <span className="material-icons-round text-4xl">favorite</span>
        </div>
        {/* Heart 3 */}
        <div className="absolute bottom-[20%] left-[20%] text-primary opacity-10 animate-float-fast delay-700">
          <span className="material-icons-round text-5xl">favorite_border</span>
        </div>
        {/* Heart 4 */}
        <div className="absolute top-[15%] right-[25%] text-primary opacity-5 animate-float-slow delay-500">
          <span className="material-icons-round text-8xl">favorite</span>
        </div>
        {/* Heart 5 */}
        <div className="absolute bottom-[40%] left-[-5%] text-primary opacity-5 animate-float-medium">
          <span className="material-icons-round text-9xl">favorite_border</span>
        </div>
      </div>

      {/* Top Spacer for safe area */}
      <div className="h-10 w-full shrink-0"></div>

      {/* Central Content */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-grow text-center space-y-8 w-full">
        {/* Hero Icon Container */}
        <div className="relative group">
          <div className="absolute inset-0 bg-primary/20 dark:bg-primary/10 rounded-full blur-xl animate-pulse-soft"></div>
          <div className="relative bg-white dark:bg-gray-800 p-8 rounded-full shadow-xl shadow-primary/10 border-4 border-primary-soft dark:border-primary/20">
            {/* Illustration/Icon */}
            <span className="material-icons-round text-6xl text-primary animate-bounce" style={{ animationDuration: '3s' }}>lock_person</span>
          </div>
          {/* Decorative mini badge */}
          <div className="absolute -bottom-2 -right-2 bg-primary text-white p-2 rounded-full shadow-lg border-4 border-white dark:border-gray-900 transform rotate-12">
            <span className="material-icons-round text-xl">quiz</span>
          </div>
        </div>

        {/* Typography Group */}
        <div className="space-y-4 max-w-xs mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-tight">
            Hey <br />
            <span className="text-primary inline-block transform hover:scale-105 transition-transform duration-300">Shatadha</span> 💕
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 font-medium leading-relaxed px-2">
            Before I ask you something important… <br />
            <span className="text-primary font-semibold">you need to pass a tiny test.</span>
          </p>
        </div>
      </div>

      {/* Bottom Action Area */}
      <div className="relative z-10 w-full pb-8 pt-4">
        {/* Primary Action Button */}
        <button
          onClick={onNext}
          className="group relative w-full flex items-center justify-center py-5 px-8 bg-primary hover:bg-primary-deep text-white text-xl font-bold rounded-full shadow-lg shadow-primary/30 transition-all duration-300 transform active:scale-95 overflow-hidden"
        >
          {/* Button Shine Effect */}
          <div className="absolute inset-0 -translate-x-full group-hover:animate-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent z-20"></div>
          <span className="relative z-30 flex items-center gap-3">
            Start the Test 😌
            <span className="material-icons-round text-2xl group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </span>
        </button>
        {/* Disclaimer/Footer Note */}
        <p className="mt-6 text-center text-xs text-gray-400 dark:text-gray-500 font-medium uppercase tracking-widest opacity-60">
          Don't worry, it's easy
        </p>
      </div>
    </div>
  );
}
