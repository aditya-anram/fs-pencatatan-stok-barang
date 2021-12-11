import express from "express";
import { 
    getAllProducts,
    createProduct,
    getProductById,
    updateProduct,
    deleteProduct
 } from "../controllers/Products.js";   //import ketika export saja

const router = express.Router();    //untuk membuat endpoint

//GET http://localhost:3000/products + {/} 
router.get("/", getAllProducts); 

//GET http://localhost:3000/products + {/} + {id}
router.get("/:id", getProductById); 

//POST http://localhost:3000/products + {/} 
router.post("/", createProduct);

//PATCH http://localhost:3000/products + {/} + {id}
router.patch("/:id", updateProduct);

//DELETE http://localhost:3000/products + {/} + {id}
router.delete("/:id", deleteProduct);

export default router;