import React, { useEffect } from 'react';
import Board from './Board/Board';
import GameStatus from './GameStatus/GameStatus';
import PlayerCard from '../../Components/Player/PlayerCard';
import useGameStore from '../../contexts/gameStore';
import useGameSettingsStore from '../../contexts/gameSettingsStore';
import usePlayerScoreStore from '../../contexts/playerScoreStore';
import { useSound } from '../../contexts/SoundContext';
import { useGameLogic } from '../../hooks/useGameLogic';
import { useTurnTimer } from '../../hooks/useTurnTimer';
import { 
  GameContainer, 
  GameTitle, 
  GameLayout,
  PlayerSection,
  BoardSection 
} from './Game.styled';

const Game = () => {
  const { currentPlayer, winner, isDraw, gameOver } = useGameStore();
  const { playerXName, playerOName } = useGameSettingsStore();
  const { scores } = usePlayerScoreStore();
  const { playGameStart } = useSound();
  const { handleSquareClick, handleReset } = useGameLogic();
  const { timeLeft, isUrgent } = useTurnTimer();
  
  useEffect(() => {
    const timer = setTimeout(() => {
      playGameStart();
    }, 100);
    
    return () => clearTimeout(timer);
  }, [playGameStart]);
  
  return (
    <GameContainer>
      <GameTitle>Tic Tac Toe</GameTitle>
      
      <GameLayout>
        <PlayerSection>
          <PlayerCard
            player="X"
            name={playerXName}
            score={scores.X}
            isActive={currentPlayer === 'X' && !gameOver}
            position="left"
            timeLeft={currentPlayer === 'X' ? timeLeft : 10}
            isUrgent={currentPlayer === 'X' && isUrgent}
          />
        </PlayerSection>
        
        <BoardSection>
          <GameStatus onReset={handleReset} />
          <Board onSquareClick={handleSquareClick} />
        </BoardSection>
        
        <PlayerSection>
          <PlayerCard
            player="O"
            name={playerOName}
            score={scores.O}
            isActive={currentPlayer === 'O' && !gameOver}
            position="right"
            timeLeft={currentPlayer === 'O' ? timeLeft : 10}
            isUrgent={currentPlayer === 'O' && isUrgent}
          />
        </PlayerSection>
      </GameLayout>
    </GameContainer>
  );
};

export default Game;