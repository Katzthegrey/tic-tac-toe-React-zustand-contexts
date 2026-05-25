import styled, { css } from 'styled-components';
import media from '../../../styles/media';

export const CellContainer = styled.button`
  width: clamp(72px, 22vw, 100px);
  height: clamp(72px, 22vw, 100px);
  aspect-ratio: 1;
  background: ${({ theme, $filled }) =>
    $filled ? theme.colors.surface : theme.colors.background};
  border: 2px solid ${({ theme }) => theme.colors.border};
  border-radius: 12px;
  font-size: clamp(1.75rem, 6vw, 2.5rem);
  font-weight: bold;
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ $value, theme }) =>
    $value === 'X'
      ? theme.colors.primary
      : $value === 'O'
        ? theme.colors.secondary
        : 'transparent'};
  font-family: 'Poppins', sans-serif;

  ${({ $isWinning, theme }) =>
    $isWinning &&
    css`
      background: ${theme.colors.success}22;
      border-color: ${theme.colors.success};
      animation: winPulse 0.6s infinite;

      @keyframes winPulse {
        0% {
          transform: scale(1);
        }
        50% {
          transform: scale(1.05);
        }
        100% {
          transform: scale(1);
        }
      }
    `}

  &:hover:not(:disabled) {
    background: ${({ theme }) => theme.colors.surface};
    transform: scale(1.05);
  }

  ${media.down.sm} {
    border-radius: 10px;
  }

  ${media.down.xs} {
    width: clamp(64px, 20vw, 72px);
    height: clamp(64px, 20vw, 72px);
    border-radius: 8px;
  }
`;
