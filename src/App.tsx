import "./App.css";
import { useState, useEffect } from "react";
import wordsJSON from "./words.json";
import HangmanBody from "./components/HangmanBody";
import Keyboard from "./components/Keyboard";
import PickedLetters from "./components/PickedLetters";
import { RandomWord } from "./components/RandomWord";

function App() {
  const [wordToGuess, setwordToGuess] = useState<string>("");
  const [pickedLetters, setPickLetters] = useState<string[]>([]);
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * wordsJSON.words.length);
    setwordToGuess(wordsJSON.words[randomIndex]);
  }, []);

  return (
    <div className="app">
      <h1>Hangman</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "80vw",
        }}
      >
        <HangmanBody />
        <PickedLetters pickedLettersProp={pickedLetters} />
      </div>
      <RandomWord wordToGuess={wordToGuess} />
      <Keyboard
        pickedLetters={pickedLetters}
        setPickedLetters={setPickLetters}
      />
    </div>
  );
}

export default App;
