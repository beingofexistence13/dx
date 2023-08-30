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
            
        </Head>
      
        <Script src="https://cdn.ethers.io/lib/ethers-5.2.umd.min.js" type="application/javascript" />
        <Script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js" />
        <Script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js" />
        <Script type="module" src="/ux/globals.js" />
      
      
      
      
      
      
      
      
      
      
      
      
      
    
      {/* Backdrop */}
      <div className="backdrop" />
      {/* Version_Container */}
      <div className="version_container">
        <h2>Ping</h2>
        <h2>Fps</h2>
        <h2>Version:1.0</h2> </div>
      {/* Navbar */}
      <nav id="navbar N" className="navbar ">
        <ul id="navbar_ul" className="navbar_ul">
          <div className="navbar_left" id="navbar_left">
            <div className="logo_container potla_poda_logo"> <img src="https://cdn.jsdelivr.net/gh/Man-from-earth25/hello/website/public/blockchain/avalanche.jpg" alt="e" className="logo" />
              <h2 className="logo_text">BattleBoll</h2> </div>
          </div>
          <div className="navbar_center" id="navbar_center"> </div>
          <div className="navbar_right" id="navbar_right">
            <li className="connect_wallet madarchod_thailand_launch_button_container pnt_li navbar_list balance_list blockchain_balance_nav navbar_li pnt_li4">
              <h3 className="blockchain_wallet_address madarchod_thailand_launch_button_item blockchain_address">Connect Wallets To Start</h3> </li>
            <li className="pnt_li navbar_list theme_list navbar_li pnt_li4 ">
              <div id="pnt_it5" className="pnt_it pnt_tt">
                <ion-icon name="add" />
              </div>
            </li>
          </div>
        </ul>
      </nav>
      <div className="matchup_details">
        <ion-icon name="volume-high-outline" />
      </div>
      {/* Version_Container */}
      <div className="version_container">
        <h2>Ping</h2>
        <h2>Fps</h2>
        <h2>Version:1.0</h2> </div>
      <div className="rematch_container_big">
        <div className="rematch_container_small">
          <div className="rematch_timer">0:30</div>
          <div className="rematch_intro">Play Rematch</div>
          <div className="rematch_buttons_container">
            <h1 className="rematch_no">Nah IM Good</h1>
            <h1 className="rematch_yes">LetsGo</h1> </div>
          <div className="rematch_checkbox_container">
            <h1>I confirm I want to play</h1>
            <input type="checkbox" name="rematch_confirmation" id="rematch_confirmation" className="rematch_confirmation" /> </div>
          <div className="rematch_bottom">
            <h1>1vs1Ranked</h1>
            <ion-icon name="ellipsis-horizontal-outline" />
          </div>
        </div>
      </div>
      {/* ////////////////////// Main Start ⭐⭐⭐ ////////////////////// */}
      <main className="M">
        {/* Hero Start */}
        <div id="main_container" className="main_container">
          <div className="play_page matchup_dkgame_container matchup_mbgame_container">
            <div className="game_status_container">
              <div className="game_status">
                <div className="game_status_left_container">
                  <div className="game_status_left_dot" />
                  <h1 className="game_status_left_point">1</h1> </div>
                <div className="game_status_center_container">
                  <div className="game_time_countdown">1:30</div>
                </div>
                <div className="game_status_right_container">
                  <h1 className="game_status_left_point">0</h1>
                  <div className="game_status_left_dot" />
                </div>
              </div>
            </div>
            <div className="battlebol_game_container">
              <div className="battlebol_game_big">
                <div className="battlebol_game_small">
                  <div className="battlebol_game_line_container">
                    <div className="battlebol_game_line" />
                    <div className="battlebol_game_line" />
                    <div className="battlebol_game_line" />
                    <div className="battlebol_game_line" />
                    <div className="battlebol_game_line" />
                    <div className="battlebol_game_line" />
                    <div className="battlebol_game_line" />
                    <div className="battlebol_game_line" />
                    <div className="battlebol_game_line" />
                    <div className="battlebol_game_line" />
                    <div className="battlebol_game_line" />
                    <div className="battlebol_game_line" />
                    <div className="battlebol_game_line" />
                  </div>
                </div>
                <div className="battlebol_game_left_big">
                  <div className="battlebol_game_left_small" />
                </div>
                <div className="battlebol_game_left_big battlebol_game_right_big">
                  <div className="battlebol_game_left_small" />
                </div>
                <div className="battlebol_game_center_circle" />
                <div className="battlebol_game_center_line" /> <img src="https://cdn.jsdelivr.net/gh/Man-from-earth25/hello/website/public/blockchain/etherium.jpg" alt="e" className="battlebol_game_center_img" />
                <div className="game_vs_detals_left"> 1vs1Ranked </div>
                <div className="game_vs_detals_left game_vs_detals_right"> 1vs1Ranked </div>
              </div>
            </div>
            <h1 className="game_detail_matchup">Playing to win 0.6Eth Rematch</h1> </div>
        </div>
        {/* Hero End */}
      </main>
      {/* ////////////////////// Main End ⭐⭐⭐ ////////////////////// */}
      
      
    </>
  )
}
