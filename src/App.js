import './App.css';
import { useEffect, useState } from 'react';
import EveryClientMatters from './components/EveryClientMatters';
import Footer from './components/Footer';
import GetQuality from './components/GetQuality';
import HeaderSec from './components/HeaderSec';
import MostPopular from './components/MostPopular';
import Newsletter from './components/Newsletter';
import OurCourses from './components/OurCourses';
import OurPopularCourses from './components/OurPopularCourses';
import Preloader from './components/Preloader';
import BackToTop from "./assets/images/webp/backtop.png"
import Aos from 'aos';
import "aos/dist/aos.css";

function App() {
  // =======================aos============================
  useEffect(() => {
    Aos.init({
      duration: 1200,
      once: true,
    });
  }, []);
  // ========================back-to-top=======================
  const top = () => {
    document.documentElement.scrollTop = 0;
  };
  const [backToTop, setbackToTop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop > 100) {
        setbackToTop(true);
      } else {
        setbackToTop(false);
      }
    });
  }, []);
  // =======================preloader======================
  const [screenLoading, setScreenLoading] = useState(false);
  useEffect(() => {
    setScreenLoading(true);
    setTimeout(() => {
      setScreenLoading(false);
    }, 4000);
  }, []);
  return (
    <>
      {screenLoading ? (
        <Preloader />
      ) : (
        <>
          <div className='overflow-hidden'>
            <HeaderSec />
            <OurCourses />
            <MostPopular />
            <OurPopularCourses />
            <EveryClientMatters />
            <GetQuality />
            <Newsletter />
            <Footer />
            <div>
              <img src={BackToTop} alt="Arrow" className={`${backToTop ? "fixed right-[1%] bottom-[2%] z-30 !cursor-pointer md:w-[40px] w-[30px]" : "d-none"} bg-[#96BB7C] rounded-[50%] updown_animation`} onClick={() => top()} />
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default App;
