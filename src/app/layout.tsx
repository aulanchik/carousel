import type { Metadata } from "next";
import { poppins } from "@/app/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Carousel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
