import { CartProduct } from "@/types";
import { expect, test } from "@playwright/experimental-ct-react";
import Cart from "./cart";

const testdata: CartProduct[] = [
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

test.describe("Cartコンポーネント", () => {
  test("見出しがあるか", async ({ mount }) => {
    const component = await mount(
      <Cart cartProducts={testdata} subTotal={1409} taxTotal={141} total={1550} />
    );
    await expect(component).toContainText("カート");
  });

  test("商品名・商品単価・商品画像・数量・＋ボタン・ーボタンが表示されているか", async ({
    mount,
  }) => {
    const component = await mount(
      <Cart cartProducts={testdata} subTotal={1409} taxTotal={141} total={1550} />
    );
    await expect(component).toContainText("チーズバーガー");
    await expect(component).toContainText("350円");
    await expect(component.getByAltText("カート内のチーズバーガーの画像")).toBeVisible();
    await expect(component.getByText("2", { exact: true })).toBeVisible();
  });

  test("カート内の商品が３つあるか", async ({ mount }) => {
    const component = await mount(
      <Cart cartProducts={testdata} subTotal={1409} taxTotal={141} total={1550} />
    );
    await expect(component.getByAltText(/カート内の/)).toHaveCount(3);
  });

  test("小計・消費税・合計が表示されているか", async ({ mount }) => {
    const component = await mount(
      <Cart cartProducts={testdata} subTotal={1409} taxTotal={141} total={1550} />
    );
    await expect(component.filter({ hasText: /小計/ })).toBeVisible();
    await expect(component.filter({ hasText: /消費税/ })).toBeVisible();
    await expect(component.filter({ hasText: /合計/ })).toBeVisible();
    await expect(component.filter({ hasText: /1409円/ })).toBeVisible();
    await expect(component.filter({ hasText: /141円/ })).toBeVisible();
    await expect(component.filter({ hasText: /1550円/ })).toBeVisible();
  });

  test("注文を確定するボタンが存在するか", async ({ mount }) => {
    const component = await mount(
      <Cart cartProducts={testdata} subTotal={1409} taxTotal={141} total={1550} />
    );
    await expect(component.filter({ hasText: /注文を確定する/ })).toBeVisible();
  });

  test("注文をキャンセルするボタンが存在するか", async ({ mount }) => {
    const component = await mount(
      <Cart cartProducts={testdata} subTotal={1409} taxTotal={141} total={1550} />
    );
    await expect(component.filter({ hasText: /注文をキャンセルする/ })).toBeVisible();
  });
});
