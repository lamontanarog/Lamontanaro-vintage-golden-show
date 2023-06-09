import './App.css';
import NavBar from './NavBar';
import ListContainer from './components/ListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetail from './components/ItemDetail';
import {CustomProvider} from "../src/Context/CustomContext"
import {Cart} from "./components/CartView"
import CheckoutCart from './components/cartCheckOut/index';


function App() {
  

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ListContainer title={"Vintage Golden Shop"} />} />
        <Route path="/categoria/:id" element={<ListContainer title={"Vintage Golden Shop"} />} />
        <Route path="/products/:id" element={<ItemDetail />} />
        <Route path="/cart" element={<Cart estilo="red" color="red"/>} />
        <Route
              path="/checkout/:id"
              element={<CheckoutCart/>}
            />
      </Routes>
    </BrowserRouter>
  );
}

export default () => <CustomProvider>
  <App></App>
</CustomProvider>
