const PickedLetters = (props: { pickedLettersProp: string[] }) => {
  return (
    <>
      <h3>Picked Letters:</h3>
      <div>
        {props.pickedLettersProp.map((letter: string) => {
          return <h3>{letter}</h3>;
        })}
      </div>
    </>
  );
};
export default PickedLetters;
