import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { LandingPage } from './containers/LandingPage/LandingPage.Container';
import { PageNotFound } from './containers/PageNotFound/PageNotFound.Container';
import { Navbar } from './components/Navigation/Navbar.component';
import { Main } from './components/Main/Main';
import { FavouritePage } from './components/FavoritesToolPage/FavoritesToolPage.component';
import { ToolDetailsPage } from './components/ToolDetailsPage/ToolDetailsPage.component';
import { Footer } from './components/Footer/Footer.component';
import { ContactUs } from './components/ContactUs/ContactUs/ContactUs.component';
import { Inbox } from './components/InboxMessageAdmin/Inbox.component';
import { AuthContextProvider } from './firebase/AuthContext';
import { AboutToolbox } from './components/AboutToolbox/AboutToolbox.component';

function App() {
  return (
    <div className="app">
      <Router>
        <AuthContextProvider>
          <Navbar />
          <Main>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="*" element={<PageNotFound />} />
              <Route path="/tools/:id" element={<ToolDetailsPage />} />
              <Route path="/about-toolbox" element={<AboutToolbox />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/user-name" element="" />
              <Route path="/favourites" element={<FavouritePage />} />
              <Route path="/inbox-admin" element={<Inbox />} />
            </Routes>
          </Main>
          <Footer />
        </AuthContextProvider>
      </Router>
    </div>
  );
}

export default App;
