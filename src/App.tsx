import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { CardResume, Wishlist } from './components';
import { Header } from './containers/header/Header';
import { HomeContainer } from './containers/home/HomeContainer';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<HomeContainer />} />
        <Route path='/wishlist' element={<Wishlist />} />
        <Route path='/cart/resume' element={<CardResume />} />
      </Routes>

    </div>
  );
}

export default App;
