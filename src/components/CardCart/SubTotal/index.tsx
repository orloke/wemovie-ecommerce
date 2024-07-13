import { formatPrice } from "@/lib/formatPrice";
import { CartMovie } from "@/types/Cart";

interface SubTotalProps {
  movie: CartMovie;
}

export const SubTotal = ({ movie }: SubTotalProps) => {
  const formattedPrice = formatPrice(movie.price * movie.quantity);
  return (
    <div className="flex flex-col justify-center md:gap-6">
      <span className="mb-auto md:text-sm text-xs font-bold uppercase text-primary-500">Sub Total</span>
      <span className="flex h-full items-center font-bold text-primary-700">{formattedPrice}</span>
    </div>
  );
};
