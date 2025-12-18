"use client";

import { useEffect, useState } from "react";

import { CheckCircle, HandCoins, X } from "lucide-react";
import { Order, OrderDetailResponse } from "@/types/user";
import { orderService } from "@/services/user.service";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  selectedOrderId: number | null;
};

const statusColors: Record<string, string> = {
  pending: "bg-yellow-100 text-yellow-800",
  processing: "bg-yellow-100 text-yellow-800",
  confirm: "bg-blue-100 text-blue-800",
  dispatched: "bg-purple-100 text-purple-800",
  delivered: "bg-green-100 text-green-800",
  cancelled: "bg-red-100 text-red-800",
  cancel: "bg-red-100 text-red-800",
  failed: "bg-red-100 text-red-800",
  returned: "bg-pink-100 text-pink-800",
  refunded: "bg-pink-100 text-pink-800",
  success: "bg-teal-100 text-teal-800",
};

export const OrderDetailsModal = ({
  isOpen,
  onClose,
  selectedOrderId,
}: Props) => {
  const [ordersDetails, setOrdersDetails] = useState<Order | null>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrdersDetails = async () => {
      if (selectedOrderId === null) return;
      try {
        const data = await orderService.detail(selectedOrderId);
        setOrdersDetails(data);
      } catch (error) {
        console.error("Failed to fetch orders", error);
      } finally {
        setLoading(false);
      }
    };

    if (isOpen || selectedOrderId) {
      fetchOrdersDetails();
    }
  }, [selectedOrderId]);

  if (!isOpen || !selectedOrderId || !ordersDetails) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      {/* Card */}
      <div className="relative w-full max-w-lg rounded-3xl bg-white shadow-2xl shadow-black/20">
        {/* Gradient Top Bar */}
        {/* <div className="h-2 rounded-t-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" /> */}

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 rounded-full p-2 text-red-400 hover:bg-red-600 hover:text-white transition hover:rotate-360 duration-300"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-8 space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between flex-wrap gap-2">
            <h2 className="text-xl font-extrabold tracking-tight">
              Order #{ordersDetails?.order_number}
            </h2>
            <div className="flex flex-wrap gap-1">
              <div
                className={`flex items-center gap-2 rounded-full px-3 py-1 text-sm font-semibold ${
                  statusColors[ordersDetails.payment_status] ||
                  "bg-gray-100 text-gray-800"
                }`}
              >
                <HandCoins className="w-4 h-4" />
                {ordersDetails?.payment_status}
              </div>
              <div
                className={`flex items-center gap-2 rounded-full px-3 py-1 text-sm font-semibold ${
                  statusColors[ordersDetails.status] ||
                  "bg-gray-100 text-gray-800"
                }`}
              >
                <CheckCircle className="w-4 h-4" />
                {ordersDetails?.status}
              </div>
            </div>
          </div>

          {/* Items */}
          <div className="space-y-3">
            {ordersDetails?.details.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between rounded-xl bg-gray-50 px-4 py-3"
              >
                <div>
                  <p className="font-semibold">name</p>
                  <p className="text-sm text-gray-500">Qty × {item.quantity}</p>
                </div>
                <p className="font-bold text-gray-900">200</p>
              </div>
            ))}
          </div>

          {/* Total */}
          <div className="flex items-center justify-between rounded-2xl bg-gradient-to-r from-pink-500 to-rose-600 px-5 py-4 text-white">
            <span className="text-lg font-semibold">Total</span>
            <span className="text-2xl font-extrabold">৳p1200</span>
          </div>

          {/* Address */}
          <div className="rounded-2xl border border-gray-200 p-4">
            <p className="mb-1 text-sm font-semibold text-gray-500">
              Delivery Address
            </p>
            <p className="text-gray-800 leading-relaxed">daha</p>
          </div>
        </div>
      </div>
    </div>
  );
};
