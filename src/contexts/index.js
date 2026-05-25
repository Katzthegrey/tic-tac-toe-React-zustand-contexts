import React from 'react';
import { ThemeContextProvider } from './ThemeContexts';
import { SoundContextProvider } from './SoundContext';

// Keep this file as the app Provider only. Import stores directly from
// their files (e.g. ./gameStore) to avoid barrel circular dependency issues.

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