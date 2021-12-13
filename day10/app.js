import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';

const app = express();
app.use(bodyParser.json());
app.use(morgan('tiny'))

// user routes
import usersRoutes from './routes/users.js';

// using routes
app.use('/users', usersRoutes);

// get request
app.get('/', (req,res) => {
    res.send('Welcome to homepage')
})

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is running and listening to port: http://localhost:${port}...`)
})