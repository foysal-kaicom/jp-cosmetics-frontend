import { Suspense } from "react";
import ShopPageComponent from "@/components/shop/ShopPageComponent";

export default function ShopPage() {
  return (
    <Suspense fallback={<ShopLoading />}>
      <ShopPageComponent />
    </Suspense>
  );
}

function ShopLoading() {
  return (
    <div className="mt-20 text-center text-gray-500">
      Loading products…
    </div>
  );
}
