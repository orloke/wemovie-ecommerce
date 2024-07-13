"use client";

import { CardCart } from "@/components/CardCart";
import { FinishPurchase } from "@/components/CartPage/FinishPurchase";
import { useCart } from "@/hooks/Movies";
import { Empty } from "../Empty";

export const CartPage = () => {
  const { cart } = useCart();

  if (cart.length === 0) return <Empty />;

  return (
    <div className="flex w-full flex-col gap-6 rounded-sm bg-white p-6">
      <div className="flex flex-col gap-6 overflow-auto">
        {cart.map((item) => (
          <CardCart key={item.id} movie={item} />
        ))}
      </div>
      <FinishPurchase />
    </div>
  );
};
