import { Component } from "react";
import DashBoard from "./DashBoard";
import HeroesList from './HeroesList';
import './style.css'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Details from "./Details";

class Header extends Component {

    render() {

        return (
            <Router>
                <div>
                    <nav className="navbar navbar-expand navbar-light bg-light">
                        <div className="nav navbar-nav">

                            <div className="page-header">
                                <h1 className="h1">Tours of Heroes</h1>
                            </div>
                            
                            <button type="button" className="btn   ">
                                <Link to="/dashboard" className="linkheader" >DashBoard</Link>
                            </button>

                            <button type="button" className="btn  ">
                                <Link to="/heroeslist" className="linkheader">Heroes List</Link>
                            </button>



                        </div>
                    </nav>

                </div>

                <Switch>
                    <Route exact path="/dashboard">
                        <DashBoard />
                    </Route>
                    <Route exact path="/heroeslist">
                        <HeroesList />
                    </Route>
                    <Route exact path="/details/:id">
                        <Details />
                    </Route>
                </Switch>
            </Router>

        )
    }
}

export default Header;

