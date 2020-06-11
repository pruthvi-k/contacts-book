/** Main page of application */
import React from "react";
import "./App.css";
import Contacts from "./Containers/Contacts/index";
import makeData from "./makeData";
import { Container } from "react-bootstrap";
function App() {
  const data = makeData(100);
  return (
    <div className="App">
      <Container fluid>
        <Contacts data={data}></Contacts>
      </Container>
    </div>
  );
}

export default App;
