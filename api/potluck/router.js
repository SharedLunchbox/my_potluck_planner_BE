const router = require('express').Router();
const Potlucks = require('./model');

router.get('/', (req, res, next) => {
  const token = req.decodedToken;
  Potlucks.findPotlucks(token.subject)
    .then((potlucks) => {
      res.status(200).json(potlucks);
    })
    .catch(next);
});

module.exports = router;
