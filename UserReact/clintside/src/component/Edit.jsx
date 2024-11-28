import React, { useEffect, useState } from 'react'
import './Edit.css'
import { useParams, useNavigate } from 'react-router-dom'

const Edit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [val, setVal] = useState({
    pic: '',
    name: '',
    des: '',
  })
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchData();
  }, [id])

  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:4000/api/getdata/${id}`)
      if (!response.ok) {
        throw new Error(`Failed to fetch: ${response.status}`)
      }
      const res = await response.json()
      setVal(res)
    } catch (err) {
      setError(err.message)
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target
    setVal((prev) => ({ ...prev,[e.target.name]:e.target.value}))
  };

  const handleImageChange =async (e) => {
    const pic= await converBase64(e.target.files[0])
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
      const response = await fetch(`http://localhost:4000/api/update/${id}`, {
        method: 'PUT',
        body:JSON.stringify(val),
      })
      if (!response.ok) {
        throw new Error(`Failed to update: ${response.status}`)
      }
      const result = await response.json()
      alert(result.msg)
      navigate('/')
    } catch (err) {
      console.error('Error updating data:', err)
      alert('Failed to update employee')
    }
  }
  if (!val) return <div>Loading...</div>

  return (
    <div className="edit-form-container">
      <form>
        <div>
          <img
            src={val.pic}
            alt="Preview"
            className="image-preview"
          />
        </div>
        <input type="file" onChange={handleImageChange} />
        <input
          type="text"
          name="name"
          value={val.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <input
          type="text"
          name="des"
          value={val.des}
          onChange={handleChange}
          placeholder="Description"
        />
        <button onClick={handleClick} type="submit">Save</button>
      </form>
    </div>
  )
}

export default Edit