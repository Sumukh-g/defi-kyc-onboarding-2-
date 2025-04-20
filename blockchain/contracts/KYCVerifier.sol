// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract KYCVerifier {
    address public admin;
    mapping(address => bool) public isVerified;

    constructor(address _admin) {
        admin = _admin;
    }

    function verifyUser(address user) external {
        require(msg.sender == admin, "Not admin");
        isVerified[user] = true;
    }
}