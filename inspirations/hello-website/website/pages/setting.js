import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'

export default function Home() {
  return (
    <>
        
        <Head>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1, maximum-scale=5, minimum-scale=1, viewport-fit=cover"
            />
           <title>BattleBoll</title>
           
           <link rel="stylesheet" href="/ui/globals.css"/>
           <link rel="stylesheet" href="/ui/component/thailand/thailand_ui_1o9.css"/>
           <link rel="stylesheet" href="/ui/component/thailand/setting.css"/>
            
        </Head>
      
        <Script src="https://cdn.ethers.io/lib/ethers-5.2.umd.min.js" type="application/javascript" />
        <Script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js" />
        <Script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js" />
        <Script type="module" src="/ux/globals.js" />
      
      
      
      
      
      
      
      
      
      
      
        {/* ////////////////////// Settings Page ⭐⭐⭐ ////////////////////// */}
          {/* Backdrop */}
          <div className="backdrop" /> 
          {/* Version_Container */}
          <div className="version_container">
            <h2>Ping</h2>
            <h2>Fps</h2>
            <h2>Version:1.0</h2>
          </div>
          {/* Navbar */}
          <nav id="navbar N" className="navbar ">
            <ul id="navbar_ul" className="navbar_ul">
              <div className="navbar_left" id="navbar_left">
                <div className="logo_container potla_poda_logo">
                  <img src="https://cdn.jsdelivr.net/gh/Man-from-earth25/hello/website/public/blockchain/avalanche.jpg" alt="e" className="logo" />
                  <h2 className="logo_text">BattleBoll</h2>
                </div>
              </div>
              <div className="navbar_center" id="navbar_center">
              </div>
              <div className="navbar_right" id="navbar_right">
                <li className="connect_wallet madarchod_thailand_launch_button_container pnt_li navbar_list balance_list blockchain_balance_nav navbar_li pnt_li4">
                  <h3 className="blockchain_wallet_address madarchod_thailand_launch_button_item blockchain_address">Connect Wallets To Start</h3>
                </li>
                <li className="pnt_li navbar_list theme_list navbar_li pnt_li4 ">
                  <div id="pnt_it5" className="pnt_it pnt_tt">
                    <ion-icon name="add" />
                  </div>
                </li>
              </div>
            </ul>    
          </nav>
          {/* ////////////////////// Main Start ⭐⭐⭐ ////////////////////// */}
          <main className="M">
            {/* Hero Start */}
            <div id="main_container" className="space-y-0.5 main_container">
              {/* <h1Settin.g page</h1> */}
              <div className="setting_page settings_container_big">
                <div className="settings_container">
                  <h1 className="setting_header">Customize your gaming experience</h1>
                  <div className="settings_container_left">
                    <div className="dropdown game_player_count game">
                      <div className="dropdown_select">
                        <h1>Game Mode</h1>
                        <div className="game_dropdown_result" />
                        <ion-icon name="caret-down-outline" />
                      </div>
                      <div className="dropdown_menu">
                        <h2>1 vs 1</h2>
                        <h2>2 vs 2</h2>
                        <h2>3 vs 3</h2>
                        <h2>4 vs 4</h2>
                      </div>
                    </div>
                  </div>
                  <div className="settings_container_right">
                    <div className="dropdown blockchain_dropdown network">
                      <div className="dropdown_select">
                        <img src="https://cdn.jsdelivr.net/gh/Man-from-earth25/hello/website/public/blockchain/etherium.jpg" alt="e" className="network_img network_dropdown_result" />
                      </div>
                      <div className="dropdown_menu">
                        <img src="https://cdn.jsdelivr.net/gh/Man-from-earth25/hello/website/public/blockchain/avalanche.jpg" alt="e" className="network_img" />
                        <img src="https://cdn.jsdelivr.net/gh/Man-from-earth25/hello/website/public/blockchain/bitcoin.jpg" alt="e" className="network_img" />
                        <img src="https://cdn.jsdelivr.net/gh/Man-from-earth25/hello/website/public/blockchain/polygon.jpg" alt="e" className="network_img" />
                        <img src="https://cdn.jsdelivr.net/gh/Man-from-earth25/hello/website/public/blockchain/solana.jpg" alt="e" className="network_img" />
                      </div>
                    </div>
                    <div className="dropdown game_crypto_amount crypto">
                      <h3 className="setting_free">You have 3 free matches left</h3>
                      <div className="dropdown_select">
                        <h1>Wager Etherium</h1>
                        <div className="crypto_dropdown_result" />
                        <ion-icon name="caret-down-outline" />
                      </div>
                      <div className="dropdown_menu">
                        <h2>0.5Eth</h2>
                        <h2>0.4Eth</h2>
                        <h2>0.3Eth</h2>
                        <h2>0.2Eth</h2>
                        <h2>0.1Eth</h2>
                      </div>
                    </div>
                  </div>
                  {/* <ion-icon name="ellipsis-horizontal-outline"></ion-icon> */}
                </div>
                <div className="continue_container">
                  <h2>Start Game</h2>
                </div>
              </div>
            </div>    
            {/* Hero End */}
          </main>
          {/* ////////////////////// Main End ⭐⭐⭐ ////////////////////// */}      
      
      
      
    </>
  )
}
