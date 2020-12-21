import React, { useState, useEffect } from 'react';
import axios from 'axios'

const Edit = props => {
  const [firstname, setFirstname] = useState();
  const [lastname, setLastname] = useState();
  const [isloading, setIsloading] = useState(true)
  const [alldata, setAlldata] = useState();

  useEffect(() => {
   axios.patch('http://localhost:4000/api/names/'+props.match.params._id)
   .then(res => {
     console.log("patch")
     console.log(res.data)
     setAlldata(res.data)
     setFirstname(res.data.firstname)
     setLastname(res.data.lastname)
     setIsloading(false)
   })
  }, [props.match.params._id])

  
  const handleChange = (e) => {
    setFirstname(e.target.value)
  }
 
  const handleSubmit = (e) => {
    e.preventDefault()
    axios.patch('http://localhost:4000/api/names/'+props.match.params._id, {firstname, lastname})
    .then(res => {
      console.log("patch")
      console.log(res)
  })
}

const editData = alldata  && !isloading ? (
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name: </label>
          <input type="text" defaultValue={alldata.firstname} onChange={handleChange} required='required' />
        </div>

         <div>
          <label>Last Name: </label>
          <input type="text" defaultValue={alldata.lastname} />
        </div> 
        <button>Submit</button>
      </form>
):<p>Something went wrong</p>

 return (
    <>
    <p>hi</p>
    {editData}
    </>
  );
}

export default Edit;