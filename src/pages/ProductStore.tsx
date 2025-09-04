import { ProductFilter } from "../components/Products/ProductFilter/ProductFilter";
import { ProductList } from "../components/Products/ProductList/ProductList";
import { SearchInput } from "../components/Products/SearchInput/SearchInput";

const ProductStorePage = () => {

    return (
        <>
            <h1>Loja Fake</h1>
            <SearchInput />
            <ProductFilter />
            <ProductList />
        </>
    );
};

export default ProductStorePage;
