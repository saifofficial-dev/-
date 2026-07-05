export interface Product {
  id: string;
  name: string;
  urduName: string;
  size: string;
  price: number;
  description: string;
  urduDescription: string;
  benefits: string[];
  popular?: boolean;
}

export interface Feature {
  title: string;
  urduTitle: string;
  description: string;
  urduDescription: string;
  icon: string;
}

export interface Review {
  name: string;
  city: string;
  rating: number;
  comment: string;
  urduComment: string;
}
