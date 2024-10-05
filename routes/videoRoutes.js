const express = require('express');
const session = require("express-session");
const router = express.Router();

const isAuth = (req, res, next) => {
    if (req.session.isAuth) {
        next();
    } else {
        res.status(200).json({ status: 'error', error: 'true', message: 'Unauthorized' });
    }
};

router.get('/', isAuth, (req, res) => {
    res.status(200).json({ status: 'success', error: 'false', message: 'You are authorized' });
});

module.exports = router;