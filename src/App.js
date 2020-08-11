import React, { lazy, Suspense } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login.page';
import { AuthProvider } from './state/auth/AuthState';
import { GlobalProvider } from './state/GlobalState';
import { RecordsProvider } from './state/records/RecordState';
import { Private } from './components/Private';
import { Loader } from './components/Loader';
import { Public } from './components/Public';

const Signup = lazy(() => import("./pages/Signup.page"));
const Dashboard = lazy(() => import("./pages/Dashboard.page"));
const Edit = lazy(() => import("./pages/Edit.page"));
const View = lazy(() => import("./pages/View.page"));
const New = lazy(() => import("./pages/New.page"));
const About = lazy(() => import("./pages/About.page"));
const Profile = lazy(() => import("./pages/Profile.page"));


function App() {
  return (
    <>
      <GlobalProvider>
        <AuthProvider>
          <RecordsProvider>
            <Suspense fallback={<Loader />}>
              <Switch>
                <Route path="/" exact component={Private(Dashboard)} />
                <Route path="/login" exact component={Public(Login)} />
                <Route path="/signup" exact component={Public(Signup)} />
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
            </Suspense>
          </RecordsProvider>
        </AuthProvider>
      </GlobalProvider>
    </>
  );
}

export default App;
