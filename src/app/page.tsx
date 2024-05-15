"use client";

import { Carousel } from "@/app/components";
import { useGetCarouselData } from "@/app/hooks";

export default function Home() {
  const { data } = useGetCarouselData();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Carousel cards={data} />
    </main>
  );
}
