import { useState, useEffect } from "react";

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

  useEffect(() => {
    // loadMarketplaceItems();
    console.log(props);
    console.log(contracts);
  }, []);

  if (loading)
    return (
      <main style={{ padding: "1rem 0" }}>
        <h2>Loading...</h2>
      </main>
    );

  return <div></div>;
}
