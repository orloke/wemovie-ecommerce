"use client";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/Movies";
import { formatPrice } from "@/lib/formatPrice";
import { placeholderImage } from "@/lib/placeholderImage";
import { cn } from "@/lib/utils";
import { Movie } from "@/types/movies";
import { Icon } from "@iconify/react";
import Image from "next/image";

interface CardProps {
  movie: Movie;
}

export const Card = ({ movie }: CardProps) => {
  const { cart, dispatch } = useCart();
  const isInCart = cart.find((item) => item.id === movie.id)?.quantity || 0;
  const formattedPrice = formatPrice(movie.price);

  return (
    <div className="flex w-full flex-col items-center justify-center gap-2 rounded-sm bg-white p-4 text-center font-bold">
      <div className="relative h-[188px] w-[147px]">
        <Image src={movie.image} priority alt="Empty" fill placeholder={placeholderImage("100%", "100%")} />
      </div>
      <h1 className="text-primary-800 text-center text-xs font-bold">{movie.title}</h1>
      <span>{formattedPrice}</span>
      <Button
        className={cn("bg-secondary-300 w-full items-center justify-center", isInCart && "bg-success")}
        onClick={() => dispatch({ type: "UPDATE_CART" }, movie, isInCart + 1)}
      >
        <Icon icon="material-symbols:add-shopping-cart-rounded" />
        {<span className="mx-2">{isInCart}</span>}
        <span>Adicionar ao carrinho</span>
      </Button>
    </div>
  );
};
