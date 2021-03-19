import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config();
const URI = process.env.URI;

mongoose.connect(URI,
    {  useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    })
    .then(db => console.log(`db is conected!`))
    .catch(error => console.log(error))