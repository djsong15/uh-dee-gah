import React from "react";

export default function SignupPage() {
    return (
        <form action="/signup" method="POST">
            <input name="username" type="text" placeholder="username" />
            <input name="password" type="text" />
            <input type="submit" />
        </form>
    );
}