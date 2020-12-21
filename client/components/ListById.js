import React, { useState, useEffect } from 'react';
import axios from 'axios'

const ListById = props => {
  const [isloading, setIsloading] = useState(true)
  const [alldata, setAlldata] = useState();

  useEffect(() => {
   axios.get('http://localhost:4000/api/names/'+props.match.params._id)
   .then(res => {
     console.log("get")
     console.log(res.data)
     setAlldata(res.data.docs)
     setIsloading(false)
   })
  }, [props.match.params._id])

 const handleUpdate = () => {
   props.history.push('/'+props.match.params._id+'/edit')
 }
 
  const handleDelete = () => {
    axios.delete('http://localhost:4000/api/names/'+props.match.params._id)
    .then(res => {
      console.log("del")
      console.log(res)
      props.history.push('/')
  })
}

console.log(props)
  console.log(alldata)
console.log(props)

const getData = alldata && !isloading ? (
    <div key={alldata._id}>
    <p>{alldata.firstname}</p> <p>{alldata.lastname}</p>
    <p>lorem! duhsaufjsdhaufash sdfhjjjjjdhb</p>
    <button onClick={handleUpdate}>Update</button>
    <button onClick={handleDelete}>Delete</button>
  </div>
  )
 :
<p>We don't have any data.</p>

 return (
    <>
      {getData}
    </>
  );
}

export default ListById;