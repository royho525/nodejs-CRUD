import express from "express";
import configViewEngine from "./configs/viewEngien";
import initWebRoute from './route/web';
import initAPIRoute from './route/api';
//import connection from './configs/conectDB';

require('dotenv').config();

const app = express()
const port = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// set up view engine
configViewEngine(app);

// init web route
initWebRoute(app);

initAPIRoute(app);
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})