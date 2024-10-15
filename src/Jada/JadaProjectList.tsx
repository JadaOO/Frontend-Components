// import "./App.css";
import Grid from "./Grid";
import { Link } from "react-router-dom";

function JadaProjectList() {
  return (
    <div className="project-list">
      <Link to="/jada/grid">Color Board</Link>
      <Link to="/josh">Josh's Projects</Link>
    </div>
  );
}

export default JadaProjectList;
