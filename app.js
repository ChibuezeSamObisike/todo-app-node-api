const express = require('express');
const connectDB = require('./db/connect');
const app = express();
const tasks = require('./routes/tasks');
require('dotenv').config();
const notFound = require('./middlewares/not-found');
const errorHandlerMiddleware = require('./middlewares/error-handler');

//middleware
app.use(express.json()); //If we don't no data in req.body

//routes
app.get('/', (req, res) => {
    res.send('Task Manager App');
});

app.use('/api/v1/tasks', tasks);

app.use(notFound);
app.use(errorHandlerMiddleware);

const start = async() => {
    try {
        await connectDB(process.env.MONGO_URI);
        const port = process.env.PORT || 8000;
        app.listen(port, () => {
            console.log(`Server is listening on PORT ${port}`);
        });
    } catch (error) {
        console.log(error);
    }
};

start();