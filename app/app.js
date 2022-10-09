// Third Party Modules
import express from "express";
import cookieParser from "cookie-parser";
import logger from "morgan";
import session from "express-session";

// ES Modules fix for _dirname
import path, {dirname} from 'path';
import {fileURLToPath} from 'url';
import { lookup } from "dns";
const _dirname = dirname(fileURLToPath(import.meta.url));
// Configuration Module
import { Secret } from "../config/config.js";
// Import Router
import indexRouter from './routes/index.routes.server.js' 


// intanciate app-server
const app = express();

// setup viewEngine EJS
app.set('views', path.join(_dirname, '/views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extend: false}));
app.use(cookieParser());
app.use(express.static(path.join(_dirname, '../public')));
app.use(session({
    secret: Secret,
    saveUninitialized: false,
    resave: false
}))

// use Routes 
app.use('/', indexRouter);

// //run app
// app.listen(3000);

// console.log('Server running at http://localhost:3000');

export default app;