import styled from 'styled-components';
import media from '../../../styles/media';

export const StatusContainer = styled.div`
  text-align: center;
  margin-bottom: clamp(1rem, 3vw, 2rem);
  width: 100%;
  padding: 0 0.5rem;
`;

export const StatusMessage = styled.h2`
  font-size: clamp(1.25rem, 4.5vw, 1.8rem);
  color: ${({ theme, $status }) => {
    switch ($status) {
      case 'win':
        return theme.colors.success;
      case 'draw':
        return theme.colors.warning;
      default:
        return theme.colors.text;
    }
  }};
  margin-bottom: 1rem;
  font-weight: ${({ $status }) => ($status !== 'playing' ? 'bold' : 'normal')};
  transition: all 0.3s ease;
  font-family: 'Poppins', sans-serif;
  line-height: 1.3;
  word-break: break-word;

  ${media.down.sm} {
    margin-bottom: 0.75rem;
  }
`;

export const PlayerIndicator = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  margin: 10px 0;

  ${media.down.sm} {
    gap: 8px;
  }
`;

export const VsLabel = styled.span`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: clamp(0.85rem, 2.5vw, 0.95rem);
`;

export const PlayerBadge = styled.span`
  padding: 5px 15px;
  background: ${({ $active, theme }) =>
    $active ? theme.colors.primary : theme.colors.surface};
  color: ${({ $active, theme }) => ($active ? 'white' : theme.colors.text)};
  border-radius: 20px;
  font-size: clamp(0.8rem, 2.5vw, 0.9rem);
  font-weight: ${({ $active }) => ($active ? 'bold' : 'normal')};
  transition: all 0.3s ease;
  border: 2px solid
    ${({ $active, theme }) =>
      $active ? theme.colors.primary : theme.colors.border};
  font-family: 'Poppins', sans-serif;

  ${media.down.sm} {
    padding: 4px 12px;
  }
`;

export const ResetButton = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  padding: 12px 30px;
  border-radius: 25px;
  font-size: clamp(1rem, 3vw, 1.1rem);
  cursor: pointer;
  transition: all 0.2s;
  margin-top: 1rem;
  font-family: 'Poppins', sans-serif;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(0);
  }

  ${media.down.sm} {
    padding: 10px 24px;
    width: 100%;
    max-width: 220px;
  }
`;
