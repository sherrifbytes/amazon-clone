import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Checkout from './Components/Checkout/Checkout';
import Login from './Components/Auth/Login';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
    return ( 
        <Router>
            <div className = "app">

                {/* Always rendered */}

                <Switch>
                    <Route path = "/login"><Login /></Route>                    
                    <Route path = "/checkout">
                        <Header />
                        <Checkout />
                    </Route>

                    {/* Default route is nothing matches */}
                    <Route path = "/">
                        <Header />
                        <Home />
                    </Route>
                </Switch>

            </div>
        </Router>
    );
}

export default App;