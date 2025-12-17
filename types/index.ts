export interface NavItem {
  id: string;
  label: string;
  link: string;
}

export interface BusinessInfo {
  business_name: string | null;
  business_email: string | null;
  business_phone: string | null;
  website_url: string | null;
  bkash_number: string | null;
  trade_license: string | null;
  address: string | null;
  header_logo: string | null;
  footer_logo: string | null;
  favicon_icon: string | null;
  header_advertisement: string;
  footer_advertisement: string;
  facebook_url: string | null;
  twitter_url: string | null;
  linkedin_url: string | null;
  youtube_url: string | null;
  instagram_url: string | null;
}

export interface HeroSlider {
  id: number;
  label: string;
  title: string;
  short_description: string;
  url: string;
  image: string;
  status: number;
}

export interface Category {
  id: number;
  name: string;
  parent_id: number | null;
  slug: string;
  sequence: number;
  image: string;
  is_popular: number;
  description: string | null;
}

export interface Brand {
    id: number;
    name: string;
    slug: string;
    logo: string;
    description: string | null;
    status: number;
}

export interface FooterSlider {
    id: number;
    label: string;
    title: string;
    short_description: string | null;
    url: string | null;
    image: string;
    status: number;
}

export interface Product {
  id: number;
  name: string;
  slug: string;
  product_type: string;
  status: string;
  primary_image: string;
  category_id: number;
  brand_id: number;
  created_at: string;
  category: {
    id: number;
    name: string;
  };
  brand: {
    id: number;
    name: string;
  };
}