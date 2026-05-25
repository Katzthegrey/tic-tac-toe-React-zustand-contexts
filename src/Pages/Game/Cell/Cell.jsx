import React from 'react';
import { CellContainer } from './Cell.styled';
import useGameStore from '../../../contexts/gameStore';
import { useSound } from '../../../contexts/SoundContext';

const Cell = ({ value, onClick, isWinning, index }) => {
  const { currentPlayer } = useGameStore();
  const { playClick } = useSound();
  
  const handleClick = () => {
    if (value === null) {
      playClick(currentPlayer);
      onClick(index);
    }
  };
  
  return (
    <CellContainer
      $value={value}
      $filled={value !== null}
      $isWinning={isWinning}
      $disabled={value !== null}
      onClick={handleClick}
      aria-label={`Cell ${index + 1} ${value ? `contains ${value}` : 'empty'}`}
    >
      {value}
    </CellContainer>
  );
};

export default Cell;