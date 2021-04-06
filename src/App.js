
import NavBar from './Components/Navbar/Navbar';
import Home from './Container/Home/Home'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddActicle from './Container/AddArticle/AddActicle';
import Contact from './Container/Contact/Contact';

function App() {
  return (
    <div className="App">
    <Router>
    <NavBar />
    <Switch>
    <Route path="/" exact component={Home}></Route>
    <Route path="/articles" component={AddActicle}></Route>
    <Route path="/contact" component={Contact}></Route>


    </Switch>
    </Router>
  
    </div>
  );
}

export default App;
