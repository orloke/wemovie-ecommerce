"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import SuccessPageImage from "../../../public/SuccessPage.svg";
import Link from "next/link";

export const SuccessPage = () => {
  const router = useRouter();
  return (
    <div className="mt-[88px] flex h-full w-full flex-1 flex-col items-center justify-center gap-4 rounded-sm bg-white text-center">
      <h1 className="text-center text-xl font-bold text-primary-700">Compra realizada com sucesso!</h1>
      <div className="relative h-[264px] w-[179px]">
        <Image priority src={SuccessPageImage.src} alt="Empty" fill className="" />
      </div>

      <Link href='/' className="bg-secondary-300 h-10 w-1/2 sm:w-[173px] rounded-sm p-2">
        Voltar
      </Link>
    </div>
  );
};
