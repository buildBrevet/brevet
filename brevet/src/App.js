// import logo from "./logo.svg";
import Home from "./components/home";
import Navbar from "./components/Navbar";

import footer from "./components/footer";
import React, { useState, useEffect, createContext, useRef } from "react";
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
export const userContext = createContext();

export function App() {
  const [suraj, setSuraj] = useState(false);
  const [web3Api, setWeb3Api] = useState({
    provider: null,
    web3: null,
  });

  // var brevToken;
  // var brevetmarketplace;
  // var Patentnft;
  // var researchHelper;

  // const state = useGlobalState();

  // var contracts = {};

  const [account, setAccount] = useState(null);
  const [brevT, setBrevT] = useState();
  const [market, setMarket] = useState();
  const [research, setResearch] = useState();
  const [patent, setPatent] = useState();

  // const [contracts, setContracts] = useState({
  //   BrevT: null,
  //   Market: null,
  //   Research: null,
  //   Patent: null,
  // });

  //IPFS Client
  // let ipfs: IPFSHTTPClient | undefined;
  // try {
  //   ipfs = create({
  //     url: "https://ipfs.infura.io:5001/api/v0",

  //   });
  // } catch (error) {
  //   console.error("IPFS error ", error);
  //   ipfs = undefined;
  // }

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

    const brevetmarketplaceadd = BrevetMarketplace.networks["5777"]["address"];
    let brevetmarketplace = await new web3Api.web3.eth.Contract(
      BrevetMarketplace.abi,
      brevetmarketplaceadd
    );
    // console.log(brevToken);
    return { brevToken, Patentnft, brevetmarketplace, researchHelper };
  };

  function wait() {
    if (web3Api.web3) {
      contractInstance().then(
        ({ brevToken, Patentnft, brevetmarketplace, researchHelper }) => {
          // console.log(brevToken, brevetmarketplace, Patentnft, researchHelper);
          setBrevT({ ...brevToken });
          setMarket({ ...brevetmarketplace });
          setPatent({ ...Patentnft });
          setResearch({ ...researchHelper });
        }
      );
    }

    console.log(market);
  }

  useEffect(() => {
    setInterval(() => {
      if (web3Api.web3) {
        contractInstance().then(
          ({ brevToken, Patentnft, brevetmarketplace, researchHelper }) => {
            // console.log(brevToken, brevetmarketplace, Patentnft, researchHelper);
            setBrevT({ ...brevToken });
            setMarket({ ...brevetmarketplace });
            setPatent({ ...Patentnft });
            setResearch({ ...researchHelper });
          }
        );
      }

      console.log(market);
    }, 2000);
  }, [web3Api.web3]);

  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);

  // const loadMarketplaceItems = async () => {
  //   // Load all unsold items
  //   const itemCount = await contracts.BrevMP.methods.itemCount().call();
  //   console.log("itemCount");
  //   console.log(itemCount);
  //   let items = [];
  //   // for (let i = 1; i <= itemCount; i++) {
  //   //   const item = await contracts.brevetmarketplace.methods.items(i).call();
  //   //   if (!item.sold) {
  //   //     // get uri url from nft contractsract
  //   //     const uri = await contracts.patentnft.tokenURI(item.tokenId);
  //   //     // use uri to fetch the nft metadata stored on ipfs
  //   //     const response = await fetch(uri);
  //   //     const metadata = await response.json();
  //   //     // get total price of item (item price + fee)
  //   //     const totalPrice = await contracts.brevetmarketplace.methods
  //   //       .getTotalPrice(item.itemId)
  //   //       .call();
  //   //     // Add item to items array
  //   //     items.push({
  //   //       totalPrice,
  //   //       itemId: item.itemId,
  //   //       seller: item.seller,
  //   //       name: metadata.name,
  //   //       description: metadata.description,
  //   //       image: metadata.image,
  //   //     });
  //   //   }
  //   // }
  //   setLoading(false);
  //   setItems(items);
  // };

  // const buyMarketItem = async (item) => {
  //   await (
  //     await contracts.brevetmarketplace.purchaseItem(item.itemId, {
  //       value: item.totalPrice,
  //     })
  //   ).wait();
  //   loadMarketplaceItems();
  // };

  // useEffect(async () => {
  //   console.log("final use Eff");
  //   await contractInstance();
  //   loadMarketplaceItems();
  //   console.log("final use after Eff");
  // }, [contracts]);

  return (
    <>
      <Navbar address={account} />
      <BrowserRouter>
        {/* <div> */}
        <Routes>
          <Route path="/" element={<Home market={market} />}></Route>

          <Route path="/create" element={<Create />}></Route>
          {/* <Route path="/research" element={<Research />}></Route> */}
          <Route path="/market" element={<Marketplace />}></Route>
        </Routes>
        {/* </div> */}
      </BrowserRouter>
    </>
  );
}

export default App;
