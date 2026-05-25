import styled from 'styled-components';
import media from '../../styles/media';

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 72px);
  padding: clamp(1rem, 4vw, 2rem);
  background-color: ${(props) => props.theme.colors.background};
  width: 100%;

  ${media.down.md} {
    min-height: calc(100vh - 64px);
    padding: 1.25rem 1rem;
  }

  ${media.down.sm} {
    justify-content: flex-start;
    padding: 1rem 0.75rem 2rem;
  }
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: clamp(1rem, 3vw, 2rem);
  font-family: 'Pacifico', cursive;
  font-size: clamp(1.75rem, 6vw, 2.5rem);
  text-align: center;
  padding: 0 1rem;
`;

export const Content = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  padding: clamp(1.25rem, 4vw, 2rem);
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  width: 100%;
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.6;
  font-family: 'Poppins', sans-serif;
  font-size: clamp(0.9rem, 2.5vw, 1rem);

  h2,
  h3 {
    margin-bottom: 1rem;
    font-size: clamp(1.1rem, 3.5vw, 1.35rem);
  }

  ul {
    margin-bottom: 1rem;
    padding-left: clamp(1.25rem, 4vw, 2rem);
  }

  li {
    margin-bottom: 0.5rem;
  }

  ${media.down.sm} {
    border-radius: 12px;
  }
`;
