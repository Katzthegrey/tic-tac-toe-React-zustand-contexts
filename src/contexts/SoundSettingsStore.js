import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useSoundSettingsStore = create(
  persist(
    (set) => ({
      soundEnabled: true,
      musicEnabled: true,
      masterVolume: 0.7,
      
      toggleSound: () => set((state) => ({ 
        soundEnabled: !state.soundEnabled 
      })),
      
      toggleMusic: () => set((state) => ({ 
        musicEnabled: !state.musicEnabled 
      })),
      
      setMasterVolume: (volume) => set({ 
        masterVolume: Math.max(0, Math.min(1, volume))
      }),
    }),
    {
      name: 'sound-settings', // localStorage key
    }
  )
);

export default useSoundSettingsStore;