
import './App.css';
import {Route, Router, Routes} from 'react-router-dom'
import Contact from './components/Contact'
import Nav from './components/NavBar/NavBar'
import About from './components/About'
import Process from './components/Process'

function App() {
  return (
    <div className="App">
        <Nav/>
        <main>
        <Routes>
          <Route path='/' 
          element={<About/>} />,
          <Route path='/process'
          element={<Process/>}/>,
          <Route path='contact' 
          element={<Contact/>} />
        </Routes>
        </main>

    </div>
  );
}

export default App
