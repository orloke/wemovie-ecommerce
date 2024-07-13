import { cn } from "@/lib/utils";
import Image from "next/image";
import { ComponentProps } from "react";
import Loading from "../../../public/Loader.png";

interface LoaderProps extends ComponentProps<"div"> {}

export const Loader = ({ ...props }: LoaderProps) => {
  return (
    <div {...props} className={cn("relative w-[83px] h-[83px]", props.className)}>
      <Image src={Loading.src} alt="Loading" fill className="animate-spin" />
    </div>
  );
};
