const Skill = require('../models/skill');

module.exports = {
    index,
    show
};

function show(req, res) {
    res.render('skills/show', {
        //what is this paramater
        skill: Skill.getOne(req.params.id),
        title: 'Skill Details'
    })
}

function index(req, res) {
    // why doesnt the below need the full address or any ..
    // and what is it pointing to
    res.render('skills/index', {
        skills: Skill.getAll(),
        title: 'All Skills'
    })
}