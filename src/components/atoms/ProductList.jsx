// ProductList.js
import { useState, useEffect } from "react";
import ProductCard from "../atoms/ProductCard";
import SearchBar from "../atoms/SearchBar";
import "../../index.css";

const ProductList = ({ products }) => {
    const [filteredProducts, setFilteredProducts] = useState(products);
    const [loading, setLoading] = useState(true);

    const handleSearch = (searchTerm) => {
        const filtered = products.filter((product) =>
            product.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredProducts(filtered);
    };

    useEffect(() => {
        const fakeAsyncCall = () => {
            setTimeout(() => {
                setLoading(false);
            }, 2000);
        };

        fakeAsyncCall();
    }, []);

    const skeletonCards = Array.from({ length: 10 }, (_, index) => (
        <div key={index} className="w-full skeleton-loader">
            <div className="bg-white rounded-md shadow-lg overflow-hidden animate-pulse">
                <div className="h-64 bg-gray-300"></div>
                <div className="p-6">
                    <div className="h-4 bg-gray-300 mb-4"></div>
                    <div className="h-4 bg-gray-300 mb-4"></div>
                    <div className="h-4 bg-gray-300 mb-4"></div>
                    <div className="h-4 bg-gray-300"></div>
                </div>
            </div>
        </div>
    ));

    return (
        <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-20">
            <div className="mx-auto max-w-2xl lg:mx-0">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Produits</h2>
                <p className="mt-2 text-lg leading-8">Découvrez nos produits uniques.</p>
            </div>
            <SearchBar onSearch={handleSearch} />
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                {loading ? (
                    skeletonCards
                ) : (
                    filteredProducts.map((product, index) => (
                        <div key={index} className="w-full">
                            <ProductCard product={product} />
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default ProductList;
