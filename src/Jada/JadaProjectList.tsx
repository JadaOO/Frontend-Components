// import "./App.css";
import Grid from "./Grid";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Form from "./Form";
import Modal from "./Modal";

function JadaProjectList() {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div className="project-list">
      <Link to="/jada/grid">Color Board</Link>
      <Link to="/jada/form">Form</Link>
      <Link to="/jada/modal">Welcome Modal</Link>
      <div>{location.pathname}</div>
      <button onClick={() => navigate("/")}>Back to HomePage</button>
    </div>
  );
}

export default JadaProjectList;
