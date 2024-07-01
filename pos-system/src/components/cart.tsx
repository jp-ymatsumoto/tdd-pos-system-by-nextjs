import { CartProduct } from "@/types";
import Image from "next/image";
import { FC } from "react";

type Props = {
  cartProducts: CartProduct[];
  subTotal: number;
  taxTotal: number;
  total: number;
};

const Cart: FC<Props> = ({ cartProducts, subTotal, taxTotal, total }) => {
  return (
    <div className="flex flex-col justify-between items-center w-80 gap-y-5 border-l">
      <div className="flex flex-col justify-between h-full">
        <div className="flex flex-col">
          <h2 className="p-3 text-4xl">カート</h2>
          <div className="flex flex-col gap-y-1 bg-slate-200 p-1 w-full h-[400px] overflow-y-scroll">
            {cartProducts.map((product: CartProduct) => (
              <div key={product.uuid} className="flex flex-row justify-between items-center px-1">
                <div className="flex flex-row items-center">
                  <div className="w-16 h-16">
                    <Image
                      src={product.thumbnail}
                      alt={`カート内の${product.title}の画像`}
                      width={300}
                      height={300}
                    />
                  </div>
                  <div className="flex flex-col items-start text-xs font-bold">
                    <div className="p-1">{product.title}</div>
                    <div className="p-1">{product.price}円</div>
                  </div>
                </div>
                <div className="flex flex-row justify-center items-center gap-x-1 text-xl">
                  <button type="button" className="w-8 h-8 bg-blue-700 text-white rounded">
                    -
                  </button>
                  <div className="p-1 flex justify-center items-center ">{product.quantity}</div>
                  <button type="button" className="w-8 h-8  bg-blue-700 text-white rounded">
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col px-5">
          <div className="flex flex-row justify-between items-center text-base">
            <div>小計</div>
            <div>{subTotal}円</div>
          </div>
          <div className="flex flex-row justify-between items-center  text-base">
            <div>消費税</div>
            <div>{taxTotal}円</div>
          </div>
          <div className="flex flex-row justify-between items-center text-2xl border-t-2 border-black border-dotted">
            <div>合計</div>
            <div>{total}円</div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-y-3">
        <button type="button" className="w-60 h-10 text-base bg-blue-700 text-white rounded">
          注文を確定する
        </button>
        <button type="button" className="w-60 h-10 text-base bg-blue-700 text-white rounded">
          注文をキャンセルする
        </button>
      </div>
    </div>
  );
};

export default Cart;
