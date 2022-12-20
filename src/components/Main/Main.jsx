import {Nav} from '../NavBar/NavBar'
import {About} from '../About'
import {Process} from '../Process'
import {ContactForm} from '../ContactForm';
import { Portraits } from '../Portraits';


export const Main = (props) => {
  return (
    <div>
      <Nav />
      <About />
      <Portraits/>
      <Process />
      <ContactForm/>
    </div>
  )
}
