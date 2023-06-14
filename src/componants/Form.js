import React, { useState } from 'react';


function Form() {
  // Here we set two state variables for firstName and lastName using `useState`
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = e.target;

    // Ternary statement that will call either setFirstName or setLastName based on what field the user is typing in
    return name === 'name' ? setName(value) : setEmail(value);
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // Alert the user their first and last name, clear the inputs
    alert(`Hello ${name} ${email}`);
    setName('');
    setEmail('');
  };
  
  return (
    <div>
      <p>
        Hello {name} {email}
      </p>
      <form className="form">
        <input 
        className=' border-2 border-solid border-black'
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="name"
          required
        />
        {
            name.length <= 0 ? <p>name is required</p> : null
        }
        
        <input
        className=' border-2 border-solid border-black'
          value={email}
          name="email"
          onChange={handleInputChange}
          type="text"
          placeholder="email"
         required
        />
         {
            email.length <= 0 ? <p>email is required</p> : null
        }
        
        <textarea className=' border-2 border-solid border-black'/>
        <button type="button" onClick={handleFormSubmit} className=' border-2 border-solid border-black'>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
