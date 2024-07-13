import { Card } from "@/components/Card";
import { Empty } from "@/components/Empty";
import { Loader } from "@/components/Loader";
import { moviesApi } from "@/fetchs/movies";
import { Movies } from "@/types/movies";
import { Suspense } from "react";

export default async function Page() {
  const { products } = (await moviesApi({ url: "/movies", next: { revalidate: 60 * 60 * 24 } })) as Movies;

  return (
    <main className="mx-auto flex max-w-67.5 flex-col items-center justify-between px-4 pb-10">
      <Suspense fallback={<Loader />}>
        {products.length === 0 && <Empty />}
        <div className="grid w-full gap-4 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4">
          {products.map((product) => (
            <Card key={product.id} movie={product} />
          ))}
        </div>
      </Suspense>
    </main>
  );
}
