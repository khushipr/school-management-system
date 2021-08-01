// Importing modules
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import studentRoutes from './routes/student.js';

// Initializing express
const app = express();

// Using the students route
app.use('/students', studentRoutes);

// Setting up bodyParser for sending requests properly
app.use(bodyParser.json({limit: '20mb', extended: true}));
app.use(bodyParser.urlencoded({limit: '20mb', extended: true}));

// Setting up cors
app.use(cors());

// Setting up MongoDB (mongoose)
const CONNECTION_URL = "mongodb+srv://khushi:010702@cluster0.cwzaf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() => app.listen(PORT, () =>
    console.log(`Connection is established and running on port: ${PORT}`)
)).catch((err) => console.log(err, message));

mongoose.set('useFindAndModify', false);