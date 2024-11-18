import express from 'express';
import Connection from './database/db.js';
import dotenv from 'dotenv';
import router from './routes/routes.js';
import CORS from 'cors';
import bodyParser from 'body-parser';

dotenv.config();

const app = express();

app.use(CORS());
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use('/', router);

const PORT = 8000;

app.listen(PORT, () => {console.log(`server is running successfuly on port: ${PORT}`)});

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

Connection(USERNAME, PASSWORD);