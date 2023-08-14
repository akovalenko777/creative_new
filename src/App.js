import { Routes, Route, useLocation } from 'react-router-dom';
import Default from './layouts/default';
import Home from './pages/Home';
import About from './pages/About';
import NewsList from './pages/NewsList';
import NewsDetail from './pages/NewsDetail';
import Contacts from './pages/Contacts';
import NotFound from './pages/NotFound';
import './assets/vendors/themify-icons/css/themify-icons.css';
import './assets/scss/creative-studio.scss';
import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ParallaxProvider } from 'react-scroll-parallax';





function App() {
  const hash = useLocation().hash;

  useEffect(()=>{
    if(hash!==''){
      const top = document.querySelector(hash)?.offsetTop || 0;
      window.scrollTo({top, behavior: 'smooth'});
    }
  }, [hash]);

  return (
    <div className="App">
      <ParallaxProvider>
        <Routes>
          <Route path="/" element={<Default/>}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="news" element={<NewsList />} />
            <Route path="news/:hash" element={<NewsDetail />} />
            <Route path="contacts" element={<Contacts />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ParallaxProvider>
      <ToastContainer position="top-center" />
    </div>
  );
}

export default App;
