import ProductList from "../atoms/ProductList";

const Merchant = ({handleAddToCart}) => {
    return (
        <>
            <ProductList handleAddToCart={handleAddToCart} />
        </>
    );
}

export default Merchant;