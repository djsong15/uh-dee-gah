import React, { useState } from "react";
import { NavLink, redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logIn } from "../reducers/user";

export default function LoginPage() {
    const [ username, setUsername ] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(logIn(username));
        // dispatch(loggedIn(username));
        const response = await fetch('/login', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: e.target.username.value,
                password: e.target.password.value
            })
        });
        // console.log(response);
        redirect('/');
    }

    return (
        <div>
            <h2>Welcome back!</h2>
            <form action="/login" method="POST" onSubmit={handleSubmit}>
                <input 
                    name="username"
                    type="text"
                    placeholder="username"
                    onChange={e => setUsername(e.target.value)}
                />
                <input name="password" type="password" />
                <input type="submit" />
            </form>
            <h3>Don't have an account?
                <NavLink to='/signup'>
                    Sign up here
                </NavLink>
            </h3>
        </div>
    );
}