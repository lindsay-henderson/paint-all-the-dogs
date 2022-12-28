import {About} from '../About'
import {Process} from '../Process'
import {ContactForm} from '../ContactForm';
import { Portraits } from '../Portraits';


export const Main = (props) => {
  return (
    <div>
      <Portraits/>
      <About/>
      <Process/>
      <ContactForm/>
    </div>
  )
}
