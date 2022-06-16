import Home from './Pages/Home/Home';
import Steps from './Pages/Steps/Steps';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="checkout" element={<Steps />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
