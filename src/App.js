import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<div>home page</div>}/>
          <Route path="testing" element={<div>
            <h2>testing</h2>
          </div>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
