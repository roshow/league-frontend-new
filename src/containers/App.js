import React from 'react';
import Banner from './../components/Banner';


const App = ({ children }) => (
  <div className="App">
    <Banner />
    { children }
  </div>
);

export default App;

