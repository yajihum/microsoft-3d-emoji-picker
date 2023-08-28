import { EmojiType, Picker } from "ms-3d-emoji-picker";
import "ms-3d-emoji-picker/styles/index.css";
import React from "react";
import "./App.css";

function App() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-orange-100">
      <Picker
        isOpen={true}
        onEmojiSelect={(selectedEmoji: EmojiType) => console.log(selectedEmoji)}
      />
    </main>
  );
}

export default App;
