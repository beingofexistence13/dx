// myModule.js
import Moralis from 'moralis'; // import moralis SDK

// initialize moralis
Moralis.initialize("YOUR_APP_ID");
Moralis.serverURL = "https://YOUR_SERVER_URL";

export async function getWalletLogos(wallets) {
  // iterate over each wallet in the wallets array
  for (const wallet of wallets) {
    try {
      // retrieve token metadata from Moralis Web3 Token API
      const metadata = await Moralis.Web3API.token.getTokenMetadata({
        chain: "eth", // specify chain
        address: wallet.address // specify contract address of ERC20 token
      });

      // assign logo URL to logo field of wallet object
      wallet.logo = metadata.logo;
    } catch (error) {
      console.error(error);
    }
  }
}

// example usage
const wallets = [
  { title: "ADAMANT Messenger", address: "0x...", description: "Not Provided(coming soon)" },
  { title: "Aladdin Wallet", address: "0x...", description: "Not Provided(coming soon)" },
  // ...
];

getWalletLogos(wallets).then(() => {
  console.log(wallets);
});





b956da9052132e3dabdcd78feb596d5194c99b7345d8c4bd7a47cabdcb69a25f

