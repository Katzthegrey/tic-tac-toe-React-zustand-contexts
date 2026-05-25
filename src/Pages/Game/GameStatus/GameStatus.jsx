import React, { useEffect, useRef, useState } from 'react';
import useGameStore from '../../../contexts/gameStore';
import useGameSettingsStore from '../../../contexts/gameSettingsStore';
import usePlayerScoreStore from '../../../contexts/playerScoreStore';
import useLeaderboardStore from '../../../contexts/leaderboardStore';
import { useSound } from '../../../contexts/SoundContext';
import RoundEndModal from '../RoundEndModal';
import { 
  StatusContainer, 
  StatusMessage, 
  PlayerIndicator, 
  PlayerBadge, 
  ResetButton 
} from './GameStatus.styled';

const GameStatus = ({ onReset }) => {
  const { currentPlayer, winner, isDraw, gameOver } = useGameStore();
  const { playerXName, playerOName } = useGameSettingsStore();
  const { scores, incrementScore, incrementDraws, resetScores } = usePlayerScoreStore();
  const { addEntry } = useLeaderboardStore();
  const { playWin, playDraw, playGameStart } = useSound();
  
  const [showModal, setShowModal] = useState(false);
  const hasScored = useRef(false);
  
  useEffect(() => {
    if (!gameOver) {
      hasScored.current = false;
      setShowModal(false);
    }
  }, [gameOver]);
  
  useEffect(() => {
    if (gameOver && !hasScored.current) {
      if (winner) {
        playWin();
        incrementScore(winner);
        hasScored.current = true;
        setTimeout(() => setShowModal(true), 500);
      } else if (isDraw) {
        playDraw();
        incrementDraws();
        hasScored.current = true;
        setTimeout(() => setShowModal(true), 500);
      }
    }
  }, [gameOver, winner, isDraw, playWin, playDraw, incrementScore, incrementDraws]);
  
  const handlePlayAgain = () => {
    setShowModal(false);
    onReset();
    playGameStart();
  };
  
  const handleEndGame = () => {
    setShowModal(false);
    resetScores();
    onReset();
  };
  
  const handleAddToLeaderboard = (entry) => {
    addEntry(entry);
    resetScores();
    onReset();
  };
  
  const getStatusMessage = () => {
    if (winner) {
      const winnerName = winner === 'X' ? playerXName : playerOName;
      return `${winnerName} wins! 🎉`;
    } else if (isDraw) {
      return "It's a draw! 🤝";
    }
    return `${currentPlayer === 'X' ? playerXName : playerOName}'s turn`;
  };
  
  const getStatus = () => {
    if (winner) return 'win';
    if (isDraw) return 'draw';
    return 'playing';
  };
  
  return (
    <>
      <StatusContainer>
        <StatusMessage $status={getStatus()}>
          {getStatusMessage()}
        </StatusMessage>
        
        {!gameOver && (
          <PlayerIndicator>
            <PlayerBadge $active={currentPlayer === 'X'}>
              {playerXName} (X)
            </PlayerBadge>
            <span style={{ color: '#666' }}>vs</span>
            <PlayerBadge $active={currentPlayer === 'O'}>
              {playerOName} (O)
            </PlayerBadge>
          </PlayerIndicator>
        )}
        
        {gameOver && (
          <ResetButton onClick={() => setShowModal(true)}>
            View Results
          </ResetButton>
        )}
      </StatusContainer>
      
      {showModal && (
        <RoundEndModal
          winner={winner}
          winnerName={winner === 'X' ? playerXName : playerOName}
          scores={scores}
          onPlayAgain={handlePlayAgain}
          onEndGame={handleEndGame}
          onAddToLeaderboard={handleAddToLeaderboard}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
};

export default GameStatus;