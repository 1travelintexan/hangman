import { useState } from "react";

interface props {
  pickedLetters: string[];
  setPickedLetters: (arr: string[]) => void;
}
function Keyboard({ pickedLetters, setPickedLetters }: props) {
  const letters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  const [letterState, setLetterState] = useState(letters);
  const handleAddLetter = (event: any) => {
    const removedLetterArray = letterState.filter((letter) => {
      return letter !== event.target.innerText;
    });
    setPickedLetters([...pickedLetters, event.target.innerText]);
    setLetterState(removedLetterArray);
  };
  return (
    <div>
      {letterState.map((letter) => {
        return (
          <button
            key={letter}
            onClick={(e) => {
              handleAddLetter(e);
            }}
          >
            {letter}
          </button>
        );
      })}
    </div>
  );
}

export default Keyboard;
