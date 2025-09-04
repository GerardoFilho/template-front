import { useEffect, useState } from "react";
import type { Product } from "../types/Products";
import axios from "axios";

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await axios.get<Product[]>("https://fakestoreapi.com/products");
      setProducts(response.data);
    } catch (err) {
      console.error(err);
      setError("Erro ao carregar produtos");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return { products, loading, error, refetch: fetchProducts };
}
