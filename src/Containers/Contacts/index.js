/** Container/page for contacts
 * state for this page is managed from here
 */
import React, { useState } from "react";
import DataGrid from "../../Components/DataGrid/index";
import ConfirmationPopup from "../../Components/ConfirmationPopup/index";
import ContactForm from "../../Components/ContactForm/index";
import { countryList, generateCountryId } from "../../makeData";
import { Button, Row, Col } from "react-bootstrap";
function Contacts(props) {
  const [contactData, setContactData] = useState(props.data);
  const [showConfirmPopup, setShowConfirmPopup] = useState(false);
  const [showAddContactForm, setShowAddContactForm] = useState(false);
  const [recordToDelete, setRecordToDelete] = useState(null);
  const [contactFormData, setContactFormData] = useState({
    name: "",
    age: "",
    address: "",
    pin: "",
    country: "",
  });

  const countryListOptions = React.useMemo(
    () => countryList.map((item) => <option value={item}>{item}</option>),
    []
  );
  const handleFormInputChange = (el) => {
    const tempContactData = {
      ...contactFormData,
      [el.target.name]: el.target.value,
    };
    setContactFormData(tempContactData);
  };

  const onHandleAddContact = (data) => {
    //  on add contact add form's contact detail to list and clear form
    const tempContactData = [
      { ...data, contactId: generateCountryId() },
      ...contactData,
    ];
    setContactData(tempContactData);

    setShowAddContactForm(false);
  };
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
      <Row className="mt-2">
        <Col>
          <h1>Contacts</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button
            className="float-right m-1"
            onClick={() => setShowAddContactForm(true)}
          >
            Add Contact
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <DataGrid columns={headers} data={contactData}></DataGrid>
        </Col>
      </Row>
      {showAddContactForm && (
        <ContactForm
          type="Add"
          showPopup={showAddContactForm}
          data={contactFormData}
          handleAddContact={onHandleAddContact}
          handleChange={handleFormInputChange}
          setShow={setShowAddContactForm}
          countryList={countryListOptions}
        ></ContactForm>
      )}
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
