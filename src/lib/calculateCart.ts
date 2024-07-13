import { CartMovie } from "@/types/Cart";

export const calculateTotal = (cart: CartMovie[]): number => {
  return cart.reduce((total, item) => total + item.price * item.quantity, 0);
};

export const quantityTotal = (cart: CartMovie[]): number => {
  return cart.reduce((total, item) => total + item.quantity, 0);
};
