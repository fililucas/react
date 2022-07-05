/* import logo from './logo.svg'; */
import './App.css';
import { BrowserRouter as Routes } from 'react-router-dom'


import Navbar from './components/Navbar';
import ClickTracker from './components/ClickTracker';




function App() {

  return (
    <div className="App">

    <Routes>
      <ClickTracker/>
    </Routes>
      
    </div>
  )


}

export default App;
