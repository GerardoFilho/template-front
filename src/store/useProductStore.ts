import { create } from "zustand";
import type { Product } from "../types/Products";
import axios from "axios";

interface ProductStore {
    products: Product[];
    loading: boolean;
    error: string | null;
    categoryFilter: string;
    searchQuery: string;
    fetchProducts: () => Promise<void>;
    setCategoryFilter: (category: string) => void;
    setSearchQuery: (query: string) => void;
    clear: () => void;
}

export const useProductStore = create<ProductStore>((set) => ({
    products: [],
    loading: false,
    error: null,
    categoryFilter: "all",
    searchQuery: "",
    fetchProducts: async () => {
        try {
            set({ loading: true, error: null });

            const response = await axios.get<Product[]>("https://fakestoreapi.com/products");

            set({ products: response.data });
        } catch (error) {
            console.error(error);
            set({ error: "Erro ao carregar produtos" });
        } finally {
            set({ loading: false });
        }
    },
    setCategoryFilter: (category) => set({ categoryFilter: category }),
    setSearchQuery: (query) => set({ searchQuery: query }),
    clear: () => set({ products: [], error: null, loading: false }),
}));
