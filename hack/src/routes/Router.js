import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import InitialPage from "../pages/LogoutPage/LogoutPage";
import FeedPage from "../pages/FeedPage/FeedPage";
import PointPage from "../pages/PointPage/PointPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";


const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <InitialPage/>
                </Route>
                <Route exact path="/login">
                    <LoginPage/>
                </Route>
                <Route exact path="/cadastro">
                    <SignUpPage/>
                </Route>
                <Route exact path="/home">
                    <FeedPage/>
                </Route>
                <Route exact path="/point">
                    <PointPage/>
                </Route>
                <Route>
                    <ErrorPage/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router
