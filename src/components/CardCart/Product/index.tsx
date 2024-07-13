import { formatPrice } from "@/lib/formatPrice";
import { CartMovie } from "@/types/Cart";
import Image from "next/image";

interface ProductProps {
  movie: CartMovie;
}

export const Product = ({ movie }: ProductProps) => {
  const formattedPrice = formatPrice(movie.price);
  return (
    <div className="flex flex-col gap-6 w-1/5">
      <span className="text-sm font-bold text-primary-500 uppercase">Produto</span>
      <div className="flex gap-4 items-center text-primary-700 font-bold">
        <div className="relative min-w-[90px] h-[114px] ">
          <Image src={movie.image} alt={movie.title} fill priority />
        </div>
        <div className="flex flex-col gap-2 max-w-full">
          <span className="text-sm font-bold truncate">{movie.title}</span>
          <span className="text-base truncate">{formattedPrice}</span>
        </div>
      </div>
    </div>
  );
};
