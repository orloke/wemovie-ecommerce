"use client";
import { useCart } from "@/hooks/Movies";
import { quantityTotal } from "@/lib/calculateCart";
import { Icon } from "@iconify/react";
import Link from "next/link";

export const ShoppingCart = () => {
  const { cart } = useCart();
  const quantity = quantityTotal(cart);
  return (
    <Link href="/cart" className="flex gap-2">
      <div className="flex flex-col justify-center text-end font-semibold text-primary-100">
        <span className="hidden text-sm md:block">Meu Carrinho</span>
        <span className="text-xs text-primary-500">{quantity || 0} items</span>
      </div>
      <Icon icon="material-symbols:shopping-basket" className="h-10 w-10 text-primary-100" />
    </Link>
  );
};
