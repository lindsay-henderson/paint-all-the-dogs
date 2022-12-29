
import './App.css';
import {Route, Routes} from 'react-router-dom'
import {ContactForm} from './components/ContactForm'
import {Ordering} from './components/Ordering'
import {Main} from './components/Main/Main'
import NavBar from './components/NavBar/NavBar'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { grey } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main:grey[900],
      darker: '#37474f'
  }}
})

function App() {
  return (
    <div className="app">
    <div className="bg-img">
    <ThemeProvider theme={theme}>
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
        </ThemeProvider>
      </div>
    </div>
  );
}

export default App
