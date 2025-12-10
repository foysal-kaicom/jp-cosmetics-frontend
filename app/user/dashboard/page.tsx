"use client";

import { useState } from "react";
import { 
  User, 
  Package, 
  Heart, 
  MapPin, 
  CreditCard, 
  Settings, 
  LogOut,
  ShoppingBag,
  Bell,
  Gift,
  ChevronRight,
  Edit2,
  Truck,
  Clock,
  CheckCircle,
  Star
} from "lucide-react";

interface SidebarItem {
  id: string;
  label: string;
  icon: any;
  badge?: number;
}

const sidebarItems: SidebarItem[] = [
  { id: "overview", label: "Overview", icon: User },
  { id: "orders", label: "My Orders", icon: Package, badge: 2 },
  { id: "wishlist", label: "Wishlist", icon: Heart, badge: 5 },
  { id: "addresses", label: "Addresses", icon: MapPin },
  { id: "payment", label: "Payment Methods", icon: CreditCard },
  { id: "rewards", label: "Rewards", icon: Gift, badge: 150 },
  { id: "settings", label: "Settings", icon: Settings },
];

export default function UserDashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case "overview":
        return <OverviewSection />;
      case "orders":
        return <OrdersSection />;
      case "wishlist":
        return <WishlistSection />;
      case "addresses":
        return <AddressesSection />;
      case "payment":
        return <PaymentSection />;
      case "rewards":
        return <RewardsSection />;
      case "settings":
        return <SettingsSection />;
      default:
        return <OverviewSection />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-pink-500 to-rose-600 text-white">
        <div className="px-[5%] py-8 md:py-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">My Account</h1>
          <p className="text-pink-100">Welcome back, Sarah!</p>
        </div>
      </div>

      <div className="px-[5%] py-8 md:py-12">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          
          {/* Sidebar */}
          <aside className="lg:w-72 flex-shrink-0">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden sticky top-24">
              
              {/* User Profile Card */}
              <div className="p-6 bg-gradient-to-br from-pink-50 to-rose-50 border-b border-gray-100">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-pink-500 to-rose-600 flex items-center justify-center text-white text-2xl font-bold">
                    S
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900">Sarah Johnson</h3>
                    <p className="text-sm text-gray-600">sarah@example.com</p>
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <nav className="p-3">
                {sidebarItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 mb-1 group ${
                      activeTab === item.id
                        ? "bg-gradient-to-r from-pink-500 to-rose-600 text-white shadow-lg shadow-pink-200"
                        : "text-gray-700 hover:bg-pink-50"
                    }`}
                  >
                    <item.icon className="w-5 h-5" />
                    <span className="flex-1 text-left font-medium">{item.label}</span>
                    {item.badge && (
                      <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                        activeTab === item.id
                          ? "bg-white/20 text-white"
                          : "bg-pink-100 text-pink-600"
                      }`}>
                        {item.badge}
                      </span>
                    )}
                    <ChevronRight className={`w-4 h-4 transition-transform ${
                      activeTab === item.id ? "translate-x-1" : "group-hover:translate-x-1"
                    }`} />
                  </button>
                ))}

                <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-600 hover:bg-red-50 transition-all duration-300 mt-4">
                  <LogOut className="w-5 h-5" />
                  <span className="flex-1 text-left font-medium">Logout</span>
                </button>
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 min-w-0">
            {renderContent()}
          </main>
        </div>
      </div>
    </div>
  );
}

