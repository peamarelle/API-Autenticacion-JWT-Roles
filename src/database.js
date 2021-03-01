import mongoose from 'mongoose'
import keys from './keys'

mongoose.connect(keys.URI,
    {useCreateIndex: true},
    { useNewUrlParser: true },
    {
        useUnifiedTopology: true
    })
    .then(db => console.log(`db is conected!`))
    .catch(error => console.log(error))