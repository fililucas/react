/* import logo from './logo.svg'; */
import './App.css';
import { BrowserRouter as Routes } from 'react-router-dom'


import Navbar from './components/Navbar';




function App() {

  return (
    <div className="App">

    <Routes>
      <Navbar/>
    </Routes>
      
    </div>
  )


}

export default App;
