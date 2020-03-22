/* eslint-disable import/extensions */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './components/layout/Layout';
import JokePage from './pages/jokePage';
import HomePage from './pages/home';
import LoftRPage from './pages/lordOfTheRingsPage';


function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/jokes" component={JokePage} />
        <Route exact path="/lord_of_the_rings" component={LoftRPage} />
      </Switch>
    </Layout>
  );
}

export default App;
