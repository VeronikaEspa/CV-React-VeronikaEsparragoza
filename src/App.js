import './App.css';
import GlobalStyles from './globalStyles';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import Contact from './Pages/Contact/Contact';
import { Menu } from './component';

function App() {
  return (
    <div className="todito">
    <div className="App">
    <Router>
    <Menu/>
    <GlobalStyles/>
    <Switch>
      <Route path="/" component={Home}/>
      <Route path="/contact" component={Contact}/>
    </Switch>
    </Router>
    </div>
    </div>
  );
}

export default App;
