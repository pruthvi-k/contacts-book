import React, { useState, useEffect } from "react";
import DataGrid from "../../Components/DataGrid";
import ConfirmationPopup from "../../Components/ConfirmationPopup";
// import makeData from "../../makeData";
import { Button, Row, Col } from "react-bootstrap";
function Contacts(props) {
  const [contactData, setContactData] = useState(props.data);
  const [showConfirmPopup, setShowConfirmPopup] = useState(false);
  const [recordToDelete, setRecordToDelete] = useState(null);

  //   function to open confirmation popup on delete of any contact
  const onDeleteClick = (contact) => {
    setRecordToDelete(contact);
    setShowConfirmPopup(true);
  };

  //   handle delete action and update records in DataGrid
  const handleDelete = () => {
    if (recordToDelete) {
      const tempContactData = contactData.filter(
        (data) => data.contactId !== recordToDelete
      );
      setContactData(tempContactData);
    }
    setShowConfirmPopup(false);
  };

  //   set headers for columns to show in grid
  const headers = React.useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Age",
        accessor: "age",
      },
      {
        Header: "Address",
        accessor: "address",
      },
      {
        Header: "Pin",
        accessor: "pin",
      },
      {
        Header: "Country",
        accessor: "country",
      },
      {
        Header: "",
        accessor: "contactId",
        Cell: (row) => (
          <span>
            <Button size="sm" className="mr-2">
              Edit
            </Button>
            <Button size="sm" onClick={() => onDeleteClick(row.value)}>
              Delete
            </Button>
          </span>
        ),
      },
    ],
    []
  );

  return (
    <>
      <Row>
        <Col>
          <h1>Contacts</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <DataGrid columns={headers} data={contactData}></DataGrid>
        </Col>
      </Row>

      {showConfirmPopup && (
        <ConfirmationPopup
          heading="Delete Contact"
          showPopup={showConfirmPopup}
          handleConfirm={handleDelete}
        ></ConfirmationPopup>
      )}
    </>
  );
}

export default Contacts;
