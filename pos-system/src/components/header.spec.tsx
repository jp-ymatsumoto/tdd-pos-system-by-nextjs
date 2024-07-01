import { expect, test } from "@playwright/experimental-ct-react";
import Header from "./header";

test.describe("Headerコンポーネント", () => {
  test("システムの名前があるか", async ({ mount }) => {
    const component = await mount(<Header />);
    await expect(component).toContainText("POSシステム");
  });
});
