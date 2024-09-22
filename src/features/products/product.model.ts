export interface Product {
  id: string;
  name: string;
  image: string;
  brand: {
    id: string;
    name: string;
    image: string;
  };
  category: {
    id: string;
    name: string;
  };
  price: {
    currency: string;
    amount: number;
  };
}
