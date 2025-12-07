import HomeCategory from "@/components/home/HomeCategory";
import HomeHero from "@/components/home/HomeHero";
import HomeProduct from "@/components/home/HomeProduct";
import HomeUsp from "@/components/home/HomeUsp";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="space-y-20 pb-10">
        <HomeHero />
        <HomeProduct />
        <HomeUsp />
        <HomeCategory />
      </div>
    </>
  );
}
