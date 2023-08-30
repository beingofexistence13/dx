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
      
        <Script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js" />
        <Script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js" />
      
      
  {/* Backdrop */}
  <div className="backdrop" /> 
  {/* <div class="mobile_landscaper">
      
      
      <ion-icon name="swap-horizontal-outline"></ion-icon>
      <h1>Please Turn Your Mobile To Landscape Mode For Good Experience!!!</h1>
  </div> */}
  {/* Navbar */}
  <nav id="navbar N" className="navbar ">
    <ul id="navbar_ul" className="navbar_ul">
      <div className="navbar_left" id="navbar_left">
        {/* <li class="pnt_li navbar_list menu_list navbar_li pnt_li1" >
                  
                 
                  <div id="pnt_it1" class="menu-nav pnt_it navbar_li_div pnt_it1">
                      
                      
                      <ion-icon name="menu" id="pnt-in"></ion-icon>
                      <ion-icon name="close" id="pnt-in"></ion-icon>
                      
                      
                  </div>
                 
                  
              </li> */}
        {/* <div class="logo_container">
                  <img src="https://cdn.jsdelivr.net/gh/Man-from-earth25/hello/website/public/blockchain/avalanche.jpg" alt="e" class="logo">
                  <h2 class="logo_text">BattleBall</h2>
              </div> */}
        {/* <li class="player_banner pnt_li navbar_list address_list blockchain_address_nav navbar_li pnt_li4">
                      
                      <h2>Toha</h2>
                      
              </li> */}
        <h2>About</h2>
        {/* <h2 class="NT">Player Banner</h2> */}
        {/* <li class="pnt_li navbar_list search_list navbar_li pnt_li4 ">
                  
                  <div class="pnt_it">
                      
                      <ion-icon name="search"></ion-icon>
                      
                  </div>
                  
                  
              </li> */}
        {/* <li class="pnt_li navbar_list navbar_li pnt_li4 ">
                  
                  <div class="pnt_it">
                      
                      <ion-icon name="notifications"></ion-icon>
                      
                  </div>
                  
                  
              </li> */}
        {/* <li class="pnt_li navbar_list navbar_li pnt_li4 ">
                  
                  <div class="pnt_it">
                      
                      <ion-icon name="scan"></ion-icon>
                      
                  </div>
                  
                  
              </li> */}
        {/* <li class="pnt_li navbar_list theme_list navbar_li pnt_li4 ">
                  
                  <div id="pnt_it5" class="pnt_it">
                      
                      <ion-icon name="person-add"></ion-icon> 
                      <h2 class="NT">Add A Friend</h2>
                      
                      
                      
                  </div>
                  
                  
              </li> */}
        <li className="pnt_li navbar_list theme_list navbar_li pnt_li4 ">
          <div className="pnt_it pnt_tt">
            <ion-icon name="logo-discord" />
            <h2 className="NT">Discord</h2>
          </div>
        </li>
        <li className="pnt_li navbar_list theme_list navbar_li pnt_li4 ">
          <div id="pnt_it5" className="pnt_it pnt_tt">
            <ion-icon name="logo-twitter" />
            <h2 className="NT">Twitter</h2>
          </div>
        </li>
        {/* <li class="pnt_li navbar_list theme_list navbar_li pnt_li4 ">
                  
                  <div id="pnt_it5" class="pnt_it">
                      
                      <ion-icon name="star"></ion-icon>
                      
                  </div>
                  
                  
              </li> */}
        {/* <li class="pnt_li navbar_list theme_list navbar_li pnt_li4 ">
                  
                  <div id="pnt_it5" class="pnt_it">
                      
                      <ion-icon name="sunny"></ion-icon>
                      <ion-icon name="moon"></ion-icon>
                      <h2 class="NT">Theme</h2>
                      
                  </div>
                  
                  
              </li> */}
      </div>
      <div className="navbar_center" id="navbar_center">
        <div className="logo_container">
          <img src="https://cdn.jsdelivr.net/gh/Man-from-earth25/hello/website/public/blockchain/avalanche.jpg" alt="e" className="logo" />
          <h2 className="logo_text">BattleBoll</h2>
        </div>
        <h2 className="NT">Logo</h2>
      </div>
      <div className="navbar_right" id="navbar_right">
        {/* <div class="web3">
                  
                  <li class="pnt_li navbar_list address_list blockchain_address_nav navbar_li pnt_li4">
                      
                      <img src="https://cdn.jsdelivr.net/gh/Man-from-earth25/hello/website/public/wallet/metamask.jpg" alt="e" class="blockchain_address_wallet">
                      <h3 class="blockchain_address">Address</h3>
                      <div class="blockchain_address_network"></div>
                      <h2 class="NT">Blockchain Address</h2>
                      
                      
                  </li>
                  <li class="pnt_li navbar_list balance_list blockchain_balance_nav navbar_li pnt_li4">
                      
                      <img src="https://cdn.jsdelivr.net/gh/Man-from-earth25/hello/website/public/blockchain/etherium.jpg" alt="e" class="blockchain_provider_name">
                      <h3 class="blockchain_balance">Balance</h3>
                      <ion-icon name="chevron-down-outline"></ion-icon>
                      <h2 class="NT">Blockchain Balance</h2>
                      
                  </li>
                  
                  
              </div> */}
        {/* <li class="pnt_li navbar_list address_list blockchain_address_nav navbar_li pnt_li4">
                      
                      <img src="https://cdn.jsdelivr.net/gh/Man-from-earth25/hello/website/public/wallet/metamask.jpg" alt="e" class="blockchain_address_wallet">
                      <h3 class="blockchain_address">Address</h3>
                      <div class="blockchain_address_network"></div>
                      <h2 class="NT">Blockchain Address</h2>
                      
                  </li> */}
        {/* <li class="pnt_li navbar_list balance_list blockchain_balance_nav navbar_li pnt_li4">
                      
                      <img src="https://cdn.jsdelivr.net/gh/Man-from-earth25/hello/website/public/blockchain/etherium.jpg" alt="e" class="blockchain_provider_name">
                      <h3 class="blockchain_balance">Balance</h3>
                      <ion-icon name="chevron-down-outline"></ion-icon>
                      <h2 class="NT">Blockchain Balance</h2>
                      
                  </li> */}
        <li className="madarchod_thailand_launch_button_container pnt_li navbar_list balance_list blockchain_balance_nav navbar_li pnt_li4">
          {/* <img src="https://cdn.jsdelivr.net/gh/Man-from-earth25/hello/website/public/blockchain/etherium.jpg" alt="e" class="blockchain_provider_name"> */}
          <Link passHref href='connect'>
            <h3 className="madarchod_thailand_launch_button_item">Launch App</h3>
          
          </Link>
          {/* <ion-icon name="chevron-down-outline"></ion-icon> */}
          {/* <h2 class="NT">Blockchain Balance</h2> */}
        </li>
        {/* <li class="pnt_li navbar_list add_list navbar_li pnt_li4">
                  
                  <div class="pnt_it">
                      
                      
                      <ion-icon name="add"></ion-icon>
                      
                      
                  </div>
                  
                  
                  
              </li> */}
        {/* <li class="pnt_li navbar_list theme_list navbar_li pnt_li4 ">
                  
                  <div id="pnt_it5" class="pnt_it">
                      
                      <ion-icon name="settings"></ion-icon>
                      
                  </div>
                  
                  
              </li> */}
        {/* <li class="pnt_li navbar_list theme_list navbar_li pnt_li4 ">
                  
                  <div id="pnt_it5" class="pnt_it">
                      
                      <ion-icon name="mail"></ion-icon>
                      
                  </div>
                  
                  
              </li> */}
        {/* <li id="profile_toggler" class="pnt_li navbar_list profile_list navbar_li pnt_li4">
                  
                  <div class="pnt_it">
                      
                      
                      <ion-icon name="log-in"></ion-icon>    
                      <ion-icon name="person"></ion-icon>
                      <h2 class="NT">Profile</h2>
                      
                      
                  </div>
                  
                  
                  
              </li> */}
      </div>
    </ul>
    <ul id="navbar_intro" className="navbar_intro">
      <li>
        <div>
          <h1> Hi Intro Navbar </h1>
        </div>
      </li>
      <li>
        <div>
          <h1> Hi Intro Navbar </h1>
        </div>
      </li>
    </ul>
  </nav>
  {/* Sidebar */}
  {/* <nav id="sidebar S" class="sidebar close shadow-sm " >
      
      <ul id="sidebar_ul" class="SU sidebar_ul">
          
          
          <div class="SULC">
                      <li class="sidebar_ul_li SUL hover:shadow-2xl" id="sidebar_ul_li1">
                          
                          <Link passHref href="/home">
                              
                              <ion-icon name="home"></ion-icon>
                              <a href="#">Home</a>
                              
                          </Link>                            
                          
                      </li>
                      <Link passHref href="/exchange">
                      
                      <li class="sidebar_ul_li SUL SUL hover:shadow-2xl" id="sidebar_ul_li2">
                          
                          
                          
                          
                              
                              <ion-icon name="cash"></ion-icon>
                              <a href="#">Exchange</a>                               
                              
                          
       
                      </li>
                          </Link>                        
                      <li class="sidebar_ul_li SUL SUL hover:shadow-2xl" id="sidebar_ul_li2">
                          
                          
                          
                          
                          <Link passHref href="/nft">
                          
                              <ion-icon name="diamond"></ion-icon>
                              <a href="#">Nft</a>
                              
                              
                          </Link>                            
                          
                          
                      </li>
                      
                      <li class="sidebar_ul_li SUL hover:shadow-2xl" id="sidebar_ul_li2">
                          
                          
                          
                          
                          <Link passHref href="/stack">
                              <ion-icon name="analytics"></ion-icon>
                              <a href="#">Stack</a>
                              
                              
                          </Link>                            
                          
                          
                          
                      </li>
                      <li class="sidebar_ul_li SUL hover:shadow-2xl" id="sidebar_ul_li2">
                          
                          
                          
                          
                          <Link passHref href="/airdrop">
                              
                          
                              <ion-icon name="egg"></ion-icon>
                              <a href="#">Airdrop</a>
                              
                          </Link>                            
                          
                          </li>
                      
                      <li class="sidebar_ul_li SUL hover:shadow-2xl" id="sidebar_ul_li3">
                          
                          
                          
                          
                          <Link passHref href="/ido_event">
                              
                              
                          
                              <ion-icon name="medal"></ion-icon>
                              <a href="#">Ido-Event</a>
                          
                          </Link>                            
                          
                      </li>
                      <li class="sidebar_ul_li SUL hover:shadow-2xl" id="sidebar_ul_li4">
                          
                          <ion-icon name="ribbon"></ion-icon>
                          <a href="#">Ido</a>
                      </li>
                      <li class="sidebar_ul_li SUL hover:shadow-2xl" id="sidebar_ul_li5">
                          
                          
                          
                          
                          
                          <Link passHref href="/gamefi">
                              
                          
                              
                              <ion-icon name="game-controller"></ion-icon>
                              <a href="#">GameFi</a>
                              
                          </Link>                            
                          </li>
                      <li class="sidebar_ul_li SUL hover:shadow-2xl" id="sidebar_ul_li7">
                          
                          
                          
                          
                          <Link passHref href="/support_ukrane" >
                              
                              
                              <ion-icon name="sparkles"></ion-icon>
                              <a href="#">Support Ukraine</a>
                              
                          </Link>                            
                          
                          
                      </li>
                      
                      
              </div>
                      
                      <div class="sidebar_ul_line">
                          
                          <li class="st st1" >
                              
                              <div class="st_main" id="st_m1">
                                  
                                  <ion-icon name="list"></ion-icon>
                                  <a href="#">More</a>
                                  <ion-icon name="chevron-forward"></ion-icon>
                                  
                                  
                                  
                              </div>
                              <div class="st_toggle" >
                                 
                                  <a href="#">Twitter</a>
                                  <a href="#">Discord</a>
                                  <a href="#">Facebook</a>
                                  <a href="#">Telegram</a>
                                  
                              </div>
                              
                          </li>
                          
                          <li class="st st2" >
                              
                              <div class="st_main" id="st_m2">
                                  
                                  
                                  <ion-icon name="heart"></ion-icon>
                                  <a href="#">Favorite</a>
                                  
                                  <ion-icon name="chevron-forward"></ion-icon>
                                  
                              </div>
                              <div class="st_toggle" >
                                  
                                  <a href="#">Exchange</a>
                                  <a href="#">Nft</a>
                                  <a href="#">Airdrop</a>
                                  <a href="#">Gamefi</a>
                                  
                              </div>
                              
                          </li>
                          
                          
                          <li class="st st3" >
                              
                              <div class="st_main" id="st_m3">
                                  
                                  <ion-icon name="book"></ion-icon>
                                  <a href="#">Docs</a>
                                  <ion-icon name="chevron-forward"></ion-icon>
                                  
                              </div>
                              
                              <div class="st_toggle" >
                                  
                                  <a href="#">All</a>
                                  <a href="#">Assigned to me</a>
                                  <a href="#">Shared with me</a>
                                  <a href="#">Private</a>
                                  
                              </div>
                              
                          </li>
                          <li class="st st4" >
                              
                              <div class="st_main" id="st_m4">
                                  
                                  <ion-icon name="bar-chart"></ion-icon>
                                  <ion-icon name="list"></ion-icon>
                                  <a href="#">Analysis</a>
                                  <ion-icon name="chevron-forward"></ion-icon>
                                  
                                  
                                  
                              </div>
                              <div class="st_toggle" >
                                 
                                  <a href="#">Twitter</a>
                                  <a href="#">Discord</a>
                                  <a href="#">Facebook</a>
                                  <a href="#">Telegram</a>
                                  
                              </div>
                              
                          </li>
                          
                          <li class="st st5" >
                              
                              <div class="st_main" id="st_m5">
                                  
                                  <ion-icon name="cloud-upload"></ion-icon>
                                  <ion-icon name="heart"></ion-icon>
                                  <a href="#">Uploads</a>
                                  
                                  <ion-icon name="chevron-forward"></ion-icon>
                                  
                              </div>
                              <div class="st_toggle" >
                                  
                                  <a href="#">Exchange</a>
                                  <a href="#">Nft</a>
                                  <a href="#">Airdrop</a>
                                  <a href="#">Gamefi</a>
                                  
                              </div>
                              
                          </li>
                          
                          
                          <li class="st st6" >
                              
                              <div class="st_main" id="st_m6">
                                  
                                  <ion-icon name="library"></ion-icon>
                                  <a href="#">Library</a>
                                  <ion-icon name="chevron-forward"></ion-icon>
                                  
                              </div>
                              
                              <div class="st_toggle" >
                                  
                                  <a href="#">All</a>
                                  <a href="#">Assigned to me</a>
                                  <a href="#">Shared with me</a>
                                  <a href="#">Private</a>
                                  
                              </div>
                              
                          </li>
                          
                          
                      </div>
                      
                      
                  </ul>
     
  </nav> */}
  {/* Bottom nav */}
  <nav className="bottom_nav BN">
    <ul className="BattleBall_bottomnavbar_ul" id="BattleBall_bottomnavbar_createEdition">
      <li className="BattleBall_bottomnavbar_li" id="BattleBall_bottomnavbar_createEdition_li1">
        <h6 className="BattleBall_bottomnavbar_createEdition_li_text" id="BattleBall_bottomnavbar_createEdition_li_text1"> Home </h6>
        <ion-icon name="menu" className="BattleBall_bottomnavbar_createEdition_icon" id="BattleBall_bottomnavbar_createEdition_icon1" />
      </li>
      <li className="BattleBall_bottomnavbar_li" id="BattleBall_bottomnavbar_createEdition_li2">
        <h6 className="BattleBall_bottomnavbar_createEdition_li_text" id="BattleBall_bottomnavbar_createEdition_li_text2"> Home </h6>
        <ion-icon name="menu" className="BattleBall_bottomnavbar_createEdition_icon" id="BattleBall_bottomnavbar_createEdition_icon2" />
      </li>
      <li className="BattleBall_bottomnavbar_li" id="BattleBall_bottomnavbar_createEdition_li3">
        <h6 className="BattleBall_bottomnavbar_createEdition_li_text" id="BattleBall_bottomnavbar_createEdition_li_text3"> Home </h6>
        <ion-icon name="menu" className="BattleBall_bottomnavbar_createEdition_icon" id="BattleBall_bottomnavbar_createEdition_icon3" />
      </li>
      <li className="BattleBall_bottomnavbar_li" id="BattleBall_bottomnavbar_createEdition_li4">
        <h6 className="BattleBall_bottomnavbar_createEdition_li_text" id="BattleBall_bottomnavbar_createEdition_li_text4"> Home </h6>
        <ion-icon name="menu" className="BattleBall_bottomnavbar_createEdition_icon" id="BattleBall_bottomnavbar_createEdition_icon4" />
      </li>
      <li className="BattleBall_bottomnavbar_li" id="BattleBall_bottomnavbar_createEdition_li5">
        <h6 className="BattleBall_bottomnavbar_createEdition_li_text" id="BattleBall_bottomnavbar_createEdition_li_text5"> Home </h6>
        <ion-icon name="menu" className="BattleBall_bottomnavbar_createEdition_icon" id="BattleBall_bottomnavbar_createEdition_icon5" />
      </li>
    </ul>
    <ul className="BattleBall_bottomnavbar_ul" id="BattleBall_bottomnavbar_createEdition">
      <li className="BattleBall_bottomnavbar_tradeEdition_li" id="BattleBall_bottomnavbar_tradeEdition_li1">
        <h6 className="BattleBall_bottomnavbar_tradeEdition_li_text" id="BattleBall_bottomnavbar_tradeEdition_li_text1"> Home </h6>
        <ion-icon name="menu" className="BattleBall_bottomnavbar_tradeEdition_icon" id="BattleBall_bottomnavbar_tradeEdition_icon1" />
      </li>
      <li className="BattleBall_bottomnavbar_tradeEdition_li" id="BattleBall_bottomnavbar_tradeEdition_li2">
        <h6 className="BattleBall_bottomnavbar_tradeEdition_li_text" id="BattleBall_bottomnavbar_tradeEdition_li_text2"> Home </h6>
        <ion-icon name="menu" className="BattleBall_bottomnavbar_tradeEdition_icon" id="BattleBall_bottomnavbar_tradeEdition_icon2" />
      </li>
      <li className="BattleBall_bottomnavbar_tradeEdition_li" id="BattleBall_bottomnavbar_tradeEdition_li3">
        <h6 className="BattleBall_bottomnavbar_tradeEdition_li_text" id="BattleBall_bottomnavbar_tradeEdition_li_text3"> Home </h6>
        <ion-icon name="menu" className="BattleBall_bottomnavbar_tradeEdition_icon" id="BattleBall_bottomnavbar_tradeEdition_icon3" />
      </li>
      <li className="BattleBall_bottomnavbar_tradeEdition_li" id="BattleBall_bottomnavbar_tradeEdition_li4">
        <h6 className="BattleBall_bottomnavbar_tradeEdition_li_text" id="BattleBall_bottomnavbar_tradeEdition_li_text4"> Home </h6>
        <ion-icon name="menu" className="BattleBall_bottomnavbar_tradeEdition_icon" id="BattleBall_bottomnavbar_tradeEdition_icon4" />
      </li>
      <li className="BattleBall_bottomnavbar_tradeEdition_li" id="BattleBall_bottomnavbar_tradeEdition_li5">
        <h6 className="BattleBall_bottomnavbar_tradeEdition_li_text" id="BattleBall_bottomnavbar_tradeEdition_li_text5"> Home </h6>
        <ion-icon name="menu" className="BattleBall_bottomnavbar_tradeEdition_icon" id="BattleBall_bottomnavbar_tradeEdition_icon5" />
      </li>
    </ul>
  </nav>
  {/* Side nav */}
  <nav className="SN side_nav">
    <div className="SNL">
      <div className="SNLTC">
        <h2 className="SNLTC SNLRT"> Following </h2>
      </div>
      <div className="SNLIC">
        <ion-icon className="SNLI SNI" name="menu" />
      </div>
    </div>
    <div className="SNC">
      <ul className="SNCU">
        <li className="SNCUL"> item1 </li>
        <li className="SNCUL"> item2 </li>
        <li className="SNCUL"> item3 </li>
        <li className="SNCUL"> item4 </li>
        <li className="SNCUL"> item5 </li>
        <li className="SNCUL"> item6 </li>
        <li className="SNCUL"> item7 </li>
        <li className="SNCUL"> item8 </li>
        <li className="SNCUL"> item9 </li>
        <li className="SNCUL"> item10 </li>
      </ul>
    </div>
    <div className="SNR">
      <div className="SNRTC">
        <h2 className="SNLTC SNLRT"> Filter </h2>
      </div>
      <div className="SNRIC">
        <ion-icon className="SNRI SNLRI" name="filter" />
      </div>
    </div>
  </nav>
  {/* Contract Us */}
  <div id="contract_us CU" className="contract_us">
    <div className="mCUT contract_us_chat_toggler" id="contract_us_icon_container">
      <ion-icon className="contract_us_opener" name="menu" />
      <ion-icon className="contract_us_closer" name="close" />
    </div>
    <nav className="mCUCC contract_us_chat_container">
      <div className="contract_us_header"> content </div>
      <div className="contract_us_hero"> content </div>
    </nav>
  </div>
  {/* Freefire Top */}
  {/* Freefire Sidebar Left */}
  <nav className="freefire_sidebar_left">
    <ul className="FSLU">
      <li className="FSLUL">
        <h2 className="FSLULT"> Valt </h2>
        <ion-icon className="FSLULI" name="albums" />
      </li>
      <li className="FSLUL">
        <h2 className="FSLULT"> Store </h2>
        <ion-icon className="FSLULI" name="bag" />
      </li>
      <li className="FSLUL">
        <h2 className="FSLULT"> Stories </h2>
        <ion-icon className="FSLULI" name="book" />
      </li>
      <li className="FSLUL">
        <h2 className="FSLULT"> Update </h2>
        <ion-icon className="FSLULI" name="barbell" />
      </li>
      <li className="FSLUL">
        <h2 className="FSLULT"> New </h2>
        <ion-icon className="FSLULI" name="bulb" />
      </li>
    </ul>
  </nav>
  {/* Freefire Sidebar Right */}
  <nav className="freefire_sidebar_right">
    <ul className="FSLU">
      <li className="FSLUL">
        <h2 className="FSLULT"> Guild </h2>
        <ion-icon className="FSLULI" name="flag" />
      </li>
      <li className="FSLUL">
        <h2 className="FSLULT"> Progress </h2>
        <ion-icon className="FSLULI" name="cellular" />
      </li>
      <li className="FSLUL">
        <h2 className="FSLULT"> Downloads </h2>
        <ion-icon className="FSLULI" name="cloud" />
      </li>
      <li className="FSLUL">
        <h2 className="FSLULT"> Events </h2>
        <ion-icon className="FSLULI" name="diamond" />
      </li>
      <li className="FSLUL">
        <h2 className="FSLULT"> Rank </h2>
        <ion-icon className="FSLULI" name="star" />
      </li>
    </ul>
  </nav>
  {/* Freefire Bottom */}
  <nav className="FB">
    <div className="FBL">
    </div>
    <div className="FBC">
    </div>
    <div className="FBR">
    </div>
  </nav>
  {/* ////////////////////// Drop downs Start ////////////////// */}
  {/* Profile drop-down */}
  <nav className="navbar_profile_container NDPC">
    <div className="navbar_profile_container_guard profile_container NDPCG">
      <div className="navbar_profile_container_guard_default NDPCGD ">
        <div className="NDPCGDT">
          <div className="NDPCGDTT ">
            <div className="NDPCGDTTL">
              <div className="NDPCGDTTLAC">
                <div className="NDPCGDTTA">
                  <div className="NDPCGDTTAC NDPCGDTTACR">
                    <ion-icon name="menu" className="NDPCGDTTACI" />
                  </div>
                  <div className="NDPCGDTTAC NDPCGDTTACY">
                    <ion-icon name="menu" className="NDPCGDTTACI" />
                  </div>
                  <div className="NDPCGDTTAC NDPCGDTTACG">
                    <ion-icon name="menu" className="NDPCGDTTACI" />
                  </div>
                </div>
              </div>
              {/* <ion-icon class="NDPCGDTTI" name="remove"></ion-icon> */}
              <h2 className="NDPCGDTTT">User</h2>
            </div>
            <div className="NDPCGDTTR">
              <div className="NDPCGDTTIC">
                <ion-icon name="mail" className="NDPCGDTTI" />
              </div>
              <div className="NDPCGDTTIC">
                <ion-icon name="analytics" className="NDPCGDTTI" />
              </div>
              <div className="NDPCGDTTIC">
                <ion-icon name="close" className="NDPCGDTTI icon-visible profile_close" />
              </div>
            </div>
          </div>
          <div className="NDPCGDTC">
            <img src="https://cdn.jsdelivr.net/gh/Man-from-earth25/hello/website/public/blockchain/etherium.jpg" alt="e" className="NDPCGDTCL" />
            <h3 className="NDPCGDTCN">Manfromearth25</h3>
            <h3 className="NDPCGDTCE">manfromearth25@gmail.com</h3>
            <h3 className="NDPCGDTCA">QW4Q4W5YE7H8DI4JFEPOM</h3>
          </div>
          <div className="NDPCGDTB">
            Manage Your Personal Account 
          </div>
        </div>
        <ul className="NDPCGDC">
          <li className="NDPCGDCL profile_switch_button">
            <div className="NDPCGDCLIC circle_icon">
              <ion-icon name="swap-horizontal" />
            </div>
            <div className="NDPCGDCLTC">
              <h2 className="NDPCGDCLT"> Switch &amp; Account </h2>
            </div>
            <div className="NDPCGDCLIC">
              <ion-icon className="NDPCGDCLI" name="chevron-forward" />
            </div>
          </li>
          <li className="NDPCGDCL profile_setting_button">
            <div className="NDPCGDCLIC circle_icon">
              <ion-icon className="NDPCGDCLI" name="settings" />
            </div>
            <div className="NDPCGDCLTC">
              <h2 className="NDPCGDCLT"> Setting &amp; Privacy </h2>
            </div>
            <div className="NDPCGDCLIC">
              <ion-icon className="NDPCGDCLI" name="chevron-forward" />
            </div>
          </li>
          <li className="NDPCGDCL profile_help_button">
            <div className="NDPCGDCLIC circle_icon">
              <ion-icon className="NDPCGDCLI" name="help" />
            </div>
            <div className="NDPCGDCLTC">
              <h2 className="NDPCGDCLT"> Help &amp; Support </h2>
            </div>
            <div className="NDPCGDCLIC">
              <ion-icon className="NDPCGDCLI" name="chevron-forward" />
            </div>
          </li>
          <li className="NDPCGDCL profile_language_button">
            <div className="NDPCGDCLIC circle_icon">
              <ion-icon className="NDPCGDCLI" name="language" />
            </div>
            <div className="NDPCGDCLTC">
              <h2 className="NDPCGDCLT"> Language &amp; Audio </h2>
            </div>
            <div className="NDPCGDCLIC">
              <ion-icon className="NDPCGDCLI" name="chevron-forward" />
            </div>
          </li>
          <li className="NDPCGDCL profile_location_button">
            <div className="NDPCGDCLIC circle_icon">
              <ion-icon className="NDPCGDCLI" name="location" />
            </div>
            <div className="NDPCGDCLTC">
              <h2 className="NDPCGDCLT"> Location &amp; Ip </h2>
            </div>
            <div className="NDPCGDCLIC">
              <ion-icon className="NDPCGDCLI" name="chevron-forward" />
            </div>
          </li>
        </ul>
        <ul className="NDPCGDB">
          <li className="NDPCGDBL">
            <div className="NDPCGDBLIC circle_icon">
              <ion-icon className="NDPCGDBLI" name="link" />
            </div>
            <div className="NDPCGDBLTC">
              <h2 className="NDPCGDBLT"> Link Account </h2>
            </div>          
          </li>
          <li className="NDPCGDBL">
            <div className="NDPCGDBLIC circle_icon">
              <ion-icon className="NDPCGDBLI" name="person" />
            </div>
            <div className="NDPCGDBLTC">
              <h2 className="NDPCGDBLT"> Profile </h2>
            </div>          
          </li>
          <li className="NDPCGDBL">
            <div className="NDPCGDBLIC circle_icon">
              <ion-icon className="NDPCGDBLI" name="wallet" />
            </div>
            <div className="NDPCGDBLTC">
              <h2 className="NDPCGDBLT"> Wallet </h2>
            </div>          
          </li>
          <li className="NDPCGDBL">
            <div className="NDPCGDBLIC circle_icon">
              <ion-icon className="NDPCGDBLI" name="bicycle" />
            </div>
            <div className="NDPCGDBLTC">
              <h2 className="NDPCGDBLT"> Activity Log </h2>
            </div>          
          </li>
          <li className="NDPCGDBL show_less">
            <div className="NDPCGDBLIC circle_icon">
              <ion-icon className="NDPCGDBLI" name="pizza" />
            </div>
            <div className="NDPCGDBLTC">
              <h2 className="NDPCGDBLT"> Feed </h2>
            </div>          
          </li>                        
          <li className="NDPCGDBL show_less">
            <div className="NDPCGDBLIC circle_icon">
              <ion-icon className="NDPCGDBLI" name="color-wand" />
            </div>
            <div className="NDPCGDBLTC">
              <h2 className="NDPCGDBLT"> Theme </h2>
            </div>          
          </li>
          <li className="NDPCGDBL show_less">
            <div className="NDPCGDBLIC circle_icon">
              <ion-icon className="NDPCGDBLI" name="desktop" />
            </div>
            <div className="NDPCGDBLTC">
              <h2 className="NDPCGDBLT"> Keyboard Shortcut </h2>
            </div>          
          </li>
          <li className="NDPCGDBL show_less">
            <div className="NDPCGDBLIC circle_icon">
              <ion-icon className="NDPCGDBLI" name="cafe" />
            </div>
            <div className="NDPCGDBLTC">
              <h2 className="NDPCGDBLT"> Request A Feature </h2>
            </div>          
          </li>
          <li className="NDPCGDBL show_less">
            <div className="NDPCGDBLIC circle_icon">
              <ion-icon className="NDPCGDBLI" name="send" />
            </div>
            <div className="NDPCGDBLTC">
              <h2 className="NDPCGDBLT"> Give Feedback </h2>
            </div>          
          </li>
          <li className="NDPCGDBL show_toggler">
            <div className="NDPCGDBLIC circle_icon">
              <ion-icon className="NDPCGDBLI" name="log-out" />
            </div>
            <div className="NDPCGDBLTC">
              <h2 className="NDPCGDBLT"> Logout </h2>
            </div>        
            <div className="NDPCGDBLIC circle_icon">
              <ion-icon className="NDPCGDBLI" name="chevron-down" />
            </div>
          </li>
        </ul>
        <div className="NDPCGDF">
          <div className="NDPCGDFB">Sign Out &amp; Remove All Data</div>
          <div className="NDPCGDFC">
            Privacy • Terms • Advertising • Ad Choice • Cookies • More • BattleBall ©️ 2022
          </div>
        </div>
      </div>
      <div className="navbar_profile_container_guard_default NDPCGD  NDPCGS&A">
        <div className="NDPCGDT NDPCGFBT">
          <div className="NDPCGDTT NDPCGFBTT">
            <div className="NDPCGDTTL NDPCGFBTTL">
              <div className="NDPCGDTTIC NDPCGFBTTIC">
                <ion-icon className="profile_back_button" name="arrow-back" />
              </div>
              <h2 className="NDPCGDTTT NDPCGFBTTT ">Switch &amp; Account</h2>
            </div>
            <div className="NDPCGDTTR NDPCGFBTTR">
              <div className="NDPCGDTTIC NDPCGFBTTIC">
                <ion-icon name="close" className="icon-visible profile_close NDPCGDTTI" />
              </div>
            </div>
          </div>
        </div>
        <ul className="NDPCGDB NDPCGFBB">
          <li className="NDPCGDBL">
            <div className="NDPCGDBLIC circle_icon">
              <ion-icon className="NDPCGDBLI" name="link" />
            </div>
            <div className="NDPCGDBLTC">
              <h2 className="NDPCGDBLT"> Link Account </h2>
            </div>          
          </li>
          <li className="NDPCGDBL">
            <div className="NDPCGDBLIC circle_icon">
              <ion-icon className="NDPCGDBLI" name="person" />
            </div>
            <div className="NDPCGDBLTC">
              <h2 className="NDPCGDBLT"> Profile </h2>
            </div>          
          </li>
          <li className="NDPCGDBL">
            <div className="NDPCGDBLIC circle_icon">
              <ion-icon className="NDPCGDBLI" name="wallet" />
            </div>
            <div className="NDPCGDBLTC">
              <h2 className="NDPCGDBLT"> Wallet </h2>
            </div>          
          </li>
          <li className="NDPCGDBL">
            <div className="NDPCGDBLIC circle_icon">
              <ion-icon className="NDPCGDBLI" name="bicycle" />
            </div>
            <div className="NDPCGDBLTC">
              <h2 className="NDPCGDBLT"> Activity Log </h2>
            </div>          
          </li>
          <li className="NDPCGDBL show_less">
            <div className="NDPCGDBLIC circle_icon">
              <ion-icon className="NDPCGDBLI" name="pizza" />
            </div>
            <div className="NDPCGDBLTC">
              <h2 className="NDPCGDBLT"> Feed </h2>
            </div>          
          </li>                        
          <li className="NDPCGDBL show_less">
            <div className="NDPCGDBLIC circle_icon">
              <ion-icon className="NDPCGDBLI" name="color-wand" />
            </div>
            <div className="NDPCGDBLTC">
              <h2 className="NDPCGDBLT"> Theme </h2>
            </div>          
          </li>
          <li className="NDPCGDBL show_less">
            <div className="NDPCGDBLIC circle_icon">
              <ion-icon className="NDPCGDBLI" name="desktop" />
            </div>
            <div className="NDPCGDBLTC">
              <h2 className="NDPCGDBLT"> Keyboard Shortcut </h2>
            </div>          
          </li>
          <li className="NDPCGDBL show_less">
            <div className="NDPCGDBLIC circle_icon">
              <ion-icon className="NDPCGDBLI" name="cafe" />
            </div>
            <div className="NDPCGDBLTC">
              <h2 className="NDPCGDBLT"> Request A Feature </h2>
            </div>          
          </li>
          <li className="NDPCGDBL show_less">
            <div className="NDPCGDBLIC circle_icon">
              <ion-icon className="NDPCGDBLI" name="send" />
            </div>
            <div className="NDPCGDBLTC">
              <h2 className="NDPCGDBLT"> Give Feedback </h2>
            </div>          
          </li>
          <li className="NDPCGDBL show_toggler">
            <div className="NDPCGDBLIC circle_icon">
              <ion-icon className="NDPCGDBLI" name="log-out" />
            </div>
            <div className="NDPCGDBLTC">
              <h2 className="NDPCGDBLT"> Logout </h2>
            </div>        
            <div className="NDPCGDBLIC circle_icon">
              <ion-icon className="NDPCGDBLI" name="chevron-down" />
            </div>
          </li>
        </ul>
      </div>
      <div className="navbar_profile_container_guard_default NDPCGD  NDPCGS&A">
        <div className="NDPCGDT NDPCGFBT">
          <div className="NDPCGDTT NDPCGFBTT">
            <div className="NDPCGDTTL NDPCGFBTTL">
              <div className="NDPCGDTTIC NDPCGFBTTIC">
                <ion-icon className="profile_back_button" name="arrow-back" />
              </div>
              <h2 className="NDPCGDTTT">Setting &amp; Privacy</h2>
            </div>
            <div className="NDPCGDTTR NDPCGFBTTR">
              <div className="NDPCGDTTIC NDPCGFBTTIC">
                <ion-icon name="close" className="icon-visible profile_close NDPCGDTTI" />
              </div>
            </div>
          </div>
        </div>
        <ul className="NDPCGDB NDPCGFBB">
          <li className="NDPCGDBL">
            <div className="NDPCGDBLIC circle_icon">
              <ion-icon className="NDPCGDBLI" name="link" />
            </div>
            <div className="NDPCGDBLTC">
              <h2 className="NDPCGDBLT"> Link Account </h2>
            </div>          
          </li>
          <li className="NDPCGDBL">
            <div className="NDPCGDBLIC circle_icon">
              <ion-icon className="NDPCGDBLI" name="person" />
            </div>
            <div className="NDPCGDBLTC">
              <h2 className="NDPCGDBLT"> Profile </h2>
            </div>          
          </li>
          <li className="NDPCGDBL">
            <div className="NDPCGDBLIC circle_icon">
              <ion-icon className="NDPCGDBLI" name="wallet" />
            </div>
            <div className="NDPCGDBLTC">
              <h2 className="NDPCGDBLT"> Wallet </h2>
            </div>          
          </li>
          <li className="NDPCGDBL">
            <div className="NDPCGDBLIC circle_icon">
              <ion-icon className="NDPCGDBLI" name="bicycle" />
            </div>
            <div className="NDPCGDBLTC">
              <h2 className="NDPCGDBLT"> Activity Log </h2>
            </div>          
          </li>
          <li className="NDPCGDBL show_less">
            <div className="NDPCGDBLIC circle_icon">
              <ion-icon className="NDPCGDBLI" name="pizza" />
            </div>
            <div className="NDPCGDBLTC">
              <h2 className="NDPCGDBLT"> Feed </h2>
            </div>          
          </li>                        
          <li className="NDPCGDBL show_less">
            <div className="NDPCGDBLIC circle_icon">
              <ion-icon className="NDPCGDBLI" name="color-wand" />
            </div>
            <div className="NDPCGDBLTC">
              <h2 className="NDPCGDBLT"> Theme </h2>
            </div>          
          </li>
          <li className="NDPCGDBL show_less">
            <div className="NDPCGDBLIC circle_icon">
              <ion-icon className="NDPCGDBLI" name="desktop" />
            </div>
            <div className="NDPCGDBLTC">
              <h2 className="NDPCGDBLT"> Keyboard Shortcut </h2>
            </div>          
          </li>
          <li className="NDPCGDBL show_less">
            <div className="NDPCGDBLIC circle_icon">
              <ion-icon className="NDPCGDBLI" name="cafe" />
            </div>
            <div className="NDPCGDBLTC">
              <h2 className="NDPCGDBLT"> Request A Feature </h2>
            </div>          
          </li>
          <li className="NDPCGDBL show_less">
            <div className="NDPCGDBLIC circle_icon">
              <ion-icon className="NDPCGDBLI" name="send" />
            </div>
            <div className="NDPCGDBLTC">
              <h2 className="NDPCGDBLT"> Give Feedback </h2>
            </div>          
          </li>
          <li className="NDPCGDBL show_toggler">
            <div className="NDPCGDBLIC circle_icon">
              <ion-icon className="NDPCGDBLI" name="log-out" />
            </div>
            <div className="NDPCGDBLTC">
              <h2 className="NDPCGDBLT"> Logout </h2>
            </div>        
            <div className="NDPCGDBLIC circle_icon">
              <ion-icon className="NDPCGDBLI" name="chevron-down" />
            </div>
          </li>
        </ul>
      </div>
      <div className="navbar_profile_container_guard_default NDPCGD  NDPCGS&A">
        <div className="NDPCGDT NDPCGFBT">
          <div className="NDPCGDTT NDPCGFBTT">
            <div className="NDPCGDTTL NDPCGFBTTL">
              <div className="NDPCGDTTIC NDPCGFBTTIC">
                <ion-icon className="profile_back_button" name="arrow-back" />
              </div>
              <h2 className="NDPCGDTTT">Help &amp; Support</h2>
            </div>
            <div className="NDPCGDTTR NDPCGFBTTR">
              <div className="NDPCGDTTIC NDPCGFBTTIC">
                <ion-icon name="close" className="icon-visible profile_close NDPCGDTTI" />
              </div>
            </div>
          </div>
        </div>
        <ul className="NDPCGDB NDPCGFBB">
          <li className="NDPCGDBL">
            <div className="NDPCGDBLIC circle_icon">
              <ion-icon className="NDPCGDBLI" name="link" />
            </div>
            <div className="NDPCGDBLTC">
              <h2 className="NDPCGDBLT"> Link Account </h2>
            </div>          
          </li>
          <li className="NDPCGDBL">
            <div className="NDPCGDBLIC circle_icon">
              <ion-icon className="NDPCGDBLI" name="person" />
            </div>
            <div className="NDPCGDBLTC">
              <h2 className="NDPCGDBLT"> Profile </h2>
            </div>          
          </li>
          <li className="NDPCGDBL">
            <div className="NDPCGDBLIC circle_icon">
              <ion-icon className="NDPCGDBLI" name="wallet" />
            </div>
            <div className="NDPCGDBLTC">
              <h2 className="NDPCGDBLT"> Wallet </h2>
            </div>          
          </li>
          <li className="NDPCGDBL">
            <div className="NDPCGDBLIC circle_icon">
              <ion-icon className="NDPCGDBLI" name="bicycle" />
            </div>
            <div className="NDPCGDBLTC">
              <h2 className="NDPCGDBLT"> Activity Log </h2>
            </div>          
          </li>
          <li className="NDPCGDBL show_less">
            <div className="NDPCGDBLIC circle_icon">
              <ion-icon className="NDPCGDBLI" name="pizza" />
            </div>
            <div className="NDPCGDBLTC">
              <h2 className="NDPCGDBLT"> Feed </h2>
            </div>          
          </li>                        
          <li className="NDPCGDBL show_less">
            <div className="NDPCGDBLIC circle_icon">
              <ion-icon className="NDPCGDBLI" name="color-wand" />
            </div>
            <div className="NDPCGDBLTC">
              <h2 className="NDPCGDBLT"> Theme </h2>
            </div>          
          </li>
          <li className="NDPCGDBL show_less">
            <div className="NDPCGDBLIC circle_icon">
              <ion-icon className="NDPCGDBLI" name="desktop" />
            </div>
            <div className="NDPCGDBLTC">
              <h2 className="NDPCGDBLT"> Keyboard Shortcut </h2>
            </div>          
          </li>
          <li className="NDPCGDBL show_less">
            <div className="NDPCGDBLIC circle_icon">
              <ion-icon className="NDPCGDBLI" name="cafe" />
            </div>
            <div className="NDPCGDBLTC">
              <h2 className="NDPCGDBLT"> Request A Feature </h2>
            </div>          
          </li>
          <li className="NDPCGDBL show_less">
            <div className="NDPCGDBLIC circle_icon">
              <ion-icon className="NDPCGDBLI" name="send" />
            </div>
            <div className="NDPCGDBLTC">
              <h2 className="NDPCGDBLT"> Give Feedback </h2>
            </div>          
          </li>
          <li className="NDPCGDBL show_toggler">
            <div className="NDPCGDBLIC circle_icon">
              <ion-icon className="NDPCGDBLI" name="log-out" />
            </div>
            <div className="NDPCGDBLTC">
              <h2 className="NDPCGDBLT"> Logout </h2>
            </div>        
            <div className="NDPCGDBLIC circle_icon">
              <ion-icon className="NDPCGDBLI" name="chevron-down" />
            </div>
          </li>
        </ul>
      </div>
      <div className="navbar_profile_container_guard_default NDPCGD  NDPCGS&A">
        <div className="NDPCGDT NDPCGFBT">
          <div className="NDPCGDTT NDPCGFBTT">
            <div className="NDPCGDTTL NDPCGFBTTL">
              <div className="NDPCGDTTIC NDPCGFBTTIC">
                <ion-icon className="profile_back_button" name="arrow-back" />
              </div>
              <h2 className="NDPCGDTTT">Language &amp; Audio</h2>
            </div>
            <div className="NDPCGDTTR NDPCGFBTTR">
              <div className="NDPCGDTTIC NDPCGFBTTIC">
                <ion-icon name="close" className="icon-visible profile_close NDPCGDTTI" />
              </div>
            </div>
          </div>
        </div>
        <ul className="NDPCGDB NDPCGFBB">
          <li className="NDPCGDBL">
            <div className="NDPCGDBLIC circle_icon">
              <ion-icon className="NDPCGDBLI" name="link" />
            </div>
            <div className="NDPCGDBLTC">
              <h2 className="NDPCGDBLT"> Link Account </h2>
            </div>          
          </li>
          <li className="NDPCGDBL">
            <div className="NDPCGDBLIC circle_icon">
              <ion-icon className="NDPCGDBLI" name="person" />
            </div>
            <div className="NDPCGDBLTC">
              <h2 className="NDPCGDBLT"> Profile </h2>
            </div>          
          </li>
          <li className="NDPCGDBL">
            <div className="NDPCGDBLIC circle_icon">
              <ion-icon className="NDPCGDBLI" name="wallet" />
            </div>
            <div className="NDPCGDBLTC">
              <h2 className="NDPCGDBLT"> Wallet </h2>
            </div>          
          </li>
          <li className="NDPCGDBL">
            <div className="NDPCGDBLIC circle_icon">
              <ion-icon className="NDPCGDBLI" name="bicycle" />
            </div>
            <div className="NDPCGDBLTC">
              <h2 className="NDPCGDBLT"> Activity Log </h2>
            </div>          
          </li>
          <li className="NDPCGDBL show_less">
            <div className="NDPCGDBLIC circle_icon">
              <ion-icon className="NDPCGDBLI" name="pizza" />
            </div>
            <div className="NDPCGDBLTC">
              <h2 className="NDPCGDBLT"> Feed </h2>
            </div>          
          </li>                        
          <li className="NDPCGDBL show_less">
            <div className="NDPCGDBLIC circle_icon">
              <ion-icon className="NDPCGDBLI" name="color-wand" />
            </div>
            <div className="NDPCGDBLTC">
              <h2 className="NDPCGDBLT"> Theme </h2>
            </div>          
          </li>
          <li className="NDPCGDBL show_less">
            <div className="NDPCGDBLIC circle_icon">
              <ion-icon className="NDPCGDBLI" name="desktop" />
            </div>
            <div className="NDPCGDBLTC">
              <h2 className="NDPCGDBLT"> Keyboard Shortcut </h2>
            </div>          
          </li>
          <li className="NDPCGDBL show_less">
            <div className="NDPCGDBLIC circle_icon">
              <ion-icon className="NDPCGDBLI" name="cafe" />
            </div>
            <div className="NDPCGDBLTC">
              <h2 className="NDPCGDBLT"> Request A Feature </h2>
            </div>          
          </li>
          <li className="NDPCGDBL show_less">
            <div className="NDPCGDBLIC circle_icon">
              <ion-icon className="NDPCGDBLI" name="send" />
            </div>
            <div className="NDPCGDBLTC">
              <h2 className="NDPCGDBLT"> Give Feedback </h2>
            </div>          
          </li>
          <li className="NDPCGDBL show_toggler">
            <div className="NDPCGDBLIC circle_icon">
              <ion-icon className="NDPCGDBLI" name="log-out" />
            </div>
            <div className="NDPCGDBLTC">
              <h2 className="NDPCGDBLT"> Logout </h2>
            </div>        
            <div className="NDPCGDBLIC circle_icon">
              <ion-icon className="NDPCGDBLI" name="chevron-down" />
            </div>
          </li>
        </ul>
      </div>
      <div className="navbar_profile_container_guard_default NDPCGD  NDPCGS&A">
        <div className="NDPCGDT NDPCGFBT">
          <div className="NDPCGDTT NDPCGFBTT">
            <div className="NDPCGDTTL NDPCGFBTTL">
              <div className="NDPCGDTTIC NDPCGFBTTIC">
                <ion-icon className="profile_back_button" name="arrow-back" />
              </div>
              <h2 className="NDPCGDTTT">Location &amp; Ip</h2>
            </div>
            <div className="NDPCGDTTR NDPCGFBTTR">
              <div className="NDPCGDTTIC NDPCGFBTTIC">
                <ion-icon name="close" className="icon-visible profile_close NDPCGDTTI" />
              </div>
            </div>
          </div>
        </div>
        <ul className="NDPCGDB NDPCGFBB">
          <li className="NDPCGDBL">
            <div className="NDPCGDBLIC circle_icon">
              <ion-icon className="NDPCGDBLI" name="link" />
            </div>
            <div className="NDPCGDBLTC">
              <h2 className="NDPCGDBLT"> Link Account </h2>
            </div>          
          </li>
          <li className="NDPCGDBL">
            <div className="NDPCGDBLIC circle_icon">
              <ion-icon className="NDPCGDBLI" name="person" />
            </div>
            <div className="NDPCGDBLTC">
              <h2 className="NDPCGDBLT"> Profile </h2>
            </div>          
          </li>
          <li className="NDPCGDBL">
            <div className="NDPCGDBLIC circle_icon">
              <ion-icon className="NDPCGDBLI" name="wallet" />
            </div>
            <div className="NDPCGDBLTC">
              <h2 className="NDPCGDBLT"> Wallet </h2>
            </div>          
          </li>
          <li className="NDPCGDBL">
            <div className="NDPCGDBLIC circle_icon">
              <ion-icon className="NDPCGDBLI" name="bicycle" />
            </div>
            <div className="NDPCGDBLTC">
              <h2 className="NDPCGDBLT"> Activity Log </h2>
            </div>          
          </li>
          <li className="NDPCGDBL show_less">
            <div className="NDPCGDBLIC circle_icon">
              <ion-icon className="NDPCGDBLI" name="pizza" />
            </div>
            <div className="NDPCGDBLTC">
              <h2 className="NDPCGDBLT"> Feed </h2>
            </div>          
          </li>                        
          <li className="NDPCGDBL show_less">
            <div className="NDPCGDBLIC circle_icon">
              <ion-icon className="NDPCGDBLI" name="color-wand" />
            </div>
            <div className="NDPCGDBLTC">
              <h2 className="NDPCGDBLT"> Theme </h2>
            </div>          
          </li>
          <li className="NDPCGDBL show_less">
            <div className="NDPCGDBLIC circle_icon">
              <ion-icon className="NDPCGDBLI" name="desktop" />
            </div>
            <div className="NDPCGDBLTC">
              <h2 className="NDPCGDBLT"> Keyboard Shortcut </h2>
            </div>          
          </li>
          <li className="NDPCGDBL show_less">
            <div className="NDPCGDBLIC circle_icon">
              <ion-icon className="NDPCGDBLI" name="cafe" />
            </div>
            <div className="NDPCGDBLTC">
              <h2 className="NDPCGDBLT"> Request A Feature </h2>
            </div>          
          </li>
          <li className="NDPCGDBL show_less">
            <div className="NDPCGDBLIC circle_icon">
              <ion-icon className="NDPCGDBLI" name="send" />
            </div>
            <div className="NDPCGDBLTC">
              <h2 className="NDPCGDBLT"> Give Feedback </h2>
            </div>          
          </li>
          <li className="NDPCGDBL show_toggler">
            <div className="NDPCGDBLIC circle_icon">
              <ion-icon className="NDPCGDBLI" name="log-out" />
            </div>
            <div className="NDPCGDBLTC">
              <h2 className="NDPCGDBLT"> Logout </h2>
            </div>        
            <div className="NDPCGDBLIC circle_icon">
              <ion-icon className="NDPCGDBLI" name="chevron-down" />
            </div>
          </li>
        </ul>
      </div>
      <div className="op">hi</div>
    </div>
  </nav>
  {/* Add drop-down */}
  <nav className="navbar_add_container NDAC">
    <ul className="navbar_add_container NDACU">
      <li className="navbar_add_container_ul_lu NDACUL">
        <ion-icon name="menu" className="navbar_add_container_ul_li_icon NDACULI" />
        <h2 className="navbar_add_container_ul_li_text NDACULT"> create a new 1 </h2>
      </li>
      <li className="navbar_add_container_ul_lu NDACUL">
        <ion-icon name="menu" className="navbar_add_container_ul_li_icon NDACULI" />
        <h2 className="navbar_add_container_ul_li_text NDACULT"> create a new 2 </h2>
      </li>
      <li className="navbar_add_container_ul_lu NDACUL">
        <ion-icon name="menu" className="navbar_add_container_ul_li_icon NDACULI" />
        <h2 className="navbar_add_container_ul_li_text NDACULT"> create a new 3 </h2>
      </li>
      <li className="navbar_add_container_ul_lu NDACUL">
        <ion-icon name="menu" className="navbar_add_container_ul_li_icon NDACULI" />
        <h2 className="navbar_add_container_ul_li_text NDACULT"> create a new 4 </h2>
      </li>
      <li className="navbar_add_container_ul_lu NDACUL">
        <ion-icon name="menu" className="navbar_add_container_ul_li_icon NDACULI" />
        <h2 className="navbar_add_container_ul_li_text NDACULT"> create a new 5 </h2>
      </li>
      <li className="navbar_add_container_ul_lu NDACUL">
        <ion-icon name="menu" className="navbar_add_container_ul_li_icon NDACULI" />
        <h2 className="navbar_add_container_ul_li_text NDACULT"> create a new 6 </h2>
      </li>
      <li className="navbar_add_container_ul_lu NDACUL">
        <ion-icon name="menu" className="navbar_add_container_ul_li_icon NDACULI" />
        <h2 className="navbar_add_container_ul_li_text NDACULT"> create a new 7 </h2>
      </li>
    </ul>
  </nav>
  {/* Notifications drop-down  */}
  {/* Scan drop-down  */}
  <nav className="navbar_scan_container NDAC">
    <ul className="navbar_scan_container_ul NDACU">
      <li className="navbar_scan_container_ul_li NDACUL">
        <h1 className="navbar_scan_container_ul_li_text NDACULT">
          Scan to explore
        </h1>
        <img src="https://cdn.jsdelivr.net/gh/Man-from-earth25/hello/website/public/blockchain/solana.jpg" alt="e" className="navbar_scan_container_ul_li_img NDACULI" />
      </li>
    </ul>
  </nav>
  {/* ////////////////////// Drop downs Start ////////////////// */}
  {/* ////////////////////// Main Start ⭐⭐⭐ ////////////////////// */}
  <main className="M">
    {/* Hero Start */}
    <div id="main_container" className="space-y-0.5 main_container">
      {/* <div class="wallet_not_connect">
             <h1>Your not Connted</h1>
             <h1>Please connect your Wallet to continue!!!</h1>
             <div class="connect_button">
                 connect your wallet 
             </div> 
         </div> */}
      <div className="madarchod_thailand_welcome">
        <div className="madarchod_thailand_welcome_top">
          <h1>Play Boll To Win It All</h1>
          <h3>
            Compete with others & win Crypto
          </h3>
        </div>
        <div className="madarchod_thailand_welcome_center">
          <div className="madarchod_thailand_welcome_center_left_big">
            <div className="madarchod_thailand_welcome_center_left_small" />
          </div>
          <div className="madarchod_thailand_welcome_center_center_big">
            <div className="madarchod_thailand_welcome_center_center_small" />
          </div>
          <div className="madarchod_thailand_welcome_center_right_big">
            <div className="madarchod_thailand_welcome_center_right_small" />
          </div>
        </div>
        <div className="madarchod_thailand_welcome_bottom">
        <Link passHref href='connect'>
          <div className="madarchod_thailand_welcome_bottom_launch_button">
            Launch App
          </div>
         </Link> 
        </div>
      </div>
      <div className="version">
        version:1.0
      </div>
    </div>    
    {/* Hero End */}
    {/* Footer Start  */} 
    {/* <footer>
         
         
         <ul>
             
             
             <h1>About us</h1>
             
             <div id="main-link1" class="main-links">
                 
                 <li id="pf-li1" class="pf-li"><a href="#" class="pf-a"> Join a meetup </a></li>
                 <li id="pf-li2" class="pf-li"><a href="#" class="pf-a"> Ask a question</a></li>
                 <li id="pf-li3" class="pf-li"><a href="#" class="pf-a"> Help </a></li>
                 
                 
                 
             </div>
             
         </ul>
         <ul>
             
             
             <h1>About us</h1>
             
             <div id="main-link1" class="main-links">
                 
                 <li id="pf-li1" class="pf-li"><a href="#" class="pf-a"> Join a meetup </a></li>
                 <li id="pf-li2" class="pf-li"><a href="#" class="pf-a"> Ask a question</a></li>
                 <li id="pf-li3" class="pf-li"><a href="#" class="pf-a"> Help </a></li>
                 
                 
                 
             </div>
             
         </ul>
         
         
         <div id="copyright">
             All rights reserved to  BattleBall 
         </div>
      </footer> */}
    {/* Footer End  */} 
  </main>
  {/* ////////////////////// Main End ⭐⭐⭐ ////////////////////// */}
      
      
      
      
      
      
      
      
      
      
    </>
  )
}
