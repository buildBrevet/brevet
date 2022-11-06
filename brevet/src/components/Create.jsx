import React from "react";
import "../css/create.css";
import { create, CID, IPFSHTTPClient } from "ipfs-http-client";

function Create() {
  return (
    <div>
      <form action="" className="cre-form">
        <input
          type="text"
          className="cre-inp-name"
          name="nfttitle"
          id="nfttitle"
          placeholder="Name of NFT"
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
        ></textarea>
        <input
          type="file"
          name="uploadedfile"
          id="uploadedFile"
          placeholder="input"
          className="cre-inp-file"
        />
        <button type="submit" className="cre-submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Create;
