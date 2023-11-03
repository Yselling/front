const ProductCard = ({ product, handleAddToCart }) => {

    return (
        <div className="bg-white rounded-md shadow-lg overflow-hidden">
            <div className="relative">
                <img src={product.image} alt={product.name} className="w-full h-64 object-cover mb-4 rounded-t-md" />
            </div>
            <div className="p-6">
                <div className="flex items-center gap-x-4 text-xs">
                    <time dateTime={product.created_at} className="text-gray-500">{product.created_at}</time>
                    <a href="#" className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                        {product.category.name}
                    </a>
                </div>
                <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                        <a href="#">
                            <span className="absolute inset-0"></span>
                            {product.name}
                        </a>
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{product.description}</p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                    <div className="text-sm leading-6">
                        <button onClick={() => handleAddToCart(product.id)} className="text-white bg-green-500 hover:bg-green-600 px-4 py-2 rounded-md shadow">
                            Ajouter au panier 🥏
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
