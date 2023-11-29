const skills = [
    {id: 125223, skill: 'Hack into the pentagon', have: false},
    {id: 125234, skill: 'Make a browser poker game', have: true},
    {id: 342344, skill: 'Doing this stuff', have: false},
    {id: 809890, skill: 'Make a google', have: false},
];

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
}

function deleteOne(id) {
    id = parseInt(id);
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);
}

function getAll() {
    return skills;
}

function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
}

function create(skill) {
    const randomNumber = Math.floor(Math.random() * 900000) + 100000;
    skill.id = randomNumber;
    skill.have = false;
    skills.push(skill);
}