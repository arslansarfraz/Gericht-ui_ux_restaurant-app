import React from 'react';
import './App.css';
import { Navbar } from './components'
import { Header, About, Menu, Chef, Intro, Laurels, Footer } from './container';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Menu />
      <Chef />
      <Intro />
      <Laurels />
      <Footer />
    </div>
  );
}

export default App;
