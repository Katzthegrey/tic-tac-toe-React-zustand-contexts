import { useEffect, useCallback } from 'react';
import useGameStore from '../contexts/gameStore';
import useGameSettingsStore from '../contexts/gameSettingsStore';
import { GameChecker } from '../utils/gameLogic';
import { getCPUMove } from '../utils/cpu';

export const useGameLogic = () => {
  const { 
    board, 
    currentPlayer, 
    makeMove, 
    setWinner, 
    setDraw, 
    resetGame,
    gameOver 
  } = useGameStore();
  
  const { gameMode, difficulty } = useGameSettingsStore();
  
  // Check game status after each move
  useEffect(() => {
    const { isGameOver, winner, winningLine, isDraw } = GameChecker.getGameStatus(board);
    
    if (isGameOver) {
      if (winner) {
        setWinner(winner, winningLine);
      } else if (isDraw) {
        setDraw();
      }
    }
  }, [board, setWinner, setDraw]);
  
  // CPU move logic
  useEffect(() => {
    if (gameMode === 'cpu' && currentPlayer === 'O' && !gameOver) {
      const timer = setTimeout(() => {
        const cpuMove = getCPUMove(board, difficulty);
        if (cpuMove !== null && GameChecker.isValidMove(board, cpuMove)) {
          makeMove(cpuMove);
        }
      }, 500); // Small delay for better UX
      
      return () => clearTimeout(timer);
    }
  }, [currentPlayer, gameMode, gameOver, board, difficulty, makeMove]);
  
  const handleSquareClick = useCallback((index) => {
    if (gameMode === 'cpu' && currentPlayer === 'O') return;
    if (!GameChecker.isValidMove(board, index)) return;
    makeMove(index);
  }, [makeMove, gameMode, currentPlayer, board]);
  
  const handleReset = useCallback(() => {
    resetGame();
  }, [resetGame]);
  
  return {
    handleSquareClick,
    handleReset,
  };
};