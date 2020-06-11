/** Main page of application */
import React from "react";
import { Container } from "react-bootstrap";
import "./App.css";
import Contacts from "./Containers/Contacts/index";
import makeData from "./makeData";

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
