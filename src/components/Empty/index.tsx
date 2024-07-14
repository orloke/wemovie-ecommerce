"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import EmptyImage from "../../../public/Empty.svg";
import { placeholderImage } from "@/lib/placeholderImage";

export const Empty = () => {
  const router = useRouter();
  return (
    <div className="flex h-full w-full flex-1 flex-col items-center justify-center gap-4 rounded-sm bg-white text-center">
      <h1 className="text-center text-xl font-bold text-primary-700">Parece que não há nada por aqui :(</h1>
      <div className="relative h-[264px] w-[179px]">
        <Image priority src={EmptyImage.src} alt="Empty" fill placeholder={placeholderImage("100%", "100%")} />
      </div>
      <div className="h-0.5 w-1/2 bg-[#3F3D56]" />
      <Button className="bg-secondary-300 h-10 w-1/2 sm:w-[173px] rounded-sm p-2" onClick={() => router.refresh()}>
        Recarregar Pagina
      </Button>
    </div>
  );
};
