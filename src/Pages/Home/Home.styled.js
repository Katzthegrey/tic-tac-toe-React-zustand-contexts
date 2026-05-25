import styled from 'styled-components';
import media from '../../styles/media';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 72px);
  width: 100%;
  padding: 2rem 1.5rem;
  background-color: ${(props) => props.theme.colors.background};

  ${media.down.md} {
    min-height: calc(100vh - 64px);
    padding: 1.5rem 1rem;
  }

  ${media.down.sm} {
    min-height: auto;
    padding: 1.25rem 0.75rem 2rem;
    justify-content: flex-start;
  }
`;
