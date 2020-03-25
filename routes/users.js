const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const withAuth = require('../middleware');
const User = require('../model/users')
const secret = 'mysecretsshhh';

router.get('/api/home', function (req, res) {
  res.send('Welcome!');
});

router.get('/api/secret', withAuth, function (req, res) {
  res.send('The password is potato');
});

router.post('/api/register', function (req, res) {
  const { email, password } = req.body;
  const user = new User({ email, password });
  user.save(function (err) {
    if (err) {
      console.log(err);
      res.status(500).send("Error registering new user please try again.");
    } else {
      res.status(200).send("Welcome to the club!");
    }
  });
});

router.post('/api/authenticate', function (req, res) {
  const { email, password } = req.body;
  User.findOne({ email, __v: 1 }, function (err, user) {
    if (err) {
      console.error(err);
      res.status(500)
        .json({
          error: 'Internal error please try again'
        });
    } else if (!user) {
      res.status(401)
        .json({
          error: 'Incorrect email or password'
        });
    } else {
      user.isCorrectPassword(password, function (err, same) {
        if (err) {
          res.status(500)
            .json({
              error: 'Internal error please try again'
            });
        } else if (!same) {
          res.status(401)
            .json({
              error: 'Incorrect email or password'
            });
        } else {
          // Issue token
          const payload = { email };
          const token = jwt.sign(payload, secret, {
            expiresIn: '60h'
          });
          req.session.token = token

          res.sendStatus(200);
        }
      });
    }
  });
});
router.get('/logout', withAuth, (req, res) => {
  req.session.destroy();
  res.send('logout sucssecs')
})
router.get('/checkToken', withAuth, function (req, res) {
  res.sendStatus(200);
});


module.exports = router
