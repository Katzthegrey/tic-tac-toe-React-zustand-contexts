import React from 'react';
import { ThemeContextProvider } from './ThemeContexts';
import { SoundContextProvider } from './SoundContext';

export { ThemeContext } from './ThemeContexts';
export { SoundContext, useSound } from './SoundContext';
export { default as useGameStore } from './gameStore';
export { default as useGameSettingsStore } from './gameSettingsStore';
export { default as usePlayerScoreStore } from './playerScoreStore';
export {default as useTimerStore} from './timerStore';
export {default as useLeaderboardStore} from './leaderboardStore';
const Provider = ({ children }) => {
  return (
    <ThemeContextProvider>
      <SoundContextProvider>
        {children}
      </SoundContextProvider>
    </ThemeContextProvider>
  );
};

export default Provider;