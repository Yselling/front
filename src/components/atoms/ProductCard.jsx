const ProductCard = ({ product }) => {
    return (
        <div className="bg-white rounded-md shadow-lg overflow-hidden">
            <div className="relative">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover mb-4 rounded-t-md"
                />
            </div>
            <div className="p-6">
                <div className="flex items-center gap-x-4 text-xs font-medium text-gray-500">
                    <div className="text-gray-500 bg-blue-100 text-blue-500 px-4 py-2 rounded-md font-medium text-sm">
                        {product.category.name}
                    </div>
                    <span aria-hidden="true">&middot;</span>
                    <div className="text-gray-500">
                        {new Date(product.created_at).toLocaleDateString("fr-FR")}
                    </div>
                </div>
                <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                        <span className="absolute inset-0"></span>
                        {product.name}
                    </h3>
                    <p className="mt-5 line-clamp-2 text-sm leading-6 text-gray-600">
                        {product.description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
