import React from 'react'
import { Link } from 'react-router-dom'
import './Index.css'
import img from '../assets/img.png'

const Index = () => {
  return (
    <>
      <nav>
        <Link to={'/Add'}><button>Add Employee</button></Link>
      </nav>
      <div className="container">
        <Link to={"/Show"}>
        <div className="card">
            <div><img src={img} alt="" /></div>
            <div>Name: Alan david</div>
            <div>Des: MernStack</div>
        </div>
        </Link>
        <Link to={"/Show"} className='li'>
        <div className="card">
            <div><img src={img} alt="" /></div>
            <div>Name: Avin</div>
            <div>Des: MernStack</div>
        </div>
        </Link>
      </div>
    </>
  )
}
export default Index