import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header, CreateContainer } from './components';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home/Home';

const App = () => {
  return (
    <AnimatePresence exitBeforeEnter>
      <div className="w-screen h-auto flex flex-col">
        <Header />
        
          <Routes>
            <Route path="/*" element={<Home />} />
            <Route path="/createItem" element={<CreateContainer />} />
          </Routes>
        {/* </main> */}
      </div>
    </AnimatePresence>
  );
};

export default App;
