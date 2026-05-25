# Project structure

Tic-tac-toe app (Create React App). This doc describes what exists today and files you may add later.

---

## Existing layout

```
tik-tac-toe/
├── public/
│   ├── index.html          # HTML shell, fonts, #root
│   ├── manifest.json       # PWA manifest (CRA default)
│   └── robots.txt
│
├── src/
│   ├── index.js            # App entry; wraps App in contexts Provider
│   ├── index.css           # Base CRA styles
│   ├── App.js              # Theme bridge + Router
│   ├── Router.js           # Routes and global Navbar
│   │
│   ├── contexts/           # App-wide state
│   │   ├── index.js        # Root Provider (theme today)
│   │   └── ThemeContexts.js
│   │
│   ├── Components/         # Shared UI
│   │   └── Header/
│   │       └── Navbar.jsx
│   │
│   ├── Pages/              # One folder per route
│   │   ├── Home/
│   │   │   ├── Home.jsx
│   │   │   └── Home.styled.js
│   │   ├── Game/
│   │   │   └── Game.jsx
│   │   └── Details/
│   │       └── Details.jsx
│   │
│   └── styles/
│       ├── theme.js            # lightTheme / darkTheme tokens
│       ├── Global.styled.js    # Global CSS-in-JS
│       └── General.styled.js   # Shared Title, Subtitle
│
├── package.json
└── README.md                   # CRA scripts & setup (not structure)
```

---

## What each area is for

| Path | Purpose |
|------|---------|
| `public/` | Static files served as-is |
| `src/contexts/` | Global state (theme via React Context today) |
| `src/Components/` | Reusable pieces used on multiple pages |
| `src/Pages/` | Screen per route; optional `*.styled.js` beside the page |
| `src/styles/` | Theme tokens and shared styled-components |

---

## Installed dependencies

From `package.json` (already installed in this repo).

### Runtime

| Package | Used for |
|---------|----------|
| `react`, `react-dom` | React UI runtime |
| `react-router-dom` | Routing (`Router.js`) |
| `styled-components` | Styling + theming (`ThemeProvider`) |
| `web-vitals` | CRA performance metrics (optional) |
| `react-scripts` | CRA build/dev tooling |

### Testing

| Package | Used for |
|---------|----------|
| `@testing-library/react` | React component testing |
| `@testing-library/dom` | DOM testing utilities |
| `@testing-library/jest-dom` | Extra DOM matchers |
| `@testing-library/user-event` | User interaction simulation |

**Routes today**

| Path | Page |
|------|------|
| `/` | `Pages/Home` |
| `/game` | `Pages/Game` (placeholder) |
| `/details` | `Pages/Details` (placeholder) |

---

## Intended files (not built yet)

These are optional next steps; nothing here is required to match a fixed layout.

### `src/contexts/`

| File | Purpose |
|------|---------|
| `gameStore.js` | Zustand store: board, turn, winner, moves |
| `gameSettingsStore.js` | Zustand store: PvP vs CPU, difficulty, player names |

`index.js` may later re-export stores; theme can stay in `ThemeContexts.js`.

### `src/Pages/Game/`

| File | Purpose |
|------|---------|
| `Game.styled.js` | Game page layout styles |
| `Board.jsx` | 3×3 grid |
| `Cell.jsx` | Single square |
| `GameStatus.jsx` | Turn / winner / draw message |

### `src/Pages/Home/`

| File | Purpose |
|------|---------|
| `ModeSelect.jsx` | Choose vs friend or vs computer before `/game` |

### `src/Pages/Details/`

| File | Purpose |
|------|---------|
| `Details.styled.js` | Details page styles |

### `src/Components/`

| Path | Purpose |
|------|---------|
| `Game/` | Board-related UI if shared outside `Pages/Game` |
| `Button/` | Reusable button |
| `Header/Navbar.styled.js` | Navbar styles (optional split from `Navbar.jsx`) |

### `src/` (utilities)

| File | Purpose |
|------|---------|
| `utils/gameLogic.js` | Win/draw checks, valid move helpers |
| `utils/cpu.js` | Computer move (if vs CPU) |

Install when you add stores: `npm install zustand`.
