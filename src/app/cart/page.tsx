import { CartPage } from "@/components/CartPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Orloke Movie - Cart",
  description: "Your cart",
};

export default function Page() {
  return (
    <main className="mx-auto flex max-w-67.5 h-full flex-col items-center justify-between px-4 pb-4">
      <CartPage />
    </main>
  );
}
