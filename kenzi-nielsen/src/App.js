import React from 'react';
import ContactForm from './components/Contact';
import Nav from './components/Nav';
import About from './components/About';
import Footer from './components/Footer';
import Projects from './components/Project';

function App() {
//  const [categories] = useState([
//  ])
//
//  const [currentCategory, setCurrentCategory] = useState(categories[0]);
//const [contactSelected, setContactSelected] = useState(false);
  return (
   //<div>
   //  <Nav
   //   contactSelected={contactSelected}
   //   setContactSelected={setContactSelected}>
   //     <ContactForm></ContactForm>
   //     
   // </Nav>
   // <main>
   //    <About></About>
   //    <Footer></Footer>
   //  </main>
   // </div>
   <div>
   <Nav
     >
     <Projects />
     </Nav>
     <main>
     <About />
     <ContactForm></ContactForm>
     <Footer />

   </main>
   </div>
  );
}

export default App;
