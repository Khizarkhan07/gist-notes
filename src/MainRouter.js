import React from 'react';
import {Navbar} from './pages/navbar/Navbar'
import {UserProvider} from "./contexts/userContext";
import {GistsProvider} from "./contexts/gistContext";
import Gists from "./pages/gists/gists"
import SingleGist from "./pages/gists/singleGist";
import Profile from "./pages/user/profile";
import {
    Switch,
    Route,
    Redirect,
} from 'react-router-dom'


function MainRouter() {
    return (

        <div>
            <UserProvider>
                <GistsProvider>
                    <Navbar />
                </GistsProvider>
            </UserProvider>

            <Switch>
                <Route
                    exact
                    path="/"
                    render={() => (
                        <React.Fragment>
                            <GistsProvider>
                                <Gists />
                            </GistsProvider>

                        </React.Fragment>
                    )}
                />
                <Route exact path="/gist/:gistId" render={(obj) =>
                    <GistsProvider>
                        <SingleGist obj = {obj} />
                    </GistsProvider>
                } />

                <Route exact path="/user/:userId" render={(obj) =>
                    <UserProvider>
                        <GistsProvider>
                            <Profile obj = {obj} />
                        </GistsProvider>
                    </UserProvider>

                } />

                <Redirect to="/" />
            </Switch>
        </div>
    );
}

export default MainRouter;
