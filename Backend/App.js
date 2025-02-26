import cookieParser from 'cookie-parser';
import { config } from 'dotenv';
import express from 'express';
import cors from 'cors';
import { dbConnection } from './dbConnection.js';
import { errorMiddleware } from './middlewares/errorMiddleware.js';


//entry point of the server
const app = express();

//settin the path for the environment variables
config({ path: "./config/config.env"});

//setup crossorigin resourse sharing from the frontend url with needed HTTP Methods
app.use(cors({
    origin: [process.env.FRONTENT_URL],
    methods: ["GET","POST","PUT","DELETE"],
    credentials: true,
}));

//use cookieParses for cookie management
app.use(cookieParser());

//use json parser for parsing incoming requests with json payloads
app.use(express.json());

//use express.urlencoded to send large objects and arrays through the web requests
app.use(express.urlencoded({ extended: true }));

//connect to mongodb database
dbConnection();

//use the error middleware here
app.use(errorMiddleware);

//export the app
export default app;