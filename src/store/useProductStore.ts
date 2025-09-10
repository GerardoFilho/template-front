import { create } from "zustand";
import type { Product } from "../types/Products";
import httpFakestore from "../services/fakestore";
import type { IRequest } from "../types/Request";

interface ProductStore {
    products: Product[];
    selectedProduct: Product | null;
    findProductById: (id: number) => Promise<IRequest<Product>> | null;
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
    selectedProduct: null,
    error: null,
    categoryFilter: "all",
    searchQuery: "",
    fetchProducts: async () => {

        set({ loading: true, error: null });

        const request = await httpFakestore.get('products')
            .then((response) => ({ data: response.data, success: true, error: null, message: 'OK!' }))
            .catch((error) => ({ data: null, success: false, error: error, message: error.message }));

        set({ products: request.data, loading: false, error: request.error });
    },
    findProductById: async (id: number) => {
        set({ selectedProduct: null })
        const request = await httpFakestore.get(`products/${id}`)
            .then((response) => ({ data: response.data, success: true, error: null, message: 'OK!' }))
            .catch((error) => ({ data: null, success: false, error: error, message: error.message }));

        if (request.success) set({ selectedProduct: request.data })
        return request;
    },
    setCategoryFilter: (category) => set({ categoryFilter: category }),
    setSearchQuery: (query) => set({ searchQuery: query }),
    clear: () => set({ products: [], error: null, loading: false }),
}));
