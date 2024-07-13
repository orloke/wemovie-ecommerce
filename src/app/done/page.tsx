import Image from "next/image";
import SuccessPage from "../../../public/SuccessPage.svg";
import { ButtonToHome } from "@/components/ButtonToHome";

export default function Page() {
  return (
    <div className="mx-auto flex h-full w-full max-w-67.5 px-4 pb-4">
      <div className="bg-white w-full flex flex-col items-center justify-center gap-4 rounded-sm text-center">
        <h1 className="text-center text-xl font-bold text-primary-700">Compra realizada com sucesso!</h1>
        <div className="relative h-[264px] w-[179px]">
          <Image priority src={SuccessPage.src} alt="Empty" fill className="" />
        </div>
        <ButtonToHome />
      </div>
    </div>
  );
}
