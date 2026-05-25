import styled, { keyframes, css } from 'styled-components';
import media from '../../styles/media';

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const glowPulse = keyframes`
  0% { box-shadow: 0 0 5px rgba(255, 107, 107, 0.5); }
  50% { box-shadow: 0 0 20px rgba(255, 107, 107, 0.8); }
  100% { box-shadow: 0 0 5px rgba(255, 107, 107, 0.5); }
`;

const glowPulseO = keyframes`
  0% { box-shadow: 0 0 5px rgba(78, 205, 196, 0.5); }
  50% { box-shadow: 0 0 20px rgba(78, 205, 196, 0.8); }
  100% { box-shadow: 0 0 5px rgba(78, 205, 196, 0.5); }
`;

const timerPulse = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
`;

const shake = keyframes`
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-2px); }
  75% { transform: translateX(2px); }
`;

export const PlayerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
  background: ${({ theme }) => theme.colors.surface};
  border-radius: 16px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  width: 100%;
  min-width: 0;
  max-width: 200px;
  position: relative;
  transition: all 0.3s ease;

  ${({ $isActive, $player }) =>
    $isActive &&
    css`
      animation: ${$player === 'X' ? glowPulse : glowPulseO} 2s infinite;
      transform: scale(1.02);
    `}

  ${media.down.lg} {
    max-width: 180px;
    padding: 1.25rem;
  }

  ${media.down.md} {
    max-width: 160px;
    padding: 1rem;
  }

  ${media.down.sm} {
    max-width: 140px;
    padding: 0.875rem;
    border-radius: 12px;
  }

  ${media.down.xs} {
    max-width: 120px;
    padding: 0.75rem;
  }
`;

export const ActiveIndicator = styled.div`
  position: absolute;
  top: -5px;
  right: -5px;
  width: 15px;
  height: 15px;
  background: #4caf50;
  border-radius: 50%;
  border: 2px solid white;
  animation: ${pulse} 1s infinite;

  ${media.down.sm} {
    width: 12px;
    height: 12px;
  }
`;

export const AvatarWrapper = styled.div`
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 1rem;
  border: 3px solid
    ${({ $isActive, $player, theme }) =>
      $isActive
        ? $player === 'X'
          ? theme.colors.primary
          : theme.colors.secondary
        : theme.colors.border};
  transition: all 0.3s ease;
  width: clamp(60px, 18vw, 80px);
  height: clamp(60px, 18vw, 80px);

  ${({ $isActive }) =>
    $isActive &&
    css`
      animation: ${pulse} 2s infinite;
    `}

  .react-nice-avatar,
  & > * {
    width: 100% !important;
    height: 100% !important;
  }

  ${media.down.sm} {
    margin-bottom: 0.75rem;
    border-width: 2px;
  }
`;

export const PlayerInfo = styled.div`
  text-align: center;
  margin-bottom: 0.5rem;
  width: 100%;
`;

export const PlayerName = styled.h3`
  color: ${({ theme }) => theme.colors.text};
  font-family: 'Poppins', sans-serif;
  font-size: clamp(0.85rem, 2.5vw, 1rem);
  font-weight: 600;
  margin: 0 0 0.25rem 0;
  word-break: break-word;
`;

export const PlayerSymbol = styled.span`
  color: ${({ $player, theme }) =>
    $player === 'X' ? theme.colors.primary : theme.colors.secondary};
  font-family: 'Poppins', sans-serif;
  font-size: clamp(0.75rem, 2vw, 0.85rem);
  font-weight: 500;
`;

// ------ NEW TIMER STYLES ------

export const TimerContainer = styled.div`
  width: 100%;
  margin: 0.5rem 0;
  position: relative;
`;

export const TimerBar = styled.div`
  width: 100%;
  height: 6px;
  background: ${({ theme }) => theme.colors.border};
  border-radius: 3px;
  overflow: hidden;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: ${({ $timeLeft }) => ($timeLeft / 10) * 100}%;
    background: ${({ $isUrgent, theme }) =>
      $isUrgent ? theme.colors.warning : theme.colors.primary};
    border-radius: 3px;
    transition: width 1s linear, background 0.3s ease;
  }
`;

export const TimerText = styled.span`
  display: block;
  text-align: center;
  font-family: 'Poppins', sans-serif;
  font-size: clamp(0.75rem, 2vw, 0.85rem);
  font-weight: 600;
  color: ${({ $isUrgent, theme }) =>
    $isUrgent ? theme.colors.warning : theme.colors.text};
  margin-top: 4px;
  transition: color 0.3s ease;

  ${({ $isUrgent }) =>
    $isUrgent &&
    css`
      animation: ${timerPulse} 0.5s infinite;
    `}
`;

export const UrgentMessage = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  color: ${({ theme }) => theme.colors.warning};
  font-family: 'Poppins', sans-serif;
  font-size: clamp(0.7rem, 2vw, 0.8rem);
  font-weight: 600;
  animation: ${shake} 0.3s infinite;
  margin-top: 4px;

  i {
    font-size: 0.8rem;
  }
`;

export const ForfeitMessage = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  color: ${({ theme }) => theme.colors.primary};
  font-family: 'Poppins', sans-serif;
  font-size: clamp(0.7rem, 2vw, 0.8rem);
  font-weight: 600;
  margin-top: 4px;

  i {
    font-size: 0.8rem;
  }
`;

// ------ EXISTING SCORE STYLES ------

export const ScoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  width: 100%;
`;

export const ScoreLabel = styled.span`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-family: 'Poppins', sans-serif;
  font-size: clamp(0.65rem, 2vw, 0.75rem);
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const ScoreValue = styled.span`
  color: ${({ $player, theme }) =>
    $player === 'X' ? theme.colors.primary : theme.colors.secondary};
  font-family: 'Poppins', sans-serif;
  font-size: clamp(1.25rem, 4vw, 1.5rem);
  font-weight: bold;
`;