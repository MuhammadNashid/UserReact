import React from "react";
import { Link } from "react-router-dom";
import "./Show.css";
import img from "../assets/img.png";

const Show = () => {
  return (
    <div className="details-container">
      <div className="card">
        <div className="card-image">
          <img src={img} alt="Employee" />
        </div>
        <div className="card-details">
          <h2>Name: Alan</h2>
          <p>Des: Mern</p>
        </div>

        <div className="card-actions">
          <Link to="/Edit">
            <button className="btn-edit">Edit</button>
          </Link>
          <button className="btn-delete">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default Show