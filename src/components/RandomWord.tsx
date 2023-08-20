interface props {
  wordToGuess: string;
}
export const RandomWord = ({ wordToGuess }: props) => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {wordToGuess.split("").map((letter) => {
        return (
          <span
            key={letter}
            style={{
              borderBottom: "5px solid white",
              width: "3rem",
              height: "4rem",
              fontSize: "2.5rem",
              margin: "20px",
            }}
          ></span>
        );
      })}
    </div>
  );
};
