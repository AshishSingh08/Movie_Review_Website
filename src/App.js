import React from 'react';

//Router
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';

//Components
import Header from './components/Common/Header';
import Home from './components/Home/Home';
import AboutUs from './components/AboutUs/AboutUs';
import ContactUs from './components/ContactUs/ContactUs';
import Movie from './components/Movies/Movies';
import Footer from './components/Common/Footer';
import NotFound from './components/NotFound/NotFound';
import ScrollToTop from './components/Common/ScrollToTop';

// Styles
import { GlobalStyle } from './GlobalStyle';
//
const App = () => {
  return (
    <Router>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/submit?' element={<Home />}/>
          <Route path='/AboutUs' element={<AboutUs/>} />
          <Route path='/ContactUs' element={<ContactUs/>}/>
          <Route path='/:movieId' element={<Movie />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
        <Footer />
        <GlobalStyle />
    </Router>

  )
}

export default App;
