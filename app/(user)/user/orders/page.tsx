import OrderCard from "@/components/user/OrderCard";
import { CheckCircle } from "lucide-react";

interface Order {
  id: string;
  orderNumber: string;
  placedDate: string;
  status: "delivered" | "pending" | "cancelled";
  items: OrderItem[];
  total: number;
}

interface OrderItem {
  name: string;
  count: number;
}

export default function OrdersSection() {

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">My Orders</h2>

      <div className="space-y-4">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="border border-gray-200 rounded-xl p-5 hover:shadow-md transition-shadow"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
              <div>
                <h3 className="font-bold text-gray-900">
                  Order #ORD-2024-123{i}
                </h3>
                <p className="text-sm text-gray-600">
                  Placed on Dec {10 - i}, 2024
                </p>
              </div>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-semibold w-fit">
                <CheckCircle className="w-4 h-4" />
                Delivered
              </span>
            </div>

            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-pink-100 rounded-lg"></div>
              <div className="flex-1">
                <p className="font-semibold text-gray-900">
                  Luxury Face Serum + 1 more item
                </p>
                <p className="text-sm text-gray-600">Total: $89.99</p>
              </div>
            </div>

            <div className="flex gap-3">
              <button className="flex-1 px-4 py-2.5 border-2 border-pink-500 text-pink-600 rounded-xl font-semibold hover:bg-pink-50 transition-colors cursor-pointer">
                View Details
              </button>
              <button className="flex-1 px-4 py-2.5 bg-gradient-to-r from-pink-500 to-rose-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all cursor-pointer">
                Reorder
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
