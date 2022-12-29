
import './App.css';
import {Route, Routes} from 'react-router-dom'
import {ContactForm} from './components/ContactForm'
import {Ordering} from './components/Ordering'
import {Main} from './components/Main/Main'
import NavBar from './components/NavBar/NavBar'


function App() {
  return (
    <div className="app">
    <div className="bg-img">
      <NavBar/>
        <main>
        <Routes>
          <Route path='/' 
          element={<Main/>} />,
          <Route path='/ordering'
          element={<Ordering/>} />
          {/* <Route path='/process'
          element={<Process/>}/>, */}
          <Route path='contact' 
          element={<ContactForm/>} />
        </Routes>
        </main>
      </div>
    </div>
  );
}

export default App
