import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import './Add.css'

const Add = () => {
  const navigate=useNavigate()
  const [val, setVal] = useState({
    pic:"",
    name:"",
    des:""
  })
  let pic;

  const handleChange=(e)=>{
    setVal((pre)=>({...pre,[e.target.name]:e.target.value}))
  }

  const handleImageChange =async (e) => {
    pic= await converBase64(e.target.files[0])
    setVal((pre)=>({...pre,pic}))
  }

  function converBase64(file){
    return new Promise((res, rej) => {
      const fileReader=new FileReader()
      fileReader.readAsDataURL(file)
      fileReader.onload=()=>{
        res(fileReader.result)
      }
      fileReader.onerror=(error)=>{
        rej(error)
      }
    })
  }

  const handleClick = async (e) => {
    e.preventDefault()
    console.log(val)
  
    try {
      const res = await fetch('http://localhost:4000/api/add', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(val)
      });
      
      const data = await res.json()
  
      if (res.status === 201) {
        alert(data.msg)
        navigate("/")
      } else {
        alert(data.error)
      }
    } catch (error) {
      console.error("An error occurred:", error)
      alert("Something went wrong. Please try again later.")
    }
  }
  
  return (
    <div className="add-form-container">
      <form >
        <div>
        {val.pic && <img src={val.pic} alt="Preview" />}
        </div>
        <input type="file" name='pic' onChange={handleImageChange} />
        <input 
          type="text" name='name'
          placeholder="Name" 
          onChange={handleChange} 
        />
        <input 
          type="text" name='des'
          placeholder="Description" 
          onChange={handleChange} 
        />
        <button onClick={handleClick} type="submit">Add</button>
      </form>
    </div>
  )
}
export default Add