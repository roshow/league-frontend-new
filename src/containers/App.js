import React from 'react';
import Banner from './../components/Banner';
import Nav from './../components/Nav';


const App = ({ children }) => (
  <div className="App">
    <Banner />
    <Nav />
    { children }
  </div>
);

export default App;

