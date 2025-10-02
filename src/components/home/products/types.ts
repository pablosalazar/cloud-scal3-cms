export interface ProductFeature {
  text: string;
}

export interface Product {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: ProductFeature[];
  href: string;
  imagePath: string;
  iconBg?: string;
}
