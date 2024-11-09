import React from 'react';
import HomePage from './pages/HomePage';
import './index.css';
import Navbar from './components/navbar/Navbar.jsx'
// import Queto from './pages/getAqueto/Queto.jsx'
import Footer from './components/footer/Footer.jsx'

function App() {
  return (
    <div>
      <Navbar />
      {/* <Queto /> */}
      <HomePage />
      <Footer/>
    </div>
  );
}

export default App;
