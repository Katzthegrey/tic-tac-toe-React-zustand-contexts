import styled from 'styled-components';
import { Link } from 'react-router-dom';
import media from '../../styles/media';

export const Nav = styled.nav`
  background: ${({ theme }) => theme.colors.surface};
  padding: 1rem 2rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.75rem;
  width: 100%;

  ${media.down.md} {
    padding: 0.75rem 1rem;
  }

  ${media.down.sm} {
    padding: 0.75rem;
    gap: 0.5rem;
  }
`;

export const Logo = styled(Link)`
  color: ${({ theme }) => theme.colors.primary};
  font-family: 'Pacifico', cursive;
  font-size: clamp(1.1rem, 4vw, 1.5rem);
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;

  img {
    width: clamp(24px, 6vw, 30px);
    height: clamp(24px, 6vw, 30px);
  }
`;

export const NavLinks = styled.div`
  display: flex;
  gap: clamp(12px, 3vw, 30px);
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;

  ${media.down.sm} {
    order: 3;
    width: 100%;
    justify-content: space-around;
    gap: 8px;
    padding-top: 0.25rem;
    border-top: 1px solid ${({ theme }) => theme.colors.border};
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme, $isActive }) =>
    $isActive ? theme.colors.primary : theme.colors.text};
  font-weight: ${({ $isActive }) => ($isActive ? '600' : '500')};
  font-family: 'Poppins', sans-serif;
  position: relative;
  padding: 5px 0;
  font-size: clamp(0.85rem, 2.5vw, 1rem);
  white-space: nowrap;

  i {
    margin-right: 6px;
    font-size: 0.9rem;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: ${({ $isActive }) => ($isActive ? '100%' : '0')};
    height: 2px;
    background: ${({ theme }) => theme.colors.primary};
    transition: width 0.3s ease;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.primary};

    &::after {
      width: 100%;
    }
  }

  ${media.down.sm} {
    padding: 4px 2px;
    font-size: 0.8rem;

    i {
      margin-right: 4px;
      font-size: 0.85rem;
    }
  }
`;

export const ControlsGroup = styled.div`
  display: flex;
  align-items: center;
  gap: clamp(8px, 2vw, 15px);
  flex-shrink: 0;

  ${media.down.sm} {
    margin-left: auto;
  }
`;

export const SoundButton = styled.button`
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.text};
  font-size: clamp(1rem, 3vw, 1.1rem);
  cursor: pointer;
  padding: 5px;
  transition: color 0.2s;
  min-width: 36px;
  min-height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const ThemeButton = styled.button`
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.text};
  padding: 6px 12px;
  border-radius: 20px;
  cursor: pointer;
  font-size: clamp(0.85rem, 2.5vw, 0.9rem);
  transition: all 0.2s;
  display: flex;
  align-items: center;
  gap: 6px;
  min-height: 36px;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
  }

  i {
    font-size: 0.9rem;
  }

  ${media.down.sm} {
    padding: 6px 10px;
  }
`;
