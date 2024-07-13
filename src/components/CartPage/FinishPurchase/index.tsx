'use client';

import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/Movies";
import { formatPrice } from "@/lib/formatPrice";
import { useRouter } from "next/navigation";

export const FinishPurchase = () => {
  const { cart, clearCart } = useCart();
  const router = useRouter();

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const formattedTotal = formatPrice(total);

  const finishPurchase = () => {
    clearCart();
    router.push("/done")
  };

  return (
    <div className="flex justify-between border-t border-[#999999] pt-6 md:flex-row flex-col-reverse gap-4">
      <Button onClick={finishPurchase} className="w-full bg-secondary-300 md:w-auto">Finalizar Pedido</Button>
      <div className="flex items-center gap-4 md:justify-normal justify-between">
        <span className="text-sm font-bold text-primary-500">Total</span>
        <span className="text-2xl font-bold text-[#2F2E41]">{formattedTotal}</span>
      </div>
    </div>
  );
};
