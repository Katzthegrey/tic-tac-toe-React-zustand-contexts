import { ThemeProvider } from 'styled-components';
import Router from './Router';
import Navbar from './Components/Header/Navbar';
import { GlobalStyle } from './styles/Global.styled';
import { lightTheme, darkTheme } from './styles/theme';
import { useContext } from 'react';
import { ThemeContext } from './contexts/ThemeContexts';
import { SoundContextProvider } from './contexts/SoundContext';

function App() {
  const { theme } = useContext(ThemeContext);
  const mode = theme === 'light' ? lightTheme : darkTheme;
  
  return (
    <div>
      <ThemeProvider theme={mode}>
        <GlobalStyle />
        <SoundContextProvider>
          <Navbar />
          <Router />
        </SoundContextProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;