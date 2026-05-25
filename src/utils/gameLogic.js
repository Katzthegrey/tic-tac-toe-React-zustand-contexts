export const GameChecker = {
  winningLines: [
    // Horizontal lines
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    
    // Vertical lines
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    
    // Diagonal lines
    [0, 4, 8],
    [2, 4, 6],
  ],
  
  checkWinner(board) {
    for (const line of this.winningLines) {
      const [a, b, c] = line;
      
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return {
          winner: board[a],
          winningLine: line,
        };
      }
    }
    
    return null;
  },
  
  checkDraw(board) {
    return board.every((square) => square !== null);
  },
  
  getGameStatus(board) {
    const winnerResult = this.checkWinner(board);
    
    if (winnerResult) {
      return {
        isGameOver: true,
        winner: winnerResult.winner,
        winningLine: winnerResult.winningLine,
        isDraw: false,
      };
    }
    
    if (this.checkDraw(board)) {
      return {
        isGameOver: true,
        winner: null,
        winningLine: null,
        isDraw: true,
      };
    }
    
    return {
      isGameOver: false,
      winner: null,
      winningLine: null,
      isDraw: false,
    };
  },
  
  isValidMove(board, index) {
    return index >= 0 && index < 9 && board[index] === null;
  },
  
  getAvailableMoves(board) {
    return board.reduce((moves, cell, index) => {
      if (cell === null) moves.push(index);
      return moves;
    }, []);
  }
};