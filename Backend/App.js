import cookieParser from 'cookie-parser';
import { config } from 'dotenv';
import express from 'express';

const app = express();
config({ path: "./config/config.env"});

app.use(cors({
    origin: [process.env.FRONTENT_URL],
    methods: ["GET","POST","PUT","DELETE"],
    credentials: true,
}));

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));




export default app;