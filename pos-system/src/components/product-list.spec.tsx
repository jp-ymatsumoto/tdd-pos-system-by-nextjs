import { expect, test } from "@playwright/experimental-ct-react";
import ProductList from "./product-list";
import { Product } from "@/types";

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
];

test.describe("ProductListコンポーネント", () => {
  test("見出しがあるか", async ({ mount }) => {
    const component = await mount(<ProductList products={testdata} />);
    await expect(component).toContainText("商品一覧");
  });

  test("商品名・商品単価・商品画像が表示されているか", async ({ mount }) => {
    const component = await mount(<ProductList products={testdata} />);
    await expect(component).toContainText("ハンバーガー");
    await expect(component).toContainText("350円");
    await expect(component.getByAltText("ハンバーガーの画像")).toBeVisible();
  });

  test("商品が５つあるか", async ({ mount }) => {
    const component = await mount(<ProductList products={testdata} />);
    await expect(component.getByAltText(/の画像/)).toHaveCount(5);
  });
});
