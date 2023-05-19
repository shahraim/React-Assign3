import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleSubmit = (e) => {
        setName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        e.preventDefault();

        if (email && password && name) {
            // Check if email already exists in local storage
            const users = JSON.parse(localStorage.getItem('users')) || [];
            const userExist = users.some((user) => user.name === name);
            const userExists = users.some((user) => user.email === email);

            if (userExists) {
                alert('Email already registered');
            } else if (userExist) {
                alert('Name already registered');
            } else if (password.length < 8) {
                setPasswordError('Password should be at least 8 characters long');
            } else if (!/[A-Z]/.test(password)) {
                setPasswordError('Password should contain at least one uppercase letter');
            } else if (password !== confirmPassword) {
                setPasswordError('Passwords do not match');
            } else {
                // Add user to local storage
                const newUser = { name, email, password };
                users.push(newUser);
                localStorage.setItem('users', JSON.stringify(users));

                // Redirect the user to the home page or perform any desired action
                alert('Registration successful');
                // Add your desired logic for switching to the user profile page here
            }
        } else {
            alert('Please enter valid credentials');
        }
    };

    return (
        <div className="leftchild">
            <div className="register-form">
                <h2>Register</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter Name"
                        required
                    />
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
                    <label htmlFor="confirm-password">Confirm Password</label>
                    <input
                        type="password"
                        id="confirm-password"
                        name="confirm-password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="********"
                        required
                    />
                    {passwordError && <p className="error-message">{passwordError}</p>}
                    <button type="submit">Register</button>
                </form>
                <p>
                    Already have an account?{' '}
                    <Link className="register" to="/login">
                        Log In here
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default Register;
