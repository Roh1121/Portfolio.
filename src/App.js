// App.js
import './App.css';
import { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeContext } from './context/them';
import Header from './component/Header/Header.js';
import Home from './component/Home/Home.js';
import Certificate from './component/Certificates/Certificate.js';
import ScrollToTop from './component/ScrollToTop/ScrollToTop.js';
import Contact from './component/Contact/Contact.js';

const App = () => {
  const [{ themeName }] = useContext(ThemeContext);

  return (
    <Router>
      <div id="top" className={`${themeName} app`}>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/certificates" element={<Certificate />} />
            <Route path="/contact" element={<Contact/>}/>
          </Routes>
        </main>
        <ScrollToTop />
      </div>
    </Router>
  );
};

export default App;
