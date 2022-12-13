
import './App.css';
import {Route, Routes} from 'react-router-dom'
import {Contact} from './components/Contact'
import {Process} from './components/Process'
import {Main} from './components/Main/Main'

function App() {
  return (
    <div className="App">
        <main>
        <Routes>
          <Route path='/' 
          element={<Main/>} />,
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
