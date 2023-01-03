import {About} from '../About'
import {ContactForm} from '../ContactForm';
import { Portraits } from '../Portraits';
import { OrderBanner } from '../OrderBanner';


export const Main = (props) => {
  return (
    <div>
      <Portraits/>
      <OrderBanner/>
      <About/>
      <ContactForm/>
    </div>
  )
}
