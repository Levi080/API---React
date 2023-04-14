const ProductModel = require('../Model/ProductModel');

class ProductController {
    async CreateProduct(req, res) {
        try {
            const product = {
                Title: req.body.title,
                Description: req.body.body,
                CreationDate: Date.now(),
                UpdateDate: Date.now()
            };

            const createProduct = await ProductModel.create(product);

            return res.status(200).json(`Produto adicionado com sucesso!\nDescrição: ${createProduct}`);
        }
        catch (error) {
            return res.status(400).json({ message: `Não foi possível adicionar esse item na lista! erro: ${error}` });
        }
    }

    async GetAllProducts(req, res) {
        try {
            const products = await ProductModel.find();
            
            return res.status(200).json(products);

        } catch (error) {
            return res.status(400).json(error);
        }
    }

    async GetProduct(req, res) {
        try {
            const { id } = req.params;
            
            const getProducts = await ProductModel.findById(id);

            return res.status(200).json(getProducts);

        } catch (error) {
            return res.status(400).json(error);
        }
    }

    async UpdateProduct(req, res) {
        try {

            const product = {
                Title: req.body.title,
                Description: req.body.body,
                UpdateDate: Date.now()
            };

            const { id } = req.params;

            await ProductModel.findByIdAndUpdate(id, product)

            return res.status(200).json("Produto atualizado com sucesso!");

        } catch (error) {
            return res.status(400).json(error);
        }
    }

    async RemoveProduct(req, res) {
        try {
            const { id } = req.params;

            const productDeleted = await ProductModel.findByIdAndDelete(id);
            
            return res.status(200).json("Produto deletado com sucesso!\n" + productDeleted);

        } catch (error) {
            return res.status(400).json(error);
        }
    }
}

module.exports = new ProductController;