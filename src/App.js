import './App.css';
import { Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import ProductListing from './containers/ProductListing';
import ProductDetails from './containers/ProductDetails';
import Header from './containers/Header';
import NoPage from './containers/NoPage';
import ProductComponent from './containers/ProductComponent';

function App() {
  return (
    <div className="App">
           <Router>
           <Header></Header>
            <Routes>
            <Route path="/" element={<ProductListing />} />
                <Route path="product-list" element={<ProductComponent />} />
                <Route path="product-description" element={<ProductDetails />} />
              
                </Routes>
                
            </Router>
    </div>
  );
}

export default App;
