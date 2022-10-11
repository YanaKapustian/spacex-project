import React from 'react';
import { HashRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Main from './components/Main';
import MainFavorite from './components/MainFavorite';

const App:React.FC = () => {
  return (
    <div className="App">
      <HashRouter basename='/'>
        <Routes>
          <Route path='/' element={<Main></Main>}></Route>
          <Route path='/favorites' element={<MainFavorite></MainFavorite>}></Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
