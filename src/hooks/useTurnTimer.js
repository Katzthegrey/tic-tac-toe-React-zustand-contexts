import { useEffect, useCallback } from 'react';
import useGameStore from '../contexts/gameStore';
import useTimerStore from '../contexts/timerStore';

export const useTurnTimer = () => {
  const { currentPlayer, gameOver, makeMove, board } = useGameStore();
  const { 
    startTimer, 
    stopTimer, 
    resetTimer, 
    timeLeft, 
    isRunning, 
    isUrgent,
    setOnTimeUp 
  } = useTimerStore();
  
  // Handle time's up 
  const handleTimeUp = useCallback(() => {
    if (gameOver) return;
    
    // Find first available square
    const availableMoves = board
      .map((cell, index) => cell === null ? index : null)
      .filter(index => index !== null);
    
    if (availableMoves.length > 0) {
      // Make a random move
      const randomMove = availableMoves[Math.floor(Math.random() * availableMoves.length)];
      makeMove(randomMove);
    }
  }, [gameOver, board, makeMove]);
  
  // Set the time's up callback
  useEffect(() => {
    setOnTimeUp(handleTimeUp);
  }, [handleTimeUp, setOnTimeUp]);
  
  // Start timer when it's a new turn
  useEffect(() => {
    if (!gameOver) {
      startTimer();
    } else {
      stopTimer();
    }
    
    return () => stopTimer();
  }, [currentPlayer, gameOver, startTimer, stopTimer]);
  
  // Reset timer when game resets
  const handleReset = useCallback(() => {
    resetTimer();
  }, [resetTimer]);
  
  return {
    timeLeft,
    isRunning,
    isUrgent,
    handleReset,
  };
};