// Overview Section
function OverviewSection() {
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

// Orders Section
function OrdersSection() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">My Orders</h2>
      
      <div className="space-y-4">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="border border-gray-200 rounded-xl p-5 hover:shadow-md transition-shadow">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
              <div>
                <h3 className="font-bold text-gray-900">Order #ORD-2024-123{i}</h3>
                <p className="text-sm text-gray-600">Placed on Dec {10 - i}, 2024</p>
              </div>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-semibold w-fit">
                <CheckCircle className="w-4 h-4" />
                Delivered
              </span>
            </div>
            
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-pink-100 rounded-lg"></div>
              <div className="flex-1">
                <p className="font-semibold text-gray-900">Luxury Face Serum + 1 more item</p>
                <p className="text-sm text-gray-600">Total: $89.99</p>
              </div>
            </div>

            <div className="flex gap-3">
              <button className="flex-1 px-4 py-2.5 border-2 border-pink-500 text-pink-600 rounded-xl font-semibold hover:bg-pink-50 transition-colors">
                View Details
              </button>
              <button className="flex-1 px-4 py-2.5 bg-gradient-to-r from-pink-500 to-rose-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all">
                Reorder
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Wishlist Section
function WishlistSection() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">My Wishlist</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow group">
            <div className="aspect-square bg-gradient-to-br from-pink-100 to-rose-100 relative">
              <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:bg-red-50 transition-colors">
                <Heart className="w-5 h-5 fill-pink-500 text-pink-500" />
              </button>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-gray-900 mb-1">Product Name {i}</h3>
              <div className="flex items-center gap-1 mb-2">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="text-xs text-gray-600 ml-1">(4.5)</span>
              </div>
              <p className="text-pink-600 font-bold mb-3">${(29.99 + i * 10).toFixed(2)}</p>
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

// Addresses Section
function AddressesSection() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Saved Addresses</h2>
        <button className="px-4 py-2.5 bg-gradient-to-r from-pink-500 to-rose-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all">
          Add New
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <AddressCard
          title="Home"
          name="Sarah Johnson"
          address="324 King St. Owosso, MI 48867"
          phone="+1 888-456-668"
          isDefault
        />
        <AddressCard
          title="Office"
          name="Sarah Johnson"
          address="281 Virginia Ave. Westwood, NJ 07675"
          phone="+1 888-456-668"
        />
      </div>
    </div>
  );
}

// Payment Section
function PaymentSection() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Payment Methods</h2>
        <button className="px-4 py-2.5 bg-gradient-to-r from-pink-500 to-rose-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all">
          Add Card
        </button>
      </div>
      
      <div className="space-y-4">
        <PaymentCard
          type="Visa"
          last4="4242"
          expiry="12/25"
          isDefault
        />
        <PaymentCard
          type="Mastercard"
          last4="8888"
          expiry="08/26"
        />
      </div>
    </div>
  );
}

// Rewards Section
function RewardsSection() {
  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-br from-pink-500 to-rose-600 text-white rounded-2xl p-8 shadow-xl">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-3xl font-bold mb-2">150 Points</h2>
            <p className="text-pink-100">You're 50 points away from your next reward!</p>
          </div>
          <Gift className="w-16 h-16 opacity-20" />
        </div>
        
        <div className="bg-white/20 rounded-full h-3 mb-4">
          <div className="bg-white rounded-full h-3 w-3/4"></div>
        </div>
        
        <p className="text-sm text-pink-100">Earn 1 point for every $1 spent</p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Available Rewards</h3>
        <div className="space-y-3">
          <RewardItem title="$10 Off Your Next Order" points="100 pts" />
          <RewardItem title="Free Shipping" points="50 pts" />
          <RewardItem title="Exclusive Product Sample" points="75 pts" />
        </div>
      </div>
    </div>
  );
}

// Settings Section
function SettingsSection() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Account Settings</h2>
      
      <div className="space-y-6">
        <SettingItem
          title="Personal Information"
          description="Update your name, email, and phone number"
        />
        <SettingItem
          title="Password & Security"
          description="Change your password and security settings"
        />
        <SettingItem
          title="Notifications"
          description="Manage email and push notifications"
        />
        <SettingItem
          title="Privacy"
          description="Control your privacy and data preferences"
        />
        <SettingItem
          title="Delete Account"
          description="Permanently delete your account and data"
          danger
        />
      </div>
    </div>
  );
}

