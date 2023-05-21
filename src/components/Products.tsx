import Image from "next/image";
import React from "react";
import { RouterOutputs } from "~/utils/api";

type Props = {
  products: RouterOutputs["product"]["getAllProducts"] | undefined;
};

const Products = ({ products }: Props) => {
  return (
    <>
      {products &&
        products.map((product) => (
          <div
            key={product.id}
            className="flex flex-col gap-3 text-black"
          >
            <img alt="Product image" width={400} height={100} src={product.image} />
            <h3 className="font-extrabold text-[20px]">{product.title}</h3>
            <p className="text-[16px]">{product.subtitle}</p>
            <p className="text-[28px] font-bold text-sky-500 self-end">{product.price} TL</p>
          </div>
        ))}
    </>
  );
};

export default Products;
