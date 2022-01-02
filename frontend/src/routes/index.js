import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import App from '../App';
import TopNav from '../components/TopNav';
import PostCategory from '../views/PostCategory';

const Navigation = () => {
  return (
    <Router>
      <TopNav title='Readable Blog' />
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/:category' element={<PostCategory />} />
      </Routes>
    </Router>
  );
};

export default Navigation;
