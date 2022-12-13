
import './App.css';
import {Route, Router, Routes} from 'react-router-dom'
import Contact from './components/Contact'
import Nav from './components/NavBar/NavBar'
import About from './components/About'

function App() {
  return (
    <div className="App">
      <Router>
        <Nav/>
        <main>
        <Routes>
          <Route path='/' 
          element={<About/>} />,
          <Route path='contact' 
          element={<Contact/>} />
        </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App
