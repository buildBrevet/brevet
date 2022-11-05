// import logo from "./logo.svg";
import Home from "./components/home";
import Navbar from "./components/Navbar";
import footer from "./components/footer";

import "./App.css";
import Cards from "./components/cards";
import Create from "./components/Create";

function App() {
  return (
    <>
      <Navbar />
      {/* <Home /> */}
      <Cards/>
      <Create/>
    </>
  );
}

export default App;
