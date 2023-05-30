import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Register from "./components/Register";

function App() {
  return (
    // <>
    //   {/* <Navbar />
    //   <Products /> */}
    //   <Login />
    // </>
    <Routes>
      <Route path="/" exact Component={Login} />
      <Route path="/register" Component={Register} />
      <Route path="/Home" Component={Products} />
    </Routes>
  );
}

export default App;
