import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './components/home'
import Footer from './components/footer';
import Navigation from './components/navigation';
import About from './components/about';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Switch>
          <Route component={Home} path="/" exact />
          <Route component={About} path="/about" />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
