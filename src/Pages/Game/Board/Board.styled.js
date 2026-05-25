import styled from 'styled-components';
import media from '../../../styles/media';

export const BoardWrapper = styled.div`
  position: relative;
  display: inline-block;
  width: fit-content;
  max-width: 100%;
`;

export const BoardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: clamp(6px, 2vw, 8px);
  padding: clamp(12px, 3vw, 20px);
  background: ${({ theme }) => theme.colors.surface};
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  width: fit-content;
  max-width: 100%;

  background-image: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 2px,
    rgba(0, 0, 0, 0.03) 2px,
    rgba(0, 0, 0, 0.03) 4px
  );

  ${media.down.sm} {
    border-radius: 12px;
    padding: 12px;
  }

  ${media.down.xs} {
    gap: 5px;
    padding: 10px;
    border-radius: 10px;
  }
`;
