import express from 'express';
import morgan from 'morgan';
import pkg from '../package.json';
import productsRoutes from './routes/products.routes';

const app = express();

app.set('pkg', pkg);
app.use(express.json());
app.use(morgan('dev'));



app.use('/products', productsRoutes)

export default app;