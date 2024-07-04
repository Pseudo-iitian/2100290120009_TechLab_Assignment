import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Service from './components/Service/Service';
import Feature from './components/Feature/Feature';
import Product from './components/Product/Product';
import Testimonial from './components/Testimonial/Testimonial';
import FAQ from './components/FAQ/FAQ';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Header /> 
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/service" element={<Service />} />
          <Route path="/feature" element={<Feature />} />
          <Route path="/product" element={<Product />} />
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
