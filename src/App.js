
import './App.css';
import { Route, Routes } from "react-router-dom";

import NavBar from './Components/NavBar';
import Header from './Components/Header';
import TradingOption from './Components/TradingOption'
import About from './Components/About'
import Collections from './Components/Collections';
import FeaturedAertworks from './Components/FeaturedAertworks';
import TopCreator from './Components/TopCreator';
import FAQ from './Components/FAQ';
import FooterBanner from './Components/FooterBanner';
function App() {
  return (
    <div>
      {/* style={{background: "linear-gradient(113.49deg, #984D38 -30.3%, #181E41 58.12%)"}}  className=' header  w-[1450px] h-full pb-[100px]' */}
      {/* <NavBar/>
      <Header/>
      <TradingOption/>
      <About/>
      <Collections/>
      <FeaturedAertworks/>
      <TopCreator/>
      <FAQ/>
      <FooterBanner/> */}
      <Routes>
        <Route path='/' element={<Header/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Collections' element={<Collections/>}/>
        <Route path='/FeturedArtWorks' element={<FeaturedAertworks/>}/>
        <Route path='TopCreator' element={<TopCreator/>} />
        <Route path='/FAQ' element={<FAQ/>} />
      </Routes>
      {/* <Header/> */}
    </div>
  );
}

export default App;
