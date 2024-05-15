import React from "react";
import { Card } from "@/app/components";
import { CarouselItemType } from "@/app/types";

interface CarouselProps {
  cards: CarouselItemType[];
}

const Carousel: React.FC<CarouselProps> = ({ cards }: CarouselProps) => {
  return (
    <div className="flex flex-col bg-elephant rounded-md">
      <div className="flex justify-between items-center">
        <div className="flex flex-col text-white p-4">
          <p className="font-bold text-md">Car costs rising?</p>
          <p className="font-light text-sm">Find out how you could save...</p>
        </div>
        {cards && (
          <div className="flex w-full">
            {cards.map((card) => (
              <Card key={card.id} card={card} />
            ))}
          </div>
        )}
      </div>
      <div className="bg-blackPearl rounded-b-lg">
        <p className="text-white font-light text-xs float-right p-2">
          In partnership with
        </p>
      </div>
    </div>
  );
};

export default Carousel;
