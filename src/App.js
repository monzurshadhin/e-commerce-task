import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import './App.css';
import Cart from "./Components/Cart/Cart";
import Details from "./Components/Details/Details";
import Header from "./Components/Header/Header";
import Home from './Components/Home/Home';
function App() {
  return (
    <div className="App">
      <Router>
      <Header></Header>
      <Switch>
          <Route exact path="/">
          <Home></Home>
          </Route>
          <Route exact path="/home">
          <Home></Home>
          </Route>
          <Route exact path="/details/:id">
           <Details></Details>
          </Route>
          <Route exact path="/cart">
           <Cart></Cart>
          </Route>
        </Switch>
        
      </Router>
    
    </div>
  );
}

export default App;
