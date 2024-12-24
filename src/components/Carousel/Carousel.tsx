import React from "react";
import Image from "next/image";
import { Card } from "@/components";
import { CarouselProps } from "@/interfaces";
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";

const Carousel: React.FC<CarouselProps> = ({ cards }: CarouselProps) => {
  const reversedCards = cards?.slice().reverse();

  const renderCards = reversedCards?.map((card) => (
    <Card key={card.id} card={card} />
  ));

  const handleNext = () => alert("next()");

  const handlePrev = () => alert("prev()");

  return (
    <div className="carousel">
      <div className="carousel-header">
        <div className="carousel-header-text">
          <p className="carousel-title">Car costs rising?</p>
          <p className="carousel-subtitle">Find out how you could save...</p>
        </div>
        <div className="carousel-controls">
          <button onClick={handlePrev} className="carousel-btn opacity-low">
            <ArrowLeftIcon style={{ width: "25px", height: "25px" }} />
          </button>
          <button onClick={handleNext} className="carousel-btn">
            <ArrowRightIcon style={{ width: "25px", height: "25px" }} />
          </button>
        </div>
      </div>
      <div className="carousel-content">{renderCards}</div>
      <div className="carousel-footer">
        <div className="carousel-footer-text">
          <p className="carousel-footer-label">In partnership with</p>
          <Image src="/asset.png" width={160} height={40} alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
