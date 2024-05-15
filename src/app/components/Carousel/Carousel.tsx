import React from "react";
import Image from "next/image";
import { Card } from "@/app/components";
import { CarouselDataType } from "@/app/types";
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";

interface CarouselProps {
  cards: CarouselDataType;
}

const Carousel: React.FC<CarouselProps> = ({ cards }: CarouselProps) => {
  const reversedCards = cards?.slice().reverse();

  const renderCards = reversedCards?.map((card) => (
    <Card key={card.id} card={card} />
  ));

  const handleNext = () => {
    alert("alert next()");
  };

  const handlePrevious = () => {
    alert("alert previous()");
  };

  return (
    <div className="flex flex-col bg-elephant rounded-lg">
      <div className="flex items-center justify-between px-2">
        <div className="text-white py-4">
          <p className="font-bold text-md">Car costs rising?</p>
          <p className="font-light text-sm">Find out how you could save...</p>
        </div>
        <div className="flex gap-4">
          <button
            onClick={handlePrevious}
            className="text-white opacity-40 hover:opacity-100"
          >
            <ArrowLeftIcon style={{ width: "25px", height: "25px" }} />
          </button>
          <button onClick={handleNext} className="text-white opacity-100">
            <ArrowRightIcon style={{ width: "25px", height: "25px" }} />
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center">{renderCards}</div>
      <div className="bg-blackPearl rounded-b-lg">
        <p className="flex items-center space-x-2 float-right p-2">
          <p className="text-white font-light text-xs">In partnership with</p>
          <Image src="/asset.png" width={160} height={40} alt="logo" />
        </p>
      </div>
    </div>
  );
};

export default Carousel;
