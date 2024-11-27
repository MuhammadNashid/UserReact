import React, { useState } from 'react'
import './Add.css'
import { useNavigate } from 'react-router-dom';

const Add = () => {
  const navigate=useNavigate()
  const [val,setVal]=useState({
    name:"",
    des:"",
    photo:"",
  })
  let photo;
  const handleChange=(e)=>{
    setVal((pre)=>({...pre,[e.target.name]:e.target.value}))
  }
  const handleImageChange =async (e)=>{
    const photo=await convertBase64(e.target.files[0]);
    setVal((pre)=>({...pre,photo}))
  }
  function convertBase64(file){
    return new Promise((res,rej)=>{
      const fileReader= new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload=()=>{
        res(fileReader.result)
      }
      fileReader.onerror=(error)=>{
        rej(error)
      }
    })
  }
  const handleClick =async (e) => {
    e.preventDefault()
    console.log(val)
    const res=await fetch('http://localhost:4000/api/add',{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(val)
    })
    console.log(res)
    navigate("/")

  }
  return (
    <div className="add-form-container">
      <form >
        <div>
        {<img src={photo} alt="Preview" />}
        </div>
        <input type="file" name='photo' onChange={handleImageChange} />
        <input type="text" name='name' placeholder="Name" onChange={handleChange}/>
        <input type="text" name='des' placeholder="Desigination" onChange={handleChange} />
        <button type="submit" onClick={handleClick}>Add</button>
      </form>
    </div>
  )
}
export default Add


