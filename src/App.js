import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Home from './components/home';
import About from './components/about';
import Team from './components/team';

import Footer from './components/footer';
import Navigation from './components/navigation';
import ScrollToTop from './scroll';

import Login from './components/dashboard/login';
import CreateUser from './components/dashboard/create';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Switch>
        <Route component={Login} path="/signin"/>
        <Route component={CreateUser} path="/signup" exact />
        <>
        <Navigation />
        <Switch>
          <Route component={Home} path="/" exact />
          <Route component={About} path="/about" />
          <Route component={Team} path="/team" />
        </Switch>
        <Footer />
        </>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
