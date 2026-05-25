import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { ThemeContext } from '../../contexts/ThemeContexts';
import { useSound } from '../../contexts/SoundContext';
import { 
  Nav, 
  NavLinks, 
  StyledLink, 
  ThemeButton, 
  Logo,
  SoundButton,
  ControlsGroup
} from './Navbar.styled';

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { soundEnabled, toggleSound } = useSound();
  const location = useLocation();
  
  const isDark = theme === 'dark';
  
  return (
    <Nav>
      <Logo to="/">
        <img src="/assets/svgs/tictactoe.svg" alt="Tic Tac Toe Logo" width="30" height="30" />
        Tic Tac Toe
      </Logo>
      
      <NavLinks>
        <StyledLink to="/" $isActive={location.pathname === '/'}>
          <i className="fas fa-home"></i>
          Home
        </StyledLink>
        
        <StyledLink to="/game" $isActive={location.pathname === '/game'}>
          <i className="fas fa-chess-board"></i>
          Game
        </StyledLink>
        
        <StyledLink to="/details" $isActive={location.pathname === '/details'}>
          <i className="fas fa-info-circle"></i>
          Details
        </StyledLink>
      </NavLinks>
      
      <ControlsGroup>
        <SoundButton onClick={toggleSound}>
          <i className={`fas ${soundEnabled ? 'fa-volume-up' : 'fa-volume-mute'}`}></i>
        </SoundButton>
        
        <ThemeButton onClick={toggleTheme}>
          {isDark ? (
            <>
              <i className="fas fa-moon"></i>
              
            </>
          ) : (
            <>
              <i className="fas fa-sun"></i>             
            </>
          )}
        </ThemeButton>
      </ControlsGroup>
    </Nav>
  );
};

export default Navbar;