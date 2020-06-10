import React from "react";
import "./App.css";
import Contacts from "./Containers/Contacts/Contacts";
import makeData from "./makeData";

function App() {
  // useEffect(()=>{

  const data = makeData(10);
  // },[])
  return (
    <div className="App">
      <div>
        <Contacts data={data}></Contacts>
      </div>
    </div>
  );
}

export default App;
