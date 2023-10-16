import React from 'react';
import '../index.css';

import ProductCard from './ProductCard';

export default {
    title: 'Atoms/ProductCard',
    component: ProductCard,
};

const product = {
    date: "Mar 16, 2020",
    category: "Marketing",
    title: "Boost your conversion rate",
    description: "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    author: "Michael Foster",
    authorRole: "Co-Founder / CTO",
    productImageUrl: "https://images.unsplash.com/photo-1592078615290-033ee584e267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2160&q=80",
    sellerImageUrl: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};

export const ClassicCard = () => (
    <div className="flex justify-center items-center h-screen">
        <div className="h-3/4 w-1/3">
            <ProductCard product={product} />
        </div>
    </div>
);
