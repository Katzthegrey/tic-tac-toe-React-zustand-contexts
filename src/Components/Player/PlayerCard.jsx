import React from 'react';
import NiceAvatar from 'react-nice-avatar';
import { createAvatarConfig } from './avatars';
import EditableName from './EditableName';
import {
  PlayerContainer,
  AvatarWrapper,
  PlayerInfo,
  PlayerName,
  PlayerSymbol,
  ScoreContainer,
  ScoreLabel,
  ScoreValue,
  ActiveIndicator,
  TimerContainer,
  TimerBar,
  TimerText,
  UrgentMessage,
  ForfeitMessage,
} from './PlayerCard.styled';

const PlayerCard = ({ 
  player,
  name, 
  score = 0,
  isActive = false,
  position = 'left',
  customConfig = null,
  timeLeft = 10,
  isUrgent = false,
  onNameChange,
}) => {
  const avatarConfig = customConfig || createAvatarConfig(player);
  
  return (
    <PlayerContainer $position={position} $isActive={isActive} $player={player}>
      {isActive && <ActiveIndicator />}
      
      <AvatarWrapper $isActive={isActive} $player={player}>
        <NiceAvatar
          style={{ width: '100%', height: '100%' }}
          {...avatarConfig}
        />
      </AvatarWrapper>
      
      <PlayerInfo>
        <PlayerName>
          <EditableName 
            name={name} 
            onSave={(newName) => onNameChange?.(player, newName)} 
          />
        </PlayerName>
        <PlayerSymbol $player={player}>
          Player {player}
        </PlayerSymbol>
      </PlayerInfo>
      
      {isActive && (
        <TimerContainer>
          <TimerBar $timeLeft={timeLeft} $isUrgent={isUrgent} />
          <TimerText $isUrgent={isUrgent}>
            {timeLeft > 0 ? `${timeLeft}s` : "0s"}
          </TimerText>
        </TimerContainer>
      )}
      
      {isActive && isUrgent && timeLeft > 0 && (
        <UrgentMessage>
          <i className="fas fa-hourglass-half"></i>
          Hurry up!
        </UrgentMessage>
      )}
      
      {isActive && timeLeft === 0 && (
        <ForfeitMessage>
          <i className="fas fa-clock"></i>
          Turn forfeited!
        </ForfeitMessage>
      )}
      
      <ScoreContainer>
        <ScoreLabel>Score</ScoreLabel>
        <ScoreValue $player={player}>{score}</ScoreValue>
      </ScoreContainer>
    </PlayerContainer>
  );
};

export default PlayerCard;