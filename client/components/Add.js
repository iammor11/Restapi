import React, { useState } from 'react';
import axios from 'axios'

const Add = props => {
  const [firstname, setFirstname] = useState();
  const [lastname, setLastname] = useState();
  
  const handleChange = (e, updateValue) => {
  updateValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(firstname)
    console.log(lastname)
    axios.post('http://localhost:4000/api/names', { firstname, lastname })
    .then(res => console.log(res.data));
    props.setToggle(!props.toggle)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name: </label>
          <input type="text" name="firstname" defaultValue={firstname} placeholder="Enter Your First Name" required="required" onChange={ e => {handleChange(e, setFirstname)}} />
        </div>

        <div>
          <label>Last Name: </label>
          <input type="text" name="lastname" defaultValue={lastname} placeholder="Enter Your Last Name" required="required" onChange={ e => {handleChange(e, setLastname)}} />
        </div> 
        <button>Submit</button>
      </form>
     </>
  )}

export default Add;