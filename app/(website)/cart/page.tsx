"use client";

import React, { useState } from 'react';
import { 
  Trash2, 
  Plus, 
  Minus, 
  ShoppingBag, 
  Tag,
  ArrowRight,
  Heart,
  X,
  Truck,
  ShieldCheck,
  Gift,
  Sparkles
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface CartItem {
  id: number;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  quantity: number;
  image: string;
  inStock: boolean;
  size?: string;
}

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "Luxury Hydrating Serum",
      brand: "Cosmetica Premium",
      price: 89.99,
      originalPrice: 119.99,
      quantity: 2,
      image: "/assets/img/product/product1.png",
      inStock: true,
      size: "50ml"
    },
    {
      id: 2,
      name: "Matte Lipstick",
      brand: "Fenty Beauty",
      price: 30.00,
      originalPrice: 45.00,
      quantity: 1,
      image: "/assets/img/product/product2.png",
      inStock: true,
    },
    {
      id: 3,
      name: "Eye Shadow Palette",
      brand: "Dior",
      price: 60.00,
      quantity: 1,
      image: "/assets/img/product/product3.png",
      inStock: true,
    },
  ]);

  const [promoCode, setPromoCode] = useState("");
  const [appliedPromo, setAppliedPromo] = useState<string | null>(null);
  const [showEmptyCart, setShowEmptyCart] = useState(false);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
    if (cartItems.length === 1) {
      setShowEmptyCart(true);
    }
  };

  const moveToWishlist = (id: number) => {
    console.log(`Moved item ${id} to wishlist`);
    removeItem(id);
  };

  const applyPromoCode = () => {
    if (promoCode.trim()) {
      setAppliedPromo(promoCode);
      setPromoCode("");
    }
  };

  const removePromoCode = () => {
    setAppliedPromo(null);
  };

  // Calculations
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const savings = cartItems.reduce((sum, item) => {
    if (item.originalPrice) {
      return sum + ((item.originalPrice - item.price) * item.quantity);
    }
    return sum;
  }, 0);
  const promoDiscount = appliedPromo ? subtotal * 0.1 : 0; // 10% discount
  const shipping = subtotal > 50 ? 0 : 9.99;
  const tax = (subtotal - promoDiscount) * 0.08; // 8% tax
  const total = subtotal - promoDiscount + shipping + tax;

  const freeShippingProgress = subtotal >= 50 ? 100 : (subtotal / 50) * 100;
  const amountForFreeShipping = Math.max(0, 50 - subtotal);

  if (showEmptyCart || cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-pink-50/30 to-white">
        <div className="px-[5%] py-16">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-32 h-32 bg-gradient-to-br from-pink-100 to-rose-100 rounded-full flex items-center justify-center mx-auto mb-8">
              <ShoppingBag className="w-16 h-16 text-pink-400" />
            </div>
            
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Your Cart is Empty
            </h1>
            
            <p className="text-gray-600 text-lg mb-8">
              Looks like you haven't added anything to your cart yet. Start shopping to fill it up!
            </p>

            <Link href="/shop">
              <button className="px-8 py-4 bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-3 mx-auto">
                <ShoppingBag className="w-5 h-5" />
                Start Shopping
              </button>
            </Link>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
              <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
                <Truck className="w-8 h-8 text-pink-600 mx-auto mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">Free Shipping</h3>
                <p className="text-sm text-gray-600">On orders over $50</p>
              </div>
              
              <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
                <ShieldCheck className="w-8 h-8 text-pink-600 mx-auto mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">Secure Payment</h3>
                <p className="text-sm text-gray-600">100% secure checkout</p>
              </div>
              
              <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
                <Gift className="w-8 h-8 text-pink-600 mx-auto mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">Free Returns</h3>
                <p className="text-sm text-gray-600">30-day return policy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50/30 to-white">
      <div className="px-[5%] py-8 lg:py-12">
        
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-2">
            Shopping Cart
          </h1>
          <p className="text-gray-600">
            {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} in your cart
          </p>
        </div>

        {/* Free Shipping Progress Bar */}
        {amountForFreeShipping > 0 && (
          <div className="mb-8 p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Truck className="w-5 h-5 text-pink-600" />
                <span className="font-semibold text-gray-900">
                  Add ${amountForFreeShipping.toFixed(2)} more for FREE shipping!
                </span>
              </div>
              <span className="text-sm font-medium text-pink-600">
                ${subtotal.toFixed(2)} / $50.00
              </span>
            </div>
            <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-pink-500 to-rose-600 rounded-full transition-all duration-500"
                style={{ width: `${freeShippingProgress}%` }}
              />
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div 
                key={item.id}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex gap-6">
                  {/* Product Image */}
                  <div className="relative w-32 h-32 flex-shrink-0 rounded-xl overflow-hidden bg-gray-100 group">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    {item.originalPrice && (
                      <div className="absolute top-2 left-2">
                        <span className="px-2 py-1 bg-gradient-to-r from-emerald-500 to-green-600 text-white text-xs font-bold rounded-full">
                          -{Math.round(((item.originalPrice - item.price) / item.originalPrice) * 100)}%
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Product Details */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div className="flex-1 min-w-0">
                        <Link href={`/shop/product-${item.id}`}>
                          <h3 className="text-lg font-bold text-gray-900 hover:text-pink-600 transition-colors line-clamp-1">
                            {item.name}
                          </h3>
                        </Link>
                        <p className="text-sm text-gray-600 mb-1">{item.brand}</p>
                        {item.size && (
                          <p className="text-xs text-gray-500">Size: {item.size}</p>
                        )}
                        {item.inStock ? (
                          <span className="inline-flex items-center gap-1 text-xs font-medium text-green-600 mt-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full" />
                            In Stock
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 text-xs font-medium text-red-600 mt-2">
                            <div className="w-2 h-2 bg-red-500 rounded-full" />
                            Out of Stock
                          </span>
                        )}
                      </div>

                      {/* Remove Button */}
                      <button
                        onClick={() => removeItem(item.id)}
                        className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>

                    {/* Price and Quantity Controls */}
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex flex-col">
                        <div className="flex items-baseline gap-2">
                          <span className="text-2xl font-bold text-pink-600">
                            ${item.price.toFixed(2)}
                          </span>
                          {item.originalPrice && (
                            <span className="text-sm text-gray-400 line-through">
                              ${item.originalPrice.toFixed(2)}
                            </span>
                          )}
                        </div>
                        <span className="text-xs text-gray-500 mt-1">
                          Total: ${(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-3">
                        <div className="flex items-center border-2 border-gray-300 rounded-xl overflow-hidden">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-2 hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            disabled={item.quantity <= 1}
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="px-4 py-2 font-bold min-w-[40px] text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-2 hover:bg-gray-100 transition-colors"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-4 mt-4 pt-4 border-t border-gray-100">
                      <button
                        onClick={() => moveToWishlist(item.id)}
                        className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-pink-600 transition-colors"
                      >
                        <Heart className="w-4 h-4" />
                        Move to Wishlist
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Continue Shopping */}
            <Link href="/shop">
              <button className="w-full py-4 px-6 bg-white border-2 border-gray-300 hover:border-pink-500 text-gray-700 hover:text-pink-600 font-semibold rounded-xl transition-all hover:shadow-md flex items-center justify-center gap-2">
                <ArrowRight className="w-5 h-5 rotate-180" />
                Continue Shopping
              </button>
            </Link>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sticky top-24 space-y-6">
              
              <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-pink-600" />
                Order Summary
              </h2>

              {/* Promo Code */}
              <div className="space-y-3">
                <label className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
                  Promo Code
                </label>
                {appliedPromo ? (
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-pink-50 to-rose-50 rounded-xl border-2 border-pink-200">
                    <div className="flex items-center gap-2">
                      <Tag className="w-5 h-5 text-pink-600" />
                      <span className="font-semibold text-pink-600">{appliedPromo}</span>
                    </div>
                    <button
                      onClick={removePromoCode}
                      className="p-1 hover:bg-white rounded-full transition-colors"
                    >
                      <X className="w-4 h-4 text-pink-600" />
                    </button>
                  </div>
                ) : (
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      placeholder="Enter code"
                      className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-pink-400 focus:ring-4 focus:ring-pink-100 transition-all"
                    />
                    <button
                      onClick={applyPromoCode}
                      className="px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-xl transition-all hover:scale-105 active:scale-95"
                    >
                      Apply
                    </button>
                  </div>
                )}
              </div>

              {/* Price Breakdown */}
              <div className="space-y-3 py-6 border-y border-gray-200">
                <div className="flex justify-between text-gray-700">
                  <span>Subtotal</span>
                  <span className="font-semibold">${subtotal.toFixed(2)}</span>
                </div>

                {savings > 0 && (
                  <div className="flex justify-between text-green-600">
                    <span>Savings</span>
                    <span className="font-semibold">-${savings.toFixed(2)}</span>
                  </div>
                )}

                {appliedPromo && (
                  <div className="flex justify-between text-green-600">
                    <span>Promo Discount (10%)</span>
                    <span className="font-semibold">-${promoDiscount.toFixed(2)}</span>
                  </div>
                )}

                <div className="flex justify-between text-gray-700">
                  <span className="flex items-center gap-1">
                    Shipping
                    {shipping === 0 && (
                      <span className="text-xs text-green-600 font-semibold">(FREE)</span>
                    )}
                  </span>
                  <span className="font-semibold">
                    {shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}
                  </span>
                </div>

                <div className="flex justify-between text-gray-700">
                  <span>Tax</span>
                  <span className="font-semibold">${tax.toFixed(2)}</span>
                </div>
              </div>

              {/* Total */}
              <div className="flex justify-between items-baseline py-4">
                <span className="text-xl font-bold text-gray-900">Total</span>
                <span className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                  ${total.toFixed(2)}
                </span>
              </div>

              {/* Checkout Button */}
              <Link href="/checkout">
                <button className="cursor-pointer w-full py-4 px-6 bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-3">
                  Proceed to Checkout
                  <ArrowRight className="w-5 h-5" />
                </button>
              </Link>

              {/* Trust Badges */}
              <div className="space-y-3 pt-6 border-t border-gray-200">
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <ShieldCheck className="w-5 h-5 text-pink-600" />
                  <span>Secure 256-bit SSL encryption</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <Truck className="w-5 h-5 text-pink-600" />
                  <span>Free shipping on orders over $50</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <Gift className="w-5 h-5 text-pink-600" />
                  <span>30-day easy returns</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;