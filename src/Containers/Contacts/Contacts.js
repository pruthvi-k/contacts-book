import React, { useState } from "react";
import DataGrid from "../../Components/DataGrid";
import ConfirmationPopup from "../../Components/ConfirmationPopup";
import makeData from "../../makeData";
import { Button } from "react-bootstrap";
function Contacts() {
  const [showConfirmPopup, setShowConfirmPopup] = useState(false);
  const onDeleteClick = (contact) => {
    console.log("on delete click", contact);
    setShowConfirmPopup(true);
  };
  const handleDelete = (contact) => {
    console.log("delete ", contact);
    setShowConfirmPopup(false);
  };
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
        accessor: "action-edit",
        Cell: (row) => (
          <span>
            <Button size="sm" className="mr-2">
              Edit
            </Button>
            <Button size="sm" onClick={onDeleteClick}>
              Delete
            </Button>
          </span>
        ),
      },
    ],
    []
  );

  const data = React.useMemo(() => makeData(20), []);

  return (
    <div className="Contacts">
      <DataGrid columns={headers} data={data}></DataGrid>
      {showConfirmPopup && (
        <ConfirmationPopup
          heading="Delete Contact"
          showPopup={showConfirmPopup}
          handleConfirm={handleDelete}
        ></ConfirmationPopup>
      )}
    </div>
  );
}

export default Contacts;
