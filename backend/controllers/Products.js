import Product from "../models/productModel.js";        //import untuk es6

//get semua = findAll (orm), sebaiknya asyc function dan harus menggunakan exception handling try catch atau promise
export const getAllProducts = async (req, res) =>{
    try {
        const products = await Product.findAll();
        res.json(products);
    } catch (error) {
         res.json({message: error.message});
    }   
}

//get by id = diberikan parameter where dari request body id
export const getProductById = async (req, res) =>{
    try {
        const product = await Product.findAll({
            where:{
                id: req.params.id
            }
        });
        res.json(product);
    } catch (error) {
         res.json({message: error.message});
    }   
}

//post , menambah data menggunakan create dan menerima request body dengan content type apllication.json
export const createProduct = async (req, res) =>{
    try {
        await Product.create(req.body);
        res.json({
            "message": "Berhasil menambahkan data."
        });
    } catch (error) {
         res.json({message: error.message});
    }   
}


//update, mengedit data berdasarkan id dengan menerima request body
export const updateProduct = async (req, res) =>{
    try {
        await Product.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Berhasil mengedit data."
        });
    } catch (error) {
         res.json({message: error.message});
    }   
}

//delete , hanya menggunakan id tanpa request body
export const deleteProduct = async (req, res) =>{
    try {
        await Product.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Berhasil menghapus data."
        });
    } catch (error) {
         res.json({message: error.message});
    }   
}
