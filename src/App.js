import React, { useState } from 'react';
import ContactForm from './components/Contact';
import Nav from './components/Nav';
import About from './components/About';
import Footer from './components/Footer';
import Projects from './components/Project';
import Resume from './components/Resume';

function App() {
  const [currentPage, setCurrentPage] = useState("About")
  
  const renderPage = () => {
    if(currentPage === "About") {
      return  <About />
    } else if (currentPage === "Contact") {
      return <ContactForm />
    } else if (currentPage === "Projects") {
      return <Projects />
    } else { 
      return <Resume />
  }
  }
  return (
    <div>
      <Nav
      currentPage = {currentPage}
      setCurrentPage = {setCurrentPage}
      >
     </Nav>
     <main>
        {renderPage()}
        <Footer />
     </main>
     </div>

  );
}

export default App;
