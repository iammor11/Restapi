import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { NavLink } from 'react-router-dom';
import { useCookies } from 'react-cookie';

const List = props => {
  const [isloading, setIsloading] = useState(true);
  const [alldata, setAlldata] = useState();
  const [checkId, setCheckId] = useState([]);
  const [checked] = useState(true)
  const [cookies, setCookie] = useCookies(['token']);
console.log(cookies.token)
  useEffect(() => {
   axios.get('http://localhost:4000/api/names',{
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${cookies.token}`
  }
   })
   .then(res => {
     console.log("get")
     setAlldata(res.data.docs)
     setIsloading(false)
   })
  }, [props.toggle])

  const handleChange = (e) => {
    e.target.name = e.target.checked
    console.log(e.target.name , e.target.checked, e.target.value)
    if(e.target.checked === true){
      setCheckId([...checkId, {"id" : e.target.value}]);
      console.log("true", checkId)
    }
    else {
      console.log("false")
    const updatedId = checkId.filter(delId =>{
        return delId.id !== e.target.value;
      })
      setCheckId(updatedId)
    }
  }

  const handleDelete = (e) => {
    e.preventDefault();
      checkId.map( doc => {
      return  axios.patch('http://localhost:4000/api/names/'+doc.id  , { checked })
      .then(res => {
      console.log("check patch")
      console.log(res)
      })
    })
    axios.delete('http://localhost:4000/api/names')
    .then(res => {
      console.log("del many")
      console.log(res)
  })
  props.setToggle(!props.toggle)
  }

  const getData = alldata && alldata.length && !isloading ? (
    alldata.map( doc => {
    return(
      <div key={doc._id}>
      <input type="checkbox" value={doc._id} onChange={handleChange} />
      &nbsp; &nbsp;
      <NavLink key={doc._id} className="inline" to={'/' + doc._id}>
        <p>{doc.firstname} {doc.lastname}</p>
      </NavLink>
      </div>
    )
  })) :
  <p>We don't have any data.</p>

  const deleteButton = checkId && checkId.length ? (
    <button onClick={handleDelete}>Delete</button>
  ) : null

  console.log(checkId)
  console.log(alldata)
  return (
    <>
  {deleteButton}
      {getData}
    </>
  )}

export default List;