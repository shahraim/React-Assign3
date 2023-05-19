import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login({ onLogin }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform validation and authentication here
        if (email && password) {
            // Check if user exists in local storage
            const users = JSON.parse(localStorage.getItem('users')) || [];
            const user = users.find((user) => user.email === email && user.password === password);

            if (user) {
                // Redirect the user to the home page or perform any desired action
                const { name } = user;
                onLogin(name);
                history('/user');
            } else {
                alert('Invalid email or password');
            }
        } else {
            alert('Please enter valid credentials');
        }
    };

    return (
        <div className="leftchild">
            <div className="login-form">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="youremail@example.com"
                        required
                    />
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="********"
                        required
                    />
                    <button type="submit">Log In</button>
                </form>
                <p>
                    Don't have an account?{' '}
                    <Link className="register" to="/register">
                        Register here
                    </Link>
                </p>
            </div>
            {/* Add your SignImg component here */}
        </div>
    );
}

export default Login;
