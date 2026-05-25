import { create } from 'zustand';

const useGameStore = create((set) => ({
  board: Array(9).fill(null),
  currentPlayer: 'X',
  winner: null,
  winningLine: null,
  isDraw: false,
  gameOver: false,
  
  makeMove: (index) => 
    set((state) => {
      if (state.board[index] || state.gameOver) return state;
      
      const newBoard = [...state.board];
      newBoard[index] = state.currentPlayer;
      
      return {
        board: newBoard,
        currentPlayer: state.currentPlayer === 'X' ? 'O' : 'X',
      };
    }),
    
  setWinner: (winner, winningLine) =>
    set({
      winner,
      winningLine,
      gameOver: true,
    }),
    
  setDraw: () =>
    set({
      isDraw: true,
      gameOver: true,
    }),
    
  resetGame: () =>
    set({
      board: Array(9).fill(null),
      currentPlayer: 'X',
      winner: null,
      winningLine: null,
      isDraw: false,
      gameOver: false,
    }),
}));

export default useGameStore;