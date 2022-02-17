// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

import "./IERC20.sol";

contract Balances {
    struct TokenBalance {
        address token;
        uint balance;
    }

    function getBalances(address _user, address[] memory _tokens) public view returns (TokenBalance[] memory){
        TokenBalance[] memory tokenBalances = new TokenBalance[](_tokens.length);
        for (uint ctr=0; ctr<_tokens.length; ctr++) {
            IERC20 tokenInstance = IERC20(_tokens[ctr]);
            uint balance = tokenInstance.balanceOf(_user);
            tokenBalances[ctr] = TokenBalance(_tokens[ctr],balance);
        }
        return tokenBalances;
    }

}