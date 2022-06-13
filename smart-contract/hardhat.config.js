require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: '0.8.2',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/hIrAgmgzOTUp-3HsQIL8IjDlPR0Fgoih',
      accounts: [
        '0f9298e0753c476c17ea56efa076e828e007aab54000aa6fb0e7d942372b967d',
      ],
    },
  },
};
