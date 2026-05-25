import { GameChecker } from './gameLogic';

export const getCPUMove = (board, difficulty = 'medium') => {
  const availableMoves = GameChecker.getAvailableMoves(board);
  
  if (availableMoves.length === 0) return null;
  
  switch (difficulty) {
    case 'easy':
      return getRandomMove(availableMoves);
    case 'medium':
      return getMediumMove(board, availableMoves);
    case 'hard':
      return getBestMove(board, availableMoves);
    default:
      return getRandomMove(availableMoves);
  }
};

const getRandomMove = (availableMoves) => {
  const randomIndex = Math.floor(Math.random() * availableMoves.length);
  return availableMoves[randomIndex];
};

const getMediumMove = (board, availableMoves) => {
  if (Math.random() < 0.5) {
    return getBestMove(board, availableMoves);
  }
  return getRandomMove(availableMoves);
};

const getBestMove = (board, availableMoves) => {
  // Try to win
  for (const move of availableMoves) {
    const testBoard = [...board];
    testBoard[move] = 'O';
    const result = GameChecker.checkWinner(testBoard);
    if (result && result.winner === 'O') {
      return move;
    }
  }
  
  // Block opponent's win
  for (const move of availableMoves) {
    const testBoard = [...board];
    testBoard[move] = 'X';
    const result = GameChecker.checkWinner(testBoard);
    if (result && result.winner === 'X') {
      return move;
    }
  }
  
  // Take center if available
  if (availableMoves.includes(4)) return 4;
  
  // Take corners
  const corners = availableMoves.filter(move => 
    [0, 2, 6, 8].includes(move)
  );
  if (corners.length > 0) {
    return corners[Math.floor(Math.random() * corners.length)];
  }
  
  return getRandomMove(availableMoves);
};