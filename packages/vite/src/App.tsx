import React from "react";
import "./App.css";
import Picker from "./emoji-picker/components/picker/Picker";

function App() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-orange-100">
      <Picker isShow={true} />
    </main>
  );
}

export default App;
