import React from "react"
import { 
    BrowserRouter as Router,
    NavLink,
    Route,
    Routes
} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logIn } from "./reducers/user.js";
import { loggedIn } from "./reducers/locations.js";

import MainContainer from "./containers/MainContainer.jsx";
import SignupPage from "./pages/SignupPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";

export default function App() {
    const currentUser = useSelector(state => state.user);
    console.log(currentUser, 'is logged in - App level');
    const dispatch = useDispatch();

    fetch(`/db/${currentUser}`)
            .then(response => response.json())
            .then(data => {
                if (data?.placesList) dispatch(loggedIn(data));
            });

    const handleSignout = (e) => {
        fetch('/logout', {
            method: 'POST'
        })
            .then(res => console.log('logout res:', res))
            .catch(err => console.log(err));
        dispatch(logIn('guest'));
        location.replace(location.href);
    }

    return (
        <Router>
            <h1>📍🌏 Welcome to CorkUDG 🌎📍 - Your Virtual Travel Board</h1>
            <nav>
                <NavLink to='/'>Home</NavLink>
                <div>
                    {currentUser === 'guest' ? 
                        <div className="account-links">
                            <NavLink to='/login'>Login</NavLink>
                            <NavLink to='/signup'>Sign up</NavLink>
                        </div>
                    :   <div className="account-links">
                            <div>Hi, <strong>{currentUser}</strong></div>
                            <div onClick={handleSignout} id="signout-btn">Sign out</div>
                        </div>
                    }
                    
                </div>
            </nav>
                <Routes>
                    <Route path="/" Component={MainContainer} />
                    <Route path="/login" Component={LoginPage} />
                    <Route path="/signup" Component={SignupPage} />
                </Routes>
        </Router>
    );
}