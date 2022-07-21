import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ClickTracker from './components/DesmontarEvento';







function App() {

  return (
    <>

      <Navbar />;
      <BrowserRouter>
        <Routes>

          <Route index path="/" element={<index />} />

          <Route path="/products" element={<ItemListContainer />} />

          <Route path="/category/:id" element={<ItemListContainer />} />

        </Routes>
      </BrowserRouter>

      <hr />

      <ClickTracker />;
    </>
  )


}

export default App;
