var express = require('express');
var router = express.Router();
var skillsCtrl = require('../controllers/skills')

//get skills
router.get('/', skillsCtrl.index);
// get specific skill at the id
router.get('/:id', skillsCtrl.show);

module.exports = router;
