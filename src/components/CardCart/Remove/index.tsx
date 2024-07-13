'use client';
import { useCart } from "@/hooks/Movies";
import { CartMovie } from "@/types/Cart";
import { Icon } from "@iconify/react";

interface RemoveProps {
  movie: CartMovie;
}

export const Remove = ({ movie }: RemoveProps) => {
  const { dispatch } = useCart();

  const handleRemove = () => {
    dispatch({ type: "REMOVE_FROM_CART" }, movie);
  };

  return (
    <div className="flex flex-col gap-6">
      <span className="text-sm font-bold uppercase text-primary-500 invisible md:flex hidden">Remover</span>
      <div className="flex h-full items-center justify-end">
        <Icon icon="mdi:trash" className="text-secondary-300 h-6 w-6 cursor-pointer" onClick={handleRemove} />
      </div>
    </div>
  );
};
