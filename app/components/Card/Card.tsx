import type { FC } from "react";
import type { TopProduct } from "~/modules/Landing/models/landing.type";

type CardProps = {
  product: TopProduct;
};
export const Card: FC<CardProps> = ({product}) => (
  <div className="h-72 min-w-max border border-red-400 p-3">
    <img
      src={product.image}
      alt="chemise lacoste"
      height={220}
      width={196}
    />
    <div className="text-xs italic">{product.title}</div>
    <div className=" text-sm">
      Prix: 19<span className="align-super text-xs">99</span>€
    </div>
  </div>
);

Card.displayName = "Card";
