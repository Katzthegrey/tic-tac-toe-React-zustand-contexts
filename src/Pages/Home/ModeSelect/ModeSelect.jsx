import React from 'react';
import { useNavigate } from 'react-router-dom';
import useGameSettingsStore from '../../../contexts/gameSettingsStore';
import { 
  ModeContainer, 
  ModeTitle, 
  ModeButton, 
  DifficultySelect, 
  StartButton 
} from './ModeSelect.styled';

const ModeSelect = () => {
  const navigate = useNavigate();
  const { gameMode, difficulty, setGameMode, setDifficulty } = useGameSettingsStore();
  
  const handleStart = () => {
    navigate('/game');
  };
  
  return (
    <ModeContainer>
      <ModeTitle>Select Game Mode</ModeTitle>
      
      <ModeButton
        $selected={gameMode === 'pvp'}
        onClick={() => setGameMode('pvp')}
      >
         Player vs Player
      </ModeButton>
      
      <ModeButton
        $selected={gameMode === 'cpu'}
        onClick={() => setGameMode('cpu')}
      >
         Player vs Computer
      </ModeButton>
      
      {gameMode === 'cpu' && (
        <DifficultySelect
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
        >
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </DifficultySelect>
      )}
      
      <StartButton onClick={handleStart}>
        Start Game
      </StartButton>
    </ModeContainer>
  );
};

export default ModeSelect;