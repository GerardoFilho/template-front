import { useProductStore } from "../../../store/useProductStore";

export function SearchInput() {
    const { searchQuery, setSearchQuery } = useProductStore();

    return (
        <input
            type="text"
            placeholder="Buscar produtos..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
        />
    );
}
