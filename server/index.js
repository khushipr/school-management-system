// Importing modules
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import studentRoutes from './routes/student.js';

// Initializing express
const app = express();

// Setting up cors
app.use(cors());

// Setting up express for sending requests properly
app.use(express.json());
app.use(express.urlencoded());

// Using the students route
app.use('/students', studentRoutes);

// Setting up MongoDB (mongoose)
const CONNECTION_URL = "mongodb+srv://khushiprasad:010702@cluster0.0mpkf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() => app.listen(PORT, () =>
    console.log(`Connection is established and running on port: ${PORT}`)
)).catch((err) => console.log(err));

mongoose.set('useFindAndModify', false);