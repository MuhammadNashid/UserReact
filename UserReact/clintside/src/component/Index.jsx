import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Index.css";
import img from "../assets/img.png";

const Index = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/get");
      const res = await response.json();
      // console.log(res)
      setData([...res]);
    } catch (error) {
      console.log(error);
    }
  }
  console.log(data);

  return (
    <div>
      <nav>
        <Link to={"/Add"}>
          <button>Add Employee</button>
        </Link>
      </nav>
      <div className="container">
        {data.map((item, index) => (
          <Link to={`/Show/${item._id}`}>
            <div key={index} className="card">
              <div>
                <img src={item.pic} alt="" />
              </div>
              <div>Name: {item.name}</div>
              <div>Des: {item.des}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Index;
//   <Link to={`/Delete/${item.id}`}>