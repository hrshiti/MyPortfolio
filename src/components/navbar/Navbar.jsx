import "./Navbar.css";

import { NavLink, Link } from "react-router-dom";
const Navbar = ()=>{
  return(
    <>
     <section className = "navbar_section">
       <h1>Portfolio</h1>
      <nav>
        <ul className="nav_list">
        <li> 
            
          <NavLink
                            to="/"
                            style={({ isActive }) => ({
                                color: isActive
                                    ? "greenyellow"
                                    : "white",
                            })}
                        >
                            Home
                        </NavLink>
                        
                        </li>
        <li>
           
        <NavLink
                            to="/about"
                            style={({ isActive }) => ({
                                color: isActive
                                    ? "greenyellow"
                                    : "white",
                            })}
                        >
                           About
                        </NavLink>
                        
        </li>
        <li>
           
        <NavLink
                            to="/projects"
                            style={({ isActive }) => ({
                                color: isActive
                                    ? "greenyellow"
                                    : "white",
                            })}
                        >
                           Skills
                        </NavLink>
                       
        </li>
        <li>
           
        <NavLink
                            to="/services"
                            style={({ isActive }) => ({
                                color: isActive
                                    ? "greenyellow"
                                    : "white",
                            })}
                        >
                           Services
                        </NavLink>
                      
        </li>
        <li>
            
        <NavLink
                            to="/contact"
                            style={({ isActive }) => ({
                                color: isActive
                                    ? "greenyellow"
                                    : "white",
                            })}
                        >
                           Contact
                        </NavLink>
                        
        </li>
        </ul>
      </nav>
     </section>
    </>
  )
}
export default Navbar;