import styled from 'styled-components';
import media from '../../styles/media';

export const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 72px);
  padding: clamp(1rem, 4vw, 2rem);
  background-color: ${(props) => props.theme.colors.background};
  width: 100%;

  ${media.down.md} {
    min-height: calc(100vh - 64px);
    padding: 1.25rem 1rem;
  }

  ${media.down.sm} {
    padding: 1rem 0.75rem 1.5rem;
  }
`;

export const GameTitle = styled.h1`
  font-size: clamp(1.75rem, 6vw, 2.5rem);
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: clamp(1rem, 3vw, 2rem);
  font-family: 'Pacifico', cursive;
  text-align: center;
`;

export const GameLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: clamp(1rem, 4vw, 3rem);
  width: 100%;
  max-width: 1200px;

  ${media.down.lg} {
    gap: 1.5rem;
  }

  ${media.down.md} {
    flex-direction: column;
    gap: 1.25rem;
  }
`;

export const PlayerSection = styled.div`
  flex: 0 0 auto;
  width: 100%;
  max-width: 200px;

  ${media.down.md} {
    display: flex;
    justify-content: center;
    max-width: 100%;
    width: auto;
  }

  ${media.between.smMd} {
    max-width: 160px;
  }
`;

export const BoardSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  width: 100%;
  max-width: min(100%, 500px);
`;
