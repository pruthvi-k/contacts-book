import React from 'react';
// import { render } from "@testing-library/react";
import renderer from 'react-test-renderer';
import ContactForm from './index';

test('Form submit', () => {
  const formData = {
    name: 'abc',
    age: '',
    address: '',
    pin: '',
    country: '',
  };
  const handleSubmit = jest.fn().mockImplementation((cb) => () =>
    cb({
      name: 'abc',
      age: '',
      address: '',
      pin: '',
      country: '',
    }),
  );
  const wrapper = renderer
    .create(
      <ContactForm
        showPopup={true}
        form="test"
        handleSubmit={handleSubmit}
        data={formData}
      />,
    )
    .toJSON();
  console.log(wrapper);
  //   debugger;
  //   wrapper.find('button').simulate('click');
  //   expect(handleSubmit).toHaveBeenCalled();
});
