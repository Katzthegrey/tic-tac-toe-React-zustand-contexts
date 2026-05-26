# Tic Tac Toe - React Application

## Overview

This is a fully-featured Tic Tac Toe game built with React, featuring both local multiplayer and a computer opponent. The application was developed as a demonstration of modern React patterns including global state management, custom hooks, and component composition.

---

## How It Was Built

### Architecture Decisions

I chose a feature-based folder structure where related files live together rather than being separated by type. Each page has its own directory containing the component, its styled components, and any sub-components. Shared components live in a top-level Components folder. This makes it intuitive to find and modify related code.

For state management, I went with Zustand over alternatives like Redux or React Context alone. Zustand provides a simple hook-based API with minimal boilerplate while still supporting middleware like persistence to localStorage. Each store handles a single concern - game state, scores, settings, timers, and leaderboard data are all separate stores that don't import from each other. This prevents circular dependencies and keeps the codebase maintainable.

The game logic itself is completely decoupled from React. Win detection, move validation, and the CPU opponent algorithm are all pure JavaScript functions that take a board array and return results. This separation means the logic could be tested independently or even reused in a different framework.

### State Flow

When a player clicks a cell, the click handler dispatches a makeMove action to the game store. The store creates a new board array immutably, sets the cell value, and toggles the active player. A useEffect watches for board changes and runs the win detection utility after each move. If a win or draw is detected, the score store increments the appropriate counter and a modal appears.

The timer operates on a separate interval-based system. Each tick decrements the countdown, and at five seconds remaining a warning flag triggers visual changes. When the timer reaches zero, an auto-move function selects a random available cell and executes it through the same makeMove pathway as a human move.

### Component Design

Components follow the presentational pattern where possible. The PlayerCard receives all data including timer state as props rather than accessing stores directly. Callback props allow parent components to handle state mutations. This makes components more reusable and easier to test.

Styled Components handle all styling through the ThemeProvider. Transient props prefixed with a dollar sign pass style-only data without leaking into the DOM. The theme toggle uses React Context specifically for UI presentation concerns, while game state stays in Zustand - this separation of concerns was intentional.

---

## Features

### Core Gameplay

The classic 3x3 grid where two players alternate placing X and O marks. The game detects wins across all eight possible combinations and identifies draws when the board fills without a winner. Status messages update dynamically to show whose turn it is, who won, or if the game ended in a draw.

### Player vs Computer

The computer opponent uses a priority-based strategy algorithm across three difficulty levels. Easy mode makes completely random moves. Medium mode has a fifty percent chance of using smart strategy and fifty percent random. Hard mode checks for winning moves first, then blocks opponent winning moves, then prioritizes the center square, then corners, then edges. A deliberate 500-millisecond delay before CPU moves creates a natural playing experience.

### Turn Timer

Each player gets ten seconds per move with a visual progress bar that depletes in real-time. At five seconds remaining, the bar changes to a warning color and a pulsing "Hurry up!" message appears. If time expires, a random move executes automatically and the turn forfeits. The timer resets cleanly between turns with proper interval cleanup to prevent memory leaks.

### Scoreboard

Wins for each player and draws are tracked persistently across game sessions using localStorage. A ref gate prevents double-counting that could occur from React's StrictMode double-rendering in development. Scores display on the player cards beside each avatar.

### Player Names

Names are editable directly on the player cards by clicking a pen icon. The edit mode provides an inline input with keyboard support for Enter to save and Escape to cancel. Names update throughout the entire interface including winner announcements and leaderboard entries.

### Round End Modal

After each round concludes, a modal displays the winner with their avatar and the current score breakdown. From here players can choose to play again immediately, end the game session and reset all scores, or add their result to the persistent leaderboard by entering a display name.

### Leaderboard

A separate page displays ranked entries sorted by highest score, with gold, silver, and bronze styling for the top three positions. Each entry shows the player's avatar, chosen name, and score. The leaderboard persists in localStorage and can be cleared entirely.

### Theme Toggle

A light and dark theme switch uses styled-components ThemeProvider for CSS variable-level theme changes. Icons reflect the current state with a sun for switching to light mode and a moon for switching to dark mode.

### Sound Effects

Game actions trigger audio feedback generated through the Web Audio API. Click sounds differ between players, victory plays an ascending arpeggio, and draws produce a lower tone. Sounds can be toggled on and off from the navigation bar.

---

## How To Use

### Starting a Game

Navigate to the home page and select your game mode. Player vs Player lets two people play on the same device. Player vs Computer matches you against an AI opponent with selectable difficulty. Optionally, you can enter custom player names before starting. Click the Start Game button to begin.

### Playing

The active player has a glowing card on their side of the board with a green indicator dot. Click any empty cell to place your mark. The timer bar shows remaining time for the current turn. If playing against the computer, it will respond automatically after a brief pause.

### Editing Names

Click the small pen icon next to any player name on their card. Type the new name and press Enter or click away to save. Press Escape to cancel without changes.

### After Each Round

When a round ends, a results modal appears. Choose Play Again for another round with scores preserved, End Game to reset everything and return to the menu, or Add to Leaderboard to save your score permanently.

### Viewing the Leaderboard

Click Details in the navigation bar to see all saved scores ranked from highest to lowest. Use the Clear Leaderboard button to remove all entries.

### Changing Theme

Click the theme toggle button in the top-right corner of the navigation bar. The sun icon indicates dark mode is active and clicking switches to light. The moon icon indicates light mode is active and clicking switches to dark.

### Toggling Sound

Click the speaker icon in the navigation bar to mute or unmute game sound effects.

---

## Technical Highlights

The application demonstrates several professional React patterns:

- **Custom hooks** encapsulate reusable logic like game flow and timer management
- **Provider pattern** composes multiple contexts cleanly through a single index file
- **Pure game logic** exists as functions completely separate from any component, making it inherently testable
- **Immutable state updates** create new objects and arrays rather than mutating existing ones
- **Proper effect cleanup** prevents memory leaks by clearing intervals and timeouts in return functions
- **Separation of concerns** keeps game state in Zustand while UI state uses React Context
- **Barrel exports** provide clean imports through a single entry point
