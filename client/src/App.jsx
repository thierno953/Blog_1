import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DetailBlog from './components/Detail/DetailBlog';
import ScrollToTop from './components/ScrollToTop';
import About from './sections/About';
import Blogs from './sections/Blogs';
import Footer from './sections/Footer';
import Starter from './sections/Starter';
import Testimonials from './sections/Testimonials';
import Why from './sections/Why';

function App() {

  return (
    <Router>
      <ScrollToTop />
   <Starter />
       <Switch>

       <Route exact path="/" component={Blogs} />
       <Route exact path="/" component={About} />
       <Route exact path="/blog/:id" component={DetailBlog} />
       <Route exact path="/" component={Why} />
       <Route exact path="/" component={Testimonials} />
      <Footer />
      </Switch> 
 
      <Footer />
    </Router>
  );
}

export default App;
