import type { Product } from "../../../types/Products";
import * as S from './ProductCard.style'

interface Props {
    product: Product;
}

export function ProductCard({ product }: Props) {
    return (
        <S.Card>
            <S.Image src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>R$ {product.price.toFixed(2)}</p>
        </S.Card>
    );
}
