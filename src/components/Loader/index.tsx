import { cn } from "@/lib/utils";
import Image from "next/image";
import { ComponentProps } from "react";
import Loading from "../../../public/Loader.png";

interface LoaderProps extends ComponentProps<"div"> {}

export const Loader = ({ ...props }: LoaderProps) => {
  return (
    <div {...props} className={cn("flex h-screen w-screen items-center justify-center", props.className)}>
      <div className="relative h-[83px] w-[83px]">
        <Image src={Loading.src} alt="Loading" fill className="animate-spin" />
      </div>
    </div>
  );
};
