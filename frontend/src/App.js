import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Nav from './components/Nav';
import Home from './pages/Home';

const App = () => {
  return (
    <>
      <Nav />
      <Router>
        <Route exact to='/' component={Home} />
      </Router>
    </>
  );
};

export default App;
