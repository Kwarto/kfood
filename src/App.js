import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header, CreateContainer, Footer } from './components';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home/Home';
import Kitchens from './pages/kitchens/Kitchens';
import About from './pages/About/About';
import Services from './pages/Services/Services';

const App = () => {
  return (
    <AnimatePresence exitBeforeEnter>
      <div className="w-screen h-auto flex flex-col">
        <Header />
          <Routes>
            <Route path="/*" element={<Home />} />
            <Route path="/createItem" element={<CreateContainer />} />
            <Route path='/kitchens' element={<Kitchens />} />
            <Route path='/services' element={<Services />} />
            <Route path='/about' element={<About />} />
          </Routes>
        <Footer />  
        {/* </main> */}
      </div>
    </AnimatePresence>
  );
};

export default App;
