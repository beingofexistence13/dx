import "bootstrap/dist/css/bootstrap.min.css";
import './header.css'
import './App.css';

import Navigation from "./components/Nav/";
import About from "./components/About/";
import FAQ from "./components/FAQ/";
import Team from "./components/Team/";
import Footer from "./components/Footer/";
import Roadmap from "./components/Roadmap/Roadmap";
import Home from './components/Home/';
import Mint from './components/Mint/';
import Story from './components/Story/';
import Link from './components/Link/';


function App() {
  return (
    <div className="App">

      <div className="page-container "> 
        <Navigation />
        {/* <Header /> */}
        <Home />
        <About />
        <Mint />
        {/* <Gif /> */}
        <Story />
        <Roadmap />
        <Team />
        <FAQ />
        <Link />
        <Footer />
      </div>
    </div>
  );
}

export default App;
