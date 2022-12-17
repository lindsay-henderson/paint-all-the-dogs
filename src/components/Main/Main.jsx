import {Nav} from '../NavBar/NavBar'
import {About} from '../About'
import {Process} from '../Process'
import {ContactForm} from '../ContactForm';


export const Main = (props) => {
  return (
    <div>
      <Nav />
      <About />
      <Process />
      <ContactForm/>
    </div>
  )
}
