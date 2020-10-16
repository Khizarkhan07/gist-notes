import React from 'react';
import {Navbar} from './pages/navbar/Navbar'
import Gists from "./pages/gists/Gists"
import SingleGist from "./pages/gists/SingleGist";
import Profile from "./pages/user/Profile";
import OAuth from "./pages/user/OAuth";
import {
    Switch,
    Route,
    Redirect,
} from 'react-router-dom'


function MainRouter() {
    return (

        <div>
            <Navbar />


            <Switch>
                <Route
                    exact
                    path="/"
                    render={() => (
                        <Gists />
                    )}
                />
                <Route exact path="/gist/:gistId" render={(obj) =>

                        <SingleGist obj = {obj} />

                } />

                <Route exact path="/user/:userId" render={(obj) =>
                    <Profile obj = {obj} />
                } />

                <Route
                    exact
                    path="/oauth-callback"
                    render={() => (
                      <OAuth />
                    )}
                />

                <Redirect to="/" />
            </Switch>
        </div>
    );
}

export default MainRouter;
