
import './App.css';
import { Routes, Route} from 'react-router-dom'
import {Ordering} from './components/Ordering'
import {Main} from './components/Main/Main'
import Nav from './components/NavBar/NavBar'
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
      <Nav/>
        <main>
        <Routes>
          <Route path='/' 
          element={<Main/>} />,
          <Route path='/ordering'
          element={<Ordering/>} />
        </Routes>
        </main>
        </ThemeProvider>
      </div>
    </div>
  );
}

export default App
