const express = require('express');
const email = require('../email/email');
const router = express.Router();

router.use(express.urlencoded({ extended: false }));

router.get('/', (req, res) => {
  res.render('index');
});

router.post('/message', (req, res) => {
  email(req.body.email, 'Review your message', req.body.message);
  res.redirect('/static/index.html');
})

module.exports = router;