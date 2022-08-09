import './App.css';
import Header from './component/header/Header';
import Nav from './component/nav/Nav';
import About from './component/about/About'
import Experience from './component/Experience/Experience'
import Services from './component/services/Services';
import Portfolio from './component/portfolio/Portfolio';
import Certificates from './component/certificates/Certificates';
import Contact from './component/contact/Contact';
import Footer from './component/footer/Footer';



function App() {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Certificates />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
