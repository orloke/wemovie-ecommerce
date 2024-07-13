import { CartMovie } from "@/types/Cart";
import { Product } from "./Product";
import { Quantity } from "./Quantity";
import { Remove } from "./Remove";
import { SubTotal } from "./SubTotal";
import { MobileCardCart } from "./MobileCardCart";

interface CardCartProps {
  movie: CartMovie;
}

export const CardCart = ({ movie }: CardCartProps) => {
  return (
    <div className="flex w-full">
      <div className="w-full justify-between rounded-sm bg-white md:flex hidden">
        <Product movie={movie} />
        <Quantity movie={movie} />
        <SubTotal movie={movie} />
        <Remove movie={movie} />
      </div>
      <MobileCardCart movie={movie} />
    </div>
  );
};
