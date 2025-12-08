import HomeBrands from "@/components/home/HomeBrands";
import HomeCategory from "@/components/home/HomeCategory";
import HomeHero from "@/components/home/HomeHero";
import HomeProduct from "@/components/home/HomeProduct";
import HomePromo from "@/components/home/HomePromo";
import HomeReview from "@/components/home/HomeReview";
import HomeTrending from "@/components/home/HomeTrending";
import HomeUsp from "@/components/home/HomeUsp";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="space-y-20 pb-10">
        <HomeHero />
        <HomeUsp />
        <HomeCategory />
        <HomeProduct />
        <HomeBrands />
        <HomeTrending />
        <HomeReview />
        <HomePromo  />
      </div>
    </>
  );
}
