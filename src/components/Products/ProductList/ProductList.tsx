import { useEffect } from "react";
import { useProductStore } from "../../../store/useProductStore";
import { ProductCard } from "../ProductCard/ProductCard";
import { Loading } from "cxt-design-system";
import * as S from "./ProductList.style"


export function ProductList() {
    const {
        products,
        fetchProducts,
        loading,
        error,
        categoryFilter,
        searchQuery,
    } = useProductStore();

    useEffect(() => {
        fetchProducts();
    }, []);

    const filtered = products.filter((product) => {
        const matchCategory =
            categoryFilter === "all" || product.category === categoryFilter;
        const matchSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase());
        return matchCategory && matchSearch;
    });

    if (loading) return <Loading label="Carregando produtos..." />;
    if (error) return <p>{error}</p>;
    if (filtered.length === 0) return <p>Nenhum produto encontrado.</p>;

    return (
        <S.Grid>
            {filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </S.Grid>
    );
}
