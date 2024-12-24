import { CarouselDataType, CarouselItemType } from "@/types";

interface CarouselProps {
  cards: CarouselDataType;
}

interface CardProps {
  card: CarouselItemType;
}

export type { CarouselProps, CardProps };
