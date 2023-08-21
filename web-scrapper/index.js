import axios from "axios"

// for (let i = 0; i < passport_titles.length; i++) {
//   axios
//   .get(passport_facebook)
//   .then((response) => {
//     let url = `https://www.passportjs.org/packages/${passport_titles.title}`;
//     const html = response.data;
//     regex = html.match(/.url. href..https...github.com.\w+.\w+-\w+/g);

//     passport_github_repository = `{url:"${regex}"},`;
//   })
//   .catch((error) => {
//     console.error("Error fetching the page:", error)
//   })
//   console.log(passport_titles.);

// }
// for (let i = 0; i < passports.length; i++) {
//   axios
//   .get(`https://www.passportjs.org/packages/passport-${passports.title}`)
//   .then((response) => {
//     const html = response.data
//     matcher =
//       "From This Sentence I have to select this(Yes!!!,You Selected The Right Thing)"
//     preregex = html.match(/.url. href..https...github.com.\w+.\w+-\w+/g)

//     passport_github_repository = `git clone ${preregex}`;
//     console.log(passport_github_repository);
//   })
//   .catch((error) => {
//     console.error("Error fetching the page:", error)
//   })
// }

// passport_titles.map((passport_titles) => {
//   axios
//     .get(
//       `https://www.passportjs.org/packages/${passport_titles.title}`
//     )
//     .then((response) => {
//       const html = response.data
//       matcher =
//         "From This Sentence I have to select this(Yes!!!,You Selected The Right Thing)"
//       preregex = html.match(/.url. href..https...github.com.\w+.\w+-\w+/g)

//       passport_github_repository = `git clone ${preregex}`
//       console.log(passport_github_repository)
//     })
//     .catch((error) => {
//       console.error("Error fetching the page:", error)
//     })
// })
// axios
//   .get(
//     `https://blockspot.io/wallet/`
//   )
//   .then((response) => {
//     const html = response.data
//   //   matcher =
//   //     "From This Sentence I have to select this(Yes!!!,You Selected The Right Thing)"
//   //   preregex = html.match(/.url. href..https...github.com.\w+.\w+-\w+/g)

//   //   passport_github_repository = `git clone ${preregex}`
//     console.log(html)
//   })
//   .catch((error) => {
//     console.error("Error fetching the page:", error)
//   })

// let evm_wallets = [];

// const evm_wallet = [
//   {
//     title: "MetaMask",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/5195e9db-94d8-4579-6f11-ef553be95100?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Trust Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/0528ee7e-16d1-4089-21e3-bbfb41933100?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Safe",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/3913df81-63c2-4413-d60b-8ff83cbed500?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Rainbow",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/7a33d7f1-3d12-4b5c-f3ee-5cd83cb1b500?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Uniswap Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/bff9cf1f-df19-42ce-f62a-87f04df13c00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Zerion",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/73f6f52f-7862-49e7-bb85-ba93ab72cc00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "imToken",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/99520548-525c-49d7-fb2f-5db65293b000?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Argent",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/215158d2-614b-49c9-410f-77aa661c3900?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Spot",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/1bf33a89-b049-4a1c-d1f6-4dd7419ee400?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Omni",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/2cd67b4c-282b-4809-e7c0-a88cd5116f00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Crypto.com | DeFi Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/7c5ff577-a68d-49c5-02cd-3d83637b0b00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "OKX Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/45f2f08e-fc0c-4d62-3e63-404e72170500?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "TokenPocket",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/f3119826-4ef5-4d31-4789-d4ae5c18e400?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Robinhood Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/dfe0e3e3-5746-4e2b-12ad-704608531500?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Frontier",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/a78c4d48-32c1-4a9d-52f2-ec7ee08ce200?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Blockchain.com",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/6f913b80-86c0-46f9-61ca-cc90a1805900?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "SafePal",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/252753e7-b783-4e03-7f77-d39864530900?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "BitKeep",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/3f7075d0-4ab7-4db5-404d-3e4c05e6fe00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Zengo Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/6133c399-ae32-4eba-0c5a-0fb84492bf00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "1inch Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/52b1da3c-9e72-40ae-5dac-6142addd9c00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Binance DeFi Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/ebac7b39-688c-41e3-7912-a4fefba74600?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Exodus",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/4c16cad4-cac9-4643-6726-c696efaf5200?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Ledger Live",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/a7f416de-aa03-4c5e-3280-ab49269aef00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "MEW wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/e2024511-2c9b-46d7-3111-52df3d241700?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "AlphaWallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/5b1cddfb-056e-4e78-029a-54de5d70c500?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "KEYRING PRO",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/dda0f0fb-34e8-4a57-dcea-b008e7d1ff00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "LOBSTR Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/0dafcaab-0852-47f7-85dd-436b86491d00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "ONTO",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/d22b2a4b-5562-49ba-506b-6d5986914600?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "MathWallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/26a8f588-3231-4411-60ce-5bb6b805a700?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Obvious",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/fe1b9394-55af-4828-a70d-5c5b7de6b200?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Fireblocks",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/7e1514ba-932d-415d-1bdb-bccb6c2cbc00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Ambire Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/c39b3a16-1a38-4588-f089-cb7aeb584700?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Infinity Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/9f259366-0bcd-4817-0af9-f78773e41900?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Bridge Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/20c3072e-c92e-4902-d4b9-cb2b6ab29100?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Internet Money Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/204b2240-5ce4-4996-6ec4-f06a22726900?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "NOW Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/b6ee4efc-f53e-475b-927b-a7ded6211700?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Bitcoin.com Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/0d7938e1-9b3b-4d8b-177b-98188c4cf400?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "αU wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/58a5b183-4d44-4cdd-22da-e89f49fa4c00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Coin98 Super App",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/fc460647-ea95-447a-99f0-1bff8fa4be00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "ABC Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/f9854c79-14ba-4987-42e1-4a82abbf5700?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Ottr Finance",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/7025146c-c341-473f-a79c-62ec48eef800?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Arculus Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/f78dab27-7165-4a3d-fdb1-fcff06c0a700?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Opera Crypto Browser",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/877fa1a4-304d-4d45-ca8e-f76d1a556f00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Cobalt Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/29d914e5-9daa-4342-33cd-169155c5a600?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Chain",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/f9f3d8da-e791-47d2-98c2-031712617e00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Huddln",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/7ba1571c-10c4-4284-b438-04dac27cb700?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Verso",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/109d7c90-86ed-4ee0-e17d-3c87624ddf00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Jade Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/280cd57b-24f4-4700-8d53-94fe292fab00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "HaHa",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/79285c9f-2630-451e-0680-c71b42fb7400?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Modular Wallet Prod",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/70485da2-2568-463d-722c-25082997cc00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Kelp",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/02d9143d-deed-4336-0cae-f4b8b1091f00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Numio",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/416ee463-6699-43f7-c0e3-396f0ad3d300?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Cling Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/2d8006c3-852b-458a-d6b0-916c5ba76800?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Broearn Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/b3c2c77c-a8cf-46e1-095a-77f0a3891500?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Coinomi",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/3b446d16-a908-40c8-5835-9a6efe90dd00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Ripio Portal",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/fd56c695-ce58-4df5-1625-767571c80700?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Sabay Wallet App",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/c4df7014-abaf-4016-8180-fb994804b400?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Tokoin | My-T Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/88a2518c-16c2-4ee3-4699-1a1c6903bc00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Impersonator",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/b072a0c6-1bc2-4a80-6f05-50a4ebbf0700?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Fncy Mobile Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/c1c8d374-dff3-419c-96af-3515d0192100?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Copiosa",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/cae1be94-9f53-4eba-b915-f6e381d5a500?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Imota ",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/c81f5bbf-ce66-42bd-3436-f1baaaa18b00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Libera",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/9485d17f-c413-47fe-ebee-a876a9dc9100?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Certhis",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/fbd441cc-e861-46dc-48ae-a04228ddb500?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Burrito Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/7eec7187-3f48-4fda-53bb-b0ad55749a00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Ancrypto",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/8dee1c33-b277-4a5a-5ddd-5e70fd9d1800?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Cypherock cySync",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/7fd5a23a-3a01-4cfb-3c8b-9f43ae414400?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "CVL Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/e4eff15a-35d5-49fe-047f-33e331f46400?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Cypher Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/7bce0965-a4cc-4aad-6217-009d51017500?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Status",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/e131fa98-8c4f-4680-f5b6-6fb77189c900?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Enjin Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/add9626b-a5fa-4c12-178c-e5584e6dcd00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Essentials",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/058878f4-7364-4e01-434f-2cc09a15cf00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Everspace",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/80eaa630-6392-4b0a-a604-0a0f808e4d00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "BlockWallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/ef825629-9828-4a5a-b376-62ab4ee81f00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Kriptomat",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/774110aa-70f6-4d0c-210f-ab434838fa00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Oxalus Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/a6e22fcb-6b69-45d2-b52d-a4a347a21e00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Theta Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/d4afb810-5925-4f00-4ebb-d180fcf29000?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Dawn Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/dcb4a287-a6f5-4e81-cbab-2d0eb27b2f00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Rabby",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/255e6ba2-8dfd-43ad-e88e-57cbb98f6800?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Leap Cosmos Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/73e6b2b2-8c02-42e9-84f5-82a859978200?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "ISLAMIwallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/8d723c78-28ad-4610-901f-ea391d7e8d00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "UPBOND Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/698e08f3-b452-4c91-9f65-299939396a00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "VIVE Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/5ef7e40e-1f02-4da2-54bf-992e3e83e100?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Wirex Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/769739aa-ff45-4db5-c6e6-70590741ec00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "BCERTin wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/e321346d-5ce7-4e75-371e-e4f0bf923900?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Monarch Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/c664d955-8a1e-4460-3917-4cfcf198f000?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "FILWallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/f400f6c2-ca6c-487b-654d-e119af247500?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Valora",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/a03bfa44-ce98-4883-9b2a-75e2b68f5700?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "CoinCircle",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/eae63a23-c7ba-4f7e-24b3-e6fc69215d00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "MyWalliD",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/e6cff623-9671-4a39-acc7-1c2292d7e100?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "BRISE Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/09a4e1d9-e4de-44fa-f248-5495ba9ab300?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Snowball",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/313faea4-af8c-41f4-0ed8-98be5d048e00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "GameStop Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/c12536e0-dff1-4a1a-6c8f-c7247d6aa200?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "ParaSwap Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/73dc6b30-b644-46e6-020c-5926851df600?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Ballet Crypto",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/542094e6-70d6-4b0d-4c8f-b61cc2c38500?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "UvToken",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/a0057241-cd91-4a53-7175-016b76bfd900?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "RealT Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/bf1f251b-08a5-4b27-ae4a-201a5f698900?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "SahalWallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/d29d6426-b6f2-481b-12d8-7b20ec82af00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "ApolloX",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/80ab63a2-1b32-4140-3577-9fbc8ea82e00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Enno Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/ae4f5167-0b61-43bd-7d76-1f8579271000?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Nitrogen Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/af185895-cda5-4eaf-e31b-28b6fe4b0800?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Loopring Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/2103feda-4fc8-4635-76a7-02a4ed998000?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "A4 Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/7a788c03-daf7-4d93-fa3a-f94e2b719900?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "BeeWallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/8f86199e-5142-4314-91b8-c23a59e9dc00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Dohrnii Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/1bb51ed9-68ed-4012-3082-72dcb7754300?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "LocalTrade Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/fcc60983-74ae-484a-4242-87cb6f05f100?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Xcapit",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/17f59b75-21b0-4b3f-b024-fe4b9b8d2300?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "BCVault",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/56995d82-a980-4dfc-2611-0f91d88c5700?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Safematrix",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/48ea5de9-869a-4994-2402-97afba060900?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Neon Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/322bd6f0-09b5-4595-cb15-0dfab8054800?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Absolute Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/03797059-fc49-4adc-7b93-503290b62300?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Locker Token",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/37401d35-3fa1-451c-802d-604940315800?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Sequence Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/b2d5c39c-a485-4efa-5736-a782204e4a00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Linen",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/aff3e4e1-92a9-4066-f48f-3591947cf200?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Nabox",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/3b75e9f7-2ca8-4a33-ed2b-4e8a0c048d00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Marble",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/eb6de921-6824-4f35-6331-8a8b031e7100?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Spatium",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/51867bee-2963-4071-d67a-1fdcaa451f00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Cryptnox Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/2947b7c8-8966-4485-a98d-25fe43c16700?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Ownbit",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/19923b08-7208-4539-9c2d-c43db22bce00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "ID Pocket",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/c227ee0a-5127-4707-ded9-c3cd81348d00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Assure",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/64db7104-c8b7-44ea-e102-11ce87124200?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Flooz",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/0a04f368-4f56-4c12-0bfa-93b14bb20800?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "ATON",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/2e85f1d1-f498-4cae-bb54-1d40614ee300?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Keplr",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/527324b0-3849-462b-9a1a-72b53bdfea00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Brave Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/8cecad66-73e3-46ee-f45f-01503c032f00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Crossmint",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/8ad627ec-cbcd-4878-ec5c-3df588055200?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Gryfyn",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/51bb1507-45a1-4d21-15f2-1cc2ebe69400?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "pier",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/cf3f0da1-40ec-4940-aebe-df075513d100?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Core",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/35f9c46e-cc57-4aa7-315d-e6ccb2a1d600?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Taho",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/13416950-f73f-4a4c-2f22-d494ed5df800?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Torus",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/1caa462e-dcf5-4c56-d180-094c81444f00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Frame",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/29b4f569-c1e8-4144-132e-629bf5290f00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Keeper",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/41f6ac85-8f4e-4d9f-b37b-92b43fa7f400?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Uniblow",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/3aa86daa-b885-4686-c443-83355e1b3b00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "D'CENT Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/c68b81d1-a400-4a07-6d9d-28edda986d00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Paper",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/37d7a10f-d94d-4a56-c30e-267e8afbd500?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Klever Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/8f5bbad8-6a14-4b2c-5343-cc1fca6e4d00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Edge Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/f601bc29-4298-422f-dbf7-34dac2884f00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "NeftiWallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/1f812dec-be3d-446c-52f7-a79eb0dd5400?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "GoldBit",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/11974ef1-21ab-4806-a2b1-362c31499900?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Coingrig",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/18e38e41-a387-4402-ca31-6d2d5eb91100?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "XFUN Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/a665f8f3-09ef-4d17-2bd0-26dca4518400?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "RiceWallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/df94578e-19be-4f00-258f-2470343e7b00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Ancrypto Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/d4382329-e288-4d7a-0ac8-3eb0facfb900?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Okse Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/8a1b36d5-7f40-403a-7000-5d30f9181200?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Aktionariat",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/6d18e8ea-b536-4038-c5bf-94a499d5a400?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "iToken Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/5cd60c34-038d-470c-c024-d58f64260200?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Zelus",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/aeba2105-6c84-4642-f441-b3f5817ac400?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Talk+",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/d24cdd56-6f55-42da-631b-c25974c36f00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Card Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/325428cf-c212-4d83-a434-7f48902d2c00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "PayBolt",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/cc8f4e0c-56a8-465a-6cb6-3e9d60846500?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Arianee Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/ace938a9-c906-4b9e-f683-b85f1ab72800?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Slavi Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/282ce060-0beb-4236-b7b0-1b34cc6c8f00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Plasma Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/c268e78d-ffb0-4c8b-5cad-04c3add48500?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "ioPay",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/18891f5a-fd0f-4126-7d1a-452be6714700?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Defiant",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/11a96ca4-3592-42ae-c781-2b7265ec9200?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "StrikeX Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/cae46de2-b432-4002-8bc8-1f0e7380b200?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Avacus",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/a7106965-91cc-4a73-4688-c5c72ae0ed00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "ByteBank",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/bc7aacd6-b2e2-4146-7d21-06e0c5d44f00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "CoolWallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/f581365d-e844-4d21-8e35-44a755a32d00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Opto Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/3df102e4-e435-49dd-d4b1-5ea74ebed500?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "TK Finance",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/c4066f68-2247-49bf-ac8a-a677bfa81800?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Bee Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/f90bc33f-f085-40cf-7538-fae5ae84f900?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Pitaka",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/691c0716-5213-4b99-e837-079268313800?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "MDAO Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/82014e92-838b-4e75-e77e-76cdc5539d00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "PLTwallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/a5d9dd15-8cef-42de-8bed-09e01a8b0200?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "helix id",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/4083ef71-8389-4682-ded6-0099236d2e00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "AirGap Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/76bfe8cd-cf3f-4341-c33c-60da01065000?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Qubic Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/535c91a5-a43c-4104-233c-439449ffcd00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Haven Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/b41fc3f2-a874-45ae-4d4f-cdf47da89500?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Holdstation Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/e6dba126-85af-4194-84f6-dd16632c3c00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Earth Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/d3f724c4-f99b-476f-10f8-12aa4af13800?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "MetaOne",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/b869d966-4699-44de-eadb-4eb39a580600?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "3S Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/f3b6a89d-ec8f-49dc-e07f-6bf723e1e500?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "SimpleHold",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/a9f1ba96-b658-4d13-f71f-226b6389f000?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Payperless",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/4a867e30-44c9-4627-6281-33457b8e2100?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Minerva Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/b57b2163-1bd8-4f6b-3311-470767e6d200?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Volt: DeFi",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/51d783cb-0686-4ffa-e661-edca0c380000?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Lif3 Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/1a89c0ec-9059-4515-afb6-8204d49f0900?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Shinobi-Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/685c986c-3e80-4701-cec6-cd247ba1a700?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "KryptoGO Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/3ccbd966-97e8-45a0-1ceb-6141a8978e00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Autonomy: Digital Art Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/126a7683-2349-45c6-ed19-0e27a645c000?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Bifrost Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/86be07e2-6652-4fd1-5f33-651682c95400?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Nufinetes",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/4bb6c1ca-4196-4ba3-ece2-c3d335e1f800?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Wallet 3",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/34ab7558-9e64-4436-f4e6-9069f2533d00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Abra Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/2219db01-e0c9-471c-5def-fd3b4e7a7a00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "iMe",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/25aa3abf-901b-4d82-bb89-c5ade54c0c00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "PREMA Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/6487869b-1165-4f30-aa3a-115665be8300?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "OneKey",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/12bebb3f-8030-4892-8452-c60a6bac1500?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Slingshot Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/10c75467-6612-48ad-b97b-63985e922200?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Kriptonio",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/363fae03-882a-4d81-a721-6e6f6e9ac500?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Timeless Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/32e89601-0490-42fc-0cc4-8627d62a2000?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Venly",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/d8c846d0-5164-4520-d10f-e1c27d69ce00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Phantom",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/c38443bb-b3c1-4697-e569-408de3fcc100?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Coinbase Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/a5ebc364-8f91-4200-fcc6-be81310a0000?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Bitski",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/94d94cb5-a94f-47cf-70e6-fe8d3f1c3700?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "MPCWallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/636ff7d4-79ce-41d6-ede5-85c9f8a1d900?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "XDEFI Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/efec6318-7f96-4b30-9287-6c287660cd00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "TREASURE",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/6b5d45f6-117c-44a0-d7b0-71c28864a100?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Streakk Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/45ec6eb9-d7fe-4b9b-6dbf-cc675c5d1d00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Sender",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/6fb46282-3d15-4c8a-41ae-0d52115e3f00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "SaitaPro",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/65bdc812-5692-441f-abcb-a389b754a700?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Lilico",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/70c0bc88-7bb1-4c1f-3531-9a5f799fb100?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Hippo Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/f9570968-45f7-47c1-3189-98cf60e25c00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Cosmostation",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/ea26c3c8-adb6-4dc4-ee02-35d6eee02800?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Bitizen",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/75dd1471-77e9-4811-ce57-ec8fc980ec00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Blocto",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/374258d3-c749-4f37-7815-77e61f798c00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "HUMBL WALLET",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/1ac55ba2-aa98-4ed0-59b3-b3155dea4200?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "SafeMoon",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/ea0140c7-787c-43a4-838f-d5ab6a342000?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "PassPay Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/a1c337f5-c156-4ce8-763b-b4cc65f1c200?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Ultimate",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/1ed9823d-64dd-4ab6-2f3f-22c8ff228f00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "MeWallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/e9666b15-4296-4384-3661-7e99a5f2a900?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "THORWallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/45165bea-fdae-454e-7caa-31681f255200?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Fizz",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/f9d4db84-2e9f-4fbe-684f-c1e921c98800?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "PiEthereum Hardware",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/310a5036-3c8f-4bfc-0510-cba61d7d5100?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Reunit",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/98ed357f-1e2d-4679-0e78-1100f7594000?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Arianee Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/13b7fe36-909a-4c83-4f06-5740829a3900?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Tholos",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/f0f306e6-2dba-4805-e7b9-4f25952e2900?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Stickey Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/12aab9fb-f3d4-4248-10e0-4eda17a5de00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Klip",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/f7b6b2a6-ebe7-4779-6ad1-79a3142e6b00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "CoinStats",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/b2a00908-f144-4a49-cc0a-9d7422ad5e00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "LikerLand App",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/501fa316-f0df-4a1b-ead6-5523251b7100?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Krystal",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/d2b59965-4eb8-4828-d3d4-fbc0b3379e00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "KeepKey Desktop",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/eb4227d9-366c-466c-db8f-ab7e45985500?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Pillar",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/87737170-f79f-4359-338b-7c30856c9f00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "HARTi Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/d0407f26-fe0b-4f3c-43c3-69bc8fef2e00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Stasis Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/d83223cf-f29a-4757-a21e-8913b12f9f00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Nova Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/4f159b10-419b-483a-f2bf-da3d17855e00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "meta-WONDER-verse",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/5cc6d96d-178d-42a6-cba1-ebd9d9415700?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "DTTD",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/4a1da9d0-1a81-4e51-4758-b2157f4e6000?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "FoxWallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/d994a61e-c1df-49cb-cf4c-10ec51338400?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "HAQQ Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/99fe539d-6a2a-4f52-2211-42fd04a9f300?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "tomiPAY",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/bf8bd7b8-b638-40f6-1caa-1d7678bb1900?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "StrikeX Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/eb2b6db5-1086-4739-a422-4a4bf3a44300?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Nash",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/93a15cd2-8f0d-4bf6-1545-6bdf745c2300?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Bybit Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/b9e64f74-0176-44fd-c603-673a45ed5b00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "SubWallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/03f5c08c-fb30-46a0-ca5c-d8fdd7250b00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Okto",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/154c69b7-9bb1-4010-5b4c-6b37eeda8900?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Catecoin Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/d017bc54-db4d-4f07-2de2-69790ce92400?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "UKISS Hub",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/23f4c933-68e6-46f9-75b6-2d2905ca1300?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Tellaw Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/c1cb03f5-e1c2-4c3e-86e1-9a90565ea300?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Tangem Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/80679c6f-bb0b-43d0-83e0-462ac268b600?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Callback",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/9f50c7a7-2384-4efe-89c3-01e0fec2b700?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "SA ASSISTANT",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/7954b508-9ff0-4416-9aba-16209b571000?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Xellar",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/89cf9926-00bf-4152-d98f-cac53d7cad00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Talken Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/3c49e8e7-a4d8-4810-23ef-0a0102cce100?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "U2U Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/03bca3fc-c191-4877-592d-0b0d6557c900?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Shido Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/dd5c7007-4572-41c7-a9b8-b97d071adb00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "OzoneWallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/4eb57479-515a-463a-9fcb-c20e9cc60c00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Tidus Wallet ",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/797bd108-d862-4d1b-d339-883de9a75000?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Impact Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/afc85418-2ca6-46cf-cfb9-daf6bc43e400?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Wirex Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/66b40d9b-7314-42dd-cacf-4e324b0c2000?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Zelcore",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/1b9e652e-1667-425a-f828-707bf9b05400?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "DOSI Vault",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/0a0d223e-6bf7-4e12-a5b4-1720deb02000?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "WOW EARN",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/1985a753-7fd8-4d75-4c50-7998ea68a800?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "ELLIPAL",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/0a5b45a1-c974-4f41-6c14-376714478c00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Unstoppable Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/a63cbfce-0726-4f94-9187-a761afb94400?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Aurora Pass",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/6d93eeba-edce-431c-4293-e25784e61f00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Bitverse",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/5851c585-0f2b-41a1-a36a-221a18af5200?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Konio",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/028c7760-a1af-43ea-7ac7-8b811712b700?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Gate.io",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/6e528abf-7a7d-47bd-d84d-481f169b1200?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "UTORG",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/39c77c0b-d6ea-419d-92b7-513a5eac2c00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "CoinWallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/1c0cd352-ce8e-4bcc-f91d-8763eab60b00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "AmmerWallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/7d38dd8e-92ee-44bf-1ca4-818531de1900?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Binance.US",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/48aa1a7d-c5fe-4ad6-c2f2-e5684b296900?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "SISTEMAS",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/eda865c8-746b-4536-9d57-7d7de0555400?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "MUZA",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/9934307c-0a39-4c60-7fd0-4cb9297f3900?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "FxWallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/46a80541-e639-483d-e230-731fcbf13000?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "RYIPAY",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/bb6e9045-24db-428a-7661-5b3365cc2800?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Ronin Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/dff7f251-5116-460b-54f7-b14c5343b800?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Sequel Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/0c89b2e4-a0cc-4bfc-e3f5-398f4711af00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "MetaWallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/a18337ad-433f-47c0-ea57-8a6199835e00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Altme",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/7eeac6e8-6852-4d09-8579-e229fd6b9a00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Unido",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/c22450a3-b4a7-4e86-8855-f5b88d983100?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Bitpie",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/e6dce4ec-a1a8-49e6-d8e1-8329fdd5c700?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "MOONSTAKE",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/22374fae-244c-4224-2e3d-c14912f98a00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "IndiGG",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/8e90a32f-130d-4317-7294-4884510aa300?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Yuse Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/2cd61458-59c2-4208-c8ee-98b5e0076b00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Coininn Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/52efd5a7-65fa-428d-668c-f53ceb4b5f00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Safe App Syscoin",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/0b6b29ca-10a4-44cc-a51e-baa4b49fc300?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "f(x)Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/bdd2f39b-98fa-485d-b180-bf4a42fa6100?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "pockie",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/a761beae-1e7e-4402-bcc5-a896a92bfb00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "AmazeWallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/38495eb4-efcf-47cb-be73-a695510f9f00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "atato custody",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/53878398-b6da-4384-47dc-bc744acd5b00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Pali Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/4672cbde-0f96-42f3-84a0-524e9ad70a00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Nunu",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/a4a42e1d-b43d-4fa1-b8b3-daf4e6b61c00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "NuFi",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/65e07e9f-183a-4f6c-6ca5-4964eda1ef00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "EASY",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/62feb41a-be1f-4b1c-e089-27f97c0e8d00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Solace",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/4bb93c92-f20b-41d7-97c7-d0e74100bd00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Meter Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/05700788-1b9d-4670-dabd-61fa9b90f900?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "SuperWallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/a7ce7b31-5439-4a99-06f9-aa62f3ae4e00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
// ]

