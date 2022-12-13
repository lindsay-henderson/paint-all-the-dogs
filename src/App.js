import logo from './logo.svg';
import './App.css';
import {Route, Routes} from 'react-router-dom'
import Home from '/.pages/Home'
import Contact from '/.pages/Contact'
import Nav from './components/NavBar'

function App() {
  return (
    <>
    <Nav/>
    <main>
      <Routes>
        <Route path='/' 
        element={<Home />} />
        <Route path='contact' 
        element={<Contact/>} />
      </Routes>
    </main>
    </>
  );
}

export default App
