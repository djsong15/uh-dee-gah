import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { redirect } from "react-router-dom";
import { logIn } from "../reducers/user";

export default function SignupPage() {
    const [ username, setUsername ] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log('blah ', e.target.username.value);
        // setUsername(e.target.username.value);
        // console.log('state is now', username);
        fetch('/signup', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: e.target.username.value,
                password: e.target.password.value
            })
        })
            .then(() => dispatch(logIn(username)))
            .catch(err => {
                console.log(JSON.stringify(err));
                return undefined;
            });
        // console.log(response);
        // dispatch(logIn(username));
        redirect('/');
    }

    return (
        <div>
            <h2>Fill in the details below to create an account</h2>
            <form action="/signup" method="POST" onSubmit={handleSubmit}>
                <input 
                    name="username"
                    type="text"
                    placeholder="username"
                    onChange={e => setUsername(e.target.value)}
                />
                <input name="password" type="password" autoComplete="off"/>
                <input type="submit" />
            </form>
        </div>
    );
}