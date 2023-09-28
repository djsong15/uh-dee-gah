import React from "react";

export default function LoginPage() {
    return (
        <form action="/login" method="POST">
            <input name="username" type="text" placeholder="username" />
            <input name="password" type="text" />
            <input type="submit" />
        </form>
    );
}