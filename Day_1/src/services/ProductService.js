const Product = require("../models/Product");

class ProductService {
    async createProduct(productData){
        try {
            // Xử lý nghiệp vụ và tương tác với tầng model
            const product = new Product(productData);
            await product.save();
            return product;
        } catch (error) {
            throw error;
        }
    }

    getAll = async () => {
        try {
            const products = await Product.find();
            return products;
        } catch (error) {
            throw error;
        }
    }

    async updateProduct(id,data){
        try {
            const result = await Product.updateOne({_id: id} , {Product_name: data.Product_name});
            return true
        } catch (error) {
            throw error;
        }
    }

    async deleteProduct(id,data){
        try {

            const product = await Product.findById(id);
            console.log(product);
            await product.deleteOne();
           
            return true
        } catch (error) {
            throw error;
        }
    }
}

module.exports = new ProductService();