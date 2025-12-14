import { Heart, Star } from "lucide-react";

function Wishlist() {
    return (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">My Wishlist</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5].map((i) => (
                    <div
                        key={i}
                        className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow group"
                    >
                        <div className="aspect-square bg-gradient-to-br from-pink-100 to-rose-100 relative">
                            <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:bg-red-50 transition-colors">
                                <Heart className="w-5 h-5 fill-pink-500 text-pink-500" />
                            </button>
                        </div>
                        <div className="p-4">
                            <h3 className="font-semibold text-gray-900 mb-1">
                                Product Name {i}
                            </h3>
                            <div className="flex items-center gap-1 mb-2">
                                {[...Array(5)].map((_, j) => (
                                    <Star
                                        key={j}
                                        className="w-3 h-3 fill-yellow-400 text-yellow-400"
                                    />
                                ))}
                                <span className="text-xs text-gray-600 ml-1">(4.5)</span>
                            </div>
                            <p className="text-pink-600 font-bold mb-3">
                                ${(29.99 + i * 10).toFixed(2)}
                            </p>
                            <button className="w-full px-4 py-2.5 bg-gradient-to-r from-pink-500 to-rose-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Wishlist;
