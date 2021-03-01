export const getProducts = (req, res) => {
    res.json('get products')
}

export const updateProduct = (req, res) => {
    res.json('update product')
}

export const createProduct = (req, res) => {
    res.json('create product')
}

export const getProductById = (req, res) => {
    res.json(`get product ${req.params.productId}`) 
}

export const updateProductById = (req, res) => {
    res.json(`update product ${req.params.productId}`) 
}