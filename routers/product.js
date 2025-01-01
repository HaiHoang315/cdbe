import express from "express";
import { addProduct, deleteProduct, getProduct, getProductbyId, updateProduct } from "../controllers/product";

const router = express.Router();

router.get("/products", getProduct);        
router.get("/products/:id", getProductbyId);  
router.post("/products", addProduct);       
router.put("/products/:id", updateProduct);     
router.delete("/products/:id", deleteProduct);   

export default router;
