import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "🥶": "cold face",
  "🥵": "hot face",
  "🥳": "partying face",
  "😶": "face without mouth",
  "😬": "grimmacing face",
  "🤐": "zipper mouth face",
  "🤫": "sushing face",
  "😋": "face savoring food",
  "🤑": "money mouth face",
  "😝": "tongue out"
};

export default function App() {
  const [meaning, setMeaning] = useState("translation will appear here");
  const emojis = Object.keys(emojiDictionary);

  function emojiChangeHandler(event) {
    const userInput = event.target.value;
    let meaning = "";
    if (userInput) {
      meaning = emojiDictionary[userInput];

      if (meaning === undefined) {
        meaning = "Sorry!! no emoji exist";
      }
    } else {
      meaning = "translation will appear here";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    setMeaning(emojiDictionary[emoji]);
  }

  return (
    <div className="App">
      <h1>Emoji Mania</h1>
      <input placeholder="search your emoji..." onChange={emojiChangeHandler} />
      <h2>{meaning}</h2>
      {emojis.map((emoji) => (
        <span
          onClick={() => emojiClickHandler(emoji)}
          style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
        >
          {emoji}
        </span>
      ))}
    </div>
  );
}
