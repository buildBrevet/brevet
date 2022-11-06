// import { useState, useEffect } from "react";
// import { Row, Col, Card, Button } from "react-bootstrap";
// import Web3 from "web3";

// // import "../css/home.css";

// export default function Home({ marketplace, web3Api, nft }) {
//   // return <div className="hom"></div>;
//   const [loading, setLoading] = useState(true);
//   const [items, setItems] = useState([]);

//   const loadMarketplaceItems = async () => {
//     // Load all unsold items
//     // var itemCount = await marketplace
//     var itemCount = await marketplace.methods.itemCount().call();

//     console.log(itemCount);
//     let items = [];
//     for (let i = 1; i <= itemCount; i++) {
//       const item = await marketplace.methods.items(i).call();
//       if (!item.sold) {
//         // get uri url from nft contractsract
//         const uri = await nft.tokenURI(item.tokenId);
//         // use uri to fetch the nft metadata stored on ipfs
//         const response = await fetch(uri);
//         const metadata = await response.json();
//         // get total price of item (item price + fee)
//         const totalPrice = await marketplace.methods
//           .getTotalPrice(item.itemId)
//           .call();
//         //   Add item to items array
//         items.push({
//           totalPrice,
//           itemId: item.itemId,
//           seller: item.seller,
//           name: metadata.name,
//           description: metadata.description,
//           image: metadata.image,
//         });
//       }
//     }
//     setLoading(false);
//     setItems(items);
//   };

//   const buyMarketItem = async (item) => {
//     await (
//       await marketplace.methods
//         .purchaseItem(item.itemId, {
//           value: item.totalPrice,
//         })
//         .call()
//     ).wait();
//     loadMarketplaceItems();
//   };

//   useEffect(() => {
//     loadMarketplaceItems();
//   }, []);

//   if (loading)
//     return (
//       <main style={{ padding: "1rem 0" }}>
//         <h2>Loading...</h2>
//       </main>
//     );

//   return (
//     <div className="flex justify-center">
//       {items.length > 0 ? (
//         <div className="px-5 container">
//           <Row xs={1} md={2} lg={4} className="g-4 py-5">
//             {items.map((item, idx) => (
//               <Col key={idx} className="overflow-hidden">
//                 <Card>
//                   <Card.Img variant="top" src={item.image} />
//                   <Card.Body color="secondary">
//                     <Card.Title>{item.name}</Card.Title>
//                     <Card.Text>{item.description}</Card.Text>
//                   </Card.Body>
//                   <Card.Footer>
//                     <div className="d-grid">
//                       <Button
//                         onClick={() => buyMarketItem(item)}
//                         variant="primary"
//                         size="lg"
//                       >
//                         Buy for{" "}
//                         {web3Api.web3.utils.fromWei(item.totalPrice, "ether")}{" "}
//                         ETH;
//                       </Button>
//                     </div>
//                   </Card.Footer>
//                 </Card>
//               </Col>
//             ))}
//           </Row>
//         </div>
//       ) : (
//         <main style={{ padding: "1rem 0" }}>
//           <h2>No listed assets</h2>
//         </main>
//       )}
//     </div>
//   );
// }

import { useState, useEffect } from "react";
import "../css/home.css"
// import "../css/home.css";
export var contracts = {
  BrevT: null,
  BrevMP: null,
  nft: null,
  resH: null,
};
export default function Home(props) {
  // return <div className="hom"></div>;
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);
  console.log("hehehhe ", props)
  // const loadMarketplaceItems = async () => {
  //   // Load all unsold items
  //   const itemCount = await contracts.brevetmarketplace;
  //   console.log(itemCount);
  //   let items = [];
  //   for (let i = 1; i <= itemCount; i++) {
  //     const item = await contracts.brevetmarketplace.methods.items(i).call();
  //     if (!item.sold) {
  //       // get uri url from nft contractsract
  //       const uri = await contracts.patentnft.tokenURI(item.tokenId);
  //       // use uri to fetch the nft metadata stored on ipfs
  //       const response = await fetch(uri);
  //       const metadata = await response.json();
  //       // get total price of item (item price + fee)
  //       const totalPrice = await contracts.brevetmarketplace.methods
  //         .getTotalPrice(item.itemId)
  //         .call();
  //       // Add item to items array
  //       items.push({
  //         totalPrice,
  //         itemId: item.itemId,
  //         seller: item.seller,
  //         name: metadata.name,
  //         description: metadata.description,
  //         image: metadata.image,
  //       });
  //     }
  //   }
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
  // useEffect((props) => {
  //   // loadMarketplaceItems();
  //   console.log(props.contracts);
  //   console.log(props.contracts);
  // }, []);
  if (loading)
    return (
      <div className="hom-main-div">
        <div className="hom-block-1">
          <div className="hom-block-1-text">
            <h1 className="hom-h1">Brevet....</h1>
            <h1 className="hom-h1">What is Brevet.</h1>
            <h2 className="hom-h2">Lorem ipsum dolor sit amet consectetur.</h2>
            <h3 className="hom-h3">A marketplace for your NFTs. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga deserunt, rem facere exercitationem perferendis quod.</h3>
          </div>
          <div className="hom-block-1-img">
            <img src={require("../images/rocket.gif")} alt="" className="hom-img" />
          </div>
        </div>
        <div className="hom-block-1">
          <div className="hom-block-1-img">
            <img src={require("../images/NFT/5348934.jpg")} alt="" className="hom-img hom-img-2" />
          </div>
          <div className="hom-block-1-text">
            <h1 className="hom-h1">What is Brevet.</h1>
            <h2 className="hom-h2">Lorem ipsum dolor sit amet consectetur.</h2>
            <h3 className="hom-h3">A marketplace for your NFTs. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga deserunt, rem facere exercitationem perferendis quod.</h3>
          </div>
        </div>

        <div className="hom-block-1">
          <div className="hom-block-1-text">
            <h1 className="hom-h1">What is Brevet.</h1>
            <h2 className="hom-h2">Lorem ipsum dolor sit amet consectetur.</h2>
            <h3 className="hom-h3">A marketplace for your NFTs. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga deserunt, rem facere exercitationem perferendis quod.</h3>
          </div>
          <div className="hom-block-1-img">
            <img src={require("../images/evm.webp")} alt="" className="home-img-3" />
          </div>
        </div>
      </div>
    );

    return <div></div>;
  }