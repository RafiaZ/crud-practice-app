import Accordions from './Accordions';
import './App.css';
import Render from './Pages/Render';
import React, { useState } from 'react';
import axios from 'axios';


function CreateUser() {

  const [formData, setFormData] = useState({});


  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
      
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post('https://reqres.in/api/users', formData)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.error(error);
      });
  }




  return (
    <div className='center'>
      {/* <Render/> */}

      {/* <Accordions/> */}


      <form onSubmit={handleSubmit}>
      <label htmlFor="exampleInput">Example input</label>
      <input
        type="text"
        name="exampleInput"
        onChange={handleChange}
        value={formData.exampleInput}
      />
      <button type="submit">Submit</button>
    </form>
    </div>
  );
}




export default CreateUser;