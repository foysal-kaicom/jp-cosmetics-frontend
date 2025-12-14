import { 
  Package, 
  Heart,
  ShoppingBag,
  Bell,
  Gift,
  ChevronRight
} from "lucide-react";
import StatCard from "./StatCard";
import OrderCard from "./OrderCard";
import QuickActionCard from "./QuickActionCard";

export default function DashboardComponent() {
  return (
    <div className="space-y-6">
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          icon={Package}
          label="Total Orders"
          value="24"
          change="+3 this month"
          color="pink"
        />
        <StatCard
          icon={Heart}
          label="Wishlist Items"
          value="5"
          change="2 back in stock"
          color="rose"
        />
        <StatCard
          icon={Gift}
          label="Reward Points"
          value="150"
          change="Earn 50 more"
          color="purple"
        />
        <StatCard
          icon={ShoppingBag}
          label="Total Spent"
          value="$1,240"
          change="This year"
          color="pink"
        />
      </div>

      {/* Recent Orders */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">Recent Orders</h2>
          <button className="text-pink-600 hover:text-pink-700 text-sm font-semibold flex items-center gap-1">
            View All
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="space-y-4">
          <OrderCard
            orderId="#ORD-2024-1234"
            date="Dec 8, 2024"
            status="Delivered"
            total="$89.99"
            items={2}
            statusColor="green"
          />
          <OrderCard
            orderId="#ORD-2024-1233"
            date="Dec 5, 2024"
            status="In Transit"
            total="$124.50"
            items={3}
            statusColor="blue"
          />
          <OrderCard
            orderId="#ORD-2024-1232"
            date="Nov 28, 2024"
            status="Delivered"
            total="$67.00"
            items={1}
            statusColor="green"
          />
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <QuickActionCard
          icon={Bell}
          title="Notifications"
          description="3 new updates available"
          action="View"
        />
        <QuickActionCard
          icon={Gift}
          title="Special Offers"
          description="Exclusive deals just for you"
          action="Browse"
        />
      </div>
    </div>
  );
}