import './App.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './Home'
import Tracking from './Tracking';
import Menu from './Menu';

function App() {
  return (
    <>
      <Router>
        <div>
          <main>
            <Routes>
              <Route path="/Menu" element={<Menu />} />
              <Route path="/Tracking" element={<Tracking />} />
              <Route path="/Home" element={<Home />} />
              <Route path="/Menu" element={<showMenu/>} />
              <Route path="/" element={<Home />} /> {}
            </Routes>
          </main>
        </div>
      </Router>
    </>
  )
}
export default App;