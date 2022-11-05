// SPDX-License-Identifier: MIT

pragma solidity ^0.8.1;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract PatentNft is ERC721URIStorage {
    uint256 public tokenId;

    constructor() ERC721("brevet", "BVT") {}

    function mintBrevetNFT(string memory _tokenURI) external returns (bool) {
        tokenId++;
        _mint(msg.sender, tokenId);
        _setTokenURI(tokenId, _tokenURI);
        return true;
    }
}
