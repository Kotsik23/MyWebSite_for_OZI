const jsonwebtoken = require('jsonwebtoken');
const bcrypt =  require('bcrypt');

const JWT_SECRET = 'secret';
const SALT_ROUNDS = 2;

const createToken = (id) => {
    // const payload = {
    //     id,
    //     roles
    // }
    return jsonwebtoken.sign( { id }, JWT_SECRET, {
        algorithm: 'HS256',
        expiresIn: '1 days',
    });
}

const hashPassword = (password) => {
    return bcrypt.hash(password, SALT_ROUNDS);
}

const passwordMatch = async (password, encryptPassword) => {
    console.log(password, encryptPassword);
    return bcrypt.compare(password, encryptPassword);
}

const getIdFromToken = (token) => jsonwebtoken.verify(token, JWT_SECRET, {
    algorithms: ['HS256'],
});

module.exports = { createToken, hashPassword, passwordMatch, getIdFromToken };