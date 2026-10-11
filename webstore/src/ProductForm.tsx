import React, { useState } from "react";
import { createProduct, type Product } from "./products";

interface ProductFormProps {
  onProductCreated: (product: Product) => void;
}

function ProductForm({ onProductCreated }: ProductFormProps) {
  const [name, setName] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const product = await createProduct(name);
      onProductCreated(product);
      setName(""); // Clear the input field after successful submission
    } catch (error) {
      console.error("Error creating product:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Product Name"
        required
      />
      <button type="submit">Add Product</button>
    </form>
  );
}

export default ProductForm;