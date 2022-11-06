// SPDX-License-Identifier: MIT

pragma solidity ^0.8.1;

import "./BrevToken.sol";

contract ResearchHelper {
    BrevToken public brevToken;
    address private brevTokenAdd;
    mapping(address => bool) public oldUser;

    event Contibution(
        address indexed contributer,
        address indexed researcher,
        uint256 value
    );

    constructor(BrevToken _brevToken) {
        brevTokenAdd = address(_brevToken);
        brevToken = _brevToken;
    }

    //fund raised
    mapping(address => uint256) public fundRaised;
    // contributers
    mapping(address => mapping(address => uint256)) public contributers;

    //contribute function
    function contibute(address _researcher) public payable {
        payable(_researcher).transfer(msg.value);
        brevToken.transfer(msg.sender, 2000000000000000000, _researcher);
        emit Contibution(msg.sender, _researcher, msg.value);
    }

    function IssueToken(address payable _user) public payable returns (bool) {
        require(oldUser[_user] == false, "Tokens Already Issued");

        brevToken.transfer(_user, 100000000000000000000, brevToken.owner());
        oldUser[_user] = true;
        return true;
    }
}
