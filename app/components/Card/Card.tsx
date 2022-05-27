import type { FC } from "react";
import type { TopProduct } from "~/modules/landing/models/landing.type";

type CardProps = {
  product: TopProduct;
};
export const Card: FC<CardProps> = () => (
  <div className="h-72 min-w-max border border-red-400 p-3">
    <img
      src="https://via.placeholder.com/196x220"
      alt="chemise lacoste"
      height={220}
      width={196}
    />
    <div className="text-xs italic">Chemise Lacoste</div>
    <div className=" text-sm">
      Prix: 19<span className="align-super text-xs">99</span>€
    </div>
  </div>
);

Card.displayName = "Card";
