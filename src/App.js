import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from "./components/ItemCount";
import { BrowserRouter, Routes, Route } from 'react-router-dom';






function App() {

  return (
    <>
      
      <Navbar />;
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <ItemListContainer /> } />
        </Routes>
      </BrowserRouter>
      {/* <ItemCount stock={10} initial={1}/> */}
      <ItemListContainer greeting={"bienvenidos a tobinstrumentos"} />
      <hr />


    </>
  )


}

export default App;
