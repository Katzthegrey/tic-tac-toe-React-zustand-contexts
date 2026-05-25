import { create } from 'zustand';

const useGameSettingsStore = create((set) => ({
  gameMode: 'pvp',
  difficulty: 'medium',
  playerXName: 'Player X',
  playerOName: 'Player O',
  isEditingName: false,
  editingPlayer: null,
  
  setGameMode: (mode) => set({ gameMode: mode }),
  setDifficulty: (difficulty) => set({ difficulty }),
  setPlayerNames: (xName, oName) => 
    set({ playerXName: xName, playerOName: oName }),
  setPlayerName: (player, name) =>
    set((state) => ({
      ...(player === 'X' ? { playerXName: name } : { playerOName: name }),
    })),
  startEditingName: (player) => 
    set({ isEditingName: true, editingPlayer: player }),
  stopEditingName: () => 
    set({ isEditingName: false, editingPlayer: null }),
}));

export default useGameSettingsStore;