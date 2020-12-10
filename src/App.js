import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'; 
import Projects from './Projects.js'; 
import About from './About.js'; 
import './App.css';
import Footer from './footer'


 
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path="/about" component={About} />
        <Route exact path="/" component={Projects} />
        <div className="navigation" position= "fixed">
          <div className="navbar">                                      
            <Link to="/" className="item">Projects</Link>
            <Link to="/about" className="item">About</Link>
  
          </div>
        </div>
      </div>
      <div className="App">
           <Footer/>
       </div>
    </BrowserRouter>
    
    
  );
}
 
export default App;