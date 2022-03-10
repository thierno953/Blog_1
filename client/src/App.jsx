import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import DetailBlog from "./components/Detail/DetailBlog";
import ScrollToTop from "./components/ScrollToTop";
import About from "./sections/About";
import Blogs from "./sections/Blogs";
import Footer from "./sections/Footer";
import Starter from "./sections/Starter";
import Testimonials from "./sections/Testimonials";
import Navbar from "./components/Navbar";
import Why from "./sections/Why";
import { Element } from "react-scroll";
import Contact from "./sections/Contact";


function App() {
  
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Element className="Starter">
      <Route exact path="/" component={Starter} />
      </Element>
      <Element className="About">
      <Route exact path="/" component={About} />
      </Element>
      <Element className="Why">
      <Route exact path="/" component={Why} />
      </Element>
      <Element className="Blogs">
      <Route exact path="/" component={Blogs} />
      </Element>
      <Element className="Testimonials">
      <Route exact path="/" component={Testimonials} />
      </Element>
      <Route exact path="/blog/:id" component={DetailBlog} />
      <Route exact path="/contact" component={Contact} />
      <Footer />
    </Router>
  );
}

export default App;
