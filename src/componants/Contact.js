import React from "react";
import Form from "./Form";

function Contact() {
  const myContacts = [
    {
      // title: "github",
      icon: "fa-brands fa-github",
      url: "https://github.com/melhelow"
    },
    {
      // title: "linkedin",
      icon: "fa-brands fa-linkedin-in",
      url: "https://www.linkedin.com/in/mohamed-elhelw-76a888271/"
    },
    {
      // title: "email",
      icon: "fa-solid fa-at",
      email: "melhelow@hotmail.com"
    },
    {
      // title: "phone",
      icon: "fa-sharp fa-solid fa-phone",
      cell: "+1-708-580-9783"
    },
  ];
 

  return (
    <div className="container flex ">
      <div className="m-5  border-r-2 border-black p-5   ">
        <h1>Contacts</h1>
      </div>
      <Form />
      <div className="m-5 flex flex-row   ">
        {myContacts.map((contact) => {
          return (
            <div className="flex flex-row ">
              <div className="flex ">
                <h1>{contact.title}</h1>

                <div
                  className=" flex flex-row  h-25 w-25 m-5  bg-cover bg-center  justify-end items-end "
                >
                    <a href = {contact.url} target="_blank"><i 
                        className={contact.icon} 
                        style={{
                            fontSize: "75px"
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
