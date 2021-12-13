const express = require('express');
const router = express.Router();

const { 
    getPeople,
    createPeople,
    createPeoplePostman,
    updatePeople,
    deletePeople
} = require('../controllers/people')

// // GET Method
// router.get('/', getPeople)
// // POST Method
// router.post('/', createPeople)

// another method
router.route('/').get(getPeople).post(createPeople);

router.post('/postman', createPeoplePostman)

// PUT Method
router.put('/:id', updatePeople)

// DELETE Method
router.delete('/:id', deletePeople)

module.exports = router;