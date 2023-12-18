const Customer = require("../models/Customer");

class CustomerService {
    async createCustomer(customerData){
        try {
            // Xử lý nghiệp vụ và tương tác với tầng model
            const customer = new Customer(customerData);
            await customer.save();
            return customer;
        } catch (error) {
            throw error;
        }
    }

    getAll = async () => {
        try {
            const customers = await Customer.find();
            return customers;
        } catch (error) {
            throw error;
        }
    }

    async updateCustomer(id,data){
        try {
            const result = await Customer.updateOne({_id: id} , {username: data.username});
            return true
        } catch (error) {
            throw error;
        }
    }

    async deleteCustomer(id,data){
        try {

            const customer = await Customer.findById(id);
            console.log(customer);
            await Customer.deleteOne();
           
            return true
        } catch (error) {
            throw error;
        }
    }
}

module.exports = new CustomerService();