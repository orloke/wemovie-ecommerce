'use client';

import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

export const ButtonToHome = () => {
  const router = useRouter();

  return (
    <Button
      className="h-10 w-1/2 rounded-sm bg-secondary-300 p-2 uppercase sm:w-[173px]"
      onClick={() => router.push("/")}
    >
      voltar
    </Button>
  );
};
