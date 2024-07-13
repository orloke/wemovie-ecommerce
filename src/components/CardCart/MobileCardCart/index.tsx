import { useCart } from "@/hooks/Movies";
import { formatPrice } from "@/lib/formatPrice";
import { CartMovie } from "@/types/Cart";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { Quantity } from "../Quantity";
import { SubTotal } from "../SubTotal";
import { Remove } from "../Remove";

interface MobileCardCartProps {
  movie: CartMovie;
}

export const MobileCardCart = ({ movie }: MobileCardCartProps) => {

  const formattedPrice = formatPrice(movie.price);

  return (
    <div className="flex md:hidden w-full gap-4">
      <div className="relative h-[82px] min-w-[64px]">
        <Image src={movie.image} alt={movie.title} fill priority />
      </div>
      <div className="flex w-full justify-between">
        <div className="flex flex-col gap-4 w-full max-w-full justify-between text-sm font-bold">
          <span className="truncate">{movie.title}</span>
          <Quantity movie={movie} />
        </div>
        <div className="flex flex-col w-full justify-between gap-4 items-end">
          <div className="flex gap-2">
            <span className="truncate text-base font-bold">{formattedPrice}</span>
            <Remove movie={movie} />
          </div>
          <SubTotal movie={movie} />
        </div>
      </div>
    </div>
  );
};
