import React from "react";
import "./App.css";
import { Picker } from "./emoji-picker/components/picker";
import { Emoji } from "./emoji-picker/type";

function App() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-orange-100">
      <Picker
        isOpen={true}
        onEmojiSelect={(selectedEmoji: Emoji) => console.log(selectedEmoji)}
      />
    </main>
  );
}

export default App;
