﻿const crypto = require('crypto');
const fs = require('fs');
const path = require('path');
const config = require('config.json');
const jwt = require('jsonwebtoken');

// users hardcoded for simplicity, store in a db for production applications
const getUsers = () => JSON.parse(
    fs.readFileSync(
        path.join(__dirname, '../rawData/users.json')
    )
);

module.exports = {
    authenticate,
    getUser
};

async function authenticate({ username, password }) {
    const shaPassword = crypto.createHash('sha256').update(password).digest('hex');
    const user = getUsers().find(
      u => u.username === username && u.passwordHash === shaPassword
    );

    if (!user) throw 'Username or password is incorrect';

    // create a jwt token that is valid for 7 days
    const token = jwt.sign({ sub: user.id }, config.secret, { expiresIn: '7d' });

    return {
        ...omitPassword(user),
        token
    };
}

async function getUser(userId) {
    return omitPassword(
        getUsers().filter(u => u.id === userId)[0]
    );
}

// helper functions

function omitPassword(user) {
    const { passwordHash, ...userWithoutPassword } = user;
    return userWithoutPassword;
}