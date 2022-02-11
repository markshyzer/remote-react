import { useEffect, useState } from "react";
import { Keyboard } from '../../models/Keyboard.model'

function TextInput(props) {
  const [input, setInput] = useState(null);
  const [busy, setBusy] = useState(false);
  let stringInput = document.getElementById("string-input");
  const [character, setCharacter] = useState(Keyboard.start_key);

  const starterPromise = Promise.resolve(null);
  let sendMoves = async (moves) => {
    await moves.reduce(
      (p, move) => p.then(() => props.sendCommand(move)),
      starterPromise
    );
  };

  async function processText() {
    const text = stringInput.value;
    if (text.length > Keyboard.string.length) {
      const current_character = text[Keyboard.string.length];
      await sendMoves(Keyboard.getMoves(current_character));
      setCharacter(current_character);
      processText();
    }
    return false;
  }

  useEffect(() => {
    if (!busy && input) {
      setBusy(true);
      processText().then((res) => setBusy(res));
    }
  }, [input]);

  return (
    <div className="section" id="keyboard-input">
      <div className="wrapper">
        <div className="button no-hover" id="current-value">
          {character}
        </div>
        <input
          className="input-text"
          id="string-input"
          type="text"
          onChange={(e) => setInput(e.target.value)}
        ></input>
        <div className="button" id="clear">
          &#9746;
        </div>
      </div>
    </div>
  );
}

export default TextInput;
