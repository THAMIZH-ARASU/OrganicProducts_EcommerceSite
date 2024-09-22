import { dividerClasses } from '@mui/material';
import './App.css';
import Navigation from './Customer/components/Navigation/Navigation';
import HomePage from  './Customer/pages/HomePage/HomePage';
import Product from './Customer/components/Product/Product';
import Footer from './Customer/components/Footer/Footer';
import ProductDetails from './Customer/components/ProductDetails/ProductDetails';

function App() {
  return (
    <div className="">
      <Navigation/>
    <div>
        <HomePage/>
        <Product/>
        <ProductDetails/>
    </div>
    <div>
      <Footer/>
    </div>
    </div>
  );
}

export default App;
