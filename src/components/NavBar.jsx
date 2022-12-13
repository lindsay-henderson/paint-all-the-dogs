import { NavLink } from "react-router-dom"
import pdf from '../data/pdfs/Lindsay-N-Henderson-Resume.pdf'

function Nav() {
  return (

        <nav className="nav-bar">
          <div className="home">
            <NavLink to='/'>
              <img src="" alt=""/>
              </NavLink>
          </div>
          <div className="links">
            <NavLink to='/contact'>Contact</NavLink>
          </div>
        </nav>
  )
}

export default Nav