// evm_wallet.map((wallets) => {
// return evm_wallets = `{title:"${wallets.title}",href:"docs/hack(evm-wallets)/${wallets.title}",description:"Not Provided(coming soon)",logo:"${wallets.logo}",items:[]},`;

// })

let evm_wallets = []
let solana_wallets = []
let cosmos_wallets = []

const evm_wallet = [
  {
    title: "MetaMask",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/5195e9db-94d8-4579-6f11-ef553be95100?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Trust Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/0528ee7e-16d1-4089-21e3-bbfb41933100?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Safe",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/3913df81-63c2-4413-d60b-8ff83cbed500?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Rainbow",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/7a33d7f1-3d12-4b5c-f3ee-5cd83cb1b500?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Uniswap Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/bff9cf1f-df19-42ce-f62a-87f04df13c00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Zerion",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/73f6f52f-7862-49e7-bb85-ba93ab72cc00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "imToken",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/99520548-525c-49d7-fb2f-5db65293b000?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Argent",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/215158d2-614b-49c9-410f-77aa661c3900?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Spot",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/1bf33a89-b049-4a1c-d1f6-4dd7419ee400?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Omni",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/2cd67b4c-282b-4809-e7c0-a88cd5116f00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Crypto.com | DeFi Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/7c5ff577-a68d-49c5-02cd-3d83637b0b00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "OKX Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/45f2f08e-fc0c-4d62-3e63-404e72170500?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "TokenPocket",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/f3119826-4ef5-4d31-4789-d4ae5c18e400?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Robinhood Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/dfe0e3e3-5746-4e2b-12ad-704608531500?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Frontier",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/a78c4d48-32c1-4a9d-52f2-ec7ee08ce200?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Blockchain.com",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/6f913b80-86c0-46f9-61ca-cc90a1805900?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "SafePal",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/252753e7-b783-4e03-7f77-d39864530900?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "BitKeep",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/3f7075d0-4ab7-4db5-404d-3e4c05e6fe00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Zengo Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/6133c399-ae32-4eba-0c5a-0fb84492bf00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "1inch Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/52b1da3c-9e72-40ae-5dac-6142addd9c00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Binance DeFi Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/ebac7b39-688c-41e3-7912-a4fefba74600?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Exodus",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/4c16cad4-cac9-4643-6726-c696efaf5200?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Ledger Live",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/a7f416de-aa03-4c5e-3280-ab49269aef00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "MEW wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/e2024511-2c9b-46d7-3111-52df3d241700?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "AlphaWallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/5b1cddfb-056e-4e78-029a-54de5d70c500?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "KEYRING PRO",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/dda0f0fb-34e8-4a57-dcea-b008e7d1ff00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "LOBSTR Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/0dafcaab-0852-47f7-85dd-436b86491d00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "ONTO",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/d22b2a4b-5562-49ba-506b-6d5986914600?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "MathWallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/26a8f588-3231-4411-60ce-5bb6b805a700?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Obvious",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/fe1b9394-55af-4828-a70d-5c5b7de6b200?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Fireblocks",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/7e1514ba-932d-415d-1bdb-bccb6c2cbc00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Ambire Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/c39b3a16-1a38-4588-f089-cb7aeb584700?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Infinity Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/9f259366-0bcd-4817-0af9-f78773e41900?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Bridge Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/20c3072e-c92e-4902-d4b9-cb2b6ab29100?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Internet Money Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/204b2240-5ce4-4996-6ec4-f06a22726900?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "NOW Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/b6ee4efc-f53e-475b-927b-a7ded6211700?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Bitcoin.com Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/0d7938e1-9b3b-4d8b-177b-98188c4cf400?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "αU wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/58a5b183-4d44-4cdd-22da-e89f49fa4c00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Coin98 Super App",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/fc460647-ea95-447a-99f0-1bff8fa4be00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "ABC Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/f9854c79-14ba-4987-42e1-4a82abbf5700?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Ottr Finance",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/7025146c-c341-473f-a79c-62ec48eef800?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Arculus Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/f78dab27-7165-4a3d-fdb1-fcff06c0a700?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Opera Crypto Browser",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/877fa1a4-304d-4d45-ca8e-f76d1a556f00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Cobalt Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/29d914e5-9daa-4342-33cd-169155c5a600?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Chain",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/f9f3d8da-e791-47d2-98c2-031712617e00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Huddln",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/7ba1571c-10c4-4284-b438-04dac27cb700?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Verso",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/109d7c90-86ed-4ee0-e17d-3c87624ddf00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Jade Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/280cd57b-24f4-4700-8d53-94fe292fab00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "HaHa",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/79285c9f-2630-451e-0680-c71b42fb7400?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Modular Wallet Prod",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/70485da2-2568-463d-722c-25082997cc00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Kelp",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/02d9143d-deed-4336-0cae-f4b8b1091f00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Numio",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/416ee463-6699-43f7-c0e3-396f0ad3d300?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Cling Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/2d8006c3-852b-458a-d6b0-916c5ba76800?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Broearn Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/b3c2c77c-a8cf-46e1-095a-77f0a3891500?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Coinomi",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/3b446d16-a908-40c8-5835-9a6efe90dd00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Ripio Portal",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/fd56c695-ce58-4df5-1625-767571c80700?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Sabay Wallet App",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/c4df7014-abaf-4016-8180-fb994804b400?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Tokoin | My-T Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/88a2518c-16c2-4ee3-4699-1a1c6903bc00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Impersonator",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/b072a0c6-1bc2-4a80-6f05-50a4ebbf0700?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Fncy Mobile Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/c1c8d374-dff3-419c-96af-3515d0192100?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Copiosa",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/cae1be94-9f53-4eba-b915-f6e381d5a500?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Imota ",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/c81f5bbf-ce66-42bd-3436-f1baaaa18b00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Libera",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/9485d17f-c413-47fe-ebee-a876a9dc9100?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Certhis",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/fbd441cc-e861-46dc-48ae-a04228ddb500?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Burrito Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/7eec7187-3f48-4fda-53bb-b0ad55749a00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Ancrypto",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/8dee1c33-b277-4a5a-5ddd-5e70fd9d1800?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Cypherock cySync",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/7fd5a23a-3a01-4cfb-3c8b-9f43ae414400?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "CVL Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/e4eff15a-35d5-49fe-047f-33e331f46400?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Cypher Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/7bce0965-a4cc-4aad-6217-009d51017500?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Status",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/e131fa98-8c4f-4680-f5b6-6fb77189c900?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Enjin Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/add9626b-a5fa-4c12-178c-e5584e6dcd00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Essentials",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/058878f4-7364-4e01-434f-2cc09a15cf00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Everspace",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/80eaa630-6392-4b0a-a604-0a0f808e4d00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "BlockWallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/ef825629-9828-4a5a-b376-62ab4ee81f00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Kriptomat",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/774110aa-70f6-4d0c-210f-ab434838fa00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Oxalus Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/a6e22fcb-6b69-45d2-b52d-a4a347a21e00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Theta Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/d4afb810-5925-4f00-4ebb-d180fcf29000?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Dawn Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/dcb4a287-a6f5-4e81-cbab-2d0eb27b2f00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Rabby",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/255e6ba2-8dfd-43ad-e88e-57cbb98f6800?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Leap Cosmos Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/73e6b2b2-8c02-42e9-84f5-82a859978200?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "ISLAMIwallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/8d723c78-28ad-4610-901f-ea391d7e8d00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "UPBOND Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/698e08f3-b452-4c91-9f65-299939396a00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "VIVE Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/5ef7e40e-1f02-4da2-54bf-992e3e83e100?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Wirex Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/769739aa-ff45-4db5-c6e6-70590741ec00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "BCERTin wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/e321346d-5ce7-4e75-371e-e4f0bf923900?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Monarch Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/c664d955-8a1e-4460-3917-4cfcf198f000?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "FILWallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/f400f6c2-ca6c-487b-654d-e119af247500?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Valora",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/a03bfa44-ce98-4883-9b2a-75e2b68f5700?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "CoinCircle",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/eae63a23-c7ba-4f7e-24b3-e6fc69215d00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "MyWalliD",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/e6cff623-9671-4a39-acc7-1c2292d7e100?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "BRISE Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/09a4e1d9-e4de-44fa-f248-5495ba9ab300?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Snowball",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/313faea4-af8c-41f4-0ed8-98be5d048e00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "GameStop Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/c12536e0-dff1-4a1a-6c8f-c7247d6aa200?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "ParaSwap Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/73dc6b30-b644-46e6-020c-5926851df600?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Ballet Crypto",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/542094e6-70d6-4b0d-4c8f-b61cc2c38500?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "UvToken",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/a0057241-cd91-4a53-7175-016b76bfd900?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "RealT Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/bf1f251b-08a5-4b27-ae4a-201a5f698900?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "SahalWallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/d29d6426-b6f2-481b-12d8-7b20ec82af00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "ApolloX",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/80ab63a2-1b32-4140-3577-9fbc8ea82e00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Enno Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/ae4f5167-0b61-43bd-7d76-1f8579271000?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Nitrogen Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/af185895-cda5-4eaf-e31b-28b6fe4b0800?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Loopring Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/2103feda-4fc8-4635-76a7-02a4ed998000?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "A4 Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/7a788c03-daf7-4d93-fa3a-f94e2b719900?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "BeeWallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/8f86199e-5142-4314-91b8-c23a59e9dc00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Dohrnii Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/1bb51ed9-68ed-4012-3082-72dcb7754300?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "LocalTrade Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/fcc60983-74ae-484a-4242-87cb6f05f100?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Xcapit",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/17f59b75-21b0-4b3f-b024-fe4b9b8d2300?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "BCVault",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/56995d82-a980-4dfc-2611-0f91d88c5700?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Safematrix",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/48ea5de9-869a-4994-2402-97afba060900?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Neon Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/322bd6f0-09b5-4595-cb15-0dfab8054800?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Absolute Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/03797059-fc49-4adc-7b93-503290b62300?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Locker Token",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/37401d35-3fa1-451c-802d-604940315800?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Sequence Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/b2d5c39c-a485-4efa-5736-a782204e4a00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Linen",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/aff3e4e1-92a9-4066-f48f-3591947cf200?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Nabox",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/3b75e9f7-2ca8-4a33-ed2b-4e8a0c048d00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Marble",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/eb6de921-6824-4f35-6331-8a8b031e7100?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Spatium",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/51867bee-2963-4071-d67a-1fdcaa451f00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Cryptnox Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/2947b7c8-8966-4485-a98d-25fe43c16700?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Ownbit",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/19923b08-7208-4539-9c2d-c43db22bce00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "ID Pocket",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/c227ee0a-5127-4707-ded9-c3cd81348d00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Assure",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/64db7104-c8b7-44ea-e102-11ce87124200?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Flooz",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/0a04f368-4f56-4c12-0bfa-93b14bb20800?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "ATON",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/2e85f1d1-f498-4cae-bb54-1d40614ee300?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Keplr",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/527324b0-3849-462b-9a1a-72b53bdfea00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Brave Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/8cecad66-73e3-46ee-f45f-01503c032f00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Crossmint",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/8ad627ec-cbcd-4878-ec5c-3df588055200?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Gryfyn",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/51bb1507-45a1-4d21-15f2-1cc2ebe69400?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "pier",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/cf3f0da1-40ec-4940-aebe-df075513d100?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Core",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/35f9c46e-cc57-4aa7-315d-e6ccb2a1d600?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Taho",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/13416950-f73f-4a4c-2f22-d494ed5df800?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Torus",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/1caa462e-dcf5-4c56-d180-094c81444f00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Frame",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/29b4f569-c1e8-4144-132e-629bf5290f00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Keeper",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/41f6ac85-8f4e-4d9f-b37b-92b43fa7f400?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Uniblow",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/3aa86daa-b885-4686-c443-83355e1b3b00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "D'CENT Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/c68b81d1-a400-4a07-6d9d-28edda986d00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Paper",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/37d7a10f-d94d-4a56-c30e-267e8afbd500?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Klever Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/8f5bbad8-6a14-4b2c-5343-cc1fca6e4d00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Edge Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/f601bc29-4298-422f-dbf7-34dac2884f00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "NeftiWallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/1f812dec-be3d-446c-52f7-a79eb0dd5400?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "GoldBit",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/11974ef1-21ab-4806-a2b1-362c31499900?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Coingrig",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/18e38e41-a387-4402-ca31-6d2d5eb91100?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "XFUN Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/a665f8f3-09ef-4d17-2bd0-26dca4518400?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "RiceWallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/df94578e-19be-4f00-258f-2470343e7b00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Ancrypto Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/d4382329-e288-4d7a-0ac8-3eb0facfb900?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Okse Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/8a1b36d5-7f40-403a-7000-5d30f9181200?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Aktionariat",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/6d18e8ea-b536-4038-c5bf-94a499d5a400?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "iToken Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/5cd60c34-038d-470c-c024-d58f64260200?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Zelus",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/aeba2105-6c84-4642-f441-b3f5817ac400?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Talk+",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/d24cdd56-6f55-42da-631b-c25974c36f00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Card Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/325428cf-c212-4d83-a434-7f48902d2c00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "PayBolt",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/cc8f4e0c-56a8-465a-6cb6-3e9d60846500?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Arianee Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/ace938a9-c906-4b9e-f683-b85f1ab72800?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Slavi Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/282ce060-0beb-4236-b7b0-1b34cc6c8f00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Plasma Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/c268e78d-ffb0-4c8b-5cad-04c3add48500?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "ioPay",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/18891f5a-fd0f-4126-7d1a-452be6714700?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Defiant",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/11a96ca4-3592-42ae-c781-2b7265ec9200?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "StrikeX Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/cae46de2-b432-4002-8bc8-1f0e7380b200?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Avacus",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/a7106965-91cc-4a73-4688-c5c72ae0ed00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "ByteBank",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/bc7aacd6-b2e2-4146-7d21-06e0c5d44f00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "CoolWallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/f581365d-e844-4d21-8e35-44a755a32d00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Opto Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/3df102e4-e435-49dd-d4b1-5ea74ebed500?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "TK Finance",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/c4066f68-2247-49bf-ac8a-a677bfa81800?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Bee Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/f90bc33f-f085-40cf-7538-fae5ae84f900?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Pitaka",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/691c0716-5213-4b99-e837-079268313800?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "MDAO Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/82014e92-838b-4e75-e77e-76cdc5539d00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "PLTwallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/a5d9dd15-8cef-42de-8bed-09e01a8b0200?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "helix id",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/4083ef71-8389-4682-ded6-0099236d2e00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "AirGap Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/76bfe8cd-cf3f-4341-c33c-60da01065000?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Qubic Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/535c91a5-a43c-4104-233c-439449ffcd00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Haven Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/b41fc3f2-a874-45ae-4d4f-cdf47da89500?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Holdstation Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/e6dba126-85af-4194-84f6-dd16632c3c00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Earth Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/d3f724c4-f99b-476f-10f8-12aa4af13800?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "MetaOne",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/b869d966-4699-44de-eadb-4eb39a580600?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "3S Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/f3b6a89d-ec8f-49dc-e07f-6bf723e1e500?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "SimpleHold",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/a9f1ba96-b658-4d13-f71f-226b6389f000?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Payperless",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/4a867e30-44c9-4627-6281-33457b8e2100?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Minerva Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/b57b2163-1bd8-4f6b-3311-470767e6d200?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Volt: DeFi",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/51d783cb-0686-4ffa-e661-edca0c380000?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Lif3 Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/1a89c0ec-9059-4515-afb6-8204d49f0900?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Shinobi-Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/685c986c-3e80-4701-cec6-cd247ba1a700?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "KryptoGO Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/3ccbd966-97e8-45a0-1ceb-6141a8978e00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Autonomy: Digital Art Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/126a7683-2349-45c6-ed19-0e27a645c000?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Bifrost Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/86be07e2-6652-4fd1-5f33-651682c95400?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Nufinetes",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/4bb6c1ca-4196-4ba3-ece2-c3d335e1f800?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Wallet 3",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/34ab7558-9e64-4436-f4e6-9069f2533d00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Abra Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/2219db01-e0c9-471c-5def-fd3b4e7a7a00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "iMe",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/25aa3abf-901b-4d82-bb89-c5ade54c0c00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "PREMA Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/6487869b-1165-4f30-aa3a-115665be8300?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "OneKey",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/12bebb3f-8030-4892-8452-c60a6bac1500?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Slingshot Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/10c75467-6612-48ad-b97b-63985e922200?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Kriptonio",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/363fae03-882a-4d81-a721-6e6f6e9ac500?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Timeless Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/32e89601-0490-42fc-0cc4-8627d62a2000?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Venly",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/d8c846d0-5164-4520-d10f-e1c27d69ce00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Phantom",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/c38443bb-b3c1-4697-e569-408de3fcc100?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Coinbase Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/a5ebc364-8f91-4200-fcc6-be81310a0000?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Bitski",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/94d94cb5-a94f-47cf-70e6-fe8d3f1c3700?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "MPCWallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/636ff7d4-79ce-41d6-ede5-85c9f8a1d900?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "XDEFI Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/efec6318-7f96-4b30-9287-6c287660cd00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "TREASURE",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/6b5d45f6-117c-44a0-d7b0-71c28864a100?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Streakk Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/45ec6eb9-d7fe-4b9b-6dbf-cc675c5d1d00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Sender",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/6fb46282-3d15-4c8a-41ae-0d52115e3f00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "SaitaPro",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/65bdc812-5692-441f-abcb-a389b754a700?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Lilico",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/70c0bc88-7bb1-4c1f-3531-9a5f799fb100?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Hippo Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/f9570968-45f7-47c1-3189-98cf60e25c00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Cosmostation",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/ea26c3c8-adb6-4dc4-ee02-35d6eee02800?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Bitizen",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/75dd1471-77e9-4811-ce57-ec8fc980ec00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Blocto",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/374258d3-c749-4f37-7815-77e61f798c00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "HUMBL WALLET",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/1ac55ba2-aa98-4ed0-59b3-b3155dea4200?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "SafeMoon",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/ea0140c7-787c-43a4-838f-d5ab6a342000?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "PassPay Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/a1c337f5-c156-4ce8-763b-b4cc65f1c200?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Ultimate",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/1ed9823d-64dd-4ab6-2f3f-22c8ff228f00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "MeWallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/e9666b15-4296-4384-3661-7e99a5f2a900?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "THORWallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/45165bea-fdae-454e-7caa-31681f255200?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Fizz",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/f9d4db84-2e9f-4fbe-684f-c1e921c98800?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "PiEthereum Hardware",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/310a5036-3c8f-4bfc-0510-cba61d7d5100?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Reunit",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/98ed357f-1e2d-4679-0e78-1100f7594000?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Arianee Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/13b7fe36-909a-4c83-4f06-5740829a3900?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Tholos",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/f0f306e6-2dba-4805-e7b9-4f25952e2900?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Stickey Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/12aab9fb-f3d4-4248-10e0-4eda17a5de00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Klip",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/f7b6b2a6-ebe7-4779-6ad1-79a3142e6b00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "CoinStats",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/b2a00908-f144-4a49-cc0a-9d7422ad5e00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "LikerLand App",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/501fa316-f0df-4a1b-ead6-5523251b7100?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Krystal",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/d2b59965-4eb8-4828-d3d4-fbc0b3379e00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "KeepKey Desktop",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/eb4227d9-366c-466c-db8f-ab7e45985500?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Pillar",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/87737170-f79f-4359-338b-7c30856c9f00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "HARTi Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/d0407f26-fe0b-4f3c-43c3-69bc8fef2e00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Stasis Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/d83223cf-f29a-4757-a21e-8913b12f9f00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Nova Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/4f159b10-419b-483a-f2bf-da3d17855e00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "meta-WONDER-verse",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/5cc6d96d-178d-42a6-cba1-ebd9d9415700?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "DTTD",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/4a1da9d0-1a81-4e51-4758-b2157f4e6000?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "FoxWallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/d994a61e-c1df-49cb-cf4c-10ec51338400?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "HAQQ Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/99fe539d-6a2a-4f52-2211-42fd04a9f300?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "tomiPAY",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/bf8bd7b8-b638-40f6-1caa-1d7678bb1900?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "StrikeX Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/eb2b6db5-1086-4739-a422-4a4bf3a44300?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Nash",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/93a15cd2-8f0d-4bf6-1545-6bdf745c2300?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Bybit Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/b9e64f74-0176-44fd-c603-673a45ed5b00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "SubWallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/03f5c08c-fb30-46a0-ca5c-d8fdd7250b00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Okto",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/154c69b7-9bb1-4010-5b4c-6b37eeda8900?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Catecoin Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/d017bc54-db4d-4f07-2de2-69790ce92400?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "UKISS Hub",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/23f4c933-68e6-46f9-75b6-2d2905ca1300?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Tellaw Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/c1cb03f5-e1c2-4c3e-86e1-9a90565ea300?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Tangem Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/80679c6f-bb0b-43d0-83e0-462ac268b600?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Callback",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/9f50c7a7-2384-4efe-89c3-01e0fec2b700?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "SA ASSISTANT",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/7954b508-9ff0-4416-9aba-16209b571000?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Xellar",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/89cf9926-00bf-4152-d98f-cac53d7cad00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Talken Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/3c49e8e7-a4d8-4810-23ef-0a0102cce100?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "U2U Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/03bca3fc-c191-4877-592d-0b0d6557c900?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Shido Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/dd5c7007-4572-41c7-a9b8-b97d071adb00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "OzoneWallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/4eb57479-515a-463a-9fcb-c20e9cc60c00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Tidus Wallet ",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/797bd108-d862-4d1b-d339-883de9a75000?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Impact Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/afc85418-2ca6-46cf-cfb9-daf6bc43e400?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Wirex Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/66b40d9b-7314-42dd-cacf-4e324b0c2000?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Zelcore",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/1b9e652e-1667-425a-f828-707bf9b05400?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "DOSI Vault",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/0a0d223e-6bf7-4e12-a5b4-1720deb02000?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "WOW EARN",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/1985a753-7fd8-4d75-4c50-7998ea68a800?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "ELLIPAL",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/0a5b45a1-c974-4f41-6c14-376714478c00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Unstoppable Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/a63cbfce-0726-4f94-9187-a761afb94400?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Aurora Pass",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/6d93eeba-edce-431c-4293-e25784e61f00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Bitverse",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/5851c585-0f2b-41a1-a36a-221a18af5200?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Konio",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/028c7760-a1af-43ea-7ac7-8b811712b700?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Gate.io",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/6e528abf-7a7d-47bd-d84d-481f169b1200?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "UTORG",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/39c77c0b-d6ea-419d-92b7-513a5eac2c00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "CoinWallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/1c0cd352-ce8e-4bcc-f91d-8763eab60b00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "AmmerWallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/7d38dd8e-92ee-44bf-1ca4-818531de1900?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Binance.US",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/48aa1a7d-c5fe-4ad6-c2f2-e5684b296900?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "SISTEMAS",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/eda865c8-746b-4536-9d57-7d7de0555400?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "MUZA",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/9934307c-0a39-4c60-7fd0-4cb9297f3900?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "FxWallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/46a80541-e639-483d-e230-731fcbf13000?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "RYIPAY",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/bb6e9045-24db-428a-7661-5b3365cc2800?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Ronin Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/dff7f251-5116-460b-54f7-b14c5343b800?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Sequel Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/0c89b2e4-a0cc-4bfc-e3f5-398f4711af00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "MetaWallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/a18337ad-433f-47c0-ea57-8a6199835e00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Altme",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/7eeac6e8-6852-4d09-8579-e229fd6b9a00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Unido",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/c22450a3-b4a7-4e86-8855-f5b88d983100?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Bitpie",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/e6dce4ec-a1a8-49e6-d8e1-8329fdd5c700?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "MOONSTAKE",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/22374fae-244c-4224-2e3d-c14912f98a00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "IndiGG",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/8e90a32f-130d-4317-7294-4884510aa300?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Yuse Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/2cd61458-59c2-4208-c8ee-98b5e0076b00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Coininn Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/52efd5a7-65fa-428d-668c-f53ceb4b5f00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Safe App Syscoin",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/0b6b29ca-10a4-44cc-a51e-baa4b49fc300?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "f(x)Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/bdd2f39b-98fa-485d-b180-bf4a42fa6100?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "pockie",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/a761beae-1e7e-4402-bcc5-a896a92bfb00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "AmazeWallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/38495eb4-efcf-47cb-be73-a695510f9f00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "atato custody",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/53878398-b6da-4384-47dc-bc744acd5b00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Pali Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/4672cbde-0f96-42f3-84a0-524e9ad70a00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Nunu",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/a4a42e1d-b43d-4fa1-b8b3-daf4e6b61c00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "NuFi",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/65e07e9f-183a-4f6c-6ca5-4964eda1ef00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "EASY",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/62feb41a-be1f-4b1c-e089-27f97c0e8d00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Solace",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/4bb93c92-f20b-41d7-97c7-d0e74100bd00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Meter Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/05700788-1b9d-4670-dabd-61fa9b90f900?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "SuperWallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/a7ce7b31-5439-4a99-06f9-aa62f3ae4e00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
]
// evm_wallet.map((wallets) => {
//   evm_wallets = `{title:"${wallets.title}",href:"docs/hack(evm-wallets)/${wallets.title}",description:"Not Provided(coming soon)",logo:"${wallets.logo}",items:[]},`
//   console.log(evm_wallets)
// })
// for (let i = 0; i < evm_wallet.length; i++) {
//   // evm_wallets = `{title:"${evm_wallet.title}",href:"docs/hack(evm-wallets)/${evm_wallet.title}",description:"Not Provided(coming soon)",logo:"${evm_wallet.logo}",items:[]},`
//   // console.log(evm_wallets)
//   evm_wallet.map((wallets) => {
//     evm_wallets = `{title:"${wallets.title}",href:"docs/hack(evm-wallets)/${wallets.title}",description:"Not Provided(coming soon)",logo:"${wallets.logo}",items:[]},`;
//     console.log(evm_wallets);
//   })
// }
// evm_wallet.map((wallets) => {
//   return (evm_wallets = `{title:"${wallets.title}",href:"docs/hack(evm-wallets)/${wallets.title}",description:"Not Provided(coming soon)",logo:"${wallets.logo}",items:[]},`)
// })

// const evm = [
//   {
//     title: "MetaMask",
//     href: "docs/hack(evm-wallets)/MetaMask",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/5195e9db-94d8-4579-6f11-ef553be95100?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Trust Wallet",
//     href: "docs/hack(evm-wallets)/Trust Wallet",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/0528ee7e-16d1-4089-21e3-bbfb41933100?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Safe",
//     href: "docs/hack(evm-wallets)/Safe",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/3913df81-63c2-4413-d60b-8ff83cbed500?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Rainbow",
//     href: "docs/hack(evm-wallets)/Rainbow",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/7a33d7f1-3d12-4b5c-f3ee-5cd83cb1b500?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Uniswap Wallet",
//     href: "docs/hack(evm-wallets)/Uniswap Wallet",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/bff9cf1f-df19-42ce-f62a-87f04df13c00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Zerion",
//     href: "docs/hack(evm-wallets)/Zerion",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/73f6f52f-7862-49e7-bb85-ba93ab72cc00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "imToken",
//     href: "docs/hack(evm-wallets)/imToken",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/99520548-525c-49d7-fb2f-5db65293b000?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Argent",
//     href: "docs/hack(evm-wallets)/Argent",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/215158d2-614b-49c9-410f-77aa661c3900?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Spot",
//     href: "docs/hack(evm-wallets)/Spot",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/1bf33a89-b049-4a1c-d1f6-4dd7419ee400?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Omni",
//     href: "docs/hack(evm-wallets)/Omni",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/2cd67b4c-282b-4809-e7c0-a88cd5116f00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Crypto.com | DeFi Wallet",
//     href: "docs/hack(evm-wallets)/Crypto.com | DeFi Wallet",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/7c5ff577-a68d-49c5-02cd-3d83637b0b00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "OKX Wallet",
//     href: "docs/hack(evm-wallets)/OKX Wallet",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/45f2f08e-fc0c-4d62-3e63-404e72170500?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "TokenPocket",
//     href: "docs/hack(evm-wallets)/TokenPocket",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/f3119826-4ef5-4d31-4789-d4ae5c18e400?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Robinhood Wallet",
//     href: "docs/hack(evm-wallets)/Robinhood Wallet",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/dfe0e3e3-5746-4e2b-12ad-704608531500?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Frontier",
//     href: "docs/hack(evm-wallets)/Frontier",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/a78c4d48-32c1-4a9d-52f2-ec7ee08ce200?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Blockchain.com",
//     href: "docs/hack(evm-wallets)/Blockchain.com",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/6f913b80-86c0-46f9-61ca-cc90a1805900?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "SafePal",
//     href: "docs/hack(evm-wallets)/SafePal",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/252753e7-b783-4e03-7f77-d39864530900?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "BitKeep",
//     href: "docs/hack(evm-wallets)/BitKeep",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/3f7075d0-4ab7-4db5-404d-3e4c05e6fe00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Zengo Wallet",
//     href: "docs/hack(evm-wallets)/Zengo Wallet",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/6133c399-ae32-4eba-0c5a-0fb84492bf00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "1inch Wallet",
//     href: "docs/hack(evm-wallets)/1inch Wallet",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/52b1da3c-9e72-40ae-5dac-6142addd9c00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Binance DeFi Wallet",
//     href: "docs/hack(evm-wallets)/Binance DeFi Wallet",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/ebac7b39-688c-41e3-7912-a4fefba74600?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Exodus",
//     href: "docs/hack(evm-wallets)/Exodus",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/4c16cad4-cac9-4643-6726-c696efaf5200?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Ledger Live",
//     href: "docs/hack(evm-wallets)/Ledger Live",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/a7f416de-aa03-4c5e-3280-ab49269aef00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "MEW wallet",
//     href: "docs/hack(evm-wallets)/MEW wallet",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/e2024511-2c9b-46d7-3111-52df3d241700?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "AlphaWallet",
//     href: "docs/hack(evm-wallets)/AlphaWallet",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/5b1cddfb-056e-4e78-029a-54de5d70c500?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "KEYRING PRO",
//     href: "docs/hack(evm-wallets)/KEYRING PRO",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/dda0f0fb-34e8-4a57-dcea-b008e7d1ff00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "LOBSTR Wallet",
//     href: "docs/hack(evm-wallets)/LOBSTR Wallet",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/0dafcaab-0852-47f7-85dd-436b86491d00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "ONTO",
//     href: "docs/hack(evm-wallets)/ONTO",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/d22b2a4b-5562-49ba-506b-6d5986914600?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "MathWallet",
//     href: "docs/hack(evm-wallets)/MathWallet",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/26a8f588-3231-4411-60ce-5bb6b805a700?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Obvious",
//     href: "docs/hack(evm-wallets)/Obvious",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/fe1b9394-55af-4828-a70d-5c5b7de6b200?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Fireblocks",
//     href: "docs/hack(evm-wallets)/Fireblocks",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/7e1514ba-932d-415d-1bdb-bccb6c2cbc00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Ambire Wallet",
//     href: "docs/hack(evm-wallets)/Ambire Wallet",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/c39b3a16-1a38-4588-f089-cb7aeb584700?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Infinity Wallet",
//     href: "docs/hack(evm-wallets)/Infinity Wallet",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/9f259366-0bcd-4817-0af9-f78773e41900?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Bridge Wallet",
//     href: "docs/hack(evm-wallets)/Bridge Wallet",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/20c3072e-c92e-4902-d4b9-cb2b6ab29100?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Internet Money Wallet",
//     href: "docs/hack(evm-wallets)/Internet Money Wallet",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/204b2240-5ce4-4996-6ec4-f06a22726900?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "NOW Wallet",
//     href: "docs/hack(evm-wallets)/NOW Wallet",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/b6ee4efc-f53e-475b-927b-a7ded6211700?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Bitcoin.com Wallet",
//     href: "docs/hack(evm-wallets)/Bitcoin.com Wallet",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/0d7938e1-9b3b-4d8b-177b-98188c4cf400?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "αU wallet",
//     href: "docs/hack(evm-wallets)/αU wallet",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/58a5b183-4d44-4cdd-22da-e89f49fa4c00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Coin98 Super App",
//     href: "docs/hack(evm-wallets)/Coin98 Super App",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/fc460647-ea95-447a-99f0-1bff8fa4be00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "ABC Wallet",
//     href: "docs/hack(evm-wallets)/ABC Wallet",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/f9854c79-14ba-4987-42e1-4a82abbf5700?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Ottr Finance",
//     href: "docs/hack(evm-wallets)/Ottr Finance",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/7025146c-c341-473f-a79c-62ec48eef800?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Arculus Wallet",
//     href: "docs/hack(evm-wallets)/Arculus Wallet",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/f78dab27-7165-4a3d-fdb1-fcff06c0a700?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Opera Crypto Browser",
//     href: "docs/hack(evm-wallets)/Opera Crypto Browser",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/877fa1a4-304d-4d45-ca8e-f76d1a556f00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Cobalt Wallet",
//     href: "docs/hack(evm-wallets)/Cobalt Wallet",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/29d914e5-9daa-4342-33cd-169155c5a600?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Chain",
//     href: "docs/hack(evm-wallets)/Chain",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/f9f3d8da-e791-47d2-98c2-031712617e00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Huddln",
//     href: "docs/hack(evm-wallets)/Huddln",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/7ba1571c-10c4-4284-b438-04dac27cb700?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Verso",
//     href: "docs/hack(evm-wallets)/Verso",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/109d7c90-86ed-4ee0-e17d-3c87624ddf00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Jade Wallet",
//     href: "docs/hack(evm-wallets)/Jade Wallet",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/280cd57b-24f4-4700-8d53-94fe292fab00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "HaHa",
//     href: "docs/hack(evm-wallets)/HaHa",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/79285c9f-2630-451e-0680-c71b42fb7400?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Modular Wallet Prod",
//     href: "docs/hack(evm-wallets)/Modular Wallet Prod",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/70485da2-2568-463d-722c-25082997cc00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Kelp",
//     href: "docs/hack(evm-wallets)/Kelp",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/02d9143d-deed-4336-0cae-f4b8b1091f00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Numio",
//     href: "docs/hack(evm-wallets)/Numio",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/416ee463-6699-43f7-c0e3-396f0ad3d300?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Cling Wallet",
//     href: "docs/hack(evm-wallets)/Cling Wallet",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/2d8006c3-852b-458a-d6b0-916c5ba76800?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Broearn Wallet",
//     href: "docs/hack(evm-wallets)/Broearn Wallet",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/b3c2c77c-a8cf-46e1-095a-77f0a3891500?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Coinomi",
//     href: "docs/hack(evm-wallets)/Coinomi",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/3b446d16-a908-40c8-5835-9a6efe90dd00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Ripio Portal",
//     href: "docs/hack(evm-wallets)/Ripio Portal",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/fd56c695-ce58-4df5-1625-767571c80700?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Sabay Wallet App",
//     href: "docs/hack(evm-wallets)/Sabay Wallet App",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/c4df7014-abaf-4016-8180-fb994804b400?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Tokoin | My-T Wallet",
//     href: "docs/hack(evm-wallets)/Tokoin | My-T Wallet",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/88a2518c-16c2-4ee3-4699-1a1c6903bc00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Impersonator",
//     href: "docs/hack(evm-wallets)/Impersonator",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/b072a0c6-1bc2-4a80-6f05-50a4ebbf0700?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Fncy Mobile Wallet",
//     href: "docs/hack(evm-wallets)/Fncy Mobile Wallet",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/c1c8d374-dff3-419c-96af-3515d0192100?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Copiosa",
//     href: "docs/hack(evm-wallets)/Copiosa",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/cae1be94-9f53-4eba-b915-f6e381d5a500?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Imota ",
//     href: "docs/hack(evm-wallets)/Imota ",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/c81f5bbf-ce66-42bd-3436-f1baaaa18b00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Libera",
//     href: "docs/hack(evm-wallets)/Libera",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/9485d17f-c413-47fe-ebee-a876a9dc9100?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Certhis",
//     href: "docs/hack(evm-wallets)/Certhis",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/fbd441cc-e861-46dc-48ae-a04228ddb500?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Burrito Wallet",
//     href: "docs/hack(evm-wallets)/Burrito Wallet",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/7eec7187-3f48-4fda-53bb-b0ad55749a00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Ancrypto",
//     href: "docs/hack(evm-wallets)/Ancrypto",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/8dee1c33-b277-4a5a-5ddd-5e70fd9d1800?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Cypherock cySync",
//     href: "docs/hack(evm-wallets)/Cypherock cySync",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/7fd5a23a-3a01-4cfb-3c8b-9f43ae414400?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "CVL Wallet",
//     href: "docs/hack(evm-wallets)/CVL Wallet",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/e4eff15a-35d5-49fe-047f-33e331f46400?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Cypher Wallet",
//     href: "docs/hack(evm-wallets)/Cypher Wallet",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/7bce0965-a4cc-4aad-6217-009d51017500?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Status",
//     href: "docs/hack(evm-wallets)/Status",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/e131fa98-8c4f-4680-f5b6-6fb77189c900?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Enjin Wallet",
//     href: "docs/hack(evm-wallets)/Enjin Wallet",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/add9626b-a5fa-4c12-178c-e5584e6dcd00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Essentials",
//     href: "docs/hack(evm-wallets)/Essentials",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/058878f4-7364-4e01-434f-2cc09a15cf00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Everspace",
//     href: "docs/hack(evm-wallets)/Everspace",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/80eaa630-6392-4b0a-a604-0a0f808e4d00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "BlockWallet",
//     href: "docs/hack(evm-wallets)/BlockWallet",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/ef825629-9828-4a5a-b376-62ab4ee81f00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Kriptomat",
//     href: "docs/hack(evm-wallets)/Kriptomat",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/774110aa-70f6-4d0c-210f-ab434838fa00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Oxalus Wallet",
//     href: "docs/hack(evm-wallets)/Oxalus Wallet",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/a6e22fcb-6b69-45d2-b52d-a4a347a21e00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Theta Wallet",
//     href: "docs/hack(evm-wallets)/Theta Wallet",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/d4afb810-5925-4f00-4ebb-d180fcf29000?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Dawn Wallet",
//     href: "docs/hack(evm-wallets)/Dawn Wallet",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/dcb4a287-a6f5-4e81-cbab-2d0eb27b2f00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Rabby",
//     href: "docs/hack(evm-wallets)/Rabby",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/255e6ba2-8dfd-43ad-e88e-57cbb98f6800?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Leap Cosmos Wallet",
//     href: "docs/hack(evm-wallets)/Leap Cosmos Wallet",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/73e6b2b2-8c02-42e9-84f5-82a859978200?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "ISLAMIwallet",
//     href: "docs/hack(evm-wallets)/ISLAMIwallet",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/8d723c78-28ad-4610-901f-ea391d7e8d00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "UPBOND Wallet",
//     href: "docs/hack(evm-wallets)/UPBOND Wallet",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/698e08f3-b452-4c91-9f65-299939396a00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "VIVE Wallet",
//     href: "docs/hack(evm-wallets)/VIVE Wallet",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/5ef7e40e-1f02-4da2-54bf-992e3e83e100?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Wirex Wallet",
//     href: "docs/hack(evm-wallets)/Wirex Wallet",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/769739aa-ff45-4db5-c6e6-70590741ec00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "BCERTin wallet",
//     href: "docs/hack(evm-wallets)/BCERTin wallet",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/e321346d-5ce7-4e75-371e-e4f0bf923900?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Monarch Wallet",
//     href: "docs/hack(evm-wallets)/Monarch Wallet",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/c664d955-8a1e-4460-3917-4cfcf198f000?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "FILWallet",
//     href: "docs/hack(evm-wallets)/FILWallet",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/f400f6c2-ca6c-487b-654d-e119af247500?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Valora",
//     href: "docs/hack(evm-wallets)/Valora",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/a03bfa44-ce98-4883-9b2a-75e2b68f5700?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "CoinCircle",
//     href: "docs/hack(evm-wallets)/CoinCircle",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/eae63a23-c7ba-4f7e-24b3-e6fc69215d00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "MyWalliD",
//     href: "docs/hack(evm-wallets)/MyWalliD",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/e6cff623-9671-4a39-acc7-1c2292d7e100?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "BRISE Wallet",
//     href: "docs/hack(evm-wallets)/BRISE Wallet",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/09a4e1d9-e4de-44fa-f248-5495ba9ab300?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Snowball",
//     href: "docs/hack(evm-wallets)/Snowball",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/313faea4-af8c-41f4-0ed8-98be5d048e00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "GameStop Wallet",
//     href: "docs/hack(evm-wallets)/GameStop Wallet",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/c12536e0-dff1-4a1a-6c8f-c7247d6aa200?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "ParaSwap Wallet",
//     href: "docs/hack(evm-wallets)/ParaSwap Wallet",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/73dc6b30-b644-46e6-020c-5926851df600?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Ballet Crypto",
//     href: "docs/hack(evm-wallets)/Ballet Crypto",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/542094e6-70d6-4b0d-4c8f-b61cc2c38500?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "UvToken",
//     href: "docs/hack(evm-wallets)/UvToken",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/a0057241-cd91-4a53-7175-016b76bfd900?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "RealT Wallet",
//     href: "docs/hack(evm-wallets)/RealT Wallet",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/bf1f251b-08a5-4b27-ae4a-201a5f698900?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "SahalWallet",
//     href: "docs/hack(evm-wallets)/SahalWallet",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/d29d6426-b6f2-481b-12d8-7b20ec82af00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "ApolloX",
//     href: "docs/hack(evm-wallets)/ApolloX",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/80ab63a2-1b32-4140-3577-9fbc8ea82e00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Enno Wallet",
//     href: "docs/hack(evm-wallets)/Enno Wallet",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/ae4f5167-0b61-43bd-7d76-1f8579271000?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Nitrogen Wallet",
//     href: "docs/hack(evm-wallets)/Nitrogen Wallet",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/af185895-cda5-4eaf-e31b-28b6fe4b0800?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Loopring Wallet",
//     href: "docs/hack(evm-wallets)/Loopring Wallet",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/2103feda-4fc8-4635-76a7-02a4ed998000?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "A4 Wallet",
//     href: "docs/hack(evm-wallets)/A4 Wallet",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/7a788c03-daf7-4d93-fa3a-f94e2b719900?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "BeeWallet",
//     href: "docs/hack(evm-wallets)/BeeWallet",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/8f86199e-5142-4314-91b8-c23a59e9dc00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Dohrnii Wallet",
//     href: "docs/hack(evm-wallets)/Dohrnii Wallet",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/1bb51ed9-68ed-4012-3082-72dcb7754300?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "LocalTrade Wallet",
//     href: "docs/hack(evm-wallets)/LocalTrade Wallet",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/fcc60983-74ae-484a-4242-87cb6f05f100?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Xcapit",
//     href: "docs/hack(evm-wallets)/Xcapit",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/17f59b75-21b0-4b3f-b024-fe4b9b8d2300?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "BCVault",
//     href: "docs/hack(evm-wallets)/BCVault",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/56995d82-a980-4dfc-2611-0f91d88c5700?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Safematrix",
//     href: "docs/hack(evm-wallets)/Safematrix",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/48ea5de9-869a-4994-2402-97afba060900?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Neon Wallet",
//     href: "docs/hack(evm-wallets)/Neon Wallet",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/322bd6f0-09b5-4595-cb15-0dfab8054800?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Absolute Wallet",
//     href: "docs/hack(evm-wallets)/Absolute Wallet",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/03797059-fc49-4adc-7b93-503290b62300?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Locker Token",
//     href: "docs/hack(evm-wallets)/Locker Token",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/37401d35-3fa1-451c-802d-604940315800?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Sequence Wallet",
//     href: "docs/hack(evm-wallets)/Sequence Wallet",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/b2d5c39c-a485-4efa-5736-a782204e4a00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Linen",
//     href: "docs/hack(evm-wallets)/Linen",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/aff3e4e1-92a9-4066-f48f-3591947cf200?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Nabox",
//     href: "docs/hack(evm-wallets)/Nabox",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/3b75e9f7-2ca8-4a33-ed2b-4e8a0c048d00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Marble",
//     href: "docs/hack(evm-wallets)/Marble",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/eb6de921-6824-4f35-6331-8a8b031e7100?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Spatium",
//     href: "docs/hack(evm-wallets)/Spatium",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/51867bee-2963-4071-d67a-1fdcaa451f00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Cryptnox Wallet",
//     href: "docs/hack(evm-wallets)/Cryptnox Wallet",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/2947b7c8-8966-4485-a98d-25fe43c16700?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Ownbit",
//     href: "docs/hack(evm-wallets)/Ownbit",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/19923b08-7208-4539-9c2d-c43db22bce00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "ID Pocket",
//     href: "docs/hack(evm-wallets)/ID Pocket",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/c227ee0a-5127-4707-ded9-c3cd81348d00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Assure",
//     href: "docs/hack(evm-wallets)/Assure",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/64db7104-c8b7-44ea-e102-11ce87124200?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Flooz",
//     href: "docs/hack(evm-wallets)/Flooz",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/0a04f368-4f56-4c12-0bfa-93b14bb20800?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "ATON",
//     href: "docs/hack(evm-wallets)/ATON",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/2e85f1d1-f498-4cae-bb54-1d40614ee300?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Keplr",
//     href: "docs/hack(evm-wallets)/Keplr",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/527324b0-3849-462b-9a1a-72b53bdfea00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Brave Wallet",
//     href: "docs/hack(evm-wallets)/Brave Wallet",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/8cecad66-73e3-46ee-f45f-01503c032f00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Crossmint",
//     href: "docs/hack(evm-wallets)/Crossmint",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/8ad627ec-cbcd-4878-ec5c-3df588055200?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Gryfyn",
//     href: "docs/hack(evm-wallets)/Gryfyn",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/51bb1507-45a1-4d21-15f2-1cc2ebe69400?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "pier",
//     href: "docs/hack(evm-wallets)/pier",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/cf3f0da1-40ec-4940-aebe-df075513d100?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Core",
//     href: "docs/hack(evm-wallets)/Core",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/35f9c46e-cc57-4aa7-315d-e6ccb2a1d600?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Taho",
//     href: "docs/hack(evm-wallets)/Taho",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/13416950-f73f-4a4c-2f22-d494ed5df800?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Torus",
//     href: "docs/hack(evm-wallets)/Torus",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/1caa462e-dcf5-4c56-d180-094c81444f00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Frame",
//     href: "docs/hack(evm-wallets)/Frame",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/29b4f569-c1e8-4144-132e-629bf5290f00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Keeper",
//     href: "docs/hack(evm-wallets)/Keeper",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/41f6ac85-8f4e-4d9f-b37b-92b43fa7f400?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Uniblow",
//     href: "docs/hack(evm-wallets)/Uniblow",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/3aa86daa-b885-4686-c443-83355e1b3b00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "D'CENT Wallet",
//     href: "docs/hack(evm-wallets)/D'CENT Wallet",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/c68b81d1-a400-4a07-6d9d-28edda986d00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Paper",
//     href: "docs/hack(evm-wallets)/Paper",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/37d7a10f-d94d-4a56-c30e-267e8afbd500?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Klever Wallet",
//     href: "docs/hack(evm-wallets)/Klever Wallet",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/8f5bbad8-6a14-4b2c-5343-cc1fca6e4d00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Edge Wallet",
//     href: "docs/hack(evm-wallets)/Edge Wallet",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/f601bc29-4298-422f-dbf7-34dac2884f00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "NeftiWallet",
//     href: "docs/hack(evm-wallets)/NeftiWallet",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/1f812dec-be3d-446c-52f7-a79eb0dd5400?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "GoldBit",
//     href: "docs/hack(evm-wallets)/GoldBit",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/11974ef1-21ab-4806-a2b1-362c31499900?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Coingrig",
//     href: "docs/hack(evm-wallets)/Coingrig",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/18e38e41-a387-4402-ca31-6d2d5eb91100?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "XFUN Wallet",
//     href: "docs/hack(evm-wallets)/XFUN Wallet",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/a665f8f3-09ef-4d17-2bd0-26dca4518400?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "RiceWallet",
//     href: "docs/hack(evm-wallets)/RiceWallet",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/df94578e-19be-4f00-258f-2470343e7b00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Ancrypto Wallet",
//     href: "docs/hack(evm-wallets)/Ancrypto Wallet",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/d4382329-e288-4d7a-0ac8-3eb0facfb900?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Okse Wallet",
//     href: "docs/hack(evm-wallets)/Okse Wallet",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/8a1b36d5-7f40-403a-7000-5d30f9181200?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Aktionariat",
//     href: "docs/hack(evm-wallets)/Aktionariat",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/6d18e8ea-b536-4038-c5bf-94a499d5a400?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "iToken Wallet",
//     href: "docs/hack(evm-wallets)/iToken Wallet",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/5cd60c34-038d-470c-c024-d58f64260200?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Zelus",
//     href: "docs/hack(evm-wallets)/Zelus",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/aeba2105-6c84-4642-f441-b3f5817ac400?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Talk+",
//     href: "docs/hack(evm-wallets)/Talk+",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/d24cdd56-6f55-42da-631b-c25974c36f00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Card Wallet",
//     href: "docs/hack(evm-wallets)/Card Wallet",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/325428cf-c212-4d83-a434-7f48902d2c00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "PayBolt",
//     href: "docs/hack(evm-wallets)/PayBolt",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/cc8f4e0c-56a8-465a-6cb6-3e9d60846500?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Arianee Wallet",
//     href: "docs/hack(evm-wallets)/Arianee Wallet",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/ace938a9-c906-4b9e-f683-b85f1ab72800?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Slavi Wallet",
//     href: "docs/hack(evm-wallets)/Slavi Wallet",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/282ce060-0beb-4236-b7b0-1b34cc6c8f00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Plasma Wallet",
//     href: "docs/hack(evm-wallets)/Plasma Wallet",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/c268e78d-ffb0-4c8b-5cad-04c3add48500?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "ioPay",
//     href: "docs/hack(evm-wallets)/ioPay",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/18891f5a-fd0f-4126-7d1a-452be6714700?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Defiant",
//     href: "docs/hack(evm-wallets)/Defiant",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/11a96ca4-3592-42ae-c781-2b7265ec9200?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "StrikeX Wallet",
//     href: "docs/hack(evm-wallets)/StrikeX Wallet",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/cae46de2-b432-4002-8bc8-1f0e7380b200?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Avacus",
//     href: "docs/hack(evm-wallets)/Avacus",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/a7106965-91cc-4a73-4688-c5c72ae0ed00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "ByteBank",
//     href: "docs/hack(evm-wallets)/ByteBank",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/bc7aacd6-b2e2-4146-7d21-06e0c5d44f00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "CoolWallet",
//     href: "docs/hack(evm-wallets)/CoolWallet",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/f581365d-e844-4d21-8e35-44a755a32d00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Opto Wallet",
//     href: "docs/hack(evm-wallets)/Opto Wallet",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/3df102e4-e435-49dd-d4b1-5ea74ebed500?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "TK Finance",
//     href: "docs/hack(evm-wallets)/TK Finance",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/c4066f68-2247-49bf-ac8a-a677bfa81800?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Bee Wallet",
//     href: "docs/hack(evm-wallets)/Bee Wallet",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/f90bc33f-f085-40cf-7538-fae5ae84f900?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Pitaka",
//     href: "docs/hack(evm-wallets)/Pitaka",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/691c0716-5213-4b99-e837-079268313800?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "MDAO Wallet",
//     href: "docs/hack(evm-wallets)/MDAO Wallet",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/82014e92-838b-4e75-e77e-76cdc5539d00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "PLTwallet",
//     href: "docs/hack(evm-wallets)/PLTwallet",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/a5d9dd15-8cef-42de-8bed-09e01a8b0200?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "helix id",
//     href: "docs/hack(evm-wallets)/helix id",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/4083ef71-8389-4682-ded6-0099236d2e00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "AirGap Wallet",
//     href: "docs/hack(evm-wallets)/AirGap Wallet",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/76bfe8cd-cf3f-4341-c33c-60da01065000?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Qubic Wallet",
//     href: "docs/hack(evm-wallets)/Qubic Wallet",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/535c91a5-a43c-4104-233c-439449ffcd00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Haven Wallet",
//     href: "docs/hack(evm-wallets)/Haven Wallet",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/b41fc3f2-a874-45ae-4d4f-cdf47da89500?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Holdstation Wallet",
//     href: "docs/hack(evm-wallets)/Holdstation Wallet",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/e6dba126-85af-4194-84f6-dd16632c3c00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Earth Wallet",
//     href: "docs/hack(evm-wallets)/Earth Wallet",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/d3f724c4-f99b-476f-10f8-12aa4af13800?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "MetaOne",
//     href: "docs/hack(evm-wallets)/MetaOne",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/b869d966-4699-44de-eadb-4eb39a580600?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "3S Wallet",
//     href: "docs/hack(evm-wallets)/3S Wallet",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/f3b6a89d-ec8f-49dc-e07f-6bf723e1e500?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "SimpleHold",
//     href: "docs/hack(evm-wallets)/SimpleHold",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/a9f1ba96-b658-4d13-f71f-226b6389f000?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Payperless",
//     href: "docs/hack(evm-wallets)/Payperless",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/4a867e30-44c9-4627-6281-33457b8e2100?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Minerva Wallet",
//     href: "docs/hack(evm-wallets)/Minerva Wallet",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/b57b2163-1bd8-4f6b-3311-470767e6d200?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Volt: DeFi",
//     href: "docs/hack(evm-wallets)/Volt: DeFi",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/51d783cb-0686-4ffa-e661-edca0c380000?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Lif3 Wallet",
//     href: "docs/hack(evm-wallets)/Lif3 Wallet",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/1a89c0ec-9059-4515-afb6-8204d49f0900?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Shinobi-Wallet",
//     href: "docs/hack(evm-wallets)/Shinobi-Wallet",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/685c986c-3e80-4701-cec6-cd247ba1a700?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "KryptoGO Wallet",
//     href: "docs/hack(evm-wallets)/KryptoGO Wallet",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/3ccbd966-97e8-45a0-1ceb-6141a8978e00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Autonomy: Digital Art Wallet",
//     href: "docs/hack(evm-wallets)/Autonomy: Digital Art Wallet",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/126a7683-2349-45c6-ed19-0e27a645c000?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Bifrost Wallet",
//     href: "docs/hack(evm-wallets)/Bifrost Wallet",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/86be07e2-6652-4fd1-5f33-651682c95400?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Nufinetes",
//     href: "docs/hack(evm-wallets)/Nufinetes",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/4bb6c1ca-4196-4ba3-ece2-c3d335e1f800?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Wallet 3",
//     href: "docs/hack(evm-wallets)/Wallet 3",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/34ab7558-9e64-4436-f4e6-9069f2533d00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Abra Wallet",
//     href: "docs/hack(evm-wallets)/Abra Wallet",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/2219db01-e0c9-471c-5def-fd3b4e7a7a00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "iMe",
//     href: "docs/hack(evm-wallets)/iMe",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/25aa3abf-901b-4d82-bb89-c5ade54c0c00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "PREMA Wallet",
//     href: "docs/hack(evm-wallets)/PREMA Wallet",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/6487869b-1165-4f30-aa3a-115665be8300?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "OneKey",
//     href: "docs/hack(evm-wallets)/OneKey",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/12bebb3f-8030-4892-8452-c60a6bac1500?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Slingshot Wallet",
//     href: "docs/hack(evm-wallets)/Slingshot Wallet",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/10c75467-6612-48ad-b97b-63985e922200?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Kriptonio",
//     href: "docs/hack(evm-wallets)/Kriptonio",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/363fae03-882a-4d81-a721-6e6f6e9ac500?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Timeless Wallet",
//     href: "docs/hack(evm-wallets)/Timeless Wallet",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/32e89601-0490-42fc-0cc4-8627d62a2000?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Venly",
//     href: "docs/hack(evm-wallets)/Venly",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/d8c846d0-5164-4520-d10f-e1c27d69ce00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Phantom",
//     href: "docs/hack(evm-wallets)/Phantom",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/c38443bb-b3c1-4697-e569-408de3fcc100?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Coinbase Wallet",
//     href: "docs/hack(evm-wallets)/Coinbase Wallet",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/a5ebc364-8f91-4200-fcc6-be81310a0000?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Bitski",
//     href: "docs/hack(evm-wallets)/Bitski",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/94d94cb5-a94f-47cf-70e6-fe8d3f1c3700?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "MPCWallet",
//     href: "docs/hack(evm-wallets)/MPCWallet",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/636ff7d4-79ce-41d6-ede5-85c9f8a1d900?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "XDEFI Wallet",
//     href: "docs/hack(evm-wallets)/XDEFI Wallet",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/efec6318-7f96-4b30-9287-6c287660cd00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "TREASURE",
//     href: "docs/hack(evm-wallets)/TREASURE",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/6b5d45f6-117c-44a0-d7b0-71c28864a100?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Streakk Wallet",
//     href: "docs/hack(evm-wallets)/Streakk Wallet",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/45ec6eb9-d7fe-4b9b-6dbf-cc675c5d1d00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Sender",
//     href: "docs/hack(evm-wallets)/Sender",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/6fb46282-3d15-4c8a-41ae-0d52115e3f00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "SaitaPro",
//     href: "docs/hack(evm-wallets)/SaitaPro",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/65bdc812-5692-441f-abcb-a389b754a700?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Lilico",
//     href: "docs/hack(evm-wallets)/Lilico",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/70c0bc88-7bb1-4c1f-3531-9a5f799fb100?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Hippo Wallet",
//     href: "docs/hack(evm-wallets)/Hippo Wallet",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/f9570968-45f7-47c1-3189-98cf60e25c00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Cosmostation",
//     href: "docs/hack(evm-wallets)/Cosmostation",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/ea26c3c8-adb6-4dc4-ee02-35d6eee02800?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Bitizen",
//     href: "docs/hack(evm-wallets)/Bitizen",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/75dd1471-77e9-4811-ce57-ec8fc980ec00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Blocto",
//     href: "docs/hack(evm-wallets)/Blocto",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/374258d3-c749-4f37-7815-77e61f798c00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "HUMBL WALLET",
//     href: "docs/hack(evm-wallets)/HUMBL WALLET",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/1ac55ba2-aa98-4ed0-59b3-b3155dea4200?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "SafeMoon",
//     href: "docs/hack(evm-wallets)/SafeMoon",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/ea0140c7-787c-43a4-838f-d5ab6a342000?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "PassPay Wallet",
//     href: "docs/hack(evm-wallets)/PassPay Wallet",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/a1c337f5-c156-4ce8-763b-b4cc65f1c200?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Ultimate",
//     href: "docs/hack(evm-wallets)/Ultimate",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/1ed9823d-64dd-4ab6-2f3f-22c8ff228f00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "MeWallet",
//     href: "docs/hack(evm-wallets)/MeWallet",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/e9666b15-4296-4384-3661-7e99a5f2a900?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "THORWallet",
//     href: "docs/hack(evm-wallets)/THORWallet",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/45165bea-fdae-454e-7caa-31681f255200?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Fizz",
//     href: "docs/hack(evm-wallets)/Fizz",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/f9d4db84-2e9f-4fbe-684f-c1e921c98800?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "PiEthereum Hardware",
//     href: "docs/hack(evm-wallets)/PiEthereum Hardware",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/310a5036-3c8f-4bfc-0510-cba61d7d5100?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Reunit",
//     href: "docs/hack(evm-wallets)/Reunit",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/98ed357f-1e2d-4679-0e78-1100f7594000?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Arianee Wallet",
//     href: "docs/hack(evm-wallets)/Arianee Wallet",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/13b7fe36-909a-4c83-4f06-5740829a3900?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Tholos",
//     href: "docs/hack(evm-wallets)/Tholos",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/f0f306e6-2dba-4805-e7b9-4f25952e2900?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Stickey Wallet",
//     href: "docs/hack(evm-wallets)/Stickey Wallet",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/12aab9fb-f3d4-4248-10e0-4eda17a5de00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Klip",
//     href: "docs/hack(evm-wallets)/Klip",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/f7b6b2a6-ebe7-4779-6ad1-79a3142e6b00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "CoinStats",
//     href: "docs/hack(evm-wallets)/CoinStats",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/b2a00908-f144-4a49-cc0a-9d7422ad5e00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "LikerLand App",
//     href: "docs/hack(evm-wallets)/LikerLand App",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/501fa316-f0df-4a1b-ead6-5523251b7100?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Krystal",
//     href: "docs/hack(evm-wallets)/Krystal",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/d2b59965-4eb8-4828-d3d4-fbc0b3379e00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "KeepKey Desktop",
//     href: "docs/hack(evm-wallets)/KeepKey Desktop",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/eb4227d9-366c-466c-db8f-ab7e45985500?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Pillar",
//     href: "docs/hack(evm-wallets)/Pillar",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/87737170-f79f-4359-338b-7c30856c9f00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "HARTi Wallet",
//     href: "docs/hack(evm-wallets)/HARTi Wallet",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/d0407f26-fe0b-4f3c-43c3-69bc8fef2e00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Stasis Wallet",
//     href: "docs/hack(evm-wallets)/Stasis Wallet",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/d83223cf-f29a-4757-a21e-8913b12f9f00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Nova Wallet",
//     href: "docs/hack(evm-wallets)/Nova Wallet",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/4f159b10-419b-483a-f2bf-da3d17855e00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "meta-WONDER-verse",
//     href: "docs/hack(evm-wallets)/meta-WONDER-verse",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/5cc6d96d-178d-42a6-cba1-ebd9d9415700?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "DTTD",
//     href: "docs/hack(evm-wallets)/DTTD",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/4a1da9d0-1a81-4e51-4758-b2157f4e6000?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "FoxWallet",
//     href: "docs/hack(evm-wallets)/FoxWallet",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/d994a61e-c1df-49cb-cf4c-10ec51338400?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "HAQQ Wallet",
//     href: "docs/hack(evm-wallets)/HAQQ Wallet",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/99fe539d-6a2a-4f52-2211-42fd04a9f300?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "tomiPAY",
//     href: "docs/hack(evm-wallets)/tomiPAY",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/bf8bd7b8-b638-40f6-1caa-1d7678bb1900?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "StrikeX Wallet",
//     href: "docs/hack(evm-wallets)/StrikeX Wallet",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/eb2b6db5-1086-4739-a422-4a4bf3a44300?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Nash",
//     href: "docs/hack(evm-wallets)/Nash",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/93a15cd2-8f0d-4bf6-1545-6bdf745c2300?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Bybit Wallet",
//     href: "docs/hack(evm-wallets)/Bybit Wallet",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/b9e64f74-0176-44fd-c603-673a45ed5b00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "SubWallet",
//     href: "docs/hack(evm-wallets)/SubWallet",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/03f5c08c-fb30-46a0-ca5c-d8fdd7250b00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Okto",
//     href: "docs/hack(evm-wallets)/Okto",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/154c69b7-9bb1-4010-5b4c-6b37eeda8900?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Catecoin Wallet",
//     href: "docs/hack(evm-wallets)/Catecoin Wallet",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/d017bc54-db4d-4f07-2de2-69790ce92400?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "UKISS Hub",
//     href: "docs/hack(evm-wallets)/UKISS Hub",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/23f4c933-68e6-46f9-75b6-2d2905ca1300?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Tellaw Wallet",
//     href: "docs/hack(evm-wallets)/Tellaw Wallet",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/c1cb03f5-e1c2-4c3e-86e1-9a90565ea300?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Tangem Wallet",
//     href: "docs/hack(evm-wallets)/Tangem Wallet",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/80679c6f-bb0b-43d0-83e0-462ac268b600?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Callback",
//     href: "docs/hack(evm-wallets)/Callback",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/9f50c7a7-2384-4efe-89c3-01e0fec2b700?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "SA ASSISTANT",
//     href: "docs/hack(evm-wallets)/SA ASSISTANT",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/7954b508-9ff0-4416-9aba-16209b571000?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Xellar",
//     href: "docs/hack(evm-wallets)/Xellar",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/89cf9926-00bf-4152-d98f-cac53d7cad00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Talken Wallet",
//     href: "docs/hack(evm-wallets)/Talken Wallet",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/3c49e8e7-a4d8-4810-23ef-0a0102cce100?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "U2U Wallet",
//     href: "docs/hack(evm-wallets)/U2U Wallet",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/03bca3fc-c191-4877-592d-0b0d6557c900?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Shido Wallet",
//     href: "docs/hack(evm-wallets)/Shido Wallet",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/dd5c7007-4572-41c7-a9b8-b97d071adb00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "OzoneWallet",
//     href: "docs/hack(evm-wallets)/OzoneWallet",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/4eb57479-515a-463a-9fcb-c20e9cc60c00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Tidus Wallet ",
//     href: "docs/hack(evm-wallets)/Tidus Wallet ",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/797bd108-d862-4d1b-d339-883de9a75000?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Impact Wallet",
//     href: "docs/hack(evm-wallets)/Impact Wallet",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/afc85418-2ca6-46cf-cfb9-daf6bc43e400?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Wirex Wallet",
//     href: "docs/hack(evm-wallets)/Wirex Wallet",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/66b40d9b-7314-42dd-cacf-4e324b0c2000?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Zelcore",
//     href: "docs/hack(evm-wallets)/Zelcore",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/1b9e652e-1667-425a-f828-707bf9b05400?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "DOSI Vault",
//     href: "docs/hack(evm-wallets)/DOSI Vault",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/0a0d223e-6bf7-4e12-a5b4-1720deb02000?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "WOW EARN",
//     href: "docs/hack(evm-wallets)/WOW EARN",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/1985a753-7fd8-4d75-4c50-7998ea68a800?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "ELLIPAL",
//     href: "docs/hack(evm-wallets)/ELLIPAL",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/0a5b45a1-c974-4f41-6c14-376714478c00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Unstoppable Wallet",
//     href: "docs/hack(evm-wallets)/Unstoppable Wallet",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/a63cbfce-0726-4f94-9187-a761afb94400?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Aurora Pass",
//     href: "docs/hack(evm-wallets)/Aurora Pass",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/6d93eeba-edce-431c-4293-e25784e61f00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Bitverse",
//     href: "docs/hack(evm-wallets)/Bitverse",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/5851c585-0f2b-41a1-a36a-221a18af5200?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Konio",
//     href: "docs/hack(evm-wallets)/Konio",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/028c7760-a1af-43ea-7ac7-8b811712b700?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Gate.io",
//     href: "docs/hack(evm-wallets)/Gate.io",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/6e528abf-7a7d-47bd-d84d-481f169b1200?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "UTORG",
//     href: "docs/hack(evm-wallets)/UTORG",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/39c77c0b-d6ea-419d-92b7-513a5eac2c00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "CoinWallet",
//     href: "docs/hack(evm-wallets)/CoinWallet",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/1c0cd352-ce8e-4bcc-f91d-8763eab60b00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "AmmerWallet",
//     href: "docs/hack(evm-wallets)/AmmerWallet",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/7d38dd8e-92ee-44bf-1ca4-818531de1900?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Binance.US",
//     href: "docs/hack(evm-wallets)/Binance.US",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/48aa1a7d-c5fe-4ad6-c2f2-e5684b296900?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "SISTEMAS",
//     href: "docs/hack(evm-wallets)/SISTEMAS",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/eda865c8-746b-4536-9d57-7d7de0555400?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "MUZA",
//     href: "docs/hack(evm-wallets)/MUZA",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/9934307c-0a39-4c60-7fd0-4cb9297f3900?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "FxWallet",
//     href: "docs/hack(evm-wallets)/FxWallet",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/46a80541-e639-483d-e230-731fcbf13000?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "RYIPAY",
//     href: "docs/hack(evm-wallets)/RYIPAY",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/bb6e9045-24db-428a-7661-5b3365cc2800?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Ronin Wallet",
//     href: "docs/hack(evm-wallets)/Ronin Wallet",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/dff7f251-5116-460b-54f7-b14c5343b800?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Sequel Wallet",
//     href: "docs/hack(evm-wallets)/Sequel Wallet",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/0c89b2e4-a0cc-4bfc-e3f5-398f4711af00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "MetaWallet",
//     href: "docs/hack(evm-wallets)/MetaWallet",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/a18337ad-433f-47c0-ea57-8a6199835e00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Altme",
//     href: "docs/hack(evm-wallets)/Altme",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/7eeac6e8-6852-4d09-8579-e229fd6b9a00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Unido",
//     href: "docs/hack(evm-wallets)/Unido",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/c22450a3-b4a7-4e86-8855-f5b88d983100?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Bitpie",
//     href: "docs/hack(evm-wallets)/Bitpie",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/e6dce4ec-a1a8-49e6-d8e1-8329fdd5c700?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "MOONSTAKE",
//     href: "docs/hack(evm-wallets)/MOONSTAKE",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/22374fae-244c-4224-2e3d-c14912f98a00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "IndiGG",
//     href: "docs/hack(evm-wallets)/IndiGG",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/8e90a32f-130d-4317-7294-4884510aa300?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Yuse Wallet",
//     href: "docs/hack(evm-wallets)/Yuse Wallet",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/2cd61458-59c2-4208-c8ee-98b5e0076b00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Coininn Wallet",
//     href: "docs/hack(evm-wallets)/Coininn Wallet",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/52efd5a7-65fa-428d-668c-f53ceb4b5f00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Safe App Syscoin",
//     href: "docs/hack(evm-wallets)/Safe App Syscoin",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/0b6b29ca-10a4-44cc-a51e-baa4b49fc300?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "f(x)Wallet",
//     href: "docs/hack(evm-wallets)/f(x)Wallet",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/bdd2f39b-98fa-485d-b180-bf4a42fa6100?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "pockie",
//     href: "docs/hack(evm-wallets)/pockie",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/a761beae-1e7e-4402-bcc5-a896a92bfb00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "AmazeWallet",
//     href: "docs/hack(evm-wallets)/AmazeWallet",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/38495eb4-efcf-47cb-be73-a695510f9f00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "atato custody",
//     href: "docs/hack(evm-wallets)/atato custody",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/53878398-b6da-4384-47dc-bc744acd5b00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Pali Wallet",
//     href: "docs/hack(evm-wallets)/Pali Wallet",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/4672cbde-0f96-42f3-84a0-524e9ad70a00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Nunu",
//     href: "docs/hack(evm-wallets)/Nunu",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/a4a42e1d-b43d-4fa1-b8b3-daf4e6b61c00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "NuFi",
//     href: "docs/hack(evm-wallets)/NuFi",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/65e07e9f-183a-4f6c-6ca5-4964eda1ef00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "EASY",
//     href: "docs/hack(evm-wallets)/EASY",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/62feb41a-be1f-4b1c-e089-27f97c0e8d00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Solace",
//     href: "docs/hack(evm-wallets)/Solace",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/4bb93c92-f20b-41d7-97c7-d0e74100bd00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "Meter Wallet",
//     href: "docs/hack(evm-wallets)/Meter Wallet",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/05700788-1b9d-4670-dabd-61fa9b90f900?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
//   {
//     title: "SuperWallet",
//     href: "docs/hack(evm-wallets)/SuperWallet",
//     description: "Not Provided(coming soon)",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/a7ce7b31-5439-4a99-06f9-aa62f3ae4e00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//     items: [],
//   },
// ]

const solana_wallet = [
  {
    title: "Spot",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/1bf33a89-b049-4a1c-d1f6-4dd7419ee400?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Omni",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/2cd67b4c-282b-4809-e7c0-a88cd5116f00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Frontier",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/a78c4d48-32c1-4a9d-52f2-ec7ee08ce200?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "SafePal",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/252753e7-b783-4e03-7f77-d39864530900?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Exodus",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/4c16cad4-cac9-4643-6726-c696efaf5200?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "ONTO",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/d22b2a4b-5562-49ba-506b-6d5986914600?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "MathWallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/26a8f588-3231-4411-60ce-5bb6b805a700?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Fireblocks",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/7e1514ba-932d-415d-1bdb-bccb6c2cbc00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Infinity Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/9f259366-0bcd-4817-0af9-f78773e41900?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Coin98 Super App",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/fc460647-ea95-447a-99f0-1bff8fa4be00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Ottr Finance",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/7025146c-c341-473f-a79c-62ec48eef800?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Broearn Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/b3c2c77c-a8cf-46e1-095a-77f0a3891500?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Burrito Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/7eec7187-3f48-4fda-53bb-b0ad55749a00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "CVL Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/e4eff15a-35d5-49fe-047f-33e331f46400?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Nitrogen Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/af185895-cda5-4eaf-e31b-28b6fe4b0800?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "BCVault",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/56995d82-a980-4dfc-2611-0f91d88c5700?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Absolute Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/03797059-fc49-4adc-7b93-503290b62300?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Brave Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/8cecad66-73e3-46ee-f45f-01503c032f00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Crossmint",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/8ad627ec-cbcd-4878-ec5c-3df588055200?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Torus",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/1caa462e-dcf5-4c56-d180-094c81444f00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "iToken Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/5cd60c34-038d-470c-c024-d58f64260200?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Slavi Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/282ce060-0beb-4236-b7b0-1b34cc6c8f00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "StrikeX Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/cae46de2-b432-4002-8bc8-1f0e7380b200?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "3S Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/f3b6a89d-ec8f-49dc-e07f-6bf723e1e500?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "SimpleHold",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/a9f1ba96-b658-4d13-f71f-226b6389f000?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "OneKey",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/12bebb3f-8030-4892-8452-c60a6bac1500?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Phantom",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/c38443bb-b3c1-4697-e569-408de3fcc100?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Coinbase Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/a5ebc364-8f91-4200-fcc6-be81310a0000?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "XDEFI Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/efec6318-7f96-4b30-9287-6c287660cd00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "SafeMoon",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/ea0140c7-787c-43a4-838f-d5ab6a342000?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "PassPay Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/a1c337f5-c156-4ce8-763b-b4cc65f1c200?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "tomiPAY",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/bf8bd7b8-b638-40f6-1caa-1d7678bb1900?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "StrikeX Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/eb2b6db5-1086-4739-a422-4a4bf3a44300?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Catecoin Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/d017bc54-db4d-4f07-2de2-69790ce92400?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "UKISS Hub",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/23f4c933-68e6-46f9-75b6-2d2905ca1300?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Tidus Wallet ",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/797bd108-d862-4d1b-d339-883de9a75000?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Zelcore",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/1b9e652e-1667-425a-f828-707bf9b05400?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Gate.io",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/6e528abf-7a7d-47bd-d84d-481f169b1200?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "UTORG",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/39c77c0b-d6ea-419d-92b7-513a5eac2c00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "CoinWallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/1c0cd352-ce8e-4bcc-f91d-8763eab60b00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
]
// solana_wallets.map((wallet) => {
//   wallets = `{title:"${wallet.title}",href:"docs/hack(solana-wallets)/${wallet.title}",description:"Not Provided(coming soon)",logo:"${wallet.logo}",items:[]},`
//   console.log(wallets)
// })
let solana_walletss = [
  {
    title: "Spot",
    href: "docs/hack(solana-wallets)/Spot",
    description: "Not Provided(coming soon)",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/1bf33a89-b049-4a1c-d1f6-4dd7419ee400?projectId=2f05ae7f1116030fde2d36508f472bfb",
    items: [],
  },
  {
    title: "Omni",
    href: "docs/hack(solana-wallets)/Omni",
    description: "Not Provided(coming soon)",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/2cd67b4c-282b-4809-e7c0-a88cd5116f00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    items: [],
  },
  {
    title: "Frontier",
    href: "docs/hack(solana-wallets)/Frontier",
    description: "Not Provided(coming soon)",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/a78c4d48-32c1-4a9d-52f2-ec7ee08ce200?projectId=2f05ae7f1116030fde2d36508f472bfb",
    items: [],
  },
  {
    title: "SafePal",
    href: "docs/hack(solana-wallets)/SafePal",
    description: "Not Provided(coming soon)",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/252753e7-b783-4e03-7f77-d39864530900?projectId=2f05ae7f1116030fde2d36508f472bfb",
    items: [],
  },
  {
    title: "Exodus",
    href: "docs/hack(solana-wallets)/Exodus",
    description: "Not Provided(coming soon)",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/4c16cad4-cac9-4643-6726-c696efaf5200?projectId=2f05ae7f1116030fde2d36508f472bfb",
    items: [],
  },
  {
    title: "ONTO",
    href: "docs/hack(solana-wallets)/ONTO",
    description: "Not Provided(coming soon)",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/d22b2a4b-5562-49ba-506b-6d5986914600?projectId=2f05ae7f1116030fde2d36508f472bfb",
    items: [],
  },
  {
    title: "MathWallet",
    href: "docs/hack(solana-wallets)/MathWallet",
    description: "Not Provided(coming soon)",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/26a8f588-3231-4411-60ce-5bb6b805a700?projectId=2f05ae7f1116030fde2d36508f472bfb",
    items: [],
  },
  {
    title: "Fireblocks",
    href: "docs/hack(solana-wallets)/Fireblocks",
    description: "Not Provided(coming soon)",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/7e1514ba-932d-415d-1bdb-bccb6c2cbc00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    items: [],
  },
  {
    title: "Infinity Wallet",
    href: "docs/hack(solana-wallets)/Infinity Wallet",
    description: "Not Provided(coming soon)",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/9f259366-0bcd-4817-0af9-f78773e41900?projectId=2f05ae7f1116030fde2d36508f472bfb",
    items: [],
  },
  {
    title: "Coin98 Super App",
    href: "docs/hack(solana-wallets)/Coin98 Super App",
    description: "Not Provided(coming soon)",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/fc460647-ea95-447a-99f0-1bff8fa4be00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    items: [],
  },
  {
    title: "Ottr Finance",
    href: "docs/hack(solana-wallets)/Ottr Finance",
    description: "Not Provided(coming soon)",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/7025146c-c341-473f-a79c-62ec48eef800?projectId=2f05ae7f1116030fde2d36508f472bfb",
    items: [],
  },
  {
    title: "Broearn Wallet",
    href: "docs/hack(solana-wallets)/Broearn Wallet",
    description: "Not Provided(coming soon)",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/b3c2c77c-a8cf-46e1-095a-77f0a3891500?projectId=2f05ae7f1116030fde2d36508f472bfb",
    items: [],
  },
  {
    title: "Burrito Wallet",
    href: "docs/hack(solana-wallets)/Burrito Wallet",
    description: "Not Provided(coming soon)",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/7eec7187-3f48-4fda-53bb-b0ad55749a00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    items: [],
  },
  {
    title: "CVL Wallet",
    href: "docs/hack(solana-wallets)/CVL Wallet",
    description: "Not Provided(coming soon)",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/e4eff15a-35d5-49fe-047f-33e331f46400?projectId=2f05ae7f1116030fde2d36508f472bfb",
    items: [],
  },
  {
    title: "Nitrogen Wallet",
    href: "docs/hack(solana-wallets)/Nitrogen Wallet",
    description: "Not Provided(coming soon)",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/af185895-cda5-4eaf-e31b-28b6fe4b0800?projectId=2f05ae7f1116030fde2d36508f472bfb",
    items: [],
  },
  {
    title: "BCVault",
    href: "docs/hack(solana-wallets)/BCVault",
    description: "Not Provided(coming soon)",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/56995d82-a980-4dfc-2611-0f91d88c5700?projectId=2f05ae7f1116030fde2d36508f472bfb",
    items: [],
  },
  {
    title: "Absolute Wallet",
    href: "docs/hack(solana-wallets)/Absolute Wallet",
    description: "Not Provided(coming soon)",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/03797059-fc49-4adc-7b93-503290b62300?projectId=2f05ae7f1116030fde2d36508f472bfb",
    items: [],
  },
  {
    title: "Brave Wallet",
    href: "docs/hack(solana-wallets)/Brave Wallet",
    description: "Not Provided(coming soon)",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/8cecad66-73e3-46ee-f45f-01503c032f00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    items: [],
  },
  {
    title: "Crossmint",
    href: "docs/hack(solana-wallets)/Crossmint",
    description: "Not Provided(coming soon)",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/8ad627ec-cbcd-4878-ec5c-3df588055200?projectId=2f05ae7f1116030fde2d36508f472bfb",
    items: [],
  },
  {
    title: "Torus",
    href: "docs/hack(solana-wallets)/Torus",
    description: "Not Provided(coming soon)",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/1caa462e-dcf5-4c56-d180-094c81444f00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    items: [],
  },
  {
    title: "iToken Wallet",
    href: "docs/hack(solana-wallets)/iToken Wallet",
    description: "Not Provided(coming soon)",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/5cd60c34-038d-470c-c024-d58f64260200?projectId=2f05ae7f1116030fde2d36508f472bfb",
    items: [],
  },
  {
    title: "Slavi Wallet",
    href: "docs/hack(solana-wallets)/Slavi Wallet",
    description: "Not Provided(coming soon)",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/282ce060-0beb-4236-b7b0-1b34cc6c8f00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    items: [],
  },
  {
    title: "StrikeX Wallet",
    href: "docs/hack(solana-wallets)/StrikeX Wallet",
    description: "Not Provided(coming soon)",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/cae46de2-b432-4002-8bc8-1f0e7380b200?projectId=2f05ae7f1116030fde2d36508f472bfb",
    items: [],
  },
  {
    title: "3S Wallet",
    href: "docs/hack(solana-wallets)/3S Wallet",
    description: "Not Provided(coming soon)",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/f3b6a89d-ec8f-49dc-e07f-6bf723e1e500?projectId=2f05ae7f1116030fde2d36508f472bfb",
    items: [],
  },
  {
    title: "SimpleHold",
    href: "docs/hack(solana-wallets)/SimpleHold",
    description: "Not Provided(coming soon)",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/a9f1ba96-b658-4d13-f71f-226b6389f000?projectId=2f05ae7f1116030fde2d36508f472bfb",
    items: [],
  },
  {
    title: "OneKey",
    href: "docs/hack(solana-wallets)/OneKey",
    description: "Not Provided(coming soon)",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/12bebb3f-8030-4892-8452-c60a6bac1500?projectId=2f05ae7f1116030fde2d36508f472bfb",
    items: [],
  },
  {
    title: "Phantom",
    href: "docs/hack(solana-wallets)/Phantom",
    description: "Not Provided(coming soon)",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/c38443bb-b3c1-4697-e569-408de3fcc100?projectId=2f05ae7f1116030fde2d36508f472bfb",
    items: [],
  },
  {
    title: "Coinbase Wallet",
    href: "docs/hack(solana-wallets)/Coinbase Wallet",
    description: "Not Provided(coming soon)",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/a5ebc364-8f91-4200-fcc6-be81310a0000?projectId=2f05ae7f1116030fde2d36508f472bfb",
    items: [],
  },
  {
    title: "XDEFI Wallet",
    href: "docs/hack(solana-wallets)/XDEFI Wallet",
    description: "Not Provided(coming soon)",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/efec6318-7f96-4b30-9287-6c287660cd00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    items: [],
  },
  {
    title: "SafeMoon",
    href: "docs/hack(solana-wallets)/SafeMoon",
    description: "Not Provided(coming soon)",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/ea0140c7-787c-43a4-838f-d5ab6a342000?projectId=2f05ae7f1116030fde2d36508f472bfb",
    items: [],
  },
  {
    title: "PassPay Wallet",
    href: "docs/hack(solana-wallets)/PassPay Wallet",
    description: "Not Provided(coming soon)",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/a1c337f5-c156-4ce8-763b-b4cc65f1c200?projectId=2f05ae7f1116030fde2d36508f472bfb",
    items: [],
  },
  {
    title: "tomiPAY",
    href: "docs/hack(solana-wallets)/tomiPAY",
    description: "Not Provided(coming soon)",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/bf8bd7b8-b638-40f6-1caa-1d7678bb1900?projectId=2f05ae7f1116030fde2d36508f472bfb",
    items: [],
  },
  {
    title: "StrikeX Wallet",
    href: "docs/hack(solana-wallets)/StrikeX Wallet",
    description: "Not Provided(coming soon)",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/eb2b6db5-1086-4739-a422-4a4bf3a44300?projectId=2f05ae7f1116030fde2d36508f472bfb",
    items: [],
  },
  {
    title: "Catecoin Wallet",
    href: "docs/hack(solana-wallets)/Catecoin Wallet",
    description: "Not Provided(coming soon)",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/d017bc54-db4d-4f07-2de2-69790ce92400?projectId=2f05ae7f1116030fde2d36508f472bfb",
    items: [],
  },
  {
    title: "UKISS Hub",
    href: "docs/hack(solana-wallets)/UKISS Hub",
    description: "Not Provided(coming soon)",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/23f4c933-68e6-46f9-75b6-2d2905ca1300?projectId=2f05ae7f1116030fde2d36508f472bfb",
    items: [],
  },
  {
    title: "Tidus Wallet ",
    href: "docs/hack(solana-wallets)/Tidus Wallet ",
    description: "Not Provided(coming soon)",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/797bd108-d862-4d1b-d339-883de9a75000?projectId=2f05ae7f1116030fde2d36508f472bfb",
    items: [],
  },
  {
    title: "Zelcore",
    href: "docs/hack(solana-wallets)/Zelcore",
    description: "Not Provided(coming soon)",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/1b9e652e-1667-425a-f828-707bf9b05400?projectId=2f05ae7f1116030fde2d36508f472bfb",
    items: [],
  },
  {
    title: "Gate.io",
    href: "docs/hack(solana-wallets)/Gate.io",
    description: "Not Provided(coming soon)",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/6e528abf-7a7d-47bd-d84d-481f169b1200?projectId=2f05ae7f1116030fde2d36508f472bfb",
    items: [],
  },
  {
    title: "UTORG",
    href: "docs/hack(solana-wallets)/UTORG",
    description: "Not Provided(coming soon)",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/39c77c0b-d6ea-419d-92b7-513a5eac2c00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    items: [],
  },
  {
    title: "CoinWallet",
    href: "docs/hack(solana-wallets)/CoinWallet",
    description: "Not Provided(coming soon)",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/1c0cd352-ce8e-4bcc-f91d-8763eab60b00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    items: [],
  },
]

let cosmos_walletss = [
  {
    title: "Omni",
    href: "docs/hack(cosmos-wallets)/Omni",
    description: "Not Provided(coming soon)",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/2cd67b4c-282b-4809-e7c0-a88cd5116f00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    items: [],
  },
  {
    title: "Frontier",
    href: "docs/hack(cosmos-wallets)/Frontier",
    description: "Not Provided(coming soon)",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/a78c4d48-32c1-4a9d-52f2-ec7ee08ce200?projectId=2f05ae7f1116030fde2d36508f472bfb",
    items: [],
  },
  {
    title: "SafePal",
    href: "docs/hack(cosmos-wallets)/SafePal",
    description: "Not Provided(coming soon)",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/252753e7-b783-4e03-7f77-d39864530900?projectId=2f05ae7f1116030fde2d36508f472bfb",
    items: [],
  },
  {
    title: "MathWallet",
    href: "docs/hack(cosmos-wallets)/MathWallet",
    description: "Not Provided(coming soon)",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/26a8f588-3231-4411-60ce-5bb6b805a700?projectId=2f05ae7f1116030fde2d36508f472bfb",
    items: [],
  },
  {
    title: "Cypher Wallet",
    href: "docs/hack(cosmos-wallets)/Cypher Wallet",
    description: "Not Provided(coming soon)",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/7bce0965-a4cc-4aad-6217-009d51017500?projectId=2f05ae7f1116030fde2d36508f472bfb",
    items: [],
  },
  {
    title: "Essentials",
    href: "docs/hack(cosmos-wallets)/Essentials",
    description: "Not Provided(coming soon)",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/058878f4-7364-4e01-434f-2cc09a15cf00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    items: [],
  },
  {
    title: "Leap Cosmos Wallet",
    href: "docs/hack(cosmos-wallets)/Leap Cosmos Wallet",
    description: "Not Provided(coming soon)",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/73e6b2b2-8c02-42e9-84f5-82a859978200?projectId=2f05ae7f1116030fde2d36508f472bfb",
    items: [],
  },
  {
    title: "Keplr",
    href: "docs/hack(cosmos-wallets)/Keplr",
    description: "Not Provided(coming soon)",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/527324b0-3849-462b-9a1a-72b53bdfea00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    items: [],
  },
  {
    title: "MPCWallet",
    href: "docs/hack(cosmos-wallets)/MPCWallet",
    description: "Not Provided(coming soon)",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/636ff7d4-79ce-41d6-ede5-85c9f8a1d900?projectId=2f05ae7f1116030fde2d36508f472bfb",
    items: [],
  },
  {
    title: "XDEFI Wallet",
    href: "docs/hack(cosmos-wallets)/XDEFI Wallet",
    description: "Not Provided(coming soon)",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/efec6318-7f96-4b30-9287-6c287660cd00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    items: [],
  },
  {
    title: "Cosmostation",
    href: "docs/hack(cosmos-wallets)/Cosmostation",
    description: "Not Provided(coming soon)",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/ea26c3c8-adb6-4dc4-ee02-35d6eee02800?projectId=2f05ae7f1116030fde2d36508f472bfb",
    items: [],
  },
  {
    title: "UKISS Hub",
    href: "docs/hack(cosmos-wallets)/UKISS Hub",
    description: "Not Provided(coming soon)",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/23f4c933-68e6-46f9-75b6-2d2905ca1300?projectId=2f05ae7f1116030fde2d36508f472bfb",
    items: [],
  },
  {
    title: "SA ASSISTANT",
    href: "docs/hack(cosmos-wallets)/SA ASSISTANT",
    description: "Not Provided(coming soon)",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/7954b508-9ff0-4416-9aba-16209b571000?projectId=2f05ae7f1116030fde2d36508f472bfb",
    items: [],
  },
  {
    title: "Impact Wallet",
    href: "docs/hack(cosmos-wallets)/Impact Wallet",
    description: "Not Provided(coming soon)",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/afc85418-2ca6-46cf-cfb9-daf6bc43e400?projectId=2f05ae7f1116030fde2d36508f472bfb",
    items: [],
  },
  {
    title: "DOSI Vault",
    href: "docs/hack(cosmos-wallets)/DOSI Vault",
    description: "Not Provided(coming soon)",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/0a0d223e-6bf7-4e12-a5b4-1720deb02000?projectId=2f05ae7f1116030fde2d36508f472bfb",
    items: [],
  },
  {
    title: "f(x)Wallet",
    href: "docs/hack(cosmos-wallets)/f(x)Wallet",
    description: "Not Provided(coming soon)",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/bdd2f39b-98fa-485d-b180-bf4a42fa6100?projectId=2f05ae7f1116030fde2d36508f472bfb",
    items: [],
  },
]
let cosmos_wallet = [
  {
    title: "Omni",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/2cd67b4c-282b-4809-e7c0-a88cd5116f00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Frontier",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/a78c4d48-32c1-4a9d-52f2-ec7ee08ce200?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "SafePal",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/252753e7-b783-4e03-7f77-d39864530900?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "MathWallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/26a8f588-3231-4411-60ce-5bb6b805a700?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Cypher Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/7bce0965-a4cc-4aad-6217-009d51017500?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Essentials",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/058878f4-7364-4e01-434f-2cc09a15cf00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Leap Cosmos Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/73e6b2b2-8c02-42e9-84f5-82a859978200?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Keplr",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/527324b0-3849-462b-9a1a-72b53bdfea00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "MPCWallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/636ff7d4-79ce-41d6-ede5-85c9f8a1d900?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "XDEFI Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/efec6318-7f96-4b30-9287-6c287660cd00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Cosmostation",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/ea26c3c8-adb6-4dc4-ee02-35d6eee02800?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "UKISS Hub",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/23f4c933-68e6-46f9-75b6-2d2905ca1300?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "SA ASSISTANT",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/7954b508-9ff0-4416-9aba-16209b571000?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Impact Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/afc85418-2ca6-46cf-cfb9-daf6bc43e400?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "DOSI Vault",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/0a0d223e-6bf7-4e12-a5b4-1720deb02000?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "f(x)Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/bdd2f39b-98fa-485d-b180-bf4a42fa6100?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
]
let passport_statergies
let passport_statergy = [
  {
    title: "ABAKUS",
    href: "https://github.com/webkom/passport-abakus",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/abakus.com",
    items: [],
  },
  {
    title: "ACCOUNTKIT",
    href: "https://github.com/andyet/passport-andyet",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/accountkit.com",
    items: [],
  },
  {
    title: "ANDYET",
    href: "https://github.com/mko/passport-appdotnet",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/andyet.com",
    items: [],
  },
  {
    title: "ANGELLIST",
    href: "https://github.com/maxcoto/passport-assembla",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/angellist.com",
    items: [],
  },
  {
    title: "ANIMEXX",
    href: "https://github.com/SargoDarya/passport-animexx",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/animexx.com",
    items: [],
  },
  {
    title: "AOL",
    href: "https://github.com/DavidSpriggs/passport-arcgis",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/aol.com",
    items: [],
  },
  {
    title: "APPDOTNET",
    href: "https://github.com/jaredhanson/passport-aol",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/appdotnet.com",
    items: [],
  },
  {
    title: "APPFIGURES",
    href: "https://github.com/jaredhanson/passport-angellist",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/appfigures.com",
    items: [],
  },
  {
    title: "APPLE",
    href: "https://github.com/SpiderStrategies/passport-appfigures",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/apple.com",
    items: [],
  },
  {
    title: "ARCGIS",
    href: "httpsgithub.com/authic/passport-authic",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/arcgis.com",
    items: [],
  },
  {
    title: "ASSEMBLA",
    href: "https://github.com/abembecker/passport-avalon",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/assembla.com",
    items: [],
  },
  {
    title: "AUTHENTIQ",
    href: "https://github.com/willin/passport-authing",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/authentiq.com",
    items: [],
  },
  {
    title: "AUTHIC",
    href: "https://github.com/horiuchi/passport-authtoken",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/authic.com",
    items: [],
  },
  {
    title: "AUTHING",
    href: "https://github.com/BrettThePark/passport-accountkit",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/authing.com",
    items: [],
  },
  {
    title: "AUTHTKT",
    href: "https://github.com/thinkerous/passport-bamboohr",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/authtkt.com",
    items: [],
  },
  {
    title: "AUTHTOKEN",
    href: "https://github.com/ananay/passport-apple",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/authtoken.com",
    items: [],
  },
  {
    title: "AVALON",
    href: "https://github.com/reydelleon/passport-basecrm",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/avalon.com",
    items: [],
  },
  {
    title: "BAIDU",
    href: "https://github.com/xiaoao/passport-baidu",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/baidu.com",
    items: [],
  },
  {
    title: "BAMBOOHR",
    href: "https://github.com/janbaykara/passport-basecamp",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/bamboohr.com",
    items: [],
  },
  {
    title: "BASECAMP",
    href: "https://github.com/datmark/passport-beatsmusic",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/basecamp.com",
    items: [],
  },
  {
    title: "BASECRM",
    href: "https://github.com/fastman/passport-beatport",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/basecrm.com",
    items: [],
  },
  {
    title: "BEATPORT",
    href: "https://github.com/junmer/passport-bong",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/beatport.com",
    items: [],
  },
  {
    title: "BEATSMUSIC",
    href: "https://github.com/DBCDK/passport-borchk",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/beatsmusic.com",
    items: [],
  },
  {
    title: "BEHANCE",
    href: "https://github.com/dreadjr/passport-bitly",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/behance.com",
    items: [],
  },
  {
    title: "BITLY",
    href: "https://github.com/SpringRole/passport-civic",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/bitly.com",
    items: [],
  },
  {
    title: "BONG",
    href: "https://github.com/jaredhanson/passport-browserid",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/bong.com",
    items: [],
  },
  {
    title: "BORCHK",
    href: "https://github.com/metacommunications/passport-behance",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/borchk.com",
    items: [],
  },
  {
    title: "BROWSERID",
    href: "https://github.com/octoblu/passport-citrix",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/browserid.com",
    items: [],
  },
  {
    title: "BUFFERAPP",
    href: "https://github.com/AuthentiqID/passport-authentiq",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/bufferapp.com",
    items: [],
  },
  {
    title: "CAMPAIGNMONITOR",
    href: "https://github.com/Redsmin/passport-clevercloud",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/campaignmonitor.com",
    items: [],
  },
  {
    title: "CITRIX",
    href: "https://github.com/sebastiendb/passport-bufferapp",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/citrix.com",
    items: [],
  },
  {
    title: "CIVIC",
    href: "https://github.com/brainflake/passport-campaignmonitor",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/civic.com",
    items: [],
  },
  {
    title: "CLEVERCLOUD",
    href: "https://github.com/rajaraodv/passport-cloudfoundry",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/clevercloud.com",
    items: [],
  },
  {
    title: "CLOUDFOUNDRY",
    href: "https://github.com/optilude/passport-authtkt",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/cloudfoundry.com",
    items: [],
  },
  {
    title: "CLOUDUP",
    href: "https://github.com/stephenlacy/passport-cloudup",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/cloudup.com",
    items: [],
  },
  {
    title: "COINBASE",
    href: "https://github.com/karelskopek/passport-costlocker",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/coinbase.com",
    items: [],
  },
  {
    title: "CONSTANTCONTACT",
    href: "https://github.com/brainflake/passport-constantcontact",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/constantcontact.com",
    items: [],
  },
  {
    title: "COOLA",
    href: "https://github.com/cooladata/passport-coola",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/coola.com",
    items: [],
  },
  {
    title: "COSTLOCKER",
    href: "https://github.com/idris/passport-coinbase",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/costlocker.com",
    items: [],
  },
  {
    title: "CUSTOM",
    href: "https://github.com/auth0/passport-daccount",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/custom.com",
    items: [],
  },
  {
    title: "DACCOUNT",
    href: "https://github.com/mbell8903/passport-custom",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/daccount.com",
    items: [],
  },
  {
    title: "DAILYMOTION",
    href: "https://github.com/OtaK/passport-dailymotion",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/dailymotion.com",
    items: [],
  },
  {
    title: "DATAPORTEN",
    href: "https://github.com/Uninett/passport-dataporten",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/dataporten.com",
    items: [],
  },
  {
    title: "DESCOPE",
    href: "https://github.com/descope/passport-descope",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/descope.com",
    items: [],
  },
  {
    title: "DESKCOM",
    href: "https://github.com/Mistat/passport-deskcom",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/deskcom.com",
    items: [],
  },
  {
    title: "DEVIANTART",
    href: "https://github.com/lablayers/passport-deviantart",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/deviantart.com",
    items: [],
  },
  {
    title: "DICE",
    href: "https://github.com/esabelhaus/passport-dice",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/dice.com",
    items: [],
  },
  {
    title: "DIGG",
    href: "https://github.com/jaredhanson/passport-digg",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/digg.com",
    items: [],
  },
  {
    title: "DIGITALOCEAN",
    href: "https://github.com/harbur/passport-digitalocean",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/digitalocean.com",
    items: [],
  },
  {
    title: "DOUBAN",
    href: "https://github.com/ktmud/passport-douban",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/douban.com",
    items: [],
  },
  {
    title: "DOWJONES",
    href: "https://github.com/dowjones/passport-dowjones",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/dowjones.com",
    items: [],
  },
  {
    title: "DRAUGIEM",
    href: "https://github.com/EriksRemess/passport-draugiem",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/draugiem.com",
    items: [],
  },
  {
    title: "DRCHRONO",
    href: "https://github.com/sebabelmar/passport-dribbble",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/drchrono.com",
    items: [],
  },
  {
    title: "DRIBBBLE",
    href: "https://github.com/Nimblr/passport-drchrono",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/dribbble.com",
    items: [],
  },
  {
    title: "DROPBOX",
    href: "https://github.com/jaredhanson/passport-dwolla",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/dropbox.com",
    items: [],
  },
  {
    title: "DWOLLA",
    href: "https://github.com/zaption/passport-edmodo",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/dwolla.com",
    items: [],
  },
  {
    title: "EDMODO",
    href: "https://github.com/jaredhanson/passport-dropbox",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/edmodo.com",
    items: [],
  },
  {
    title: "EHEALTH",
    href: "https://github.com/io84team/passport-ethereum",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/eHealth.com",
    items: [],
  },
  {
    title: "ELOQUA",
    href: "https://github.com/watsoncj/passport-eloqua",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/eloqua.com",
    items: [],
  },
  {
    title: "ETHEREUM",
    href: "https://github.com/muradaliyev/passport-eve",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/ethereum.com",
    items: [],
  },
  {
    title: "EVE",
    href: "https://github.com/mbrennan/passport-eveonline",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/eve.com",
    items: [],
  },
  {
    title: "EVEONLINE",
    href: "https://github.com/auth0/passport-exact",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/eveonline.com",
    items: [],
  },
  {
    title: "EVERNOTE",
    href: "https://github.com/Everyplay/passport-everyplay",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/evernote.com",
    items: [],
  },
  {
    title: "EVERYPLAY",
    href: "https://github.com/elmariachi111/passport-eyeem",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/everyplay.com",
    items: [],
  },
  {
    title: "EXACT",
    href: "https://github.com/may215/passport-feedly",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/exact.com",
    items: [],
  },
  {
    title: "EYEEM",
    href: "https://github.com/didikeke/passport-fanfou",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/eyeem.com",
    items: [],
  },
  {
    title: "FACEBOOK",
    href: "https://github.com/jaredhanson/passport-familysearch",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/facebook.com",
    items: [],
  },
  {
    title: "FACEIT",
    href: "https://github.com/jaredhanson/passport-fitbit",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/faceit.com",
    items: [],
  },
  {
    title: "FAMILYSEARCH",
    href: "https://github.com/johnnyhalife/passport-flickr",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/familysearch.com",
    items: [],
  },
  {
    title: "FANFOU",
    href: "https://github.com/MichaelJCole/passport-freshbooks",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/fanfou.com",
    items: [],
  },
  {
    title: "FEEDLY",
    href: "https://github.com/jaredhanson/passport-foursquare",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/feedly.com",
    items: [],
  },
  {
    title: "FELLOWSHIPONE",
    href: "https://github.com/sebastiendb/passport-geeklist",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/fellowshipone.com",
    items: [],
  },
  {
    title: "FITBIT",
    href: "https://github.com/jaredhanson/passport-evernote",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/fitbit.com",
    items: [],
  },
  {
    title: "FLIC",
    href: "https://github.com/jaredhanson/passport-geoloqi",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/flic.com",
    items: [],
  },
  {
    title: "FLICKR",
    href: "https://github.com/octoblu/passport-flic",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/flickr.com",
    items: [],
  },
  {
    title: "FORCEDOTCOM",
    href: "https://github.com/Technoblazed/passport-faceit",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/forcedotcom.com",
    items: [],
  },
  {
    title: "FOURSQUARE",
    href: "https://github.com/jaredhanson/passport-goodreads",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/foursquare.com",
    items: [],
  },
  {
    title: "FRESHBOOKS",
    href: "https://github.com/jaredhanson/passport-google",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/freshbooks.com",
    items: [],
  },
  {
    title: "GEEKLIST",
    href: "https://github.com/globelabs/passport-globelabs",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/geeklist.com",
    items: [],
  },
  {
    title: "GEOLOQI",
    href: "https://github.com/jaredhanson/passport-facebook",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/geoloqi.com",
    items: [],
  },
  {
    title: "GHOST",
    href: "https://github.com/jaredhanson/passport-gowalla",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/ghost.com",
    items: [],
  },
  {
    title: "GITHUB",
    href: "https://github.com/TryGhost/passport-ghost",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/github.com",
    items: [],
  },
  {
    title: "GLOBELABS",
    href: "https://github.com/hairyhenderson/passport-fellowshipone",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/globelabs.com",
    items: [],
  },
  {
    title: "GOODREADS",
    href: "https://github.com/andrewwiik/passport-groupme",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/goodreads.com",
    items: [],
  },
  {
    title: "GOOGLE",
    href: "https://github.com/jfromaniello/passport-hawk",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/google.com",
    items: [],
  },
  {
    title: "GOWALLA",
    href: "https://github.com/joshbirk/passport-forcedotcom",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/gowalla.com",
    items: [],
  },
  {
    title: "GROUPME",
    href: "https://github.com/SamyPesse/passport-gumroad",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/groupme.com",
    items: [],
  },
  {
    title: "GUMROAD",
    href: "https://github.com/getlot/passport-headhunter",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/gumroad.com",
    items: [],
  },
  {
    title: "HACKID",
    href: "https://github.com/Nibbler999/passport-honeywell",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/hackid.com",
    items: [],
  },
  {
    title: "HAWK",
    href: "https://github.com/jaredhanson/passport-http",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/hawk.com",
    items: [],
  },
  {
    title: "HEADHUNTER",
    href: "https://github.com/jaredhanson/passport-hotp",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/headhunter.com",
    items: [],
  },
  {
    title: "HMAC",
    href: "https://github.com/brainflake/passport-hubspot",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/hmac.com",
    items: [],
  },
  {
    title: "HONEYWELL",
    href: "https://github.com/tusbar/passport-idn",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/honeywell.com",
    items: [],
  },
  {
    title: "HOTP",
    href: "https://github.com/saviogl/passport-idsus",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/hotp.com",
    items: [],
  },
  {
    title: "HTTP",
    href: "https://github.com/jaredhanson/passport-github",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/http.com",
    items: [],
  },
  {
    title: "HUBSPOT",
    href: "https://github.com/mindfreakthemon/passport-imgur",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/hubspot.com",
    items: [],
  },
  {
    title: "HUMANAPI",
    href: "https://github.com/meefik/passport-ifmosso",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/humanapi.com",
    items: [],
  },
  {
    title: "IDENTITYUA",
    href: "https://github.com/poliveira89/passport-identityua",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/identityua.com",
    items: [],
  },
  {
    title: "IDN",
    href: "https://github.com/humanapi/passport-humanapi",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/idn.com",
    items: [],
  },
  {
    title: "IDSUS",
    href: "https://github.com/mko/passport-indieauth",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/idsus.com",
    items: [],
  },
  {
    title: "IFMOSSO",
    href: "https://github.com/jaredhanson/passport-intuit",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/ifmosso.com",
    items: [],
  },
  {
    title: "IMGUR",
    href: "https://github.com/soichih/passport-iucas",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/imgur.com",
    items: [],
  },
  {
    title: "INDIEAUTH",
    href: "https://github.com/HackBerkeley/passport-hackid",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/indieauth.com",
    items: [],
  },
  {
    title: "INFOTJENESTER",
    href: "https://github.com/itasdesk/passport-infotjenester",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/infotjenester.com",
    items: [],
  },
  {
    title: "INTUIT",
    href: "https://github.com/kiwiai/passport-jawbone",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/intuit.com",
    items: [],
  },
  {
    title: "IONISX",
    href: "https://github.com/IONISx/passport-ionisx",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/ionisx.com",
    items: [],
  },
  {
    title: "IUCAS",
    href: "https://github.com/chatter/passport-hmac",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/iucas.com",
    items: [],
  },
  {
    title: "JAWBONE",
    href: "https://github.com/jaredhanson/passport-justintv",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/jawbone.com",
    items: [],
  },
  {
    title: "JSON",
    href: "https://github.com/kizzlebot/passport-lastfm",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/json.com",
    items: [],
  },
  {
    title: "JUSTINTV",
    href: "https://github.com/taoyuan/passport-lims",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/justintv.com",
    items: [],
  },
  {
    title: "JWT",
    href: "https://github.com/nitzo/passport-line",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/jwt.com",
    items: [],
  },
  {
    title: "KEYSTONE",
    href: "https://github.com/jaredhanson/passport-linkedin",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/keystone.com",
    items: [],
  },
  {
    title: "KUALI",
    href: "https://github.com/chrux/passport-liondesk",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/kuali.com",
    items: [],
  },
  {
    title: "LASTFM",
    href: "https://github.com/tiberule/passport-mailru",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/lastfm.com",
    items: [],
  },
  {
    title: "LIMS",
    href: "https://github.com/jaredhanson/passport-local",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/lims.com",
    items: [],
  },
  {
    title: "LINE",
    href: "https://github.com/girliemac/passport-lyft",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/line.com",
    items: [],
  },
  {
    title: "LINKEDIN",
    href: "https://github.com/guruward/passport-medoauth",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/linkedin.com",
    items: [],
  },
  {
    title: "LIONDESK",
    href: "https://github.com/patbonecrusher/passport-mapmyfitness",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/liondesk.com",
    items: [],
  },
  {
    title: "LOCAL",
    href: "https://github.com/JamesMGreene/passport-json",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/local.com",
    items: [],
  },
  {
    title: "LYFT",
    href: "https://github.com/eddywashere/passport-keystone",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/lyft.com",
    items: [],
  },
  {
    title: "MAILRU",
    href: "https://github.com/techfeed/passport-mastodon",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/mailru.com",
    items: [],
  },
  {
    title: "MALTIO",
    href: "https://github.com/homebrewing/passport-maltio",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/maltio.com",
    items: [],
  },
  {
    title: "MAPMYFITNESS",
    href: "https://github.com/KualiCo/passport-kuali",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/mapmyfitness.com",
    items: [],
  },
  {
    title: "MASTODON",
    href: "https://github.com/seanfisher/passport-microsoft",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/mastodon.com",
    items: [],
  },
  {
    title: "MEDOAUTH",
    href: "https://github.com/jaredhanson/passport-meetup",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/medoauth.com",
    items: [],
  },
  {
    title: "MEETUP",
    href: "https://github.com/mikenicholson/passport-jwt",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/meetup.com",
    items: [],
  },
  {
    title: "MERCADOLIBRE",
    href: "https://github.com/sdurandeu/passport-mercadolibre",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/mercadolibre.com",
    items: [],
  },
  {
    title: "METOCEAN",
    href: "https://github.com/metocean/passport-metocean",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/metocean.com",
    items: [],
  },
  {
    title: "MICROSOFT",
    href: "https://github.com/cquartier/passport-misfit",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/microsoft.com",
    items: [],
  },
  {
    title: "MISFIT",
    href: "https://github.com/xmikus01/passport-mojeid",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/misfit.com",
    items: [],
  },
  {
    title: "MIXCLOUD",
    href: "https://github.com/mjpearson/passport-mixcloud",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/mixcloud.com",
    items: [],
  },
  {
    title: "MOJEID",
    href: "https://github.com/msyea/passport-nationbuilder",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/mojeid.com",
    items: [],
  },
  {
    title: "MOVES",
    href: "https://github.com/billglover/passport-moves",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/moves.com",
    items: [],
  },
  {
    title: "MYMLH",
    href: "https://github.com/DonutsInBelly/passport-mymlh",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/mymlh.com",
    items: [],
  },
  {
    title: "NAMELY",
    href: "https://github.com/mykabam/passport-namely",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/namely.com",
    items: [],
  },
  {
    title: "NATE",
    href: "https://github.com/pukapukan/passport-nate",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/nate.com",
    items: [],
  },
  {
    title: "NATIONBUILDER",
    href: "https://github.com/Nibbler999/passport-netatmo",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/nationbuilder.com",
    items: [],
  },
  {
    title: "NETATMO",
    href: "https://github.com/sylis/passport-nopassword",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/netatmo.com",
    items: [],
  },
  {
    title: "NETFLIX",
    href: "https://github.com/Leko/passport-nextengine",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/netflix.com",
    items: [],
  },
  {
    title: "NEXON",
    href: "https://github.com/mamsori/passport-nexon",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/nexon.com",
    items: [],
  },
  {
    title: "NEXTENGINE",
    href: "https://github.com/jaredhanson/passport-netflix",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/nextengine.com",
    items: [],
  },
  {
    title: "NOPASSWORD",
    href: "https://github.com/elisee/passport-nuclearhub",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/nopassword.com",
    items: [],
  },
  {
    title: "NPM",
    href: "https://github.com/nuwehq/passport-nuwe",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/npm.com",
    items: [],
  },
  {
    title: "NUCLEARHUB",
    href: "https://github.com/jaredhanson/passport-oauth",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/nuclearhub.com",
    items: [],
  },
  {
    title: "NUWE",
    href: "https://github.com/nyuadsg/passport-nyu",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/nuwe.com",
    items: [],
  },
  {
    title: "NYU",
    href: "https://github.com/octoblu/passport-octoblu",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/nyu.com",
    items: [],
  },
  {
    title: "OAUTH",
    href: "https://github.com/dglittle/passport-odesk",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/oauth.com",
    items: [],
  },
  {
    title: "OCTOBLU",
    href: "https://github.com/onshape/passport-onshape",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/octoblu.com",
    items: [],
  },
  {
    title: "ODESK",
    href: "https://github.com/jaredhanson/passport-openstreetmap",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/odesk.com",
    items: [],
  },
  {
    title: "OHLOH",
    href: "https://github.com/jaredhanson/passport-ohloh",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/ohloh.com",
    items: [],
  },
  {
    title: "ONSHAPE",
    href: "https://github.com/73rhodes/passport-opentoken",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/onshape.com",
    items: [],
  },
  {
    title: "OPENIDCONNECT",
    href: "https://github.com/malikov/passport-parse",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/openidconnect.com",
    items: [],
  },
  {
    title: "OPENSTREETMAP",
    href: "https://github.com/ilivebox/passport-oschina",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/openstreetmap.com",
    items: [],
  },
  {
    title: "OPENTOKEN",
    href: "https://github.com/godaddy/passport-npm",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/opentoken.com",
    items: [],
  },
  {
    title: "OSCHINA",
    href: "https://github.com/jaredhanson/passport-persona",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/oschina.com",
    items: [],
  },
  {
    title: "OUTLOOK",
    href: "https://github.com/jaredhanson/passport-paypal",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/outlook.com",
    items: [],
  },
  {
    title: "PARSE",
    href: "https://github.com/phantauth/passport-phantauth",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/parse.com",
    items: [],
  },
  {
    title: "PASSPRINT",
    href: "https://github.com/DFTinc/passport-passprint",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/passprint.com",
    items: [],
  },
  {
    title: "PAYPAL",
    href: "https://github.com/pixiv/passport-pixiv",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/paypal.com",
    items: [],
  },
  {
    title: "PERSONA",
    href: "https://github.com/jaredhanson/passport-picplz",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/persona.com",
    items: [],
  },
  {
    title: "PHANTAUTH",
    href: "https://github.com/playlyfe/passport-playlyfe",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/phantauth.com",
    items: [],
  },
  {
    title: "PICPLZ",
    href: "https://github.com/Siedrix/passport-pocket",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/picplz.com",
    items: [],
  },
  {
    title: "PIXIV",
    href: "https://github.com/mjpearson/passport-podio",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/pixiv.com",
    items: [],
  },
  {
    title: "PLAYLYFE",
    href: "https://github.com/jaredhanson/passport-openidconnect",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/playlyfe.com",
    items: [],
  },
  {
    title: "POCKET",
    href: "https://github.com/combsco/passport-predix",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/pocket.com",
    items: [],
  },
  {
    title: "PODIO",
    href: "https://github.com/clocked0ne/passport-outlook",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/podio.com",
    items: [],
  },
  {
    title: "POLKASPOTS",
    href: "https://github.com/codervince/passport-proz",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/polkaspots.com",
    items: [],
  },
  {
    title: "PREDIX",
    href: "https://github.com/punwave/passport-punwave",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/predix.com",
    items: [],
  },
  {
    title: "PROZ",
    href: "https://github.com/timfpark/passport-publickey",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/proz.com",
    items: [],
  },
  {
    title: "PUBLICKEY",
    href: "https://github.com/qdsang/passport-qq",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/publickey.com",
    items: [],
  },
  {
    title: "PUNWAVE",
    href: "https://github.com/gologo13/passport-rakuten",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/punwave.com",
    items: [],
  },
  {
    title: "QQ",
    href: "https://github.com/jaredhanson/passport-rdio",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/qq.com",
    items: [],
  },
  {
    title: "RAKUTEN",
    href: "https://github.com/jaredhanson/passport-readability",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/rakuten.com",
    items: [],
  },
  {
    title: "RAVEN",
    href: "https://github.com/octoblu/passport-redbooth",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/raven.com",
    items: [],
  },
  {
    title: "RDIO",
    href: "https://github.com/ForbesLindesay/passport-redgate",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/rdio.com",
    items: [],
  },
  {
    title: "READABILITY",
    href: "https://github.com/xinbenlv/passport-renren",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/readability.com",
    items: [],
  },
  {
    title: "REDBOOTH",
    href: "https://github.com/REscour/passport-rescour",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/redbooth.com",
    items: [],
  },
  {
    title: "REDGATE",
    href: "https://github.com/ekristen/passport-replicated",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/redgate.com",
    items: [],
  },
  {
    title: "RENREN",
    href: "https://github.com/AlisamfP/passport-rightsignature",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/renren.com",
    items: [],
  },
  {
    title: "REPLICATED",
    href: "https://github.com/jaredhanson/passport-runkeeper",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/replicated.com",
    items: [],
  },
  {
    title: "RESCOUR",
    href: "https://github.com/mrquincle/passport-sense",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/rescour.com",
    items: [],
  },
  {
    title: "RIGHTSIGNATURE",
    href: "https://github.com/mtso/passport-ses",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/rightsignature.com",
    items: [],
  },
  {
    title: "RUNKEEPER",
    href: "https://github.com/PolkaSpots/passport-polkaspots",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/runkeeper.com",
    items: [],
  },
  {
    title: "SENSE",
    href: "https://github.com/octoblu/passport-sharefile",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/sense.com",
    items: [],
  },
  {
    title: "SES",
    href: "https://github.com/QuePort/passport-sharepoint",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/ses.com",
    items: [],
  },
  {
    title: "SHAREFILE",
    href: "https://github.com/dlochrie/passport-signature",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/sharefile.com",
    items: [],
  },
  {
    title: "SHAREPOINT",
    href: "https://github.com/sitegate/passport-sitegate",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/sharepoint.com",
    items: [],
  },
  {
    title: "SIGNATURE",
    href: "https://github.com/ForbesLindesay/passport-raven",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/signature.com",
    items: [],
  },
  {
    title: "SITEGATE",
    href: "https://github.com/rustinpc/passport-slice",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/sitegate.com",
    items: [],
  },
  {
    title: "SLICE",
    href: "https://github.com/octoblu/passport-smartsheet",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/slice.com",
    items: [],
  },
  {
    title: "SMARTSHEET",
    href: "https://github.com/jaredhanson/passport-soundcloud",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/smartsheet.com",
    items: [],
  },
  {
    title: "PASSPORTS.MD",
    href: "https://github.com/jaredhanson/passport-smugmug",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/passports.md.com",
    items: [],
  },
  {
    title: "SMUGMUG",
    href: "https://github.com/octoblu/passport-square",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/smugmug.com",
    items: [],
  },
  {
    title: "SOUNDCLOUD",
    href: "https://github.com/geNAZt/passport-stackexchange",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/soundcloud.com",
    items: [],
  },
  {
    title: "SQRL",
    href: "https://github.com/reinbach/passport-stash",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/sqrl.com",
    items: [],
  },
  {
    title: "SQUARE",
    href: "https://github.com/zoowar/passport-statusnet",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/square.com",
    items: [],
  },
  {
    title: "SSQSIGNON",
    href: "https://github.com/ssqsignon/passport-ssqsignon",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/ssqsignon.com",
    items: [],
  },
  {
    title: "STACKEXCHANGE",
    href: "https://github.com/simov/passport-stocktwits",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/stackexchange.com",
    items: [],
  },
  {
    title: "STANFORD",
    href: "https://github.com/vincentpeyrouse/passport-supinfo",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/stanford.com",
    items: [],
  },
  {
    title: "STASH",
    href: "https://github.com/kitak/passport-suzuri",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/stash.com",
    items: [],
  },
  {
    title: "STATUSNET",
    href: "https://github.com/7elephants/passport-teamsnap",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/statusnet.com",
    items: [],
  },
  {
    title: "STOCKTWITS",
    href: "https://github.com/Thinkful/passport-thinkful",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/stocktwits.com",
    items: [],
  },
  {
    title: "STORMPATH",
    href: "https://github.com/AlisamfP/passport-thingiverse",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/stormpath.com",
    items: [],
  },
  {
    title: "SUPINFO",
    href: "https://github.com/tmobile/passport-tmobileid",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/supinfo.com",
    items: [],
  },
  {
    title: "SUZURI",
    href: "https://github.com/andreskir/passport-tiendanube",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/suzuri.com",
    items: [],
  },
  {
    title: "TEAMSNAP",
    href: "https://github.com/erikmav/passport-sqrl",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/teamsnap.com",
    items: [],
  },
  {
    title: "THINGIVERSE",
    href: "https://github.com/heroicyang/passport-tqq",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/thingiverse.com",
    items: [],
  },
  {
    title: "THINKFUL",
    href: "https://github.com/dupesnduds/passport-trademe",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/thinkful.com",
    items: [],
  },
  {
    title: "TIENDANUBE",
    href: "https://github.com/jaredhanson/passport-tripit",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/tiendanube.com",
    items: [],
  },
  {
    title: "TISTORY",
    href: "https://github.com/tradier/passport-tradier",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/tistory.com",
    items: [],
  },
  {
    title: "TMOBILEID",
    href: "https://github.com/johnkernke/passport-twitchtv",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/tmobileid.com",
    items: [],
  },
  {
    title: "TQQ",
    href: "https://github.com/jaredhanson/passport-twitter",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/tqq.com",
    items: [],
  },
  {
    title: "TRADEME",
    href: "https://github.com/scottylogan/passport-stanford",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/trademe.com",
    items: [],
  },
  {
    title: "TRADIER",
    href: "https://github.com/stormpath/passport-stormpath",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/tradier.com",
    items: [],
  },
  {
    title: "TRIPIT",
    href: "https://github.com/johann8384/passport-ubersmith",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/tripit.com",
    items: [],
  },
  {
    title: "TWITCH",
    href: "https://github.com/l0gd0g/passport-ucoz",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/twitch.com",
    items: [],
  },
  {
    title: "TWITCHTV",
    href: "https://github.com/JasonSanford/passport-underarmour",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/twitchtv.com",
    items: [],
  },
  {
    title: "TWITTER",
    href: "https://github.com/DBCDK/passport-unilogin",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/twitter.com",
    items: [],
  },
  {
    title: "UBERSMITH",
    href: "https://github.com/shuhei/passport-untappd",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/ubersmith.com",
    items: [],
  },
  {
    title: "UCOZ",
    href: "https://github.com/superpan/passport-ustream",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/ucoz.com",
    items: [],
  },
  {
    title: "UFSHIB",
    href: "https://github.com/octoblu/passport-uservoice",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/ufshib.com",
    items: [],
  },
  {
    title: "UNDERARMOUR",
    href: "https://github.com/jihokoo/passport-venmo",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/underarmour.com",
    items: [],
  },
  {
    title: "UNILOGIN",
    href: "https://github.com/saltfactory/passport-tistory",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/unilogin.com",
    items: [],
  },
  {
    title: "UNTAPPD",
    href: "https://github.com/jaredhanson/passport-vimeo",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/untappd.com",
    items: [],
  },
  {
    title: "USERVOICE",
    href: "https://github.com/thunderblaster/passport-vivokey",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/uservoice.com",
    items: [],
  },
  {
    title: "USTREAM",
    href: "https://github.com/xinbenlv/passport-weibo",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/ustream.com",
    items: [],
  },
  {
    title: "UWSHIB",
    href: "https://github.com/Schmoopiie/passport-twitch",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/uwshib.com",
    items: [],
  },
  {
    title: "VENMO",
    href: "https://github.com/hysios/passport-wanliu",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/venmo.com",
    items: [],
  },
  {
    title: "VERIFY",
    href: "https://github.com/wyntau/passport-weixin",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/verify.com",
    items: [],
  },
  {
    title: "VIMEO",
    href: "https://github.com/crohead13/passport-ufshib",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/vimeo.com",
    items: [],
  },
  {
    title: "VIVOKEY",
    href: "https://github.com/mko/passport-withings",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/vivokey.com",
    items: [],
  },
  {
    title: "WAAD",
    href: "https://github.com/tuddman/passport-wink",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/waad.com",
    items: [],
  },
  {
    title: "WANLIU",
    href: "https://github.com/mjpearson/passport-wordpress",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/wanliu.com",
    items: [],
  },
  {
    title: "WEBMAKER",
    href: "https://github.com/surevine/passport-xmpp",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/webmaker.com",
    items: [],
  },
  {
    title: "WEIBO",
    href: "https://github.com/jaredhanson/passport-yahoo",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/weibo.com",
    items: [],
  },
  {
    title: "WEIXIN",
    href: "https://github.com/Lewuathe/passport-yj",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/weixin.com",
    items: [],
  },
  {
    title: "WINK",
    href: "https://github.com/jozzhart/passport-youtube",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/wink.com",
    items: [],
  },
  {
    title: "WITHINGS",
    href: "https://github.com/drstearns/passport-uwshib",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/withings.com",
    items: [],
  },
  {
    title: "WORDPRESS",
    href: "https://github.com/ZengineHQ/passport-zengine",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/wordpress.com",
    items: [],
  },
  {
    title: "WORKWELL",
    href: "https://github.com/alphagov/passport-verify",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/workwell.com",
    items: [],
  },
  {
    title: "XMPP",
    href: "https://github.com/ColinEdwardRhodes/passport-waad",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/xmpp.com",
    items: [],
  },
  {
    title: "YAHOO",
    href: "https://github.com/mozilla/passport-webmaker",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/yahoo.com",
    items: [],
  },
  {
    title: "YJ",
    href: "https://github.com/emathieu13/passport-workwell",
    description: "Not Provided(coming soon)",
    logo: "https://logo.clearbit.com/yj.com",
    items: [],
  },
]
// cosmos_wallet.map((wallets) => {
//   cosmos_wallets = `{title:"${wallets.title}",href:"docs/hack(cosmos-wallets)/${wallets.title}",description:"Not Provided(coming soon)",logo:"${wallets.logo}",items:[]},`;
//   console.log(cosmos_wallets);
// })
let evm_dapps = []
let evm_dapp = [
  [
    {
      title: "Unstoppable Domains",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/4725dda0-4471-4d0f-7adf-6bbe8b929c00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "NFTClue",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/e8b0bd29-5933-4d1b-aabf-9c70e9f71200?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "PresaleWorld",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/1c62c0bb-1910-4650-4b5e-3996b0241000?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "OpenBiSea",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/bc1e1eab-51e6-4a9c-9923-50ad934c3c00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Equaminity",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/46979590-cfd3-467e-8c46-94f378761000?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "DeeLance",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/c75409d6-a93a-4478-7ee9-5ce37a6ee300?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "LlamaNodes",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/e0239d64-ded7-4475-64f9-db9671318a00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Firn Protocol",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/24dddd0a-081f-47a9-912b-2b1281161e00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "OpenSea",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/c441b686-1a37-4976-c56c-f18d62167f00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Tokoin",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/fa6db10e-23bc-46f2-a48a-5cffda3c1200?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "DuckHub",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/26abcd48-c480-40a1-5e9f-6e0d02a52700?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "TEXAN",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/0f885df6-1659-48fc-1ac4-f5a1bc995f00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "centic",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/636ade5a-5c0c-4474-c5ed-63efc172e000?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Uniswap",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/32a77b79-ffe8-42c3-61a7-3e02e019ca00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Proof of Visit",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/c763ef2f-fb24-4249-09f1-b45920825c00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Xplus Bridge",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/90e2b797-63fc-4bd1-3e0c-80bdedb03e00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "MoonFit",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/0821c1a6-4d51-4407-39af-7f51e48bf500?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "ETHRank",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/d7e41e1e-eab7-4e1b-e659-739f1a176100?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Furucombo",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/5d0213c8-e6f2-45f4-574e-658b230c1100?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "defitact",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/002bb73b-3980-4272-144f-baacc1d80100?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "xbanking",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/6848316c-eed7-4f57-f41e-729209744d00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "LearnWeb3",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/5b019d7a-ac89-473c-73ec-8f9f28646600?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "T2T2",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/cbc788c1-ee9a-4ec0-8477-4a790d634100?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Social Blocks",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/e4daac55-fe61-4d75-3c46-12b6aa819f00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Signals - Crypto",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/e43d6517-5946-4dae-f0ba-5c77500cbe00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Odos",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/798758d9-0424-4213-59f0-077c4c82c000?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "XBANKING",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/5c5d025b-c11f-4798-4473-b2656bc20e00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "dHEDGE",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/61dab8e9-b690-47b3-e2b6-5cd37aa56d00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "gm-dapp",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/32b894e5-f91e-4fcd-6891-38d31fa6ba00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "BuyWithCrypto",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/5e9f0c86-896d-4197-9e27-540f5cab1500?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "HieSwap",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/6f972c32-92fd-42b6-050c-013106798e00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "DeFund protocol",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/d25edcee-b598-46c2-223d-384ebe61e800?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "oxalus",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/443f0e59-3581-462d-3b60-94eb7072b700?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Unlock Protocol",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/33559b57-ef50-4845-1368-2f7aca93cd00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Forest Knight",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/9299d79c-9050-489c-6e4d-58ca21900900?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Graflr",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/defebabe-7c57-4227-36d2-8da000812000?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Bitriel",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/7ce959cc-75cc-4c34-fdfd-a23dccb0ec00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Bring.Bridge",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/c006472d-dbb4-4488-8151-951e634fcb00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "ColdStack",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/7cf55b42-3dd3-43f1-0a2d-efd2ba529a00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Loopop! - IN LOVE & LOVE-IN",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/64f02531-1c5a-4bff-4e0d-d1b4cdf4fe00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "dHEDGE",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/61dab8e9-b690-47b3-e2b6-5cd37aa56d00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "gm-dapp",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/32b894e5-f91e-4fcd-6891-38d31fa6ba00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "BuyWithCrypto",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/5e9f0c86-896d-4197-9e27-540f5cab1500?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "White Red",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/a83712f6-be74-483c-2bc0-4f9876311400?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "HieSwap",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/6f972c32-92fd-42b6-050c-013106798e00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "DeFund protocol",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/d25edcee-b598-46c2-223d-384ebe61e800?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "oxalus",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/443f0e59-3581-462d-3b60-94eb7072b700?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Unlock Protocol",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/33559b57-ef50-4845-1368-2f7aca93cd00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Forest Knight",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/9299d79c-9050-489c-6e4d-58ca21900900?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Quixotic",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/b26df0fb-8e79-4f70-4d33-3e4a3b633600?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Graflr",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/defebabe-7c57-4227-36d2-8da000812000?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Bitriel",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/7ce959cc-75cc-4c34-fdfd-a23dccb0ec00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Bring.Bridge",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/c006472d-dbb4-4488-8151-951e634fcb00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Obligate",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/6344b95c-f41f-4eef-42b6-655c58225400?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Profit AI",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/abe6c7ae-2232-4508-ab53-f0184edc7900?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "rsolv",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/85d5aa64-bbb6-4e36-b84a-2383e9a23500?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "ColdStack",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/7cf55b42-3dd3-43f1-0a2d-efd2ba529a00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Loopop! - IN LOVE & LOVE-IN",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/64f02531-1c5a-4bff-4e0d-d1b4cdf4fe00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "SparkSwap Apps",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/ec22b9bf-a23d-4000-0c27-b82e2648d500?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "OpenZoo",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/02dd1b47-814b-4a6d-b07b-21318cf15200?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "HashLeap",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/ed234d31-a5b6-4485-e69b-995ed1fe1600?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Origin Story",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/8e447c12-ee5f-4816-abf1-9b32d350cc00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "ApeX Pro",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/ee476afd-5740-4e37-52ef-99004b5f7d00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Embraced - Pandora",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/f848ab21-d263-47bf-e842-505a662cc000?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Crypto Multisender",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/b66e17ca-0d82-4f67-8fd5-bcf0afa5c100?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Orbitum Space",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/61ac653b-0990-4407-d7f3-84a6551a1600?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Origin Dollar",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/904c81d0-8dd6-41e0-64ec-4213917a6100?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "EvoVerses",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/6b01ae35-a747-4146-fd6a-564fc2e05800?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "rhino.fi",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/34c1c8ef-4b6e-4643-bd21-59dc1b157600?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "O3 Swap",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/30cc15bb-d695-4991-4ff2-8ab25aceac00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Liquifi",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/2f6895b1-65b0-4bcf-9960-65c90d345f00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Moon Web3 Identity",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/4fe1501c-abb9-4efd-a914-807a2ecdab00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "HashGuessers",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/b7051db9-1d4f-4fe3-9241-f577d0cad400?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Lens Claiming",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/4c9fc1b1-d3b9-4967-4d82-b3ae20594400?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Swappy",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/21bd1f6c-47b7-432d-7e2f-08b7479c2a00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Ekta wallet web",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/d292290e-580a-48b1-7ab0-f35fec878b00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Connext Bridge",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/f4c99c1e-9c69-4326-a578-1b604ff2cc00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "ApolloX DEX",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/792d4120-3bed-4e4d-af7d-759575697a00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Dashboard",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/4bf3892c-3183-457f-cdca-795d08a2c000?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Increment Finance",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/e72e0875-6f45-4384-2d21-ce89af35a600?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "HyperX Fund",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/946144b6-93c3-4564-01de-1d19b0cdde00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Parcel Payroll",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/4d7f8226-e8c0-4e67-934a-93753a2ce700?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Galleria",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/4bdd8c4f-50d8-48ef-6d76-0b5fc97fec00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Yuzumax",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/65d3228b-3973-4586-d38f-dc27c2a59a00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Affine Defi",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/b4eb15e9-f4e9-489b-f320-3d5e52319a00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "WEB3JE",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/36ab8eb1-24e8-46a7-7765-0c840f0dc200?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "HERE Stake",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/c6d4992b-c10c-45aa-a0e4-8f2d060d5c00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "trace-gift",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/916c8480-a52d-4f4c-82b5-47cac8c84300?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Genesis game",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/5d8e8c94-7a81-42b6-d23f-8d42317b5000?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "cryptonames",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/4897b984-2bbf-4652-9927-08c3d4602d00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "THORSwap",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/4dc14f23-9d37-419c-12c2-11bc14960600?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Synthex",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/7a85a803-5798-45b2-4fac-da08984b1600?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "VEXMETA",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/78592b0e-5cb1-4661-ab97-248bc8437b00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "OpenTheta",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/8a7296f6-d66b-417e-cb81-9e94d92d1500?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "FTSOLottery",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/e95851ad-7dab-45f6-e603-041a309a4700?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "swappin.gifts",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/4cbf8c4b-2d77-4d50-770f-e04c33ee4700?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Sensei Token",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/ff2f3f6d-8cf9-4f19-9334-6c6ce925fb00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Interface",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/6b96c30f-c42f-4e1f-9a15-159614f13600?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Elemon",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/857717bb-ee58-4862-4e1d-01c8a6437c00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "OIX",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/418b0bda-b679-4023-7532-b9c2006d5000?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Zapper",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/94b7adda-4a61-4895-17a7-1c6023ab4900?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Contributor Credits",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/02238c0c-7fd9-4b89-646a-fbbae0e09b00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Quick Intel",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/a201bc4a-c148-4ce7-b652-a3174ede0700?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Akemona",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/6dd2eca7-26dc-4b5e-10da-7ed75e987400?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "PlanckX",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/03253f02-c4fa-48ce-dca7-cd3ad45e3c00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "degen-zoo-frontend",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/32d9600e-4b6c-46bf-d2b9-6c4ce09f6900?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "payinloop",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/474da7a7-452e-4ab5-a398-82bb31eaa300?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "elyfi-v2",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/e70a022f-a3e0-46e5-fa2c-343cfe1f5e00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Snap-shack - Cyberbrokers",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/bfc1b1e1-5fcb-4f9e-5809-e87402f35900?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Comm",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/01b10752-a572-4539-0feb-f0d5ac527700?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Riverex",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/5e4bc1f5-384f-40cf-153c-d8c29a813e00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Origin Ether",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/5e7e8a35-7264-47b2-b0f5-5620082e5100?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Kazm",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/1061a625-4465-41f6-19a8-1f1c3f052400?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "TraderDAO",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/cd2574fb-fcf7-4310-0d6f-ce56f6a64800?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Oraqle",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/5256ba7e-78e2-4104-47ea-64fb08968200?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Wanchain Web3 Domains",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/20a7f566-f0f0-4ae1-9f21-cb04c72cd600?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Elastos Name Service",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/38cb3365-3491-4e63-b0be-411d01ccb600?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Theta Rarity",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/320a77bc-9dd9-44fb-0309-7fc176e1e500?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Pala",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/efa42e1a-4f60-4bd0-b3ef-9cfe7c51b000?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Transaction Manager",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/4137a831-24e8-4863-1315-d2450c9d0d00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "VirtueSekai",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/270acc2c-5039-4163-9c61-757fd62c6f00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Balancer",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/4d7870f3-49cb-4ef8-c596-b56e4ecac300?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Perpetual Protocol",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/9acec2d8-d1e1-4488-77ed-da8a1d972800?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Zealy",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/8ba42d2f-10c9-4619-9e69-f69c5af0d300?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "DOMANI",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/7f5fd743-f952-4f87-e09f-ee07b08ff800?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Mask Network",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/51fa27fd-8a21-4de0-c084-528e4a37ad00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Award Pool",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/4d0695c4-c6a4-4d94-390d-8bb7d3f94300?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "RentaFi",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/7bb06709-7844-44dc-fe40-759f37cbf000?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Beamer Bridge",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/67749288-0024-4e9c-0d81-92bc29fcb500?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Radxu Foundation",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/de6ce11f-a1eb-4d51-1abf-ed029034ce00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "gearbox",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/1a65764f-9da8-44ec-6aa4-a9811eca9c00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "handle.fi",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/1a1d4c89-4027-4898-4584-f5bd38bdc700?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "DAOhaus",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/d79bb29d-b7ad-4d0b-4dac-6b7ba4e63c00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "OptimisticLoogies",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/7db28d2b-67f1-4d44-4dfc-2449ca934a00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Yooshi",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/8eeb0596-8b4c-4f57-731f-cd8251c65500?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Yup",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/fa1ad282-9050-4bd6-9aba-53711c4e2a00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Token Tool by Bitbond",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/bf8b4771-c440-4fae-74df-cde8baf52f00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Kennel",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/4f603719-a612-4487-44f3-2999f9482d00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Carrier",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/39624901-25c0-41e6-b091-8434045d4700?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "impactMarket",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/31013d00-b990-4892-4a6f-5e7bd41bd200?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "CivTrade",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/1f03356e-b2e3-44b5-308e-0f0920395900?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Delta.theta",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/259af5fa-66e6-4bb5-f6f4-5a3711ba8e00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Ultron Explorer",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/ef957cf1-6d32-44b4-751c-bc4d063e6000?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Hop",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/c5aa0003-53b8-42c1-3a13-f625cce24700?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "SparkSwap",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/6937b24b-acc9-4196-116a-280b31edd800?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "A-NATION ",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/57f20a3f-db39-4450-3ed7-3d5f9e233000?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "DIFIMarket",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/667a1aa0-2f4a-4a64-a1a6-44b5f7e09600?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "LeisurePay",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/29298e7f-7beb-4cde-416c-b8ac27b37300?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "ABCavocado",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/b373e216-dca9-46cc-b20f-50dcc3017a00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "DEEPSPACE - Outpost",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/54d6935e-f65f-4637-d763-88b3c5c4d700?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "NFT Multisender",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/e6f55847-524a-4594-abc3-89a166a01300?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Ketos",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/53bf83cb-f83a-4874-ad18-ab1416998600?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Octus Bridge",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/b716f5f3-302d-4188-b679-3ca2873c5400?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Moox",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/fae5b45c-b9cd-4eb4-b5af-d8af9d60f500?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "PWN",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/ced226a0-5dc8-4704-defd-112f45756800?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "DipoleSwap",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/c6e89c12-a3b4-4d39-5fa2-009f1dd03c00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Connect3",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/1cb4c660-34c9-4bcb-27ae-6582f6895d00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Mango",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/78b67117-7234-4fa1-177c-f03c01e37100?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Faye",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/f23601e4-3f9e-4ab1-c865-6b0394944d00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Elacity",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/fb0a18e9-b41d-481f-c819-8321309f9a00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Elk Finance",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/ef5558e9-8dc0-4e63-ed97-977d6c8b5400?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Tengri.io",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/9f9f3be8-02ce-45fa-3230-dd19cc375600?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Maimun Ape Social Club",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/578a3426-83d9-4a6a-7efc-dc4d2ea1fe00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Hazed",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/2c18b0a4-0b79-4ed6-9bfb-7e4886b8da00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Cask Protocol",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/556ff608-b55f-4899-1a66-8a9c82af0900?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Rango Exchange",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/18a09060-e7d3-4d27-1c70-c2547c472d00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "ZooKeeper",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/379fa8e7-b74b-462e-8dce-12d1366a0400?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "DopamineApp",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/cd1b993c-4266-4d17-be8f-0bd8abe9d800?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "NFTxCards Marketplace",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/3358ad9d-92e1-47a0-4a18-139c54d72000?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "ShapeShift",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/70b73b01-bd10-4a32-4f81-73327ef20e00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Trivians",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/f17e44da-96f7-44c1-3293-759168156200?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Fusion Web3 Domains",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/15d837e0-e4d9-4c29-d3f3-79858a41bf00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "0xPlasma Finance",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/0b442c16-962d-4de8-a575-968899cb3d00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Delta One",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/11ac53de-cfdc-40a9-49b0-b409d5619e00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "IDriss",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/323ee39c-ab38-4374-c313-a370e1a2ec00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Marinade Finance",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/75c0c024-8b6d-4687-d695-906111b57300?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "DEXStein",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/a739e624-f0a0-48db-bc92-341b52211c00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "ixir",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/237acac5-62c5-47cb-41a2-5911c3b62700?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Ovn",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/2441a1c4-657c-4b8e-e649-153c0c9c6b00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Wan Bridge",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/7203a7fe-d59a-4ecc-8806-da44c8274600?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Mailchain",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/a5e4aa78-c5a5-4c48-5fda-61dd318e5400?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "extractodao-dev",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/c6e4749b-3e0b-4e60-cd4d-fcc382966a00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Chroma Signet",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/f5de7f14-5d71-413b-5f4b-3c15fc87f200?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Mintage NFT",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/9a7b92c3-8856-4fa7-4d06-f4f76ccaf200?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "LATOKEN Multichain DeFi Wallet",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/ff858a37-cbcb-413d-c1ed-917a444bea00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "ChainJet",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/eeb55835-3b62-4526-a7f2-221616029000?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "onepunch",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/b62e5044-a118-46c6-cc60-c554dede0400?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "DEXCoinApp",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/1e8b0139-f516-4eb9-9038-1ea25795db00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Gaspack App",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/7ba121b2-3bd0-477e-f77b-ed0286535c00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "1inch Network",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/94244950-09b0-402e-6af4-0364de77cb00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Daolize App",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/cab6de41-d75d-4002-fd2a-80a1a32c5100?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "SoQuest",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/860ed30c-4c8f-4bb1-6f3c-baee26402c00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Hakka",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/b8d54557-a828-4325-10fa-eac10b695d00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Occam Razer",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/03582a22-eb46-4aef-6645-b02fc0891000?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Hakka Intelligence",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/a45dd38c-3d23-4aca-9aa5-790bc1e55d00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Wild.xyz",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/28d0e845-1632-421f-3d1c-c9d66f072e00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Fiat24",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/f3cee5bc-1b04-4299-fe8f-a9e49f167300?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "HAQQ Shell",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/c2ce7eb8-2a46-4963-dc76-7c14bd9fdf00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Cypher DApp",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/3b357d4f-6dc8-4972-2997-5b4f0daa9700?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Rainbow Bridge",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/f7eeadf0-0af8-41f0-7c60-de90e0bbd800?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "FRAX",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/f0625a53-b3b5-4d0d-dad0-915a8a3b6700?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Vitreus presale app",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/a969c889-2b94-4067-14da-19504d232500?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "cointool",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/16fedc28-750c-4a2b-f995-a4ffc961e900?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Mirror.xyz",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/33417f93-e4c8-4296-d52c-2797c5133800?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Manifold Studio",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/0e7a7ae2-81e4-42ae-f34a-f400237d3a00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "SmurfyCash",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/261d30cc-a9ce-41ce-6a0c-05317b3fc500?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "PASTELLE.SHOP",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/f2de0e75-5dbd-4cc7-dde5-a76ee48a2200?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "BabyDoge NFT",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/f2dc7c6b-1880-4cf7-abcd-b789331a4700?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "GymStreet",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/dbf6fa1d-5126-4dbf-6845-c0cf3d9d1400?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "spores",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/de94cb2c-466f-466a-05e6-abd00d42bc00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "AKKA Finance",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/9977ab7b-7863-4815-e70c-6ca25cc0af00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "LOOT8",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/f647104c-166b-406b-6e2f-20173ac85400?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "orcafi",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/46b23770-c5e8-46ca-f2e9-b10051981500?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Intelligent Monsters",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/8022a918-247e-4f52-6ac8-d3078b31d000?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Ipermatch App",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/c8b5ba4f-b3be-4bc1-55ed-c6a56a8aef00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "AirLyft",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/30c400e2-3321-4589-f740-abb67e2ca600?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Party",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/0ef6e0fa-6cf0-460a-2f31-abe28bd28f00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "OnePlanetNFT",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/17362e34-9dea-487c-0dea-67e70a00a600?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "DeSchool",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/545fbc72-3004-4c01-03c1-5dc76bbf4100?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "SmartPay",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/525bb17b-6698-46a1-dce9-d85f55ee5d00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Aeon Universe",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/0eae5d99-47f4-44f4-e237-dccf911a7200?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Level Finance",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/26e740b7-fb5e-458a-7579-6c1abe8af400?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "鲸希 WhaleSee",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/d77d0fdc-da88-44a1-c009-da62a1efd400?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "ParaSwap Dapp",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/27f07a3e-235e-41c3-e893-f3a55a235200?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "NFTX V2",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/5f034c2f-dba1-4c38-10de-0b84d7a60e00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "NEARStarter",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/130bef2d-a490-4980-7d73-f494d509a600?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "BGMS",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/da89576f-2ea4-4e79-02a3-a0106989b800?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "paraspace_nft",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/e15682d5-98d2-4ebb-1fc0-0c4f081cdd00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "hope",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/c5ffe2aa-387e-41b1-3c00-f601f7645d00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "RTLOL.com",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/309ac1ca-9bcb-4345-6c2f-f6e89e068400?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "ZaynFi",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/40f7abb1-c0ed-4781-cc0d-73fd2c4feb00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "anotherblock",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/7fd87417-abf1-4583-887a-f25ed3c3e000?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "INX PRODUCTION",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/3f804ae4-b2a2-4431-4fca-4a936aefbf00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Champions Ascension",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/dacebc25-3394-4e4d-0d63-3487f3ee5f00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Ensurer",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/fa1a2741-3b3f-43d8-a30a-7622dedb4200?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Pooky",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/df095d9b-0491-462a-ac1f-f11bbd1ed200?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "psfm-stage-dapp",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/7a51d40b-d63f-4baa-f54b-97130daedc00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Covalent",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/0a04a1f9-bf25-4c8d-b1a6-5901e11d0400?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "AQUA",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/bb6c0345-7bf1-4c22-bfc4-9c1c019a2b00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "MUFEX",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/f5ac728c-7bdd-464e-ec74-d70e814c5b00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "pacer",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/2ad4041a-8467-4d3d-99c5-6c5fadb24500?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Shell Protocol",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/c5fad91f-2161-4236-44e0-279ebb3a8a00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "WalkingDoggo",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/fc16c76b-a831-48b7-0e7b-e637f4757500?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "kiwinews",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/81cc9a92-6f17-4a5e-ec8f-904639806400?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "ESF Tools",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/4e0981d1-9fb6-4f43-5659-f7ff89c98f00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "rhino.fi",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/7d0d6eb9-172c-45f3-ce70-37716b0f5100?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "AiDoge",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/50df1cff-c22a-4320-fd2a-e0952e590900?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Holyheld",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/07a77698-b67c-444f-37d3-312784d4ab00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Centrifuge App",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/9e6c6bf2-7a57-4d3d-7b81-a4ed98e6bd00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "JumpTask",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/71e7c85c-65f8-458a-2ebd-4832f30dee00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Transit Swap",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/b25487a6-71e8-4719-80c3-3439b965aa00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Covey Legends",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/75a2b3e4-ec3c-495a-9f4f-d7bd4883dc00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Nouns DAO",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/c3c7d842-85a9-45b1-27ed-440208fee400?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "ThingsIX",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/81eb4ebe-af72-4857-f1e1-84026d895a00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Valorem",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/b52cddc6-59c5-45d1-8229-4c0a7cd1c000?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "beethovenx",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/cc1bdc0f-04f9-4f1a-4735-772764d7c900?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "DeBox",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/d8a6e4ee-b9b9-4a31-c4fd-cc67fdc7b200?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "angelblock",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/6d0ba66b-1a3e-4eb7-5c82-7e5c11c85700?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "KryptoGO Studio",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/3296518f-eee5-44fa-1378-d10caf77b200?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "O3 Swap",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/8248b85b-38a0-47bd-73a5-23f5929c9900?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "dew.gg",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/2aec8399-54b8-4b6e-fa30-9448b1c6db00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "SonorusApp",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/2abe8bf2-e939-4237-e4b4-04b8a6adf100?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "DeFi Saver",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/9484adb2-1ba3-48aa-c25a-9782f4725900?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Rage On Wheels",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/9fcbef0b-91c8-4cdc-a2fd-d514ec05a800?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Bulksender",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/d9c995d7-833a-41c0-d0f8-61847e2e9700?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Maple Finance",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/b4c8f73a-d8ba-4d0f-30a0-89f7a41a1600?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "ListingSpy",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/928b8be6-77f0-425b-8f75-5c5bb8b6a200?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Raffl",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/f7e16382-1591-4c55-6015-3f0215860900?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Staked Celo",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/386004d1-be5f-46f2-7640-f86ed3550e00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Supercart",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/c275bb6d-e381-43cb-0bc5-58052fe59400?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Liker Land",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/01f006a2-4340-4777-da41-401df88e4c00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Flare Focus FCX",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/4058ab76-d193-495f-2bec-09ec2e1caf00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "DeGame",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/d92223d8-fead-4485-c1fa-7d8812bb8b00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Summer.fi",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/9e963794-e2b1-4ccc-647f-2ea6d49bad00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Gravita Protocol",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/69b6ea2c-64fc-40d9-a0fd-e932dcf5ef00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Tranchess",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/b69115ff-59e1-4bfc-6cf2-6a609ecd9900?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "mtkb4gud",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/6687c001-74aa-4433-0699-d20ca5d1b700?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "12Swap",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/68de74ae-14f2-448e-bb78-73a8ed7b5800?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Agave",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/1be9e862-e15f-4016-fcda-bcc2ab8c1100?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Dispatch",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/8e801bc5-8066-41e2-a904-c7db5eb75c00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "BikeToken.io",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/e5452f72-b1b1-4d3c-bd03-c9745a501800?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Illiquid Market",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/f425dc83-ce29-4aa2-e164-2d4535254300?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "NiftyFair",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/10d5c3f5-f7bb-40fe-57a5-aa36a1c25000?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "osean",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/ffc2749d-b369-4051-4d47-1c3042dca700?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Opepen",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/ff6090c2-d83f-43f7-5d6d-1533dceefd00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "nftb.io",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/435cdc1b-22df-4a11-c614-2b17e482a800?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Bet Clover",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/590a5fd7-1771-4f6e-8b6f-1df0552fb700?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Revert",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/44e1baf0-0f94-4652-776c-a5ab1fd22e00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Golden Inuverse",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/d1951339-0eb0-45ba-0e9a-ca2bc931e400?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Roco.Finance: Payment",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/a174f4b7-47dc-4897-3d6e-63d4b452fe00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "OneLottery",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/4f186052-4a32-4b1d-725a-aac1a5bd3d00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "tvn",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/b3d8f6f1-828d-4b29-649a-3f133cb00000?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "TemplarDAO",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/5fde0020-c7b6-45e2-ab37-75ae5fdec700?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Brewlabs",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/442f9ea7-8f85-4982-7b75-a6cb175b4a00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "NewVerse",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/6e7d5178-5b48-4c93-f3de-9cda331d6400?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Augmentlab USC Dex Client",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/4f20c9e8-b678-4846-0129-0d9d16c4aa00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Mantle Revoke",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/a2d99496-613c-4a0c-f228-465ec25f0300?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Yearn",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/3b0d6a68-f45e-4f12-e07f-e6ddc99d8100?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Metapro",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/afc27761-e3ab-43f4-823a-25424bae3400?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "MarsNext",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/bc0b5c0f-102f-464f-d28c-9c4c342e8a00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Cyan",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/959889ab-bd61-4c5d-f09c-f15fbece5500?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "ReHold",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/1787525e-e0ad-40a2-38e1-a31ac0578600?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Unvest",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/9c75da45-5991-422a-782a-aef09014e900?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Polymarket",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/fdec2e00-e9b7-433c-c0e0-ae92ea69dd00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Forward",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/ad477dbe-f194-4a71-8013-781f180ad400?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Bankless Academy",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/82a21879-5c1c-4a76-d5b6-18c5eee37e00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "mummy.finance",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/2d1cfa73-01e0-4b5b-7eff-8bebff447000?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "X Heroes: NFT War",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/e47022ea-579d-498a-eae9-0e9a57905200?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "KlubX",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/157d653c-d6c4-420a-fb15-30db73d6ac00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "MCapital",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/396d8118-53b2-4907-dc81-3e2e21196200?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "aaa",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/7303f73b-dcb7-42f0-059e-7576d1176000?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Xfai",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/b5a8157c-8d1d-47f0-a067-6cfc527b5900?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Eternumland",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/9fc7337f-57dc-4fbd-f328-f86b71ead400?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Anichess",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/6dedb7c3-1843-454d-0f59-e20c7393f600?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "iDos Games",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/1b1f1dd7-97ad-4318-8e95-dd269fb56100?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Labralords",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/87ed2316-bc13-4a76-a998-6642f86bfa00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "mipool",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/f3df9a65-d570-4fb0-ef44-413409d32900?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Avantis",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/d6c4395e-9ce9-43f2-494e-b2c227bfbe00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "D3cards",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/71ecad1a-5dc6-4ef1-becf-2a5facd44b00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Seashell",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/2e27f677-c33e-4dc0-4b59-db06fa364500?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Artichoke",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/2c5c252d-0978-41cd-b888-e1f8efd1b500?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Spirit-DAO",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/75fbeebd-e178-4037-3688-9c393c935b00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Chain Of Legends",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/2b887a49-70c5-4b66-ce64-16655bf92200?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Azenbu",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/9c395022-8a8f-484e-1bbc-8cf705d12b00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Champz",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/51eab07b-179c-4b13-65dc-a1691294ed00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "staff-only",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/217d4ff5-6b84-41ff-3d45-fdd60f642800?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Veggies Farm NFT Game",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/e920d0bc-8580-445f-e388-2027eeaf3a00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "tokentool",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/8e6f2fed-74d1-4e0f-16bd-7522e9060300?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "ProofX",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/1dca9cec-12a7-4cf6-a542-319330e80f00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "NTV",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/8039e3ac-0077-423d-08ce-f660fdca2d00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "repoint",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/629778cc-e51e-4a07-e799-eb9c624cf300?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "PaintSwap",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/1c4ee590-6bb2-4b7f-0be8-39bb17d36400?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "voltech",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/25a9a77e-085a-4fb1-a7f1-79d7084f2c00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "oopa.io",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/fa86741a-9976-4568-703a-7d1428583600?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "KinkBNB",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/aa417a9a-75b7-4485-10bd-1a0d610c5600?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Stablz",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/7b2a6e70-4cfc-4869-7900-172b76617d00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "AIPTP",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/57c756e1-c11e-4b75-2e5c-5832b3af1e00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "ShopNEXT",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/bbcbc4e8-5c6c-4b7d-542f-01f69d5b9000?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Buffer Finance",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/71eb0732-7226-4afa-a49c-63a488300c00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Showtime",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/f93c4f94-af93-4d46-5f75-704d3acba400?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Mar3",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/973ffffe-403e-48b9-c59a-a3ea651f1500?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "SingularityDAO",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/88c066b8-c76e-4e8e-22b6-0a1894e7ad00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Token Mapper",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/d5de64e9-b8aa-455a-ecc3-0fd064d78500?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "dexGo",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/06700f39-2388-4389-b824-5bd4992e1c00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Dexter",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/ee8dae0d-ab63-490e-f23f-3d1a86a02c00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Alya.Finn",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/3002318b-8c8f-48d3-6413-b679cfeae400?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Collectz.xyz",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/5a111a57-d259-4267-1b07-083a252c9d00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "box",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/40db6c25-e203-40ef-bb51-40e42c4d2000?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Monetha",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/70fc63b1-f469-4c26-2073-4da1c6a97700?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Silo Finance",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/8de6eb09-ab4f-481b-e7ba-fc85b1c08300?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "escrowsg",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/90678373-8e37-4222-626c-bfab2bbd9100?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "ElmonX",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/573c0d09-f092-431b-9873-b79143b64800?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "ApeSpace",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/a2052df9-cd21-4b9e-5a4e-8695230b1900?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Bebop",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/9289f4da-5eef-4ea5-9da0-91767f607100?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Extra Finance",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/97f3eb73-8c23-49e3-affa-20fa066b0200?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Trackstats",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/9569c6dc-2b43-4d07-e51e-047874545200?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Airdrop Gameswift",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/7045f051-4800-487e-ed93-07ed252e2b00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "AuxoDAO",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/2ffb6e1f-0009-42f5-f58c-9bfae703e400?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "DOLZ",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/4dc8bf15-78e4-4c9f-2e23-d4ad3f6c1600?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "TKN: Token Name Service",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/7f739904-d570-4c1b-a5b1-9fddf0927a00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "artong",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/cca8ec5f-b050-45f8-1b82-f7ce89514400?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "ETHGlobal",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/8b76996f-4a6d-4633-a570-7d0c1591f300?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "RAMSES",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/9e5e7797-a483-4ea1-069f-c4d9682c7200?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Grand Rising Community",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/9b077f95-7b90-43fe-97d5-aec619b04b00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Holograph Develop",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/5de1f79a-c6fc-47f4-f679-067aa02f0600?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Startmining",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/a41a177c-4d58-46ca-a7a4-24180071dd00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Request Finance",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/b84bd8d7-73cd-48f0-b7e8-56831df0b200?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Polychain Islands",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/d99a3202-4f36-4e34-3e90-e8239be9aa00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "POAP.TOP",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/bd3e08b0-aa07-4648-a13e-d0e9b0359500?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "AssetXChange",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/31a81a32-16ad-4ae5-9802-dcaac7e25c00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "uaht.io",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/3af0afeb-9bf9-4b5f-a3ab-a78ff0622200?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "MacaronSwap",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/04bdac2f-edc2-4240-9ba6-06ff65a55c00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Cointacted",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/9513029e-15aa-4893-f326-ff09b1a79600?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Sunlight",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/7a954eab-248c-43a6-a2ec-dc3e1a3b3400?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "bfd.com",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/61387b8e-2413-4a7a-940c-299eef06f100?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Dexi Staking",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/e0d53864-764f-463a-4901-b700270e1d00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Akita",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/ac1aa9bc-7400-455f-4337-56d712ed8a00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "CryptoPay",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/7c9070ac-aa84-4aa5-5a35-3210e2153400?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Unore",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/cabfb9c1-1248-43c5-2b20-7f363a7b3300?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Sarafu Network",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/4890be69-b713-465d-95fd-1e4fc12ea700?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "DAO4ART",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/2d910be2-f624-4041-8d91-5c53dbbc1700?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "thehug.xyz",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/27e35eb1-764c-4b9f-e709-8a50485aa200?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "zurf",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/2766f0cc-3fda-4534-b2e0-7a391992a300?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Curve",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/8d2e0355-979e-478b-ffca-5dfc60621500?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "YaYa",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/a2a10a1e-6bdd-463c-b203-188fdfa69500?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Artwear",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/d9d4b3db-5f7e-48ef-9a88-dfedb7f7f300?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "dropspace",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/e8d98e69-a4d8-4a1a-6b9b-54a876b26800?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "MightyNet",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/2b72cbd7-68d8-4712-880f-422c28f41200?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "StakeWise",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/ca7b99b9-2e32-42e3-49aa-d4ab2a6a3300?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "The BonVant",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/b5cbcb39-0f29-40d2-d3e4-8ad17b934f00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Crybu",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/f1115544-8753-41e0-579b-72759ce56200?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "team.finance",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/0b1eae76-5a1b-432c-8448-b93f143e2800?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Baby Doge Swap Widget",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/ef73ea75-3de7-4dcc-01c5-739cd89b6d00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Baby Doge Chess",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/fe894c30-2ca1-4023-b07c-61bdce85a700?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "SFT protocol",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/950eb247-2621-4986-eb7b-6acabc3d9d00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Upside",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/0d389631-d0ff-4567-354c-3ca3db57ef00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "AlphaGuilty",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/b4f13a5f-e0e9-485f-c8c5-3f582def7700?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Olive",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/113734e2-7470-4ca3-2ee7-223aa8b31800?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Movez",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/18b7c663-380c-4874-9db9-3a60974bf100?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Gamezone",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/7e13c948-714c-4a36-d0f7-e1cc10514100?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "curve-dapp",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/5cacceb0-eafe-43a9-4482-72e51cd74000?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "KRILLER",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/77149469-ca56-4fb9-2421-50e635629200?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Gangster All Star - Bounties",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/40501a49-11a2-43e3-6d9a-16f0e2224100?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Anonymice",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/7b1fbdab-6854-45f8-5b6d-6224b8156b00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Algofi",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/91b3648c-b1c1-4ddc-c34c-01ebcfe77800?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Rodeo",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/6f667c18-e219-417d-7360-62bee5dda700?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Alpha Academy",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/722818f1-0f64-487a-3df0-2de03b5f4c00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Cere Bridge",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/71d511e3-b648-4915-191e-6f2e89b6cd00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Vulkania",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/2bb9cee4-97ba-4c4f-be4b-b5aa56f11c00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "tomi staking",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/c893760e-3b2e-414d-66aa-faee507d3000?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Comoco",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/5873e6a0-0d5d-4441-8bb5-bde299f39f00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "treasure",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/95529a95-df14-4430-baa1-04bfb5e94400?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Housefly",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/58918f63-0610-47df-bcef-535d7318a500?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "R-Planet",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/ed76b1c0-6380-4c67-8723-a81edb9cfa00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "NFT Jungle",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/e50980e9-2c14-42dd-5dbd-b917b8fff000?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "MakeMoney",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/aba55093-d550-432e-281f-da8ffb274100?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "XRP Toolkit",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/e4e9885f-aa1e-46d2-dc51-426ee6f19b00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Sneakmart - Metakicks",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/5108b088-4f48-4b54-27fc-154e76338100?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Umbra",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/407935e9-7818-4141-962b-ca04b7243200?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "THE REMADE",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/f9f77498-2f86-4d34-4397-a342e89d9b00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "BIBIGO",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/35229071-26b6-4a9b-113a-d602c6e84800?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "lifeform",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/5ae51767-201a-43c8-944a-f95d147f1900?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Decentraplace",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/7b755e83-010f-41cc-09fd-0e514e38e900?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "PartyFinance",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/9c95f0d7-dc83-46e8-1067-a51c77a50a00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Stems",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/c7df4c52-cd12-4217-5737-e759fc699900?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Landrocker website v2",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/3ebb9fa0-1033-4056-9742-1399a28ac800?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "demarket",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/67d19626-987d-4ebb-29c7-75374a952900?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Bluespade",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/04129eea-321d-47d1-6c7d-e64afdd72000?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Loop2Earn",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/e0305629-d6ad-4e3c-501f-8fe7b1afcd00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "vMM Bots",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/706fc4dc-61e4-44bc-1323-1d7d137d9b00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "hamsterfinance",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/6004fbf5-99de-47d4-b65d-4d3715176000?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Flooz",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/0037677c-302d-47c1-c58a-4fb2ef8b1200?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Floor",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/ada4d35d-5e67-4258-9ac9-8f4a10436100?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Apeiron - Marketplace",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/ec6e2c7a-6218-419f-33c5-7e38e5a8d700?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "ARK",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/52797e15-e1be-4bd6-4676-81094782cd00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "metalink",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/8581ffd5-7cd6-43ed-bb96-c12fb89ea300?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "BRX by Breathonics",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/55c70d22-d025-4bfd-f552-80510b411700?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Sirius by Humanity",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/a53d3074-db0c-4073-e36f-b7f527b71f00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Deputy Network",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/da583549-abb0-41de-b79f-52f699fc7000?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Moonwell",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/a8d9c657-b3ef-43b3-5dba-1547cc892000?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "LI.FI Widget",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/02262803-8738-4a60-8389-dfe99257ff00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "dodao.dev",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/0e3df9cd-6a1a-444e-1f84-b7972017aa00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "WalletChat",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/ea3f1bc7-4ab4-42a5-047a-8a2fadf8c200?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "REKTMODE",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/6847439c-cce2-4595-617d-980eefafd300?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "RociFi",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/994d977e-3688-4c44-3846-cee9fb4cec00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Mintopoly",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/cf86c801-8c41-492d-6c69-a5133b6e2a00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Ēnosys Bridge",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/cfbc5af5-6540-4794-4673-e1f93c468c00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Earnifi",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/2db32b73-2c8d-4e68-533b-56af963eaa00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Fungies",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/cffd86f8-be6c-4842-b0d6-74440571c700?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Gallery",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/850b4b3e-0d25-4894-c3f8-2525a3130700?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "zkSync Portal",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/7a5a8301-e368-4ad9-7ee1-7164a1cfa400?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "0xFreelance",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/198efc33-3031-41ed-872f-f1485cd88900?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Mars4",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/8a2ab283-9f1d-4054-4553-56bae31bc000?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Valha Widget",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/4692016a-597d-4a8d-7534-2ecc2b54cb00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Ibanera Launchpad",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/3daeb9e6-2958-4f19-a583-c91b5fcbd700?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Sparta DEX  APPs",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/866e8b12-6bd9-4638-2e5b-c3dfdad1a200?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "DeCert.me",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/3b4e1a99-fa1d-47ed-d6c9-077295258000?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Smoldapp",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/73907e18-23b2-4630-4b55-4ebcc74e3100?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Platform Gameswift",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/f9f99c5e-edf4-4001-e3a0-bd75a548ce00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Luxrare",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/9f8f6998-c69e-4574-1e38-a06a4f6e4100?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "staking.dxpool",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/d1c096a3-fcea-457c-6ba5-de23e7aad800?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Belong Network",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/73a00234-90a5-498e-6ed9-a6e7ed5e5c00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "bitoro",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/184ea89c-4287-431e-1866-cf1ea5d0a100?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "dEquity",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/60fc01b1-21ff-4200-fdcd-d2dd62a40800?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Lens Invites",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/d95037da-701c-4427-1472-7c9df0aa0900?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Solid World",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/78104649-a22f-4544-1f04-99ac0a43f400?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Fanbase.io Website",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/feebd35d-22cb-41f7-cf4e-ac90428e4f00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Luxrare",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/b231f188-468e-46f2-5248-78d1688d7d00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "UXUYProtocol",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/0db35545-440c-49ba-b772-dd13c2270400?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Mars Protocol",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/59df2c82-fd72-4cb0-5d4b-9591b6808500?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Ethena",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/e2f02001-f0f7-4c44-dcef-8faca29c4a00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "PancakeSwap",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/a88292d3-272c-4d72-70e8-e8efdddf2400?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "SecondLive",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/ab5be236-bf69-46b4-b1d2-451e4b6c2400?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "HEX TOYS",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/26bb1a41-3ff7-4f5c-8d82-f5539f261600?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "NFTDeli",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/063977d4-27ae-4bb1-8873-35cb1649e500?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Magna",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/5dd108a9-55b1-4004-1bad-fc454b88f100?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Palmswap",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/0eb1182b-e08c-4c73-62a3-7af18f259c00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Axelarscan",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/3b8f0470-51d9-4a43-6cf9-8508e2ef1e00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "coincapone",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/51da33ba-366b-4766-1bde-ceb79d087d00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Directory",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/0d12d56d-8120-453a-1d72-e556c7f8ed00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Superlink",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/27c5100c-6f01-4bd3-d433-4dae774a3000?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "KoinX - Production",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/b79212d1-9865-4389-0af7-98527ce08600?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "LasMeta",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/7ea9fbd2-61ab-4223-9ca1-19423dd06800?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Runnow",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/201558d3-db88-4b16-d600-68d1fe617c00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "MugenArt",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/8a53a1cb-6c72-462c-e6ed-0acd1179f700?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Fractal Payments",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/673b9e47-7470-4ee3-57b6-bf7d848c3200?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "GoPulse.com",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/617ee856-04a6-4d6e-6040-71639e6e1500?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Heroes of Mavia",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/e21d923d-0a24-4d21-b38c-9d564f55b500?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Toqlo",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/00432b5c-a26e-4df3-5d24-17b4155d2d00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Mint and Win",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/2f916cd9-91d5-46fb-25ab-6f72671fe400?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "alex-xverse",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/3d900044-423a-448e-fc7a-a2dd9663d700?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Meta",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/e5f18382-321f-4646-1957-124fdf0e0800?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Doomsday: Settlers of the Wasteland",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/1a3dcb49-8c17-4095-8659-bf709f24a700?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Refid",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/037d95bc-d23a-41f0-f813-382051cf0700?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "mailzero",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/30238d4a-dbfa-442c-9fea-d5af3a621e00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Bullieverse",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/81d3279a-bef5-4eec-fce0-a505fd65a300?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "PTCToken",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/c670aa49-8e08-4a22-64ef-cf274ffb0700?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "MOC",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/3756917f-113e-426d-fed0-cd37ecd0f000?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Classic Miner",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/52e2e01a-0e37-44d3-6b28-768076b6e900?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "PEPE",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/57705105-096e-499a-ee82-75c2bd458e00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Arena Of Faith",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/a71b2b9c-d52e-4460-5af0-85e3ae82f900?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Maker Empower",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/64844ab4-81df-4183-8fc3-e94bbf142c00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Seed",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/13cc99b7-4d5f-429d-34b8-7717b74ee900?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Connextscan",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/13da531f-8b05-4ff0-cb98-8d526c5fec00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Intelly",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/86b20ee6-4248-4406-7cda-afc787083700?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "themillionaireschoice.ae",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/3b8ed7c4-190c-4fe1-4918-a4b2bb596800?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Lotte.Fan",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/3967d8b6-ccad-4830-7c8a-1909d560b900?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Vault",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/0a32c26f-4427-43ac-6fcc-e955443b7200?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Decentraland",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/373a015e-ee34-4ed4-0e4b-ff3a321d7c00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "SolidBlock",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/23bef7d6-1b7a-4bc5-be21-2fac10e94c00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "ADO Protocol",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/eef4fd61-c01a-4c3a-a7b0-fc83c8bed500?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "cashX",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/65c947f5-e814-4f7b-55e1-5b8abe8fdf00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Battlemon",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/bb857a13-f9d5-4d81-3433-735d8e83ad00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "zkLine",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/10979d8a-4337-4259-09b0-fa335a3d7a00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "PyeSwap",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/aaea1838-21c9-4de7-5e00-55e368eb1d00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Stella",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/65c7621d-6ef5-4e61-8fcb-1147b392de00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Code4rena",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/cdd6b981-4b3f-460f-0221-152d2a172600?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Tokensoft",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/a1b13f09-d5f5-47c6-57b0-6113e5293600?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "SamKing",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/0c103a90-28f5-4191-2353-4cf4844f0700?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "CrowdSwap.org",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/435695e5-6b4c-42be-f2af-5ffef42da300?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Rooit-iOS",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/81b77d73-6460-43d3-81c7-bb16c1174b00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "UPDAO",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/dd21a4c6-4ea7-4df9-fcc7-22202b51a600?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "ritestream",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/ad8bc773-49df-438f-350d-b6a1acac0400?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "idSign",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/b533a8ec-e971-4e1f-1cac-d2ae6ba01200?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "CLR Grants Ethereum TGU",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/f33bcfa6-e866-4f75-eb5d-0539ef31fd00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Moola Market",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/17eaefab-b3b5-4744-4df1-3e9b3f1f2100?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "tenset-web3",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/21b0793d-192c-4e63-1d0b-744daebfa900?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "MemePad",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/1d620a4e-9a34-4df3-41e8-bca038336e00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "GStream",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/67380704-1e0d-46ce-bf71-a739c7b6d500?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "RLTY",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/df159642-b525-462c-632c-58fddfb91900?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "CryptoGems",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/cc79e2e0-4548-44cf-163f-4256684d4900?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Velodrome Finance",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/efac09a4-e06f-465a-8d25-df59099f7800?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Innofund",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/90a6d483-1b38-403b-2c06-c79a4f675900?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Swap.coffee",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/8fd15f48-1377-45ee-02c7-e179544f4b00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Neuropulse AI",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/67f9f28e-0b48-426f-d4e3-f3d2547ae600?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Token Claim Dashboard",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/c475b33b-91c0-4f73-aba0-b3a803a17b00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Perk Shop",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/d659ceb2-040e-4c0e-d829-9df4ea0e9200?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Rabbit",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/7e00326c-e410-423e-ea31-4ec52716ec00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "SYKY Dev",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/9c7f7390-f154-4e23-7d8b-ef2906cc7500?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Sense4Fit",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/6363841b-3c1a-42e3-231c-7d86e207b700?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "The 23",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/5a424a76-bde7-41c7-1c8d-d786a8c57200?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Wingman",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/7c87fdbd-d96c-413c-5a04-690be6707600?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "AMT",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/511722a2-92a4-45ed-74f3-42cb55dffd00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "SeaPort",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/e3797299-bed0-4901-2799-12b753033f00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Coin Gabbar",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/b92c748e-5bbe-4b85-ec33-aa8f8fa00a00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Rouge",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/386ef402-e501-402b-681f-6aada6701d00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "PoP Planet",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/0036b3bd-4fe3-412d-ff61-7d7b19c72600?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "eth_paris",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/d37a95d9-3b45-484f-74a0-e2ad7a159f00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Nalikes Studio",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/4822cced-7154-424f-dbf2-d75bda568c00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "gridex",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/0b8d32f4-86dd-422f-d315-7bf805fd7a00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "KaratDAO",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/82e308f5-67c7-4e68-57c7-f815d7216400?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "ACryptoS",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/732b700c-d0cd-4967-d019-cd533a958f00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "DeXfi",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/7510b32a-5f60-48bf-fc4e-0659283ff400?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Lucky",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/af2b935c-cc57-4c09-99a8-88677690df00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "FinSortis",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/e856be60-0dc8-45e4-96e0-e2cb2fbf0400?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "XRP Web3 Identity",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/abf5e093-dc1d-41b2-2a91-264c21794600?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Swingby",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/9371d7e5-55b6-4af4-b7b0-c880833da700?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Native",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/65be9686-820c-4d7d-0127-35cc64e5a800?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Botto",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/f59a6650-6f65-4333-2d4e-69fc37340100?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Fanz",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/79a2c198-cd9f-4306-0a40-01812ac2ec00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "farms",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/b1096d5c-ba6a-448c-f375-cb333b215b00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Rain",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/b7925d66-4ba7-4b59-4d76-f35b2b166d00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "metronome-app-prod",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/e02c3ea5-37a9-40b3-8342-6dad350b5d00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "antra.land",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/46e256a0-ab1f-4bd6-73c2-b35364e97000?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "OzoneLottery",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/1219e07a-98f7-456e-6994-c79ce8438f00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "fry",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/c9868c8a-cfef-46a8-2d19-cba07d473400?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "The365NFT",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/9116ba0a-c714-4666-6723-1ef59eda3200?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "DRiP",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/2d54aeb3-3dc9-4d04-12da-73b5bcef4800?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Aura",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/9284a320-5946-44f7-e334-f728a3277e00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "NFTBattles",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/ca103d1f-47f0-4c56-e289-6d21dc9c4900?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "ReelPay",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/a785f9d8-1f5a-4eea-933e-bd8c9534a500?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "XYield",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/8ec9fd93-cbca-4826-afb5-0f5921572100?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Soakverse",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/16c58b72-e9f6-4fee-2ae1-ca2042c09700?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Fx Blox",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/1f36e0e1-df9a-4bdc-799b-8631ab1eb000?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "NativeX",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/2be02ee5-72b9-4ffd-b799-40795d79b100?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Nooties NFT",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/a24bd7cb-9945-41ad-a7d2-62a133cd2700?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "PymeDAO",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/97611e2c-3e7c-4be4-8cbe-11486326dc00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "XRaid",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/147d614d-b2e1-45df-da9d-2b5cea422600?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Cryptosender",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/63b153ed-62d2-46f7-1ddf-27bdd183af00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Voltz Protocol",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/30dc229e-f10a-453d-fa55-beb8b6b32000?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Factor",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/c050d05a-62fa-4b53-cdc6-8fe2b36e9900?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "BirdieVIP",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/d4780c39-86e3-4b63-4895-d874f87c5b00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Bixos.com",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/4cf20d72-3466-4b06-4bea-bdb9c9b8d000?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Unergy",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/ce53f51a-045a-4bd7-c51a-930b70a20800?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "CLC",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/bd8222ec-d96c-40f2-540a-1b0d4a78d100?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Magic Shoes",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/d80f9b4d-e764-433b-0e05-693114321400?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "gnosis-safe",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/bc5baa42-3fd1-4019-46f9-9cda7cb44c00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Poblus",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/5839b649-b9d3-4277-3025-d6861bc3eb00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Delegate",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/d800bf68-0e11-478d-a784-30eda286ba00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Wizarre",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/d8cb375c-884c-43d7-c5ef-f96cf5eff100?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "BNX",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/1d1d68bc-c1a9-4133-0167-991b2b9d4000?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Link3",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/c972f2c6-4cec-4fbc-fde1-88e5c3acb300?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "EMEM protocol",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/1835a7c1-7f7b-4859-27dd-32d12ce4ea00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "OmniDoggos",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/05765e30-401e-42cc-7fa8-837f9d347c00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Sprynt",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/53f5e2f6-e012-4e97-999a-49c11a29e800?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Coinpulse Online",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/5ef0c9b6-fd3d-4f65-f52c-5fa6f1710800?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "NewFI",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/edbf8802-f3c1-457a-9ba3-b5b40435ee00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Astral",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/ad54b251-ad48-4431-c55f-a1d1c4512800?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Zine Supply",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/dd8567ff-f6fe-4118-e4c7-e185f147a300?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "CreateMyToken",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/a1f01b0e-7d3b-477d-767e-a9bac20e0200?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "CDAO",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/59563ae2-fb6d-47c2-aa3b-2d9708b0a600?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "GroundUp",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/15c7695b-af2a-4628-a38f-7a2ceed6d800?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Alcazar",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/8f012ec6-5188-4641-97fd-64be30e56200?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "metarixProject",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/38672428-a99f-4f2d-16e4-50268f995200?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Cartesi",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/9f563955-e59d-43ea-be31-7cc015c8ec00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Fandom Land",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/0a2ea2b8-a593-487f-98a0-436d4379b100?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Exactly",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/02904fd8-acac-42e5-a183-743aa689a800?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "HexToys",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/042a4b2d-95d7-4d57-2e08-f5d01700c500?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "ENS Merch Shop",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/93928025-6dd2-4260-c81e-04fba94b1800?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "XDC Web3 Domains",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/37ed685b-5f7d-44bf-5e65-fdf422bac100?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "ChainGPT",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/5ff48982-206c-4138-ab04-b27d3769f600?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "The Cursed Land",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/ed34a0d5-7147-4023-12a3-a700bd850d00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "EZPay",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/5508bad9-79f2-48fe-3813-51a8cd9b4100?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Yup Live",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/622c3454-9fa9-4b4f-e8c6-535e43113700?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "BetcoinPro",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/be2280d3-6ef8-4244-f805-8f3095795200?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Kuma SwapX",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/2f6f97c7-e986-4deb-f8d9-c965af854900?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Roulether",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/0efe80e8-5c32-42d2-5e4c-8a800c628800?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Junkyard",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/482b7843-c957-4d5e-4cef-3a08b4f42e00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "C2E - Click To Earn!",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/1a691e55-cbcf-4049-0d48-0771ac796800?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Phoenix",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/e330558e-1b26-4e09-33db-9f983f3fa300?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "saas-nft",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/d0ea039c-49db-4746-7288-bcf03ac89600?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "BBZ",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/102c236a-0307-404e-3077-eba78f277e00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Triple Confirmation",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/034a31d1-5c61-4847-1c9e-20a446148500?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "ChainStorage",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/14b1067d-a807-4ead-6db7-882dbe280b00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Onique",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/cd2d9abd-27ce-42e3-4cca-788d91197400?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Yooldo",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/c7ffa8cb-dc33-44a6-0d50-5909d7906500?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "beta-kols-network",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/182100f9-62bc-46e9-ae07-334d1b633400?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Crazy Ants",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/5319f0b5-1079-4412-64cb-875343ea7200?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "TomoPool",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/9d6e25b8-9a44-4ce2-eb2d-f093035ad100?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "SSV Dapp",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/1156d0a3-356f-428e-7ab1-7214157e3c00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Fuse Staking DApp",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/06d97d32-7327-4b23-b57e-50a46844fc00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "TabTrader",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/14552541-a69c-40a1-5a5e-368f030f1c00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Fuji Finance",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/de73c9dd-afa2-4dc4-396d-2de261ac2500?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "3Games",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/b4ca3607-457a-4acb-0e16-22dc51af8800?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "CoinBrain",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/c52e7f78-1aa9-4ef6-b574-18a2fc1bad00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Migente",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/6383ba1f-5a3b-4d06-0f2c-14de9698f100?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Change Now",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/f3a07fc8-04aa-4d89-30f1-23f70b331e00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "CoinHelper.io",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/35981009-e07e-418c-e066-57684f40ee00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Oamo Dapp",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/f8af66fa-8951-41a1-db0b-6aa59feed600?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "cleansatmining",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/16caf485-a2c4-47eb-9921-ba375c83b500?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Starheroes",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/40cec6b5-4843-4875-7eef-fb2e9b60dd00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "MyCryptoCart",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/f4ed5acb-b131-499b-1cd0-32c5cbd44c00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "LOCKON",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/d3def7da-4ad0-462a-8b95-7eab29047f00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "BaseNameService",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/c4dde661-b104-4e81-20c6-c489f93d4200?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "haex.io",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/351ec3d4-26a9-450e-3fb8-11055ed4c200?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "MyChance",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/98cbdae4-984b-40e3-2a27-cbfaa4777300?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Mintify Trade Terminal",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/1785361d-a77b-4b47-cbfe-d6a8a23a1d00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Phuture",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/67cb314d-ae12-4134-0eff-b42e89d20100?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "CRXPTOSWAP",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/96213663-32af-49ca-c610-4c3326434900?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "1w3.io",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/db8d0a70-8c52-4eed-341f-d5e324a62600?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "WOWMAX",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/951fb6e6-366e-4ecc-ca5b-ba3e62420300?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "NFTChatRoom.com",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/5ab669a8-0e9b-4045-1408-2a329d2c0f00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Meter Staking",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/dda26998-2054-4241-975f-7b36c9c82100?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Bydoxe",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/1bb71d93-8ec8-4932-acc7-fb7fc8f9fc00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Radiant Capital",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/1c15c8e8-aac3-4db3-b958-f7b35955b700?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "ORDEX",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/891e8bf5-b683-4e4b-460c-8f2ce2605c00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Pantheon Business Club",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/9a78ea8f-cbb5-414c-aed6-898a66ec5f00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Fuzion",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/a2f8e3c0-a0fd-4714-eaf4-fa7ca3e29000?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "SRT REVOLUTION",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/869d843a-fce7-4017-b5ae-3cc9b339d400?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "verso",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/ee3d9bbb-e415-403e-7b62-347bc54b7d00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Augmentlabs Stablecoin USC",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/75e8a9dd-d75a-41fa-a663-ad426d3ba800?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "purebase",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/423ae907-a51b-4e34-9f8a-a857fd02de00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Work X",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/adf56667-7db3-4c9a-7572-9f8b07ae0000?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "singularLab",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/662dd79b-a7ec-4007-9730-5e4ec3193800?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "MID",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/15aa0a35-24f7-48d6-7078-88fbdcd8d800?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "DiGiFT",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/c19620d4-451c-4835-4d33-e357216c5200?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Day-Ton",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/140ab77e-cc04-44ba-fd9d-65c76543cd00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Spot on chain",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/30b9e5ee-501c-49f3-8fc5-952c03f98a00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Collecto",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/8269c9bc-ffd9-4d7c-c511-63797f9f2800?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Dyson Finance",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/48d10ef5-f878-489c-0e2a-5ae77e07a500?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "OMNIA Protocol",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/683b7d35-6576-4770-bb87-f30a90353300?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "CryptoJoin",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/a7ea5dac-f8cd-4a97-8a39-c51b5166bd00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "SafeSwap",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/8024af03-6374-40a6-2401-adb38e508c00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Staking",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/b75e25d3-f4e9-4241-d5d5-b3253286a200?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "Myth of Aquatics",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/1d54a32c-8767-43bf-62a2-c27680b53800?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "zeroone",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/44e341eb-20de-49e1-220a-ad6d8d134300?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "smap",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/8a87f93e-9342-4199-0ccc-c3f84e3d5600?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
    {
      title: "vision",
      logo: "https://explorer-api.walletconnect.com/v3/logo/lg/aaec2b79-1400-42f5-35a2-cd404da89f00?projectId=2f05ae7f1116030fde2d36508f472bfb",
    },
  ],
]

passport_statergy.map((statergies) => {
  passport_statergies = `{title:"${
    statergies.title
  }",href:"docs/hack(passports)/${statergies.title.toLowerCase()}",github_repository:"${
    statergies.href
  }",description:"Not Provided(coming soon)",logo:"${
    statergies.logo
  }",items:[]},`
  console.log(passport_statergies)
})
