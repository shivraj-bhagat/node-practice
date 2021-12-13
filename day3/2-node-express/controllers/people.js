const { people } = require('../data');

const getPeople = (req,res) => {
    return res.status(200).json({success: true, data: people})
}

const createPeople = (req,res) => {
    const {name} = req.body;
    if(!name) {
        return res.status(400).json({success: false, msg: 'Please provide your name'})
    }
    return res.status(201).json({success: true, person: name})
}

const createPeoplePostman = (req,res) => {
    const {name} = req.body;
    console.log(req.body)
    if(!name) {
        return res.status(400).json({success: false, msg: 'Please provide your name'})
    }
    return res.status(201).json({success: true, data: [...people, {id: people.length+1, name: name}]})
}

const updatePeople = (req,res) => {
    const {id} = req.params;
    const {name} = req.body;
    const person = people.find((people) => people.id === Number(id));
    if(!person) {
        return res.status(400).json({success: false, msg: `No person with id ${id}`})
    }
    const newPeople = people.map((people) => {
        if(people.id === Number(id)) {
            people.name = name;
        }
        return people;
    });
    return res.status(200).json({success: true, data: newPeople})
}

const deletePeople = (req,res) => {
    const person = people.find((people) => people.id === Number(req.params.id));
    if(!person) {
        return res.status(400).json({success: false, msg: `No person with id ${req.params.id}`})
    }
    const newPeople = people.filter((people) => people.id !== Number(req.params.id));
    return res.status(200).json({success: true, data: newPeople})
}

module.exports = { 
    getPeople,
    createPeople,
    createPeoplePostman,
    updatePeople,
    deletePeople
}