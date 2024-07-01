import { Product } from "@/types";
import Image from "next/image";
import { FC } from "react";

type Props = {
  products: Product[];
};

const ProductList: FC<Props> = ({ products }) => {
  return (
    <div className="flex flex-col gap-y-3">
      <h2 className="p-3 text-4xl">商品一覧</h2>
      <div className=" grid grid-cols-3 justify-items-center items-center gap-5 h-[600px] overflow-y-scroll">
        {products.map(({ uuid, thumbnail, title, price }) => (
          <div key={uuid} className="flex flex-col w-40 border border-black">
            <Image src={thumbnail} alt={`${title}の画像`} width={300} height={300} />
            <div className="p-1 text-base">{title}</div>
            <div className="p-1 text-base">{price}円</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
