import { memo, useState } from "react";
import type { Product } from "../../../types/Products";
import * as S from './ProductCard.style'
import { useProductStore } from "../../../store/useProductStore";
import { Loading } from "cxt-design-system";

interface Props {
    product: Product;
}

const ProductCard = ({ product }: Props) => {

    const { findProductById } = useProductStore();
    const [isLoadingPage, setIsLoadingPage] = useState(false);

    const onClick = async () => {
        setIsLoadingPage(true);
        await findProductById(product.id);
        setIsLoadingPage(false);
    }

    return (
        <S.Card onClick={onClick}>
            {
                isLoadingPage ? <div style={{width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>  <Loading /> </div>: <>
                    <S.Image src={product.image} alt={product.title} />
                    <h3>{product.title}</h3>
                    <p>R$ {product.price.toFixed(2)}</p></>
            }
        </S.Card>
    );
}

export default memo(ProductCard)