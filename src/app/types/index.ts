type ImageDetailsType = {
  size: number;
  image: {
    width: number;
    height: number;
  };
};

type ImageType = {
  id: string;
  title: string;
  description?: string;
  url: string;
  fileName: string;
  contentType: string;
  details: ImageDetailsType;
};

type CarouselItemType = {
  id: string;
  contentfulType: string;
  title: string;
  linkText: string;
  linkUrl: string;
  image: ImageType;
};

export type { CarouselItemType, ImageDetailsType, ImageType };
