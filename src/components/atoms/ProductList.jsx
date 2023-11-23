import ProductCard from "../atoms/ProductCard";
import "../../index.css";
import { Link } from "react-router-dom";

const ProductList = ({ products }) => {
    return (
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3 sm:gap-y-20 sm:gap-x-5">
            {products.length === 0 ? (
                <h1 className="text-center font-bold text-2xl">Aucun produit disponible 😅</h1>
            ) : (
                products.map((product, index) => (
                    <div key={index} className="w-full">
                        <Link to={`/product/${product.id}`}>
                            <ProductCard product={product} />
                        </Link>
                    </div>
                ))
            )}
        </div>
    );
};

export default ProductList;
