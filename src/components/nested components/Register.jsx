import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

function Register() {
    const [userId, setUserId] = useState(1);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [forumError, setForumError] = useState('');

    const chng = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post("http://localhost:6246/register", { id: userId, name, email, password, confirmPassword })
            .then((res) => {
                console.log(res.data)
                setUserId(Number(userId) + 1)
                toast.success('Registration successful');
                setEmail('')
                setName('')
                setPassword('')
                setConfirmPassword('')
                setForumError('')
                chng('/login')
            }).catch((err) => {
                setForumError(err.response.data.message)
            })
    }

    //     if (email && password && name) {
    //         // Check if email already exists in local storage
    //         const users = JSON.parse(localStorage.getItem('users')) || [];
    //         const userExist = users.some((user) => user.name === name);
    //         const userExists = users.some((user) => user.email === email);

    //         if (userExists) {
    //             setForumError('Email already registered');
    //             setEmail('')
    //         } else if (userExist) {
    //             setForumError('Name already registered');
    //             setName('')
    //         } else if (password.length < 8) {
    //             setForumError('Password should be at least 8 characters long');
    //         } else if (!/[A-Z]/.test(password)) {
    //             setForumError('Password should contain at least one uppercase letter');
    //             setPassword('')
    //             setConfirmPassword('')
    //         } else if (password !== confirmPassword) {
    //             setForumError('Passwords do not match');
    //         } else {
    //             // Add user to local storage
    //             const newUser = { name, email, password };
    //             users.push(newUser);
    //             localStorage.setItem('users', JSON.stringify(users));

    //             // Redirect the user to the home page or perform any desired action
    //             toast.success('Registration successful');
    //             setEmail('')
    //             setName('')
    //             setPassword('')
    //             setConfirmPassword('')
    //             setForumError('')
    //             // Add your desired logic for switching to the user profile page here
    //         }
    //     } else {
    //         alert('Please enter valid credentials');
    //     }
    // };

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
                        placeholder="At least one uppercase letter & 8 Character long"
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
                    {forumError && <p className="error-message">{forumError}</p>}
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
