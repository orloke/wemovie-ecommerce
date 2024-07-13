import { ShoppingCart } from "@/components/ShoppingCart";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="max-w-67.5 z-10 fixed inset-0 mx-auto flex h-[88px] bg-background px-4 py-6">
      <ul className="flex w-full items-center justify-between">
        <li>
          <Link href="/" className="text-primary-100 text-xl font-bold">
            WeMovies
          </Link>
        </li>
        <li>
          <ShoppingCart />
        </li>
      </ul>
    </header>
  );
};
