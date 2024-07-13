"use client";
import { CartMovie, TAction } from "@/types/Cart";
import { Movie } from "@/types/movies";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";

interface CartContextProps {
  cart: CartMovie[];
  dispatch: (action: TAction, movie: Movie, quantity?: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextProps>({ cart: [], dispatch: () => null, clearCart: () => null });

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartMovie[]>([]);

  const updateLocalStorage = async (state: CartMovie[]) => {
    localStorage.setItem("cart", JSON.stringify(state));
  };

  const updateCart = (movie: Movie, quantity?: number) => {
    if (typeof quantity !== "number") return;
    const existingItem = cart.find((item) => item.id === movie.id);
    if (existingItem) {
      const addMovie = cart.map((item) => (item.id === movie.id ? { ...item, quantity } : item));
      setCart(addMovie);
      updateLocalStorage(addMovie);
      return;
    }
    setCart([...cart, { ...movie, quantity: 1 }]);
    updateLocalStorage([...cart, { ...movie, quantity: 1 }]);
  };

  const removeFromCart = (movie: Movie) => {
    const filterCart = cart.filter((item) => item.id !== movie.id);
    setCart(filterCart);
    updateLocalStorage(filterCart);
  };

  const clearCart = () => {
    setCart([]);
    updateLocalStorage([]);
  };

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  const dispatch = (action: TAction, movie: Movie, quantity?: number) => {
    switch (action.type) {
      case "UPDATE_CART":
        updateCart(movie, quantity);
        break;
      case "REMOVE_FROM_CART":
        removeFromCart(movie);
        break;
      default:
        break;
    }
  };

  return <CartContext.Provider value={{ cart, dispatch, clearCart }}>{children}</CartContext.Provider>;
};

export const useCart = () => useContext(CartContext);
