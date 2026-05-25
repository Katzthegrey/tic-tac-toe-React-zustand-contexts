import React, { useRef } from 'react';
import Cell from '../Cell/Cell';
import WinningLine from '../WinningLine';
import useGameStore from '../../../contexts/gameStore';
import { BoardWrapper, BoardGrid } from './Board.styled';

const Board = ({ onSquareClick }) => {
  const { board, winningLine } = useGameStore();
  const boardRef = useRef(null);

  const isWinningSquare = (index) => {
    return winningLine && winningLine.includes(index);
  };

  return (
    <BoardWrapper ref={boardRef}>
      <BoardGrid>
        {board.map((value, index) => (
          <Cell
            key={index}
            index={index}
            value={value}
            onClick={onSquareClick}
            isWinning={isWinningSquare(index)}
          />
        ))}
      </BoardGrid>
      <WinningLine line={winningLine} boardRef={boardRef} />
    </BoardWrapper>
  );
};

export default Board;
