import React, { useState, useEffect } from 'react';
import { RoughNotation } from 'react-rough-notation';
import styled from 'styled-components';

const LineOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 10;
`;

const WinningLine = ({ line, boardRef }) => {
  const [show, setShow] = useState(false);
  
  useEffect(() => {
    if (line) {
      const timer = setTimeout(() => setShow(true), 100);
      return () => clearTimeout(timer);
    } else {
      setShow(false);
    }
  }, [line]);
  
  if (!line) return null;
  
  // Calculate line type based on winning combination
  const getLineType = () => {
    if (line[0] === 0 && line[1] === 1 && line[2] === 2) return { type: 'horizontal', position: 'top' };
    if (line[0] === 3 && line[1] === 4 && line[2] === 5) return { type: 'horizontal', position: 'middle' };
    if (line[0] === 6 && line[1] === 7 && line[2] === 8) return { type: 'horizontal', position: 'bottom' };
    if (line[0] === 0 && line[1] === 3 && line[2] === 6) return { type: 'vertical', position: 'left' };
    if (line[0] === 1 && line[1] === 4 && line[2] === 7) return { type: 'vertical', position: 'center' };
    if (line[0] === 2 && line[1] === 5 && line[2] === 8) return { type: 'vertical', position: 'right' };
    if (line[0] === 0 && line[1] === 4 && line[2] === 8) return { type: 'diagonal', position: 'main' };
    if (line[0] === 2 && line[1] === 4 && line[2] === 6) return { type: 'diagonal', position: 'anti' };
    return { type: 'horizontal', position: 'middle' };
  };
  
  const lineInfo = getLineType();
  
  return (
    <LineOverlay>
      <RoughNotation
        type="underline"
        show={show}
        color="#FFD700"
        strokeWidth={6}
        animationDuration={800}
        iterations={3}
        roughness={3}
        bowing={5}
        padding={[50, 0]}
      >
        <div style={{ 
          width: '100%', 
          position: 'absolute',
          top: lineInfo.position === 'top' ? '17%' : 
               lineInfo.position === 'middle' ? '50%' : '83%',
          transform: lineInfo.type === 'diagonal' ? 
            `rotate(${lineInfo.position === 'main' ? '45deg' : '-45deg'})` : 'none'
        }} />
      </RoughNotation>
    </LineOverlay>
  );
};

export default WinningLine;