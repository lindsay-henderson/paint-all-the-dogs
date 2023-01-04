import { NavLink } from "react-router-dom"
import'./NavBar.css'

export const Nav = () => {
  return (
        <nav className="nav-bar">
          <div className="home">
            <NavLink to='/'>
              <img id="pawprint" src="./paintings/pawprint.png" alt=""/>
            </NavLink>
          </div>
          <div id='header'>
            <h1>Paint All the Dogs</h1>
          </div>
        </nav>
  )
}

export default Nav