"use client";
import { useCart } from "@/hooks/Movies";
import { CartMovie } from "@/types/Cart";
import { CircleMinus, CirclePlus } from "lucide-react";
import { ChangeEvent, useState } from "react";

interface QuantityProps {
  movie: CartMovie;
}

export const Quantity = ({ movie }: QuantityProps) => {
  const { dispatch } = useCart();
  const [value, setValue] = useState(movie?.quantity || 0);

  const reduceNumber = () => {
    if (value < 1) {
      dispatch({ type: "UPDATE_CART" }, movie, 0);
      return setValue(0);
    }
    setValue((prev) => prev - 1);
    dispatch({ type: "UPDATE_CART" }, movie, movie.quantity - 1);
  };

  const increaseNumber = () => {
    setValue((prev) => prev + 1);
    dispatch({ type: "UPDATE_CART" }, movie, movie.quantity + 1);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (/^\d*$/.test(newValue) && parseInt(newValue, 10) >= 0) {
      console.log("🚀 ~ handleChange ~ newValue:", newValue);
      const quantity = Number(newValue);
      setValue(quantity);
      dispatch({ type: "UPDATE_CART" }, movie, quantity);
    }
  };

  return (
    <div className="flex flex-col justify-center gap-6">
      <span className="mb-auto text-sm font-bold text-primary-500 md:flex hidden">QTD</span>
      <div className="flex h-full items-center gap-2">
        <CircleMinus className="text-secondary-300 h-[18px] w-[18px] cursor-pointer" onClick={reduceNumber} />

        <input
          className="h-[26px] w-[62px] rounded-sm border border-[#D9D9D9] text-center text-sm"
          value={value}
          onChange={handleChange}
          type="text"
        />

        <CirclePlus className="text-secondary-300 h-[18px] w-[18px] cursor-pointer" onClick={increaseNumber} />
      </div>
    </div>
  );
};
