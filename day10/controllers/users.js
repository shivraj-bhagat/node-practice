import {v4 as uuidv4 } from 'uuid';

let users = [];

export const createUser = (req,res) => {
    const user = req.body;
    users.push({ id: uuidv4(), ...user});
    res.send(`User with the name ${user.firstname} added to the database`)
}

export const getUsers = (req,res) => {
    res.json(users);
}

export const getUser = (req,res) => {
    const id = req.params.id;
    const foundUser = users.find((user) => user.id === id);
    res.json(foundUser);
}

export const updateUser = (req,res) => {
    const id = req.params.id;
    const { firstname, lastname, age} = req.body;
    const user = users.find((user) => user.id === id)
    if(firstname) user.firstname = firstname;
    if(lastname) user.lastname = lastname;
    if(age) user.age = age;
    res.send(`User with the id ${id} has been updated`);
}

export const deleteUser = (req,res) => {
    const id = req.params.id;
    users = users.filter((user) => user.id !== id);
    res.send(`User with the id ${id} deleted from the database.`);
}