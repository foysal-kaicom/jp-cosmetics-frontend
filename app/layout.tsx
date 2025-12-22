import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { getBusinessInfo } from "@/services/home.service";
import { ToastContainer } from "react-toastify";

export async function generateMetadata(): Promise<Metadata> {
  const DEFAULT_SITE_NAME = "Cosmetica";
  const DEFAULT_DESCRIPTION = "Premium Beauty & Cosmetics";
  const DEFAULT_SITE_URL =
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.jpcosmetica.biz";
  const DEFAULT_IMAGE = "/assets/img/jp-cosmetica-logo.png";
  const DEFAULT_FAVICON = "/favicon.ico";

  try {
    const data = await getBusinessInfo();

    const siteName = data?.business_name || DEFAULT_SITE_NAME;
    const siteDescription = data?.address
      ? `Premium Beauty & Cosmetics. Located at ${data.address}.`
      : DEFAULT_DESCRIPTION;

    let siteUrl = DEFAULT_SITE_URL;
    if (data?.website_url) {
      try {
        siteUrl = new URL(data.website_url).toString();
      } catch {
        siteUrl = DEFAULT_SITE_URL;
      }
    }

    const socialImage = data?.header_advertisement || DEFAULT_IMAGE;
    const favicon = data?.favicon_icon || DEFAULT_FAVICON;

    return {
      metadataBase: new URL(siteUrl),

      title: {
        default: siteName,
        template: `%s | ${siteName}`,
      },

      description: siteDescription,

      icons: {
        icon: favicon,
        shortcut: favicon,
        apple: favicon,
      },

      openGraph: {
        title: siteName,
        description: siteDescription,
        url: siteUrl,
        siteName,
        images: [
          {
            url: socialImage,
            width: 1200,
            height: 630,
            alt: `${siteName} Preview`,
          },
        ],
        locale: "en_US",
        type: "website",
      },

      twitter: {
        card: "summary_large_image",
        title: siteName,
        description: siteDescription,
        images: [socialImage],
      },
    };
  } catch (error) {
    // LAST-LINE DEFENSE — app NEVER crashes
    console.error("Metadata generation failed:", error);

    return {
      metadataBase: new URL(DEFAULT_SITE_URL),
      title: DEFAULT_SITE_NAME,
      description: DEFAULT_DESCRIPTION,
      icons: {
        icon: DEFAULT_FAVICON,
      },
    };
  }
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const businessInfo = await getBusinessInfo();

  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-white text-gray-900">
        <Header data={businessInfo} />

        <main className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-white">
          {children}
        </main>

        <Footer data={businessInfo} />

        <ToastContainer />
        <ScrollToTop />
      </body>
    </html>
  );
}
