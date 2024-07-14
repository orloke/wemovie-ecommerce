import { Header } from "@/components/Header";
import { CartProvider } from "@/hooks/Movies";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import { Loader } from "@/components/Loader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Orloke Movie Ecommerce",
  description: "Orloke Movie Ecommerce",
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("bg-background font-sans")}>
        <Suspense fallback={<Loader />}>
          <CartProvider>
            <Header />
            <div className="h-screen min-h-screen pt-[88px]">{children}</div>
          </CartProvider>
        </Suspense>
      </body>
    </html>
  );
}
