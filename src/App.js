import React from 'react';
import './App.css';
import { Homepage } from './pages/Homepage';
import { Signup } from './pages/Signup';
import { Login } from './pages/Login';
import { Profile } from './pages/Profile';
import { Admin } from './pages/Admin';
import { View } from './pages/View';
import { Edit } from './pages/Edit';
import { New } from './pages/New';
import { About } from './pages/About';
import { Footer } from './components/Footer';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Route path="/" exact component={Homepage} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/login" exact component={Login} />
        <Route path="/dashboard" exact component={Profile} />
        <Route path="/admin" exact component={Admin} />
        <Route path="/records/:recordId/view" exact component={View} />
        <Route path="/records/:recordId/edit" exact component={Edit} />
        <Route path="/records/new" exact component={New} />
        <Route path="/about" exact component={About} />
        <Footer />
      </Router>
    </>
  );
}

export default App;
