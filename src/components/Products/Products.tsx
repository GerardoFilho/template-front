import { useEffect } from "react";
import { useProductStore } from "../../store/useProductStore";
import { Loading } from "cxt-design-system";

export function Products() {
    const { products, loading, error, fetchProducts } = useProductStore();

    useEffect(() => {
        if (products.length === 0) {
            fetchProducts();
        }
    }, []);

    if (loading) return <Loading label="Carregando produtos..." />;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <h1>Produtos</h1>
            <button onClick={fetchProducts}>Recarregar</button>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
                {products.map((product) => (
                    <div key={product.id} style={{ border: "1px solid #ccc", padding: 10 }}>
                        <img src={product.image} alt={product.title} style={{ width: "100px" }} />
                        <h3>{product.title}</h3>
                        <p>R$ {product.price.toFixed(2)}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
