import React from "react";
import { BrowserRouter, NavLink } from "react-router-dom";
import SignupPage from "./SignupPage";

export default function LoginPage() {
    return (
        <>
            <h2>Welcome back!</h2>
            <form action="/login" method="POST">
                <input name="username" type="text" placeholder="username" />
                <input name="password" type="text" />
                <input type="submit" />
            </form>
            <h3>Don't have an account?
                <BrowserRouter><NavLink to='/signup'>
                    Sign up here
                </NavLink></BrowserRouter>
            </h3>
        </>
    );
}