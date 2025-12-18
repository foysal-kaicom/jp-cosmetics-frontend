"use client";

import { useState } from "react";
import {
  MapPin,
  CreditCard,
  ShoppingBag,
  ChevronRight,
  Plus,
  Check,
  Truck,
  Shield,
} from "lucide-react";
import { useCartStore } from "@/store/cart-store";

export default function CheckoutPage() {
  const [selectedAddress, setSelectedAddress] = useState(0);
  const [selectedPayment, setSelectedPayment] = useState(0);
  const [promoCode, setPromoCode] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);

  const { items } = useCartStore();

  // ================= ADDRESSES =================
  const addresses = [
    {
      id: 1,
      title: "Home",
      name: "Sarah Johnson",
      address: "324 King St. Owosso, MI 48867",
      phone: "+1 888-456-668",
      isDefault: true,
    },
    {
      id: 2,
      title: "Office",
      name: "Sarah Johnson",
      address: "281 Virginia Ave. Westwood, NJ 07675",
      phone: "+1 888-456-668",
    },
  ];

  // ================= PAYMENT METHODS =================
  const paymentMethods = [
    {
      id: 1,
      type: "cod",
      name: "Cash On Delivery",
      charge: 60,
      isDefault: true,
    },
    {
      id: 2,
      type: "online",
      name: "Online Payment",
      charge: 120,
    },
  ];

  const selectedPaymentCharge =
    paymentMethods[selectedPayment]?.charge ?? 0;

  // ================= CALCULATIONS =================
  const subtotal = items.reduce(
    (sum, item) => sum + item.unit_price * item.quantity,
    0
  );

  const discount = items.reduce(
    (sum, item) => sum + item.discount_amount,
    0
  );

  const promoDiscount = promoApplied ? subtotal * 0.05 : 0; // 5% promo
  const tax = (subtotal - promoDiscount) * 0.05; // 5% VAT

  const total =
    subtotal -
    discount -
    promoDiscount +
    tax +
    selectedPaymentCharge;

  const handleApplyPromo = () => {
    if (promoCode.trim()) {
      setPromoApplied(true);
    }
  };

  // ================= EMPTY CART =================
  if (items.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-xl font-bold">Your cart is empty</h2>
      </div>
    );
  }

  // ================= UI =================
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* LEFT */}
          <div className="lg:col-span-2 space-y-6">
            {/* ADDRESS */}
            <div className="bg-white rounded-2xl p-6 border">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold flex items-center gap-2">
                  <MapPin /> Delivery Address
                </h2>
                <button className="text-pink-600 flex items-center gap-1">
                  <Plus className="w-4 h-4" /> Add New
                </button>
              </div>

              {addresses.map((addr, index) => (
                <div
                  key={addr.id}
                  onClick={() => setSelectedAddress(index)}
                  className={`border-2 rounded-xl p-4 mb-3 cursor-pointer ${
                    selectedAddress === index
                      ? "border-pink-500 bg-pink-50"
                      : "border-gray-200"
                  }`}
                >
                  <div className="flex gap-3">
                    <div className="w-5 h-5 rounded-full border flex items-center justify-center">
                      {selectedAddress === index && (
                        <Check className="w-3 h-3 text-pink-600" />
                      )}
                    </div>
                    <div>
                      <p className="font-bold">{addr.title}</p>
                      <p className="text-sm">{addr.name}</p>
                      <p className="text-sm text-gray-600">{addr.address}</p>
                      <p className="text-sm text-gray-600">{addr.phone}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* PAYMENT */}
            <div className="bg-white rounded-2xl p-6 border">
              <h2 className="text-xl font-bold flex items-center gap-2 mb-6">
                <CreditCard /> Payment Method
              </h2>

              {paymentMethods.map((payment, index) => (
                <div
                  key={payment.id}
                  onClick={() => setSelectedPayment(index)}
                  className={`border-2 rounded-xl p-4 mb-3 cursor-pointer ${
                    selectedPayment === index
                      ? "border-pink-500 bg-pink-50"
                      : "border-gray-200"
                  }`}
                >
                  <div className="flex justify-between">
                    <p className="font-bold">{payment.name}</p>
                    <p className="font-semibold">৳ {payment.charge}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* ORDER ITEMS */}
            <div className="bg-white rounded-2xl p-6 border">
              <h2 className="text-xl font-bold flex items-center gap-2 mb-6">
                <ShoppingBag /> Order Items ({items.length})
              </h2>

              {items.map((item) => (
                <div
                  key={`${item.product_id}-${item.product_attribute_id}`}
                  className="flex gap-4 pb-4 border-b last:border-0"
                >
                  <img
                    src={item.image}
                    className="w-20 h-20 rounded-xl object-cover"
                  />
                  <div className="flex-1">
                    <p className="font-bold">
                      Product #{item.product_id}
                    </p>
                    <p className="text-sm text-gray-600">
                      Qty: {item.quantity}
                    </p>
                    <p className="font-bold mt-1">
                      ৳ {item.subtotal.toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="bg-white rounded-2xl p-6 border sticky top-6 h-fit">
            <h2 className="text-xl font-bold mb-6">Order Summary</h2>

            {/* PROMO */}
            <div className="flex gap-2 mb-6">
              <input
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                disabled={promoApplied}
                placeholder="Promo code"
                className="border px-3 py-2 rounded-xl w-full"
              />
              <button
                onClick={handleApplyPromo}
                disabled={promoApplied}
                className="bg-black text-white px-4 rounded-xl"
              >
                Apply
              </button>
            </div>

            {/* PRICE */}
            <div className="space-y-2 border-y py-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>৳ {subtotal.toFixed(2)}</span>
              </div>

              <div className="flex justify-between text-green-600">
                <span>Discount</span>
                <span>- ৳ {discount.toFixed(2)}</span>
              </div>

              {promoApplied && (
                <div className="flex justify-between text-green-600">
                  <span>Promo</span>
                  <span>- ৳ {promoDiscount.toFixed(2)}</span>
                </div>
              )}

              <div className="flex justify-between">
                <span>VAT (5%)</span>
                <span>৳ {tax.toFixed(2)}</span>
              </div>

              <div className="flex justify-between">
                <span>Payment Charge</span>
                <span>৳ {selectedPaymentCharge.toFixed(2)}</span>
              </div>
            </div>

            <div className="flex justify-between font-bold text-lg py-4">
              <span>Total</span>
              <span className="text-pink-600">
                ৳ {total.toFixed(2)}
              </span>
            </div>

            <button className="w-full py-4 bg-pink-600 text-white rounded-xl font-bold flex items-center justify-center gap-2">
              Place Order <ChevronRight />
            </button>

            {/* TRUST */}
            <div className="mt-6 space-y-2 text-sm text-gray-600">
              <div className="flex gap-2">
                <Shield className="text-green-600" /> Secure payment
              </div>
              <div className="flex gap-2">
                <Truck className="text-blue-600" /> Easy returns
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
