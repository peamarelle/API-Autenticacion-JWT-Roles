import app from './app.js';
import dotenv from 'dotenv'
import db from './database'
dotenv.config();

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`App listen on port ${port}!`));