export type Product = {
  uuid: string;
  thumbnail: string;
  title: string;
  price: number;
};

export type CartProduct = Product & {
  quantity: number;
};
