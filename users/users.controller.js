﻿const express = require('express');
const router = express.Router();
const userService = require('./user.service');

// routes
router.post('/authenticate', authenticate);
router.get('/me', getMyUser);

module.exports = router;

function authenticate(req, res, next) {
    userService.authenticate(req.body)
        .then(user => res.json(user))
        .catch(next);
}

function getMyUser(req, res, next) {
    userService.getUser(req.user.sub)
        .then(user => res.json(user))
        .catch(next);
}
