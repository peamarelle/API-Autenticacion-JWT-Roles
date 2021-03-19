import Product from '../models/product';

export const createProduct = async (req, res) => {

    const { name, category, price, imgUrl } = req.body;

    const newProduct = new Product({ name, category, price, imgUrl });

    const productSaved = await newProduct.save();
    
    res.status(201).json(productSaved);
}

export const getProducts = async (req, res) => {

    const products = await Product.find();

    res.json(products);
}

export const updateProduct = (req, res) => {
    res.json('update product')
}

export const getProductById = (req, res) => {
    res.json(`get product ${req.params.productId}`) 
}

export const updateProductById = (req, res) => {
    res.json(`update product ${req.params.productId}`) 
}