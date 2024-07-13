export interface Movie {
  id: number;
  title: string;
  image: string;
  price: number;
}

export interface Movies {
  products: Movie[];
}
