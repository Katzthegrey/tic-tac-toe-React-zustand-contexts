import { createGlobalStyle } from 'styled-components';
import media from './media';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    -webkit-text-size-adjust: 100%;
  }
  
  body {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    transition: background-color 0.3s ease, color 0.3s ease;
    overflow-x: hidden;
    min-height: 100vh;
  }
  
  p {
    color: ${({ theme }) => theme.colors.text};
    font-size: clamp(0.9rem, 2.5vw, 1rem);
    line-height: 1.5;
    margin-bottom: 1rem;
  }
  
  button {
    cursor: pointer;
    font-family: inherit;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  ${media.down.md} {
    body {
      font-size: 15px;
    }
  }

  ${media.down.sm} {
    body {
      font-size: 14px;
    }
  }
`;
