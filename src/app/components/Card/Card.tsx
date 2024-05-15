import React from "react";
import Image from "next/image";
import { checkUrl } from "@/app/utils";
import { CarouselItemType } from "@/app/types";
import { ChevronRightIcon } from "@radix-ui/react-icons";

interface CardProps {
  card: CarouselItemType;
}

const Card: React.FC<CardProps> = ({ card }) => {
  const { linkText, linkUrl, image, title } = card;
  const {
    url,
    title: imgTitle,
    details: {
      image: { width, height },
    },
  } = image;

  return (
    <div key={card.id} className="bg-elephant max-w-sm overflow-hidden">
      <Image
        className="rounded-[26px] p-2"
        style={{ aspectRatio: "3 / 2" }}
        src={checkUrl(url)}
        height={height}
        width={width}
        alt={imgTitle}
      />
      <div className="px-2 pb-6">
        <p className="text-white font-bold text-md">{title}</p>
        <a
          className="inline-flex rounded-full text-elephant bg-white font-bold px-3 py-1 place-items-center mt-2 text-xs"
          href={linkUrl}
        >
          <span>{linkText}</span>
          <ChevronRightIcon className="h-5 w-5 mr-2" />
        </a>
      </div>
    </div>
  );
};

export default Card;
