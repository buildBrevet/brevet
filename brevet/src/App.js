// import logo from "./logo.svg";
import Home from "./components/home";
import Navbar from "./components/Navbar";

import footer from "./components/footer";
import React, { useState, useEffect } from "react";
// contracts
import BrevToken from "./abis/BrevToken.json";
import BrevetMarketplace from "./abis/BrevetMarketplace.json";
import patentNft from "./abis/patentnft.json";
import ResearchHelper from "./abis/ResearchHelper.json";

import Web3 from "web3";
import detectEthereumProvider from "@metamask/detect-provider";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import Cards from "./components/cards";
import Create from "./components/Create";
import Research from "./components/Research";
import Marketplace from "./components/Marketplace";

export function App() {
  const [web3Api, setWeb3Api] = useState({
    provider: null,
    web3: null,
  });

  const [account, setAccount] = useState(null);
  // const [contracts, setContracts] = useState({
  //   BrevT: null,
  //   BrevMP: null,
  //   nft: null,
  //   resH: null,
  // });

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

  useEffect(() => {
    //contract initilaization
    const contractInstance = async () => {
      // const networkId = await web3Api.web3.eth.net.getId();
      // console.log(networkId);
      const brevtokenAdd = BrevToken.networks["5777"]["address"]; // since now I am usig ganche of network id is  57777

      let brevToken = await new web3Api.web3.eth.Contract(
        BrevToken.abi,
        brevtokenAdd
      );

      const researchhelperadd = ResearchHelper.networks["5777"]["address"];
      let researchHelper = await new web3Api.web3.eth.Contract(
        ResearchHelper.abi,
        researchhelperadd
      );

      const patentnftadd = patentNft.networks["5777"]["address"];
      let Patentnft = await new web3Api.web3.eth.Contract(
        patentNft.abi,
        patentnftadd
      );

      const brevetmarketplaceadd =
        BrevetMarketplace.networks["5777"]["address"];
      let brevetmarketplace = await new web3Api.web3.eth.Contract(
        BrevetMarketplace.abi,
        brevetmarketplaceadd
      );
    };
    web3Api.web3 && contractInstance();
  }, [web3Api.web3]);

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
