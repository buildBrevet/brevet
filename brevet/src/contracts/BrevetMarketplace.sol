// SPDX-License-Identifier: MIT

pragma solidity ^0.8.1;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract BrevetMarketplace is ReentrancyGuard {
    address payable public brevetOwner;
    uint256 public feePercent;
    uint256 public itemCount;

    mapping(uint256 => Item) public items;

    struct Item {
        uint256 itemId;
        IERC721 nft;
        uint256 tokenId;
        uint256 price;
        address payable seller;
        bool sold;
    }

    event NFTCreated(
        uint256 itemId,
        address indexed nft,
        uint256 tokenId,
        uint256 price,
        address indexed seller
    );

    event BoughtNFT(
        uint256 itemId,
        address indexed nft,
        uint256 tokenId,
        uint256 price,
        address indexed seller,
        address indexed buyer
    );

    constructor(uint256 _feepercent) {
        brevetOwner = payable(msg.sender);
        feePercent = _feepercent;
    }

    // make nft patent
    function createBrevetNFT(
        IERC721 _nft,
        uint256 _tokenId,
        uint256 _price
    ) external nonReentrant returns (bool) {
        require(_price > 0, "price must be grater than");
        require(
            _nft.ownerOf(_tokenId) == msg.sender,
            "nft must be owned by the owner"
        );

        itemCount++;

        _nft.transferFrom(msg.sender, address(this), _tokenId);
        items[itemCount] = Item(
            itemCount,
            _nft,
            _tokenId,
            _price,
            payable(msg.sender),
            false
        );

        emit NFTCreated(itemCount, address(_nft), _tokenId, _price, msg.sender);

        return true;
    }

    // purchase NFT
    function purchaseItem(uint256 _itemId) external payable nonReentrant {
        uint256 _totalPrice = getTotalPrice(_itemId);
        Item storage item = items[_itemId];
        require(_itemId > 0 && _itemId <= itemCount, "item doesn't exist");
        require(
            msg.value >= _totalPrice,
            "not enough ether to cover item price and market fee"
        );
        require(!item.sold, "item already sold");
        // pay seller and feeAccount
        item.seller.transfer(item.price);
        brevetOwner.transfer(_totalPrice - item.price);
        // update item to sold
        item.sold = true;
        // transfer nft to buyer
        item.nft.transferFrom(address(this), msg.sender, item.tokenId);
        // emit Bought event
        emit BoughtNFT(
            _itemId,
            address(item.nft),
            item.tokenId,
            item.price,
            item.seller,
            msg.sender
        );
    }

    function getTotalPrice(uint256 _itemId) public view returns (uint256) {
        return ((items[_itemId].price * (100 + feePercent)) / 100);
    }
}
