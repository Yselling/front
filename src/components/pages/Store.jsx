import React, { useState, useEffect } from "react";
import api from "../../toolkit/api.config";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import SearchBar from "../atoms/SearchBar";
import "../../index.css";
import ProductList from "../atoms/ProductList";

const Store = () => {
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [apiPage, setApiPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState("");
    const [categories, setCategories] = useState([]);
    const [activeCategories, setActiveCategories] = useState([]);
    const [isProductloaded, setIsProductLoaded] = useState(false);

    useEffect(() => {
        axios(api("get", `categories`))
            .then((response) => {
                setCategories(response.data.data);
            })
            .catch((err) => {
                console.error(err);
            });
    }, []);

    const fetchProducts = async () => {
        let data = {
            page: apiPage,
            search: searchTerm,
            categories: activeCategories
        };
        axios(api("post", "products", data))
            .then((response) => {
                setFilteredProducts([...filteredProducts, ...response.data.data]);
                setIsProductLoaded(true);
            })
            .catch((err) => {
                console.error(err);
            });
    };

    useEffect(() => {
        fetchProducts(apiPage);
    }, [apiPage]);

    const handleSearch = (query) => {
        setApiPage(1);
        setSearchTerm(query);
        let data = {
            page: apiPage,
            search: searchTerm,
            categories: activeCategories
        };
        axios(api("post", "products", data))
            .then((response) => {
                setFilteredProducts(response.data.data);
            })
            .catch((err) => {
                console.error(err);
            });
    };

    const handleFilter = (categoryId) => {
        if (activeCategories.includes(categoryId)) {
            setActiveCategories(activeCategories.filter((id) => id !== categoryId));
        } else {
            setActiveCategories([...activeCategories, categoryId]);
        }
    };

    useEffect(() => {
        setApiPage(1);
        let data = {
            page: apiPage,
            search: searchTerm,
            categories: activeCategories
        };
        axios(api("post", "products", data))
            .then((response) => {
                setFilteredProducts(response.data.data);
            })
            .catch((err) => {
                console.error(err);
            });
    }, [activeCategories]);

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
        <InfiniteScroll
            dataLength={filteredProducts.length}
            next={() => setApiPage(apiPage + 1)}
            hasMore={true}
        >
            <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-20">
                <div className="mx-auto max-w-2xl lg:max-w-none">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Produits 📪</h2>
                    <p className="text-lg leading-8 mb-8">Découvrez toutes les offres de nos marchands.</p>
                    <SearchBar onSearch={handleSearch} />
                    <div className="flex flex-wrap gap-4">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                className={`${activeCategories.includes(category.id)
                                    ? "bg-blue-500 text-white"
                                    : "bg-blue-100 text-blue-500"
                                    } px-4 py-2 rounded-md font-medium text-sm`}
                                onClick={() => handleFilter(category.id)}
                            >
                                {category.name}
                            </button>
                        ))}
                    </div>
                </div>
                {isProductloaded ? (
                    <ProductList products={filteredProducts} />
                ) : (
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3 sm:gap-y-20 sm:gap-x-5">
                        {skeletonCards}
                    </div>
                )}
            </div>
        </InfiniteScroll>
    )
};

export default Store;
