import React, { useState, useEffect } from 'react';
import axios from 'axios'

const ShowUser = props => {
  const [isloading, setIsloading] = useState(true)
  const [alldata, setAlldata] = useState();

  useEffect(() => {
   axios.get('http://localhost:4000/api/users/getuser/5f28830f61c3e107a87b9211')
   .then(res => {
     console.log("get")
     console.log(res.data)
     setAlldata(res.data.docs)
     setIsloading(false)
   })
  }, [])

 
 

 console.log(alldata)
const showimg = alldata && !isloading && alldata.pic.map( data => { 
   return <img src={`http://localhost:4000/uploads/${data.filename}`} alt="gvyh" />})

const getData = alldata && !isloading ? (
    <div key={alldata._id}>
        <p>{alldata.name}</p>
        <p>{alldata.email}</p>
        <p>{alldata.password}</p>
        <p>{alldata.mblno}</p>
        {showimg}
    <p>lorem! duhsaufjsdhaufash sdfhjjjjjdhb</p>
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

export default ShowUser;