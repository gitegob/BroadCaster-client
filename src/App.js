import React, { useContext } from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Signup } from './pages/Signup.page';
import { Login } from './pages/Login.page';
import { Dashboard } from './pages/Dashboard.page';
import { View } from './pages/View.page';
import { Edit } from './pages/Edit.page';
import { New } from './pages/New.page';
import { About } from './pages/About.page';
import { NotFound } from './pages/NotFound.page';
import { AuthProvider } from './contexts/auth/AuthContext';
import { GlobalProvider } from './contexts/GlobalContext';
import { RecordsProvider } from './contexts/records/RecordsContext';

function App() {
  const tkn = localStorage.getItem('accessToken');
  return (
    <>
      <GlobalProvider>
        <AuthProvider>
          <RecordsProvider>
            <Switch>
              {tkn && <Redirect from="/login" to="/dashboard" exact />}
              {!tkn && <Redirect from="/" to="/login" exact />}
              <Route path="/" exact component={Login} />
              <Route path="/login" exact component={Login} />
              <Route path="/signup" exact component={Signup} />
              <Route path="/dashboard" exact component={Dashboard} />
              <Route path="/records/:recordId/view" exact component={View} />
              <Route path="/records/:recordId/edit" exact component={Edit} />
              <Route path="/records/new" exact component={New} />
              <Route path="/about" exact component={About} />
              <Route path="*" component={NotFound} />
            </Switch>
          </RecordsProvider>
        </AuthProvider>
      </GlobalProvider>
    </>
  );
}

export default App;
