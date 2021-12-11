import React from 'react';
import ContactForm from './components/Contact';
import Nav from './components/Nav';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <About></About>
        <ContactForm></ContactForm>
        <Footer></Footer>
      </main>
    </div>
  );
}

export default App;
