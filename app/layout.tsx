import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "Cosmetica - Premium Beauty & Cosmetics",
  description:
    "Discover elegance and self-care with Cosmetica's exclusive collection of premium beauty products and cosmetics.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-white text-gray-900">

        <Header />

        <main className="min-h-screen">
          {children}
        </main>

        <Footer />

        <ScrollToTop />
      </body>
    </html>
  );
}
