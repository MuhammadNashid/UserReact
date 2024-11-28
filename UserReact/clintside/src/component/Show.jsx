import React from "react";
import { Link } from "react-router-dom";
import "./Show.css";
import img from "../assets/img.png";

const Show = () => {

  const { id } = useParams()
  const navigate = useNavigate()
  const [employee, setEmployee] = useState(null)

  useEffect(() => {
    fetchData()
  }, [id])

  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/getdata/${id}`)
      if (!response.ok) {
        throw new Error(`Failed to fetch: ${response.status}`)
      }
      const res = await response.json()
      setEmployee(res)
    } catch (err) {
      setError(err.message)
    }
  }
  const deleteEmployee = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/delete/${id}`, {
        method: "DELETE",
      })
      if (!response.ok) {
        throw new Error("Failed to delete employee")
      }
      alert("Employee deleted successfully")
      navigate("/")
    } catch (err) {
      console.error("Error deleting employee:", err)
      alert("Failed to delete employee")
    }
  }

  if (!employee) return (<div>Loading employee details...</div>)

  return (
    <div className="details-container">
      <div className="card">
        <div className="card-image">
          <img src={img} alt="Employee" />
        </div>
        <div className="card-details">
          <h2>Name: {employee.name}</h2>
          <p>Des: {employee.des}</p>
        </div>

        <div className="card-actions">
          <Link to={`/Edit${id}`}>
            <button className="btn-edit">Edit</button>
          </Link>
          <button className="btn-delete" onClick={deleteEmployee}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default Show