// Helper Components
function StatCard({ icon: Icon, label, value, change, color }: any) {
  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-${color}-100 to-${color}-200 flex items-center justify-center mb-4`}>
        <Icon className={`w-6 h-6 text-${color}-600`} />
      </div>
      <p className="text-3xl font-bold text-gray-900 mb-1">{value}</p>
      <p className="text-sm font-semibold text-gray-900">{label}</p>
      <p className="text-xs text-gray-500 mt-1">{change}</p>
    </div>
  );
}

function OrderCard({ orderId, date, status, total, items, statusColor }: any) {
  return (
    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-xl hover:bg-pink-50/50 transition-colors">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-gradient-to-br from-pink-100 to-rose-100 rounded-lg flex items-center justify-center">
          <Package className="w-6 h-6 text-pink-600" />
        </div>
        <div>
          <p className="font-semibold text-gray-900">{orderId}</p>
          <p className="text-sm text-gray-600">{date} • {items} items</p>
        </div>
      </div>
      <div className="text-right">
        <p className="font-bold text-gray-900">{total}</p>
        <span className={`text-xs px-3 py-1 rounded-full bg-${statusColor}-100 text-${statusColor}-700 font-semibold`}>
          {status}
        </span>
      </div>
    </div>
  );
}

function QuickActionCard({ icon: Icon, title, description, action }: any) {
  return (
    <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-6 border border-pink-100 hover:shadow-lg transition-all cursor-pointer group">
      <Icon className="w-8 h-8 text-pink-600 mb-3" />
      <h3 className="font-bold text-gray-900 mb-1">{title}</h3>
      <p className="text-sm text-gray-600 mb-4">{description}</p>
      <button className="text-pink-600 font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
        {action}
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
}

function AddressCard({ title, name, address, phone, isDefault }: any) {
  return (
    <div className="border-2 border-gray-200 rounded-xl p-5 hover:border-pink-300 transition-colors relative">
      {isDefault && (
        <span className="absolute top-3 right-3 px-3 py-1 bg-gradient-to-r from-pink-500 to-rose-600 text-white text-xs font-semibold rounded-full">
          Default
        </span>
      )}
      <div className="flex items-start gap-3 mb-4">
        <MapPin className="w-5 h-5 text-pink-600 flex-shrink-0 mt-1" />
        <div>
          <h3 className="font-bold text-gray-900 mb-1">{title}</h3>
          <p className="text-sm text-gray-900 font-semibold">{name}</p>
          <p className="text-sm text-gray-600 mt-1">{address}</p>
          <p className="text-sm text-gray-600">{phone}</p>
        </div>
      </div>
      <div className="flex gap-2">
        <button className="flex-1 px-3 py-2 text-sm border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
          Edit
        </button>
        <button className="flex-1 px-3 py-2 text-sm border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
          Remove
        </button>
      </div>
    </div>
  );
}

function PaymentCard({ type, last4, expiry, isDefault }: any) {
  return (
    <div className="border-2 border-gray-200 rounded-xl p-5 hover:border-pink-300 transition-colors relative">
      {isDefault && (
        <span className="absolute top-3 right-3 px-3 py-1 bg-gradient-to-r from-pink-500 to-rose-600 text-white text-xs font-semibold rounded-full">
          Default
        </span>
      )}
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 bg-gradient-to-br from-pink-100 to-rose-100 rounded-lg flex items-center justify-center">
          <CreditCard className="w-6 h-6 text-pink-600" />
        </div>
        <div>
          <p className="font-bold text-gray-900">{type} •••• {last4}</p>
          <p className="text-sm text-gray-600">Expires {expiry}</p>
        </div>
      </div>
      <div className="flex gap-2">
        <button className="flex-1 px-3 py-2 text-sm border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
          Edit
        </button>
        <button className="flex-1 px-3 py-2 text-sm border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
          Remove
        </button>
      </div>
    </div>
  );
}

function RewardItem({ title, points }: any) {
  return (
    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-xl hover:bg-pink-50/50 transition-colors">
      <div className="flex items-center gap-3">
        <Gift className="w-5 h-5 text-pink-600" />
        <p className="font-semibold text-gray-900">{title}</p>
      </div>
      <button className="px-4 py-2 bg-gradient-to-r from-pink-500 to-rose-600 text-white text-sm font-semibold rounded-lg hover:shadow-lg transition-all">
        {points}
      </button>
    </div>
  );
}

function SettingItem({ title, description, danger }: any) {
  return (
    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
      <div>
        <h3 className={`font-semibold mb-1 ${danger ? 'text-red-600' : 'text-gray-900'}`}>
          {title}
        </h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
      <button className={`px-4 py-2 text-sm font-semibold rounded-lg transition-colors ${
        danger 
          ? 'text-red-600 hover:bg-red-50' 
          : 'text-pink-600 hover:bg-pink-50'
      }`}>
        <Edit2 className="w-5 h-5" />
      </button>
    </div>
  );
}