import logo from './logo.svg';
import './App.scss';
import Home from './components/Home';
import AddNewProduct from './components/AddNewProduct';
import Product from './components/Products/Product';
import 'react-image-lightbox/style.css';
import Nav from './components/Navigation/Nav';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



const App = () => {

  const x = [1, 2, 3, { name: 'eric' }]
  // const x = { name: 'eric' }


  return (
    <Router>
      <Nav />
      <Switch>

        <Route path="/" exact={true}>
          <div className="App">
            <header className="App-header content-left"> inline
              <div style={{ textAlign: "center" }}> <img src={logo} className="App-logo" alt="logo" /></div>

              <p>
                <span>Hello world React</span> with Eric

              </p>
              <Home />
            </header>
            <div className='content-right'>
              <AddNewProduct />
              <hr />
              <Product />
            </div>
          </div>
        </Route>

        <Route path="/product">
          <Product />
        </Route>
        <Route path="/weather">
          <div>weather app</div>
        </Route>
        <Route path="/about">
          <div>I'm Eric</div>
        </Route>
        <Route path="*">
          <div>404 Not Found!</div>
        </Route>
      </Switch>


    </Router>

  );
}


export default App;
