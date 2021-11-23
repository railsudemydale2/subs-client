import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Nav from './components/Nav';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import StripeSuccess from './pages/stripe-success';
import StripeCancel from './pages/stripe-cancel';
import AuthRoute from './components/routes/AuthRoute';
import Account from './pages/Account';
import Basic from './pages/plans/Basic';
import BigTeam from './pages/plans/BigTeam';
import Pro from './pages/plans/Pro';
import Ultimate from './pages/plans/Ultimate';
import SuperUltimate from './pages/plans/SuperUltimate';
import SuperUltimateSubscription from './pages/plans/SuperUltimate';

function App() {
  return (
    <Router>
      <Nav />
      <Toaster position="button-right" toastOptions={{ duration: 2000 }} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <AuthRoute exact path="/stripe/success" component={StripeSuccess} />
        <AuthRoute exact path="/stripe/cancel" component={StripeCancel} />
        <AuthRoute exact path="/account" component={Account} />
        <AuthRoute exact path="/basic" component={Basic} />
        <AuthRoute exact path="/bigteam" component={BigTeam} />
        <AuthRoute exact path="/pro" component={Pro} />
        <AuthRoute exact path="/ultimate" component={Ultimate} />
        <AuthRoute exact path="/superultimate" component={SuperUltimate} />
      </Switch>
    </Router>
  );
}

export default App;
