import { useState } from 'react';
import Intro from './screens/Intro';
import TrickQuestion from './screens/TrickQuestion';
import Anniversary from './screens/Anniversary';
import PendantDate from './screens/PendantDate';
import SingingMemory from './screens/SingingMemory';
import LoveRanking from './screens/LoveRanking';
import BigQuestion from './screens/BigQuestion';
import GrandReveal from './screens/GrandReveal';

function App() {
  const [currentScreen, setCurrentScreen] = useState('intro');

  const renderScreen = () => {
    switch (currentScreen) {
      case 'intro':
        return <Intro onNext={() => setCurrentScreen('trick')} />;
      case 'trick':
        return <TrickQuestion onNext={() => setCurrentScreen('anniversary')} />;
      case 'anniversary':
        return <Anniversary onNext={() => setCurrentScreen('pendant')} />;
      case 'pendant':
        return <PendantDate onNext={() => setCurrentScreen('singing')} />;
      case 'singing':
        return <SingingMemory onNext={() => setCurrentScreen('ranking')} />;
      case 'ranking':
        return <LoveRanking onNext={() => setCurrentScreen('big_question')} />;
      case 'big_question':
        return <BigQuestion onNext={() => setCurrentScreen('reveal')} />;
      case 'reveal':
        return <GrandReveal />;
      default:
        return <Intro onNext={() => setCurrentScreen('trick')} />;
    }
  };

  return (
    <div className="w-full h-full min-h-screen bg-background-light dark:bg-background-dark text-gray-900 dark:text-white font-display overflow-hidden relative selection:bg-primary selection:text-white">
      {renderScreen()}
    </div>
  );
}

export default App;
