const Skill = require('../models/skill');

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill
};

function deleteSkill(req, res) {
    Skill.deleteOne(req.params.id);
    res.redirect('/skills');
}

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

function newSkill(req, res) {
    res.render('skills/new', {title: 'New Skill'});
}

function create(req, res) {
    Skill.create(req.body);
    res.redirect('/skills');
}