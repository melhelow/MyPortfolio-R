import React from "react";
import Form from "./Form";

function Contact() {
 

  return (
    <div className="container flex grid grid-cols-3 gap-4 place-self-center">
      <div className="m-5  border-r-2 border-black p-5 px-20  ">
        <h1>Contacts</h1>
      </div>
      <Form />
  
    </div>
  );  
};    

export default Contact;
