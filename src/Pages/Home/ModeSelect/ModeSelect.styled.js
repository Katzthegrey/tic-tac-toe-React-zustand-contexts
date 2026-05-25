import styled from 'styled-components';
import media from '../../../styles/media';

export const ModeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  background: ${({ theme }) => theme.colors.surface};
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  min-width: 0;
  margin-top: 2rem;

  ${media.down.md} {
    padding: 1.5rem;
    margin-top: 1.5rem;
    gap: 16px;
  }

  ${media.down.sm} {
    padding: 1.25rem 1rem;
    margin-top: 1rem;
    gap: 12px;
    border-radius: 12px;
  }
`;

export const ModeTitle = styled.h2`
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 1rem;
  font-family: 'Poppins', sans-serif;
  font-size: clamp(1.1rem, 4vw, 1.5rem);
  text-align: center;

  ${media.down.sm} {
    margin-bottom: 0.5rem;
  }
`;

export const ModeButton = styled.button`
  padding: 20px 40px;
  font-size: clamp(1rem, 3vw, 1.2rem);
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 12px;
  background: ${({ $selected, theme }) =>
    $selected ? theme.colors.primary : 'transparent'};
  color: ${({ $selected, theme }) =>
    $selected ? 'white' : theme.colors.text};
  cursor: pointer;
  transition: all 0.3s;
  width: 100%;
  max-width: 280px;
  font-family: 'Poppins', sans-serif;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }

  ${media.down.sm} {
    padding: 14px 20px;
    max-width: 100%;
  }
`;

export const DifficultySelect = styled.select`
  padding: 10px 20px;
  font-size: clamp(0.9rem, 2.5vw, 1rem);
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  margin-top: 10px;
  font-family: 'Poppins', sans-serif;
  width: 100%;
  max-width: 280px;

  ${media.down.sm} {
    max-width: 100%;
    padding: 10px 14px;
  }
`;

export const StartButton = styled.button`
  padding: 15px 50px;
  font-size: clamp(1.1rem, 3.5vw, 1.3rem);
  background: ${({ theme }) => theme.colors.success};
  color: white;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s;
  margin-top: 30px;
  font-family: 'Poppins', sans-serif;
  width: 100%;
  max-width: 280px;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
  }

  ${media.down.sm} {
    margin-top: 16px;
    padding: 12px 32px;
    max-width: 100%;
  }
`;
