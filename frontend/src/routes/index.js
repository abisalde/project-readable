import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import App from '../App';
import PostCategory from '../views/PostCategory';

const Navigation = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/:category' element={<PostCategory />} />
      </Routes>
    </Router>
  );
};

export default Navigation;
