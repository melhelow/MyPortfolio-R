import React from "react";
import Form from "./Form";

function Contact() {
  const myContacts = [
    {
      title: "github",
      icon: "fa-brands fa-github",
      url: "http://google.com"
    },
  ];

  return (
    <div className="container flex">
      <div className="m-5  border-r-2 border-black p-5   ">
        <h1>Contacts</h1>
      </div>
      <Form />
      <div className="m-5 ">
        {myContacts.map((contact) => {
          return (
            <div className="flex flex-row">
              <div className="flex flex-col  ">
                <h1>{contact.title}</h1>

                <div
                  className=" flex flex-row h-96 w-96 m-5  bg-cover bg-center shadow-2xl shadow-emerald-950 justify-center items-center "
                  style={
                    {
                      //  backgroundImage: `url(${contact.image}) `
                    }
                  }
                >
                    <a href = {contact.url} target="_blank">                    <i 
                        className={contact.icon}
                        style={{
                            fontSize: "200px"
                        }}    
                    ></i>
                    </a>

                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Contact;
