import React, { createContext, useContext, useState, useCallback } from 'react';

export const SoundContext = createContext();

// Pre-built sound effects using Web Audio API
const SoundGenerator = {
  audioContext: null,
  
  getContext() {
    if (!this.audioContext) {
      this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }
    return this.audioContext;
  },
  
  // Marker/Chalk click sound
  click(player) {
    const ctx = this.getContext();
    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);
    
    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(player === 'X' ? 800 : 600, ctx.currentTime);
    
    gainNode.gain.setValueAtTime(0.3, ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);
    
    oscillator.start(ctx.currentTime);
    oscillator.stop(ctx.currentTime + 0.1);
  },
  
  // Victory fanfare
  win() {
    const ctx = this.getContext();
    const notes = [523.25, 659.25, 783.99, 1046.50]; 
    
    notes.forEach((frequency, index) => {
      const oscillator = ctx.createOscillator();
      const gainNode = ctx.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(ctx.destination);
      
      oscillator.type = 'square';
      oscillator.frequency.setValueAtTime(frequency, ctx.currentTime + index * 0.15);
      
      const startTime = ctx.currentTime + index * 0.15;
      gainNode.gain.setValueAtTime(0.2, startTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, startTime + 0.4);
      
      oscillator.start(startTime);
      oscillator.stop(startTime + 0.4);
    });
  },
  
  // Draw/tie game sound
  draw() {
    const ctx = this.getContext();
    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);
    
    oscillator.type = 'triangle';
    oscillator.frequency.setValueAtTime(330, ctx.currentTime);
    oscillator.frequency.setValueAtTime(280, ctx.currentTime + 0.15);
    
    gainNode.gain.setValueAtTime(0.3, ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.5);
    
    oscillator.start(ctx.currentTime);
    oscillator.stop(ctx.currentTime + 0.5);
  },
  
  // Game start countdown
  gameStart() {
    const ctx = this.getContext();
    const notes = [392, 523.25, 659.25]; 
    
    notes.forEach((frequency, index) => {
      const oscillator = ctx.createOscillator();
      const gainNode = ctx.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(ctx.destination);
      
      oscillator.type = 'sine';
      oscillator.frequency.setValueAtTime(frequency, ctx.currentTime + index * 0.1);
      
      const startTime = ctx.currentTime + index * 0.1;
      gainNode.gain.setValueAtTime(0.2, startTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, startTime + 0.2);
      
      oscillator.start(startTime);
      oscillator.stop(startTime + 0.2);
    });
  }
};

export const SoundContextProvider = ({ children }) => {
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [volume, setVolume] = useState(0.7);
  
  const playClick = useCallback((player) => {
    if (soundEnabled) {
      try {
        SoundGenerator.click(player);
      } catch (error) {
        console.warn('Sound playback failed:', error);
      }
    }
  }, [soundEnabled]);
  
  const playWin = useCallback(() => {
    if (soundEnabled) {
      try {
        SoundGenerator.win();
      } catch (error) {
        console.warn('Sound playback failed:', error);
      }
    }
  }, [soundEnabled]);
  
  const playDraw = useCallback(() => {
    if (soundEnabled) {
      try {
        SoundGenerator.draw();
      } catch (error) {
        console.warn('Sound playback failed:', error);
      }
    }
  }, [soundEnabled]);
  
  const playGameStart = useCallback(() => {
    if (soundEnabled) {
      try {
        SoundGenerator.gameStart();
      } catch (error) {
        console.warn('Sound playback failed:', error);
      }
    }
  }, [soundEnabled]);
  
  const toggleSound = useCallback(() => {
    setSoundEnabled(prev => !prev);
  }, []);
  
  const changeVolume = useCallback((newVolume) => {
    setVolume(Math.max(0, Math.min(1, newVolume)));
  }, []);
  
  const value = {
    soundEnabled,
    volume,
    playClick,
    playWin,
    playDraw,
    playGameStart,
    toggleSound,
    changeVolume,
    setSoundEnabled,
    setVolume: changeVolume,
  };
  
  return (
    <SoundContext.Provider value={value}>
      {children}
    </SoundContext.Provider>
  );
};

export const useSound = () => {
  const context = useContext(SoundContext);
  if (!context) {
    throw new Error('useSound must be used within a SoundContextProvider');
  }
  return context;
};