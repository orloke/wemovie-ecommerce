import { Movie } from "./movies";

export type TAction = { type: "UPDATE_CART" } | { type: "REMOVE_FROM_CART" };

export type CartMovie = Movie & { quantity: number };
