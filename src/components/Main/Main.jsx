import {About} from '../About'
import {ContactForm} from '../ContactForm';
import { Portraits } from '../Portraits';


export const Main = (props) => {
  return (
    <div>
      <Portraits/>
      <About/>
      <ContactForm/>
    </div>
  )
}
