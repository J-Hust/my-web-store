import { useEffect, useState } from "react";
import "./App.css";
import ProductForm from "./ProductForm";
import ProductTable from "./ProductTable";
import { fetchProducts, type Product } from "./products";

type ProductsState =
  | { status: "loading" }
  | { status: "success"; products: Product[] }
  | { status: "error"; message: string };

function App() {
  const [state, setState] = useState<ProductsState>({ status: "loading" });

  useEffect(() => {
    const controller = new AbortController();

    async function loadProducts() {
      try {
        const products = await fetchProducts(controller.signal);
        setState({ status: "success", products });
      } catch (error: unknown) {
        if (controller.signal.aborted) return;

        setState({
          status: "error",
          message:
            error instanceof Error
              ? error.message
              : "An unexpected error occurred",
        });
      }
    }

    void loadProducts();

    return () => controller.abort();
  }, []);

  function handleProductCreated(product: Product) {
    setState((prev) =>
      prev.status === "success"
        ? { ...prev, products: [...prev.products, product] }
        : prev,
    );
  }

  if (state.status === "loading") {
    return <p>Loading products…</p>;
  }

  if (state.status === "error") {
    return <p role="alert">{state.message}</p>;
  }

  return (
    <>
      <section>
        <ProductForm onProductCreated={handleProductCreated} />
      </section>
      <section>
        <h2>Products</h2>
      </section>
      <section id="products">
        <ProductTable products={state.products} />
      </section>
    </>
  );
}

export default App;
