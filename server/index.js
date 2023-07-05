const express = require('express');
const { uid } = require('uid');
const cors = require('cors');
const app = express();
const port = 6246;

app.use(cors());

app.use(express.json());

app.get('/', (req, res) => {
    res.send("hello");
});

const user = [
    {
        id: 1111111111111111,
        name: "shahraim",
        email: "shahraim.khan27112002@gmail.com",
        password: "A12345678",
        ConfirmPassword: "A12345678"
    }
];

app.post('/register', (req, res) => {
    const { email, password, confirmPassword } = req.body;
    console.log(req.body);

    const userFound = user.find((obj) => obj.email === email);
    if (userFound) {
        return res.status(400).json({ message: "error: Email already registered" });
    } else if (password.length < 8) {
        return res.status(400).json({ message: 'Password should be at least 8 characters long' });
    } else if (!/[A-Z]/.test(password)) {
        return res.status(400).json({ message: 'Password should contain at least one uppercase letter' });
    } else if (password !== confirmPassword) {
        return res.status(400).json({ message: 'Passwords do not match' });
    } else {
        user.push({ ...req.body, id: uid(16) });
        return res.status(200).json(user);
    }

});

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    console.log(req.body);

    userFound = user.find((obj) => obj.email === email)
    if (!userFound) {
        return res.status(404).send({ message: "User Not Found" });
    }
    else if (userFound.password !== password) {
        return res.status(401).send({ message: "Incorrect Password" })
    }
    else {
        return res.status(200).send({ message: "Login Succesfully", user: userFound });
    }

});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
