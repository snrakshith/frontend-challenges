import { useEffect, useState } from "react";
import "./image-carousel.css";

export function ImageCarousel() {
  const [value, setValue] = useState(1);
  const [imageIndex, setImageIndex] = useState([]);
  const [isLoading, setisLoading] = useState(false);

  async function fetchImages() {
    setisLoading(true);
    const api = await fetch("https://www.reddit.com/r/aww/top/.json?t=all");
    const result = await api.json();
    const extract_children = result.data?.children;
    const extractImageUrls = extract_children
      ?.filter((child: any) =>
        child?.data?.url_overridden_by_dest?.includes(".jpg")
      )
      ?.map((child: any) => child?.data?.url_overridden_by_dest);
    setImageIndex(extractImageUrls);
    setisLoading(false);
  }

  useEffect(() => {
    fetchImages();
  }, []);

  const handleImageChange = (dir: string) => {
    const lastImageIndex = imageIndex.length - 1;
    if (dir === "left") {
      if (value === lastImageIndex) {
        setValue(lastImageIndex);
      } else {
        setValue((value) => value - 1);
      }
    } else {
      if (value === lastImageIndex) {
        setValue(lastImageIndex);
      } else {
        setValue((value) => value + 1);
      }
    }
  };
  return (
    <>
      <h1>Image Carousel</h1>
      {isLoading ? (
        "Loading..."
      ) : (
        <div className="container">
          <button className="left" onClick={() => handleImageChange("left")}>
            {"<"}
          </button>
          <img src={imageIndex[value]} alt="not-found" />
          <button className="right" onClick={() => handleImageChange("right")}>
            {">"}
          </button>
        </div>
      )}
    </>
  );
}
