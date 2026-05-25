import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import NiceAvatar from 'react-nice-avatar';
import { createAvatarConfig } from '../../Components/Player/avatars';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  backdrop-filter: blur(4px);
`;

const ModalContent = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border-radius: 20px;
  padding: 2rem;
  max-width: 400px;
  width: 90%;
  text-align: center;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  animation: slideUp 0.3s ease;

  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const WinnerAvatar = styled.div`
  width: 80px;
  height: 80px;
  margin: 0 auto 1rem;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid ${({ $player, theme }) =>
    $player === 'X' ? theme.colors.primary : theme.colors.secondary};
`;

const TrophyIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 0.5rem;
  
  i {
    background: linear-gradient(135deg, #FFD700, #FFA500);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

const WinnerName = styled.h2`
  font-family: 'Poppins', sans-serif;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 0.5rem;
`;

const ScoreDisplay = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin: 1rem 0;
  padding: 1rem;
  background: ${({ theme }) => theme.colors.background};
  border-radius: 12px;
`;

const ScoreItem = styled.div`
  text-align: center;
  
  span {
    display: block;
    font-size: 0.8rem;
    color: ${({ theme }) => theme.colors.textSecondary};
    font-family: 'Poppins', sans-serif;
    margin-bottom: 4px;
  }
  
  strong {
    font-size: 1.5rem;
    color: ${({ $player, theme }) =>
      $player === 'X' ? theme.colors.primary : theme.colors.secondary};
    font-family: 'Poppins', sans-serif;
  }
`;

const LeaderboardOption = styled.div`
  margin: 1.5rem 0;
  padding: 1rem;
  background: ${({ theme }) => `${theme.colors.primary}10`};
  border-radius: 12px;
`;

const LeaderboardText = styled.p`
  font-family: 'Poppins', sans-serif;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 1rem;
`;

const NameInput = styled.input`
  width: 100%;
  padding: 10px 14px;
  border: 2px solid ${({ theme }) => theme.colors.border};
  border-radius: 10px;
  font-family: 'Poppins', sans-serif;
  font-size: 0.95rem;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 0.75rem;
  text-align: center;
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 1rem;
`;

const PrimaryButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  padding: 12px;
  font-size: 1rem;
  font-weight: 600;
  font-family: 'Poppins', sans-serif;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.2s;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  
  &:hover {
    opacity: 0.9;
    transform: translateY(-1px);
  }
`;

const SecondaryButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  padding: 12px;
  font-size: 0.95rem;
  font-weight: 500;
  font-family: 'Poppins', sans-serif;
  border: 2px solid ${({ theme }) => theme.colors.border};
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.2s;
  background: transparent;
  color: ${({ theme }) => theme.colors.text};
  
  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const DangerButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  padding: 10px;
  font-size: 0.9rem;
  font-weight: 500;
  font-family: 'Poppins', sans-serif;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.2s;
  background: transparent;
  color: ${({ theme }) => theme.colors.primary};
  
  &:hover {
    background: ${({ theme }) => `${theme.colors.primary}10`};
  }
`;

const RoundEndModal = ({ 
  winner, 
  winnerName,
  scores, 
  onPlayAgain, 
  onEndGame,
  onAddToLeaderboard,
  onClose,
}) => {
  const [showLeaderboardOption, setShowLeaderboardOption] = useState(false);
  const [leaderboardName, setLeaderboardName] = useState(winnerName);
  const navigate = useNavigate();
  
  const handleAddToLeaderboard = () => {
    onAddToLeaderboard?.({
      name: leaderboardName || winnerName,
      player: winner,
      score: scores[winner],
      totalGames: scores.X + scores.O,
    });
    navigate('/details');
  };
  
  const handleEndGame = () => {
    onEndGame?.();
    navigate('/details');
  };
  
  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        {winner ? (
          <>
            <TrophyIcon>
              <i className="fas fa-trophy"></i>
            </TrophyIcon>
            
            <WinnerAvatar $player={winner}>
              <NiceAvatar
                style={{ width: '100%', height: '100%' }}
                {...createAvatarConfig(winner)}
              />
            </WinnerAvatar>
            
            <WinnerName>{winnerName} Wins!</WinnerName>
            
            <ScoreDisplay>
              <ScoreItem $player="X">
                <span>Player X</span>
                <strong>{scores.X}</strong>
              </ScoreItem>
              <ScoreItem $player="O">
                <span>Player O</span>
                <strong>{scores.O}</strong>
              </ScoreItem>
            </ScoreDisplay>
          </>
        ) : (
          <>
            <TrophyIcon>
              <i className="fas fa-handshake"></i>
            </TrophyIcon>
            <WinnerName>It's a Draw!</WinnerName>
            
            <ScoreDisplay>
              <ScoreItem $player="X">
                <span>Player X</span>
                <strong>{scores.X}</strong>
              </ScoreItem>
              <ScoreItem $player="O">
                <span>Player O</span>
                <strong>{scores.O}</strong>
              </ScoreItem>
            </ScoreDisplay>
          </>
        )}
        
        {!showLeaderboardOption ? (
          <ButtonGroup>
            <PrimaryButton onClick={() => setShowLeaderboardOption(true)}>
              <i className="fas fa-list-ol"></i>
              Add to Leaderboard
            </PrimaryButton>
            
            <SecondaryButton onClick={onPlayAgain}>
              <i className="fas fa-redo"></i>
              Play Again
            </SecondaryButton>
            
            <DangerButton onClick={handleEndGame}>
              <i className="fas fa-flag-checkered"></i>
              End Game & Reset Scores
            </DangerButton>
          </ButtonGroup>
        ) : (
          <LeaderboardOption>
            <LeaderboardText>
              Enter your name for the leaderboard:
            </LeaderboardText>
            
            <NameInput
              type="text"
              value={leaderboardName}
              onChange={(e) => setLeaderboardName(e.target.value)}
              placeholder="Your name"
              maxLength={20}
            />
            
            <ButtonGroup>
              <PrimaryButton onClick={handleAddToLeaderboard}>
                <i className="fas fa-check"></i>
                Save to Leaderboard
              </PrimaryButton>
              
              <SecondaryButton onClick={onPlayAgain}>
                <i className="fas fa-redo"></i>
                No Thanks, Play Again
              </SecondaryButton>
              
              <DangerButton onClick={() => setShowLeaderboardOption(false)}>
                <i className="fas fa-arrow-left"></i>
                Back
              </DangerButton>
            </ButtonGroup>
          </LeaderboardOption>
        )}
      </ModalContent>
    </ModalOverlay>
  );
};

export default RoundEndModal;