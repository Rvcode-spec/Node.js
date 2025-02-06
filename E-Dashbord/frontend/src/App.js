import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import SignUp from './components/SignUp';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login';
import AddProduct from './components/AddProduct';
import Products from './components/Products';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav/>
        <Routes>

          <Route element = {<PrivateRoute/>}>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/products" element={<Products/>}/>
          <Route path="/add-product" element={<AddProduct/>} />
          <Route path="/services" element={<h1>Services</h1>} />
          <Route path="/contact" element={<h1>Contact</h1>} />
          <Route path="/profile" element={<h1>Profile</h1>} />
          </Route>
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/login" element={<Login/>}/>
          
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
