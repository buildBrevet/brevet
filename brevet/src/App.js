// import logo from "./logo.svg";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

import footer from "./components/footer";
import Research from "./components/Research";
import { useState, useEffect } from "react";

import Web3 from "web3";
import detectEthereumProvider from "@metamask/detect-provider";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import Cards from "./components/cards";
import Create from "./components/Create";
import Research from "./components/Research";
import Marketplace from "./components/Marketplace";

function App() {
  const [web3Api, setWeb3Api] = useState({
    provider: null,
    web3: null,
  });

  const [account, setAccount] = useState(null);
  // const [contracts, setContracts] = useState({ pollT: null, tohyo: null });

  useEffect(() => {
    const loadProvider = async () => {
      const provider = await detectEthereumProvider();

      if (provider) {
        provider.request({ method: "eth_requestAccounts" });
        // console.log(provider);
        setWeb3Api({
          web3: new Web3(provider),
          provider,
        });
      } else {
        console.error("Install Metamask");
      }
    };

    loadProvider();
  }, []);

  useEffect(() => {
    const getAccounts = async () => {
      const accounts = await web3Api.web3.eth.getAccounts();
      // console.log(accounts);
      setAccount(accounts[0]);
    };
    web3Api.web3 && getAccounts();
  }, [web3Api.web3, account]);

  return (
    <>
      <Navbar account={account} />
      <BrowserRouter>
        {/* <div> */}
        <Routes>
          <Route path="/" element={<Home />}></Route>

          <Route path="/create" element={<Create />}></Route>
          <Route path="/research" element={<Research />}></Route>
          <Route path="/market" element={<Marketplace />}></Route>
        </Routes>
        {/* </div> */}
      </BrowserRouter>
    </>
  );
}

export default App;
