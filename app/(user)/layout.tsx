"use client";
import {
  User,
  Package,
  Heart,
  MapPin,
  CreditCard,
  Settings,
  LogOut,
  Gift,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuthStore } from "@/store/authStore";
import { useEffect } from "react";

interface SidebarItem {
  id: string;
  label: string;
  icon: any;
  badge?: number;
  url: string;
}

const sidebarItems: SidebarItem[] = [
  { id: "overview", label: "Overview", icon: User, url: "/user/dashboard" },
  {
    id: "orders",
    label: "My Orders",
    icon: Package,
    badge: 2,
    url: "/user/orders",
  },
  {
    id: "wishlist",
    label: "Wishlist",
    icon: Heart,
    badge: 5,
    url: "/user/wishlist",
  },
  { id: "addresses", label: "Addresses", icon: MapPin, url: "/user/addresses" },
  {
    id: "rewards",
    label: "Rewards",
    icon: Gift,
    badge: 150,
    url: "/user/rewards",
  },
  { id: "settings", label: "Settings", icon: Settings, url: "/user/settings" },
];

export default function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const user = useAuthStore().user;
  const logout = useAuthStore((s) => s.logout);

  useEffect(() => {
    if (!user) return;
  }, [user]);
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50">
        {/* Page Header */}
        <div className="bg-gradient-to-r from-pink-500 to-rose-600 text-white">
          <div className="px-[5%] py-8 md:py-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">My Account</h1>
            <p className="text-pink-100">Welcome back, {user?.name}!</p>
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
                      {user?.name?.slice(0, 1)}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900">{user?.name}</h3>
                      <p className="text-sm text-gray-600">{user?.email}</p>
                    </div>
                  </div>
                </div>

                {/* Navigation */}
                <nav className="p-3">
                  {sidebarItems.map((item) => (
                    <Link
                      key={item.id}
                      href={item.url}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 mb-1 group ${
                        pathname === item.url
                          ? "bg-gradient-to-r from-pink-500 to-rose-600 text-white shadow-lg shadow-pink-200"
                          : "text-gray-700 hover:bg-pink-50"
                      }`}
                    >
                      <item.icon className="w-5 h-5" />
                      <span className="flex-1 text-left font-medium">
                        {item.label}
                      </span>
                      {item.badge && (
                        <span
                          className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                            pathname === item.url
                              ? "bg-white/20 text-white"
                              : "bg-pink-100 text-pink-600"
                          }`}
                        >
                          {item.badge}
                        </span>
                      )}
                      <ChevronRight
                        className={`w-4 h-4 transition-transform ${
                          pathname === item.url
                            ? "translate-x-1"
                            : "group-hover:translate-x-1"
                        }`}
                      />
                    </Link>
                  ))}

                  <button
                    onClick={() => logout()}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-600 hover:bg-red-50 transition-all duration-300 mt-4 cursor-pointer"
                  >
                    <LogOut className="w-5 h-5" />
                    <span className="flex-1 text-left font-medium">Logout</span>
                  </button>
                </nav>
              </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 min-w-0">{children}</main>
          </div>
        </div>
      </div>
    </>
  );
}
