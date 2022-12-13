import {Nav} from '../NavBar/NavBar'
import {About} from '../About'
import {Process} from '../Process'
import {Contact} from '../Contact'

export const Main = (props) => {
  return (
    <div>
      <Nav />
      <About />
      <Process />
      <Contact />
    </div>
  )
}
