import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Homepage } from './pages/Homepage';
import { Signup } from './pages/Signup';
import { Login } from './pages/Login';
import { Dashboard } from './pages/Dashboard';
import { Admin } from './pages/Admin';
import { View } from './pages/View';
import { Edit } from './pages/Edit';
import { New } from './pages/New';
import { About } from './pages/About';
import { NotFound } from './pages/NotFound';
import { Footer } from './components/Footer';
import { RecordsProvider } from './contexts/records/RecordsContext';
import { AuthProvider } from './contexts/auth/AuthContext';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Homepage} />
          <AuthProvider>
            <Route path="/signup" exact component={Signup} />
            <Route path="/login" exact component={Login} />
            <RecordsProvider>
              <Route path="/dashboard" exact component={Dashboard} />
              <Route path="/admin" exact component={Admin} />
              <Route path="/records/5/view" exact component={View} />
              <Route path="/records/5/edit" exact component={Edit} />
              <Route path="/records/new" exact component={New} />
            </RecordsProvider>
          </AuthProvider>
          <Route path="/about" exact component={About} />
          <Route path="*" component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
