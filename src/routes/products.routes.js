import {Router} from 'express';
import * as productsRoutes from '../controllers/products.controller';

const router = Router();

router.get('/', productsRoutes.getProducts)

router.get('/:productId', productsRoutes.getProductById)

router.post('/', productsRoutes.createProduct)

router.put('/', productsRoutes.updateProduct)

router.put('/:productId', productsRoutes.updateProductById)

export default router;