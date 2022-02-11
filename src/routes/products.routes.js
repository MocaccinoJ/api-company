import { Router } from "express";
const router = Router();

import * as productsControllers  from '../controllers/products.controller';
import { authJwt } from '../middlewares';

router.post('/', [authJwt.verifyToken, authJwt.isModerator ], productsControllers.createProduct);

router.get('/', productsControllers.getProducts);

router.get('/:productId', productsControllers.getProductByI);

router.put('/:productId', [authJwt.verifyToken, authJwt.isAdmin], productsControllers.updateProductsById);

router.delete('/:productId', [authJwt.verifyToken, authJwt.isAdmin], productsControllers.deleteProductById);

export default router;