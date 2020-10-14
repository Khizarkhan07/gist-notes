import React from 'react';
import {Navbar} from './pages/navbar/Navbar'
import Gists from "./pages/gists/gists"
import SingleGist from "./pages/gists/singleGist";
import Profile from "./pages/user/profile";
import OAuth from "./pages/user/oAuth";
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
