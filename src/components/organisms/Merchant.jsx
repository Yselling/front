import ProductList from "../atoms/ProductList";

const Merchant = ({products}) => {

    return (
        <>
            <ProductList products={products} />
        </>
    );
}

export default Merchant;