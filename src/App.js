import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import About from './pages/About';
import Home from './pages/Home';
import Products from './pages/Products';
import Error from './pages/Error';
import Navbar from './components/Navbar';
import SharedLayout from './pages/SharedLayout';
import SingleProduct from './pages/SingleProduct';
import ProtectedRoute from './pages/ProtectedRoute';

function App() {
  let isAdmin = false;

  return (
  
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<SharedLayout/>}>
            <Route index element={<Home/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="products" element={<Products/>}/>
            <Route path="products/:id" element={<SingleProduct/>}/>
            <Route path="*" element={<Error/>}/>
          </Route>
          
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
