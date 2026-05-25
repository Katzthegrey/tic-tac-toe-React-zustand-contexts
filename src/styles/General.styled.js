import styled from 'styled-components';
import media from './media';

export const Title = styled.div`
  color: ${(props) => props.theme.colors.text};
  font-size: clamp(1.5rem, 5vw, 2rem);
  font-weight: bold;
  margin-bottom: 20px;
  font-family: 'Pacifico', cursive;
  background-color: transparent;
  text-align: center;
  padding: 0 1rem;

  ${media.down.sm} {
    margin-bottom: 12px;
  }
`;

export const Subtitle = styled.div`
  color: ${(props) => props.theme.colors.text};
  font-size: clamp(0.95rem, 3vw, 1.25rem);
  font-weight: 500;
  margin-bottom: 10px;
  font-family: 'Poppins', sans-serif;
  background-color: transparent;
  text-align: center;
  line-height: 1.6;
  max-width: 42rem;
  padding: 0 1.25rem;

  ${media.down.sm} {
    padding: 0 1rem;
  }
`;
