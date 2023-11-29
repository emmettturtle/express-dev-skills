var express = require('express');
var router = express.Router();
var skillsCtrl = require('../controllers/skills')

//get skills
router.get('/', skillsCtrl.index);
// get specific skill at the id
router.get('/new', skillsCtrl.new);
router.get('/:id', skillsCtrl.show);
router.post('/', skillsCtrl.create);
router.delete('/:id', skillsCtrl.delete);

module.exports = router;
