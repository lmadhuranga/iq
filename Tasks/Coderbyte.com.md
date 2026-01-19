Here’s a **clean, interview-ready React Tic Tac Toe** implementation — this is a **classic Coderbyte / frontend interview** task.

---

![Image](https://media.geeksforgeeks.org/wp-content/uploads/20231108015516/Tic-Tac-Toe-React-Native.png)

![Image](https://dev-to-uploads.s3.amazonaws.com/i/xtcbjygjr8s9in2u3nnv.png)

![Image](https://www.gfecdn.net/img/questions/tic-tac-toe/tic-tac-toe-example.png)

![Image](https://res.cloudinary.com/dz209s6jk/image/upload/v1641564936/Challenges/cfr9ssywcgjpcg7or928.jpg)

## 🎯 What Interviewers Expect

They check:

* State management
* Conditional rendering
* Immutable updates
* Winner calculation
* Clean component structure

---

## ✅ Final Working React Tic Tac Toe (Functional + Hooks)

### 🔹 `TicTacToe.jsx`

```jsx
import { useState } from "react";

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export default function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const winner = calculateWinner(board);

  function handleClick(index) {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "O";

    setBoard(newBoard);
    setIsXNext(!isXNext);
  }

  function resetGame() {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
  }

  return (
    <div style={styles.container}>
      <h2>Tic Tac Toe</h2>

      <div style={styles.grid}>
        {board.map((value, index) => (
          <button
            key={index}
            style={styles.cell}
            onClick={() => handleClick(index)}
          >
            {value}
          </button>
        ))}
      </div>

      <h3>
        {winner
          ? `Winner: ${winner}`
          : board.includes(null)
          ? `Next Player: ${isXNext ? "X" : "O"}`
          : "Draw!"}
      </h3>

      <button onClick={resetGame} style={styles.reset}>
        Reset
      </button>
    </div>
  );
}

function calculateWinner(board) {
  for (let combo of winningCombinations) {
    const [a, b, c] = combo;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return null;
}

const styles = {
  container: {
    textAlign: "center",
    fontFamily: "Arial",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 80px)",
    gap: "5px",
    justifyContent: "center",
    margin: "20px 0",
  },
  cell: {
    width: "80px",
    height: "80px",
    fontSize: "24px",
    cursor: "pointer",
  },
  reset: {
    padding: "8px 16px",
    marginTop: "10px",
    cursor: "pointer",
  },
};
```

---

## 🧠 How to Explain This in an Interview (IMPORTANT)

### ✅ State

```js
const [board, setBoard] = useState(Array(9).fill(null));
const [isXNext, setIsXNext] = useState(true);
```

* Board stored as array (easy indexing)
* Boolean toggle for player turn

---

### ✅ Immutable Update

```js
const newBoard = [...board];
newBoard[index] = "X";
setBoard(newBoard);
```

👉 **Never mutate state directly**

---

### ✅ Winner Logic

```js
for (let [a, b, c] of winningCombinations) {
  if (board[a] && board[a] === board[b] && board[a] === board[c]) {
    return board[a];
  }
}
```

👉 Clean, readable, reusable

---

### ✅ Edge Cases Covered

* ❌ Clicking filled cell
* ❌ Clicking after winner
* ✅ Draw state
* ✅ Reset game

---

## 🔥 Common Follow-Up Interview Questions

**Q: Can you optimize this?**
👉 Memoize winner with `useMemo`

**Q: How would you support history (undo)?**
👉 Store board states array

**Q: Multiplayer / online?**
👉 WebSockets + server state

**Q: How to make board dynamic (NxN)?**
👉 Generate win conditions dynamically

---

## 🧪 Senior-Level Upgrade (Mention This 👇)

> “I’d extract `Board` and `Square` components and memoize them to reduce re-renders.”

---

If you want next:

* ✅ **Tic Tac Toe with move history**
* ✅ **NxN dynamic board**
* ✅ **React + TypeScript version**
* ✅ **Tailwind / MUI styled UI**
* ✅ **Coderbyte-style explanation README**

Tell me what version you want 🚀
