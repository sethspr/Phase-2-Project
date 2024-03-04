// import { NavLink } from "react-router-dom";
import "./NavBar.css";
import Search from "./Search";
import NewPost from "./NewPost";
import About from "./About";

function NavBar() {
  return (
    <nav className="navbar">
      <div>Navigation Burger</div>
      {/* <NavLink to="/">Home</NavLink>
      <NavLink to="/Search">Search</NavLink>
      <NavLink to="/New Post">New Post</NavLink>
      <NavLink to="/About">About</NavLink> */}
    </nav>
  );
}

export default NavBar;