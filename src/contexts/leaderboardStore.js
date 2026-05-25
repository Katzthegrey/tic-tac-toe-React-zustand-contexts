import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useLeaderboardStore = create(
  persist(
    (set) => ({
      entries: [],
      
      addEntry: (entry) =>
        set((state) => ({
          entries: [
            ...state.entries,
            {
              ...entry,
              id: Date.now(),
              date: new Date().toISOString(),
            },
            //sorting highscore
          ].sort((a, b) => b.score - a.score), 
        })),
        
      clearLeaderboard: () => set({ entries: [] }),
    }),
    {
      name: 'tictactoe-leaderboard',
    }
  )
);

export default useLeaderboardStore;