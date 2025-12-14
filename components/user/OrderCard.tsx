import { Package } from "lucide-react";

interface OrderCardProps {
  orderId: string;
  date: string;
  status: string;
  total: string;
  items: number;
  statusColor: string;
}

function OrderCard({
  orderId,
  date,
  status,
  total,
  items,
  statusColor,
}: OrderCardProps) {
  return (
    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-xl hover:bg-pink-50/50 transition-colors">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-gradient-to-br from-pink-100 to-rose-100 rounded-lg flex items-center justify-center">
          <Package className="w-6 h-6 text-pink-600" />
        </div>
        <div>
          <p className="font-semibold text-gray-900">{orderId}</p>
          <p className="text-sm text-gray-600">
            {date} • {items} items
          </p>
        </div>
      </div>
      <div className="text-right">
        <p className="font-bold text-gray-900">{total}</p>
        <span
          className={`text-xs px-3 py-1 rounded-full bg-${statusColor}-100 text-${statusColor}-700 font-semibold`}
        >
          {status}
        </span>
      </div>
    </div>
  );
}

export default OrderCard;
