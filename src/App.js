import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import { Signup } from './pages/Signup.page';
import { Login } from './pages/Login.page';
import { Dashboard } from './pages/Dashboard.page';
import { View } from './pages/View.page';
import { Edit } from './pages/Edit.page';
import { New } from './pages/New.page';
import { About } from './pages/About.page';
import { AuthProvider } from './contexts/auth/AuthContext';
import { GlobalProvider } from './contexts/GlobalContext';
import { RecordsProvider } from './contexts/records/RecordsContext';
import { Private } from './components/Private';
import { Profile } from './pages/Profile';

function App() {
  return (
    <>
      <GlobalProvider>
        <AuthProvider>
          <RecordsProvider>
            <Switch>
              <Route path="/" exact component={Private(Dashboard)} />
              <Route path="/login" exact component={Login} />
              <Route path="/signup" exact component={Signup} />
              <Route path="/profile/:id" component={Private(Profile)} />
              <Route path="/records/:recordId/view" exact component={Private(View)} />
              <Route path="/records/:recordId/edit" exact component={Private(Edit)} />
              <Route path="/records/new" exact component={Private(New)} />
              <Route path="/about" exact component={About} />
              <Route
                path="*"
                component={() => (
                  <pre style={{ textAlign: 'center', fontSize: '2rem' }}>
                    404
                    <br />
                    <br />
                    The page you requested for was not found.
                  </pre>
                )}
              />
            </Switch>
          </RecordsProvider>
        </AuthProvider>
      </GlobalProvider>
    </>
  );
}

export default App;
