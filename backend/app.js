const express = require('express');
const bodyParser = require('body-parser');
const dataBase = require('./dataBase');
const auth = require('./auth');

const cors = require('cors');

const { getUserByEmail } = require("./dataBase");
const { getIdFromToken, createToken , hashPassword, passwordMatch} = require("./auth");

const app = express();
const port = 2525;

const jsonParser = bodyParser.json();

app.post('/signup', jsonParser, async (req, res) => {
    const { name, email, password } = req.body;
    console.log(req.body);
    if (!(name && email && password)) res.send('400');
    const user = await dataBase.createUser(name, email, await hashPassword(password));

    const token = await auth.createToken(user.id);

    res.send(token);
});

app.post('/signin', jsonParser, async (req, res) => {
    const { email, password } = req.body;
    if (!(email && password)) res.send('400');
    console.log(req.body);
    console.log(req.headers);
    const user = await getUserByEmail(email);
    if (await passwordMatch(password, user.password) && user) {
        const token = await createToken(user.id);
        res.send(token);
    } else {
        res.statusCode = 404;
        res.send('User with this email/password do not exist');
        console.log('User with this email/password do not exist');
    }
});

app.get('/home', async (req, res) => {
    try {
        const id = getIdFromToken(req.headers.authentication.substr(7));
        console.log(id);
        res.send(!!id);
    } catch (e) {
        res.send(false);
    }
});

app.get('/quit', async (req, res) => {
    try {
        const id = getIdFromToken(req.headers.authentication.substr(7));
        console.log(id);
        res.send(!!id);
    } catch (e) {
        res.send(false);
    }
});

app.use(cors());

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})