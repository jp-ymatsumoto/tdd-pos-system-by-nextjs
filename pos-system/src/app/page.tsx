import Cart from "@/components/cart";
import Header from "@/components/header";
import ProductList from "@/components/product-list";
import { CartProduct, Product } from "@/types";

const testdata: Product[] = [
  { uuid: "0001", thumbnail: "/images/hamburger.jpg", title: "ハンバーガー", price: 250 },
  { uuid: "0002", thumbnail: "/images/cheese-burger.jpg", title: "チーズバーガー", price: 350 },
  {
    uuid: "0003",
    thumbnail: "/images/fish-burger.jpg",
    title: "フィッシュバーガー",
    price: 500,
  },
  { uuid: "0004", thumbnail: "/images/drink-cola.jpg", title: "コーラ", price: 200 },
  { uuid: "0005", thumbnail: "/images/drink-tea.jpg", title: "ほうじ茶", price: 200 },
  { uuid: "0006", thumbnail: "/images/drink-cola.jpg", title: "コーラ", price: 200 },
  { uuid: "0008", thumbnail: "/images/drink-tea.jpg", title: "ほうじ茶", price: 200 },
  { uuid: "0009", thumbnail: "/images/drink-cola.jpg", title: "コーラ", price: 200 },
  { uuid: "0010", thumbnail: "/images/drink-tea.jpg", title: "ほうじ茶", price: 200 },
  { uuid: "0011", thumbnail: "/images/drink-cola.jpg", title: "コーラ", price: 200 },
  { uuid: "0012", thumbnail: "/images/drink-tea.jpg", title: "ほうじ茶", price: 200 },
];

const testcartdata: CartProduct[] = [
  {
    uuid: "0001",
    thumbnail: "/images/hamburger.jpg",
    title: "ハンバーガー",
    price: 250,
    quantity: 1,
  },
  {
    uuid: "0002",
    thumbnail: "/images/cheese-burger.jpg",
    title: "チーズバーガー",
    price: 350,
    quantity: 2,
  },
  { uuid: "0004", thumbnail: "/images/drink-cola.jpg", title: "コーラ", price: 200, quantity: 3 },
];

export default async function Home() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-row w-full">
        <ProductList products={testdata} />
        <Cart cartProducts={testcartdata} subTotal={1409} total={1550} taxTotal={141} />
      </div>
    </div>
  );
}
