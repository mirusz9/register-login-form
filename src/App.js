import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <h1>hi</h1>
      <Route exact path="/" render={()=><h3>/path lol</h3>}/>
      <Route path="/register" render={()=><h3>/register path lol</h3>}/>
    </Router>
  );
}

export default App;
