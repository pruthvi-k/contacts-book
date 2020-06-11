/** Main page of application */
import React from "react";
import "./App.css";
import Contacts from "./Containers/Contacts/Contacts";
import makeData from "./makeData";
import { Container } from "react-bootstrap";
function App() {
  // useEffect(()=>{

  const data = makeData(100);
  // },[])
  return (
    <div className="App">
      <Container fluid>
        <Contacts data={data}></Contacts>
      </Container>
    </div>
  );
}

export default App;
