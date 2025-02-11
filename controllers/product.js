import Product from "../model/product";
export const getProduct = async (req, res) => {
  try {
    const data = await Product.find();
    if (data.length < 0) {
      return res.status(404).json({ message: "No products found" });
    }
    res.status(201).json(data);
  } catch (error) {
    console.error("Error adding product:", error);
    res.status(500).json({ message: "Error adding product", error });
  }
};
export const getProductbyId = async (req, res) => {
  try {
    const data = await Product.findOne({ _id: req.params.id });
    if (data.length < 0) {
      return res.status(404).json({ message: "No products found" });
    }
    res.status(201).json(data);
  } catch (error) {
    console.error("Error adding product:", error);
    res.status(500).json({ message: "Error adding product", error });
  }
};
export const addProduct = async (req, res) => {
  try {
    const data = await Product(req.body).save();
    res.status(201).json(data);
  } catch (error) {
    console.error("Error adding product:", error);
    res.status(500).json({ message: "Error adding product", error });
  }
};
export const deleteProduct = async (req, res) => {
  try {
    const data = await Product.findOneAndDelete({ _id: req.params.id });
    if (data.length < 0) {
      return res.status(404).json({ message: "No products found" });
    }
    res.status(201).json(data);
  } catch (error) {
    console.error("Error adding product:", error);
    res.status(500).json({ message: "Error adding product", error });
  }
};
export const updateProduct = async (req, res) => {
  try {
    const data = await Product.findOneAndUpdate({ _id: req.params.id }, req.body, {new:true});
    if (data.length < 0) {
      return res.status(404).json({ message: "No products found" });
    }
    res.status(201).json(data);
  } catch (error) {
    console.error("Error adding product:", error);
    res.status(500).json({ message: "Error adding product", error });
  }
};
