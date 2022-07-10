import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { LandingPage } from './containers/LandingPage/LandingPage.Container';
import { PageNotFound } from './containers/PageNotFound/PageNotFound.Container';
import { Main } from './components/Main/Main';
import { ToolDetailPage } from './components/ToolDetailPage/ToolDetailPage.component';

function App() {
  return (
    <div className="app">
      <Main>
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="*" element={<PageNotFound />} />
            <Route path="/ToolDetailPage" element={<ToolDetailPage />} />
            <Route path="/about-toolbox" element="" />
            <Route path="/contact-us" element="" />
            <Route path="/user-name" element="" />
            <Route path="/sign-in" element="" />
            <Route path="/sign-out" element="" />
            <Route path="/favourites" element="" />
          </Routes>
        </Router>
      </Main>
    </div>
  );
}

export default App;
