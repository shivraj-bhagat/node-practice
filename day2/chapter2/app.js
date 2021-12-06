const express = require('express');
const Joi = require('joi');
const app = express();

app.use(express.json());

const courses = [
    { id: 1, name: 'Course 1'},
    { id: 2, name: 'Course 2'},
    { id: 3, name: 'Course 3'}
]

app.get('/', (req,res) => {
    return res.send('Hello, World');
});

app.get('/api/courses', (req,res) => {
    return res.send(courses);
})

// POST request
app.post('/api/courses', (req,res) => {
    const { error } = validateCourse(req.body);
    if(error) {
        return res.status(400).send(error.details[0].message);
    }
    const course = {
        id: courses.length + 1,
        name: req.body.name
    }
    courses.push(course);
    return res.send(course)
})

// getting one course
app.get('/api/courses/:id', (req,res) => {
    const course = courses.find( c => c.id === parseInt(req.params.id))
    if(!course) {
        return res.status(404).send('The course with the given ID was not found.');
    } else {
        return res.send(course);
    }
})

// updating the course
app.put('/api/courses/:id', (req,res) => {
    const course = courses.find( c => c.id === parseInt(req.params.id))
    if(!course) {
        return res.status(404).send('The course with the given ID was not found.');
    } else {
        const { error } = validateCourse(req.body);
        if(error) {
            return res.status(400).send(error.details[0].message);
        }

        course.name = req.body.name;
        return res.send(course);
    }
})

// deleting an course
app.delete('/api/courses/:id', (req,res) => {
    const course = courses.find( c => c.id === parseInt(req.params.id))
    if(!course) {
        return res.status(404).send('The course with the given ID was not found.');
    } else {
        const index = courses.indexOf(course);
        courses.splice(index, 1);
        return res.send(course);
    }
})

function validateCourse(course) {
    const schema = {
        name: Joi.string().trim().min(3).required()
    }
    return result = Joi.validate(course, schema);
}

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}....`);
})