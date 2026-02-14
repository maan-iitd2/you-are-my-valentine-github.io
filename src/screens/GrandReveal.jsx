import React, { useMemo } from 'react';

export default function GrandReveal() {
  const hearts = useMemo(() => {
    return [...Array(6)].map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 2 + 1,
      delay: i * 1.5,
      type: i % 2 === 0 ? 'favorite' : 'favorite_border'
    }));
  }, []);

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-gray-800 dark:text-gray-100 min-h-screen flex flex-col overflow-hidden relative selection:bg-primary selection:text-white">

      {/* Floating Heart Particles Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {hearts.map((heart) => (
          <div
            key={heart.id}
            className={`absolute animate-float-slow text-primary/40`}
            style={{
              left: `${heart.left}%`,
              top: `${heart.top}%`,
              animationDelay: `${heart.delay}s`,
              fontSize: `${heart.size}rem`
            }}
          >
            <span className="material-icons-round">{heart.type}</span>
          </div>
        ))}
        {/* Decorative subtle blurs */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Main Content Container */}
      <main className="flex-grow flex flex-col items-center justify-center px-6 py-8 relative z-10 w-full max-w-md mx-auto h-screen">

        {/* Top Visual Anchor */}
        <div className="w-full flex flex-col items-center justify-center mb-10 space-y-6">
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
            <div className="relative bg-white dark:bg-gray-800 p-6 rounded-full shadow-xl ring-4 ring-primary/10 animate-float-medium">
              <span className="material-icons-round text-6xl text-primary">lock_open</span>
            </div>
            {/* Little sparkling stars decoration */}
            <span className="material-icons-round text-yellow-400 absolute -top-2 -right-2 animate-bounce text-xl">auto_awesome</span>
            <span className="material-icons-round text-yellow-400 absolute -bottom-2 -left-2 animate-bounce text-lg" style={{ animationDelay: '0.5s' }}>auto_awesome</span>
          </div>
        </div>

        {/* Hero Text Block */}
        <div className="text-center space-y-6 mb-12">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-tight">
            You just <br/>
            <span className="text-primary inline-block transform -rotate-2">unlocked</span> <br/>
            your surprise.
          </h1>
          <div className="space-y-1">
            <p className="text-xl font-bold text-gray-800 dark:text-gray-200">Tomorrow.</p>
            <p className="text-xl font-bold text-gray-800 dark:text-gray-200">Lunch.</p>
            <p className="text-xl font-bold text-primary italic mt-2">Pack your smile.</p>
          </div>
        </div>

        {/* Primary Action Button */}
        <div className="w-full max-w-xs">
          <a
            href="https://www.google.com/maps"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-full flex items-center justify-center space-x-3 bg-primary hover:bg-primary/90 text-white font-bold py-5 px-8 rounded-full shadow-lg shadow-primary/30 transition-all duration-300 transform hover:scale-105 active:scale-95 decoration-transparent"
          >
            <span className="material-icons-round animate-bounce">map</span>
            <span className="text-lg">See Where We’re Going 💕</span>

            {/* Button Shine Effect */}
            <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer"></div>
            </div>
          </a>
        </div>

        {/* Spacer to push footer to bottom appropriately */}
        <div className="flex-grow"></div>

        {/* Footer Sentiment */}
        <div className="mt-8 text-center max-w-xs mx-auto relative">
          {/* Decorative quotes */}
          <span className="absolute -top-4 -left-2 text-6xl text-primary/10 font-serif leading-none">“</span>
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400 italic leading-relaxed">
            Shatadha, when it comes to loving you — a thousand times over, and always.
          </p>
          {/* Decorative quotes */}
          <span className="absolute -bottom-8 -right-2 text-6xl text-primary/10 font-serif leading-none rotate-180">“</span>
        </div>

        {/* Tiny bottom safe area padding for iOS */}
        <div className="h-6"></div>
      </main>
    </div>
  );
}
