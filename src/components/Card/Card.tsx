import React from "react";
import Image from "next/image";
import { checkUrl } from "@/utils";
import { CardProps } from "@/interfaces";
import { ChevronRightIcon } from "@radix-ui/react-icons";

const Card: React.FC<CardProps> = ({ card }) => {
  const {
    linkText,
    linkUrl,
    image: { url, details },
    title,
  } = card;
  const { width, height } = details.image;

  return (
    <div className="card">
      <Image
        className="card-img"
        src={checkUrl(url)}
        height={height}
        width={width}
        alt={title}
      />
      <div className="card-content">
        <p className="card-title">{card.title}</p>
        <a className="card-link" href={linkUrl}>
          <span>{linkText}</span>
          <ChevronRightIcon className="card-icon" />
        </a>
      </div>
    </div>
  );
};

export default Card;
