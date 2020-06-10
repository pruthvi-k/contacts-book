import React from "react";
import "./App.css";
import Contacts from "./Containers/Contacts/Contacts";
function App() {
  return (
    <div className="App">
      <header>
        <h1>Contacts</h1>
      </header>
      <div>
        <Contacts></Contacts>
      </div>
    </div>
  );
}

export default App;
