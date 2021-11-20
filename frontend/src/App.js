import React from "react";
import "./App.css"
import Auth from "./components/auth";
import Register from "./components/register";
import Header from "./components/header";
import Home from "./components/home";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Quit} from "./components/login out";
import Footer from "./components/footer";
import About from "./components/about";

function App() {
    return(
        <div>
            <div className="page">
                <Header />
                <main className="content">
                    <BrowserRouter>
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route path="/auth" component={Auth}/>
                            <Route path="/reg" component={Register}/>
                            <Route path='/quit' component={Quit}/>
                            <Route path="/about" component={About}/>
                        </Switch>
                    </BrowserRouter>
                </main>
                <Footer />
            </div>
        </div>
    );
}


export default App