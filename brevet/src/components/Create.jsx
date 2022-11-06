import React, { useState } from "react";
import "../css/create.css";
// import { create, CID, IPFSHTTPClient } from "ipfs-http-client";
import { create as ipfsHttpClient } from "ipfs-http-client";
const client = ipfsHttpClient("https://ipfs.infura.io:5001/api/v0");

function Create({ nft, web3Api, marketplace }) {
  const [image, setImage] = useState();
  const [price, setPrice] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const uploadToIPFS = async (event) => {
    // console.log("inside uplode files");
    event.preventDefault();
    const files = document.getElementById("uploadedFile");
    const file = files.files[0];
    // const file = event.target.files[0];
    console.log("event target files: ",file);
    if (typeof(file) != "undefined") {
      try {
        const result = client.add(file);
        console.log("result is: ",result);
        setImage(`https://ipfs.infura.io/ipfs/${result.path}`);
      } catch (error) {
        console.log("ipfs image upload error: ", error);
      }
    }
    else{
      console.log("undefined");
    }
  };
  async function createNFT(e){
    e.preventDefault();
    console.log("inside cNFT");
    console.log("image is: ",typeof(image));
    console.log("price is: ", typeof(price));
    console.log("name is: ", name);
    console.log("desc is: ", description);

    if (image || !price || !name || !description) return;
    console.log("trying");
    try {
      const result = await client.add(
        JSON.stringify({ image, price, name, description })
        );
        console.log("error");
      mintThenList(result);
    } catch (error) {
      console.log("ipfs uri upload error: ", error);
    }
  };
  const mintThenList = async (result) => {
    const uri = `https://ipfs.infura.io/ipfs/${result.path}`;
    // mint nft
    await (await nft.mint(uri)).wait();
    // get tokenId of new nft
    const id = await nft.tokenCount();
    // approve marketplace to spend nft
    await (await nft.setApprovalForAll(marketplace.address, true)).wait();
    // add nft to marketplace
    const listingPrice = web3Api.web3.utils.toWei(price.toString(), "ether");
    await (await marketplace.makeItem(nft.address, id, listingPrice)).wait();
  };

  return (
    <div>
      <form action="" className="cre-form">
        <input
          type="text"
          className="cre-inp-name"
          name="nfttitle"
          id="nfttitle"
          placeholder="Name of NFT"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          className="cre-inp-name"
          name="nftPrice"
          id="nftPrice"
          placeholder="price of NFT"
          onChange={(e) => setPrice(e.target.value)}
        />
        {/* <input type="textarea" name="nftdescription" id="nftdescription" placeholder='' className='cre-inp-desc'/> */}
        <textarea
          name="nftdescription"
          cols="30"
          rows="10"
          wrap="hard"
          id="nftdescription"
          className="cre-inp-desc"
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <input
          type="file"
          name="uploadedfile"
          id="uploadedFile"
          placeholder="input"
          className="cre-inp-file"
          onChange={uploadToIPFS}
        />
        <button type="submit" className="cre-submit" onClick={createNFT}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Create;
