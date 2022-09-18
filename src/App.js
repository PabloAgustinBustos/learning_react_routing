import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import About from './pages/About';
import Home from './pages/Home';
import Products from './pages/Products';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="products" element={<Products/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
