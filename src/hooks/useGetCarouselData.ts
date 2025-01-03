import { useEffect, useState } from "react";
import { CarouselItemType } from "@/types";

const useGetCarouselData = () => {
  const [data, setData] = useState<CarouselItemType[]>();
  const [loading, setLoading] = useState<boolean>(true);

  const url = process.env.NEXT_PUBLIC_API_URL!;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
        setData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading };
};

export default useGetCarouselData;
