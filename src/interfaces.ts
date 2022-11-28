export interface Product {
  id: number;
  title: string;
  price: number;
  quantity: number;
}

export interface Category {
  title: string;
  products: Product[];
  description: string;
  thumbnailImageUrl: string;
  heroImageUrl: string;
}
