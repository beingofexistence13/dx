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
      <div className="matchup_details">4 vs 4 Ranked</div>
      {/* Version_Container */}
      <div className="version_container">
        <h2>Ping</h2>
        <h2>Fps</h2>
        <h2>Version:1.0</h2> </div>
      {/* ////////////////////// Main Start ⭐⭐⭐ ////////////////////// */}
      <main className="M">
        {/* Hero Start */}
        <div id="main_container" className="main_container">
          <div className="matchup_container">
            <div className="matchup_left_container matchup_top_container purple">
              <div className="matchup_left_right_text_container">
                <h1 className="matchup_left_right_text">Purple Team</h1> </div>
              <div className="matchup_left_right_container ">
                <div className="matchup_nfts">
                  <div className="matchup_nfts_top">
                    <h1>Disco Bol</h1> </div>
                  <div className="matchup_nfts_center"> <img className="matchup_nfts_center_img" src="https://cdn.jsdelivr.net/gh/Man-from-earth25/hello/website/public/battlebol/disco.png" alt="e" /> </div>
                  <div className="matchup_nfts_bottom">
                    <h1>Rare</h1>
                    <h1>Level9</h1> </div>
                </div>
                <div className="matchup_nfts">
                  <div className="matchup_nfts_top">
                    <h1>Disco Bol</h1> </div>
                  <div className="matchup_nfts_center"> <img className="matchup_nfts_center_img" src="https://cdn.jsdelivr.net/gh/Man-from-earth25/hello/website/public/battlebol/disco.png" alt="e" /> </div>
                  <div className="matchup_nfts_bottom">
                    <h1>Rare</h1>
                    <h1>Level9</h1> </div>
                </div>
                <div className="matchup_nfts">
                  <div className="matchup_nfts_top">
                    <h1>Disco Bol</h1> </div>
                  <div className="matchup_nfts_center"> <img className="matchup_nfts_center_img" src="https://cdn.jsdelivr.net/gh/Man-from-earth25/hello/website/public/battlebol/disco.png" alt="e" /> </div>
                  <div className="matchup_nfts_bottom">
                    <h1>Rare</h1>
                    <h1>Level9</h1> </div>
                </div>
                <div className="matchup_nfts">
                  <div className="matchup_nfts_top">
                    <h1>Disco Bol</h1> </div>
                  <div className="matchup_nfts_center"> <img className="matchup_nfts_center_img" src="https://cdn.jsdelivr.net/gh/Man-from-earth25/hello/website/public/battlebol/disco.png" alt="e" /> </div>
                  <div className="matchup_nfts_bottom">
                    <h1>Rare</h1>
                    <h1>Level9</h1> </div>
                </div>
              </div>
              <div className="matchup_left_right_icon_container">
                <ion-icon className="matchup_left_right_icon" name="ellipsis-horizontal-outline" />
              </div>
            </div>
            <div className="matchup_dkgame_container matchup_mbgame_container">
              <div className="play_button_container">
                <h1 className="play_button">Play</h1> </div>
              <div className="battlebol_game_container">
                <div className="battlebol_game_big">
                  <div className="battlebol_game_small"> </div>
                  <div className="battlebol_game_left_big">
                    <div className="battlebol_game_left_small" />
                  </div>
                  <div className="battlebol_game_left_big battlebol_game_right_big">
                    <div className="battlebol_game_left_small" />
                  </div>
                  <div className="battlebol_game_center_circle" />
                  <div className="battlebol_game_center_line" />
                  <div className="battlebol_game_dots_left">
                    <div className="player_dot_goulkeeper" />
                    <div className="player_dot_midfield_left" />
                    <div className="player_dot_midfield_right" />
                  </div>
                  <div className="battlebol_game_dots_left battlebol_game_dots_right">
                    <div className="player_dot_goulkeeper" />
                    <div className="player_dot_midfield_left" />
                    <div className="player_dot_midfield_right" />
                  </div>
                </div>
              </div>
              <h1 className="game_detail_matchup">.01Eth Waged Per Player</h1> </div>
            <div className="matchup_right_container matchup_bottom_container green">
              <div className="matchup_left_right_text_container">
                <h1 className="matchup_left_right_text">Green Team</h1> </div>
              <div className="matchup_left_right_container ">
                <div className="matchup_nfts">
                  <div className="matchup_nfts_top">
                    <h1>Disco Bol</h1> </div>
                  <div className="matchup_nfts_center"> <img className="matchup_nfts_center_img" src="https://cdn.jsdelivr.net/gh/Man-from-earth25/hello/website/public/battlebol/disco.png" alt="e" /> </div>
                  <div className="matchup_nfts_bottom">
                    <h1>Rare</h1>
                    <h1>Level9</h1> </div>
                </div>
                <div className="matchup_nfts">
                  <div className="matchup_nfts_top">
                    <h1>Disco Bol</h1> </div>
                  <div className="matchup_nfts_center"> <img className="matchup_nfts_center_img" src="https://cdn.jsdelivr.net/gh/Man-from-earth25/hello/website/public/battlebol/disco.png" alt="e" /> </div>
                  <div className="matchup_nfts_bottom">
                    <h1>Rare</h1>
                    <h1>Level9</h1> </div>
                </div>
                <div className="matchup_nfts">
                  <div className="matchup_nfts_top">
                    <h1>Disco Bol</h1> </div>
                  <div className="matchup_nfts_center"> <img className="matchup_nfts_center_img" src="https://cdn.jsdelivr.net/gh/Man-from-earth25/hello/website/public/battlebol/disco.png" alt="e" /> </div>
                  <div className="matchup_nfts_bottom">
                    <h1>Rare</h1>
                    <h1>Level9</h1> </div>
                </div>
                <div className="matchup_nfts">
                  <div className="matchup_nfts_top">
                    <h1>Disco Bol</h1> </div>
                  <div className="matchup_nfts_center"> <img className="matchup_nfts_center_img" src="https://cdn.jsdelivr.net/gh/Man-from-earth25/hello/website/public/battlebol/disco.png" alt="e" /> </div>
                  <div className="matchup_nfts_bottom">
                    <h1>Rare</h1>
                    <h1>Level9</h1> </div>
                </div>
              </div>
              <div className="matchup_left_right_icon_container">
                <ion-icon className="matchup_left_right_icon" name="ellipsis-horizontal-outline" />
              </div>
            </div>
          </div>
        </div>
        {/* Hero End */}
      </main>
      {/* ////////////////////// Main End ⭐⭐⭐ ////////////////////// */}      
      
      
      
    </>
  )
}
