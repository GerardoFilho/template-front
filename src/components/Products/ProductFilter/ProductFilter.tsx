import { useProductStore } from "../../../store/useProductStore";

const categories = ["all", "men's clothing", "women's clothing", "jewelery", "electronics"];

export function ProductFilter() {
    const { categoryFilter, setCategoryFilter } = useProductStore();

    return (
        <select value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)}>
            {categories.map((cat) => (
                <option key={cat} value={cat}>
                    {cat === "all" ? "Todos" : cat}
                </option>
            ))}
        </select>
    );
}
