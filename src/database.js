import mongoose from 'mongoose'
import keys from './keys'

mongoose.connect(keys.URI,
    {  useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    })
    .then(db => console.log(`db is conected!`))
    .catch(error => console.log(error))