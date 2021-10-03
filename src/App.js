import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Home from './components/home';
import About from './components/about';
import Team from './components/team';

import Footer from './components/footer';
import Navigation from './components/navigation';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Switch>
          <Route component={Home} path="/" exact />
          <Route component={About} path="/about" />
          <Route component={Team} path="/team" />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
