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

          <Route index path="/" element={<index />} />

          <Route path="/products" element={<ItemListContainer />} />

          <Route path="/nav" element={<Navbar />} />

          <Route path="/category/:id" element={<ItemListContainer />} />

        </Routes>
      </BrowserRouter>
      {/* <ItemCount stock={10} initial={1}/> */}

      <hr />


    </>
  )


}

export default App;
