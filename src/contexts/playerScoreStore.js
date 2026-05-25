import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const usePlayerScoreStore = create(
  persist(
    (set) => ({
      scores: {
        X: 0,
        O: 0,
      },
      draws: 0,
      rounds: 0,
      
      incrementScore: (player) => 
        set((state) => ({
          scores: {
            ...state.scores,
            [player]: state.scores[player] + 1,
          },
          rounds: state.rounds + 1,
        })),
      
      incrementDraws: () =>
        set((state) => ({
          draws: state.draws + 1,
          rounds: state.rounds + 1,
        })),
      
      resetScores: () =>
        set({
          scores: { X: 0, O: 0 },
          draws: 0,
          rounds: 0,
        }),
        
      resetRound: () =>
        set((state) => ({
          rounds: state.rounds + 1,
        })),
    }),
    {
      name: 'player-scores',
    }
  )
);

export default usePlayerScoreStore;