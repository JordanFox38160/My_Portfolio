import './style/App.css';
import Accueil from './pages/Accueil'
import Page404 from './pages/Page404'
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import { ParallaxProvider } from 'react-scroll-parallax';

function App() {
  return (
    < BrowserRouter >
      <ParallaxProvider>
        <Routes>
          <Route path="*" element={<Page404 />} />
          <Route path="/accueil" element={<Accueil />} />
        </Routes>
      </ParallaxProvider>
    </BrowserRouter >

  )
};

export default App;