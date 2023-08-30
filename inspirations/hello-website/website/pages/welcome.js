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
       
        <link rel="stylesheet" href="/ui/welcome_page1o1.css"/>
       
      </Head>
      
        <Script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js" />
        <Script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js" />
      
      
      
      
      {/* Navbar */}
      <nav className="WN">
        <ul className="WNU">
          <li className="WNUL">
            <div className="WNULC">
              <img src="https://cdn.jsdelivr.net/gh/Man-from-earth25/BattleBallhttps://cdn.jsdelivr.net/gh/Man-from-earth25/hello/website/public/blockchain/avalanche.jpg" alt="e" className="logo" />
              <h2 className="logo_text">BattleBall</h2>
            </div>
          </li>
          <li className="WNUC">
            <div className="WNUCA"> Overview </div>
            <div className="WNUCA"> Security </div>
            <div className="WNUCA"> Blog </div>
            <div className="WNUCA"> Support </div>
            <div className="WNUCA"> More </div>
          </li>
          <li className="WNUR">
            <div className="WNURC">
              <div className="WNURCB">Docs</div>
              <ion-icon className="WNURCI" name="menu" />
            </div>
          </li>
        </ul>
      </nav>
      {/* ////////////////////// Main Start ⭐⭐⭐ ////////////////////// */}
      <main className="M">
        {/* Hero Start */}
        <div id="main_container" className="space-y-0.5 main_container">
          <div className="welcome">
            <div className="intro">
              <h1 className="IT">Play Boll To Win It All</h1>
              <h1 className="smT">The Best Hockey Battles Are Waiting For You</h1>
              <Link passHref href='lobby'>
                    <div className="IB">Launch App</div>
              </Link>
              <div className="how_to_use">
                <h2 className="how_to_use_text">Start A Game Without Waiting A Second!</h2>
                <div className="how_to_use_guide">
                  <img src="https://cdn.jsdelivr.net/gh/Man-from-earth25/BattleBallhttps://cdn.jsdelivr.net/gh/Man-from-earth25/hello/website/public/Game.jpg" alt="img" className="how_to_use_guide_img" />
                </div>
              </div>
              <div className="how_to_use">
                <h2 className="how_to_use_text">Choose Your Ball By Buying Nfts!</h2>
                <div className="how_to_use_guide">
                  <img src="https://cdn.jsdelivr.net/gh/Man-from-earth25/BattleBallhttps://cdn.jsdelivr.net/gh/Man-from-earth25/hello/website/public/Nft.jpg" alt="img" className="how_to_use_guide_img" />
                </div>
              </div>
              <div className="how_to_use">
                <h2 className="how_to_use_text">Play With Your Fellow Friends As A Team!</h2>
                <div className="how_to_use_guide">
                  <img src="https://cdn.jsdelivr.net/gh/Man-from-earth25/BattleBallhttps://cdn.jsdelivr.net/gh/Man-from-earth25/hello/website/public/Team.jpg" alt="img" className="how_to_use_guide_img" />
                </div>
              </div>
              <div className="how_to_use">
                <h2 className="how_to_use_text">Start By Connecting Your Wallets And Setting Up Your Player Profile !</h2>
                <div className="how_to_use_guide">
                  <img src="https://cdn.jsdelivr.net/gh/Man-from-earth25/BattleBallhttps://cdn.jsdelivr.net/gh/Man-from-earth25/hello/website/public/Connect.jpg" alt="img" className="how_to_use_guide_img" />
                </div>
              </div>
              <div className="how_to_use">
                <h2 className="how_to_use_text">Customize Your Gaming Experience With Your As You Like!</h2>
                <div className="how_to_use_guide">
                  <img src="https://cdn.jsdelivr.net/gh/Man-from-earth25/BattleBallhttps://cdn.jsdelivr.net/gh/Man-from-earth25/hello/website/public/Customize.jpg" alt="img" className="how_to_use_guide_img" />
                </div>
              </div>
              {/* <div class="how_to_use">
                         
                         <div class="how_to_use_guide">
                             
                         </div>
                         
                     </div> */}
              {/* <div class="how_to_use">
                         
                         <div class="how_to_use_guide">
                             
                         </div>
                         
                     </div> */}
            </div>
            <div className="mesh_bg">
              <div className="blur_bg">
                <div className="welcome_service">
                  <h1>Levels</h1>
                  <p>Start growing level and a ggod mood with us</p>
                </div>
                <div className="welcome_service">
                  <h1>Security</h1>
                  <p>Security is must here</p>
                </div>
                <div className="welcome_service">
                  <h1>Privacy</h1>
                  <p>We are aware about your Privacy </p>
                </div>
                <div className="welcome_service">
                  <h1>Terms</h1>
                  <p>There are no side effects or side Terms</p>
                </div>
              </div>
            </div>
            <div className="join_container_big">
              <div className="join_container_small">
                <h1 className="join"> Join Battleball </h1> 
              </div>
            </div>
          </div>
        </div>    
        {/* Hero End */}
        {/* Footer Start  */} 
        <footer className="footer">
          <div className="FT">
            <div className="FTL">
              <h1>BattleBoll</h1>
              <h1>Get latest Updates Notifications</h1>
              <div className="FTLE">
                <input type="text" placeholder="Enter your Email" />
                <div className="FTLEB">Send</div>
              </div>
            </div>
            <div className="FTR">
              <div className="FTRF">
                <h2 className="FTRFT ff"> Company </h2>
                <h2 className="FTRFT"> About Us </h2>
                <h2 className="FTRFT"> Contract Us </h2>
                <h2 className="FTRFT"> Follow Us </h2>
                <h2 className="FTRFT"> Give Feedback </h2>
              </div>
              <div className="FTRS">
                <h2 className="FTRST ff"> Navigation </h2>
                <h2 className="FTRST"> Features </h2>
                <h2 className="FTRST"> Privacy </h2>
                <h2 className="FTRST"> Terms </h2>
                <h2 className="FTRST"> Request A feature </h2>
              </div>
              <div className="FTRT">
                <h2 className="FTRTT ff"> Quicklinks </h2>
                <h2 className="FTRTT"> FaQ </h2>
                <h2 className="FTRTT"> Discord </h2>
                <h2 className="FTRTT"> Slack </h2>
                <h2 className="FTRTT"> Twitter </h2>
              </div>
            </div>
          </div>
          <div className="FB">
            <h1 className="FBT">All right reserve to BattleBall</h1>
            <div className="FBSL">
              <ion-icon className="FBSLI" name="logo-facebook" />
              <ion-icon className="FBSLI" name="logo-google" />
              <ion-icon className="FBSLI" name="logo-discord" />
              <ion-icon className="FBSLI" name="logo-twitter" />
              <ion-icon className="FBSLI" name="logo-amazon" />
            </div>
          </div>
        </footer>
        {/* Footer End  */} 
      </main>
      {/* ////////////////////// Main End ⭐⭐⭐ ////////////////////// */}
      
      
      
      
      
      
      
      
      
    </>
  )
}
