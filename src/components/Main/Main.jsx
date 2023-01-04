import {About} from '../About'
import { Portraits } from '../Portraits';
import { OrderBanner } from '../OrderBanner';
import { Feed } from '../Feed';


export const Main = (props) => {
  return (
    <div>
      <Portraits/>
      <OrderBanner/>
      <About/>
      <Feed/>
    </div>
  )
}
