import React from "react";
import Image from "next/image";

interface ThumbnailCarouselProps {
  clips: any;
  setClipIndex: any;
}

const ThumbnailCarousel = ({ clips, setClipIndex }: ThumbnailCarouselProps) => {
  return (
    <div className="flex p-4 gap-4 flex-wrap justify-center">
      {clips &&
        clips.map((clip: any, index: number) => (
          <div
            className="relative w-48 cursor-pointer"
            onClick={() => setClipIndex(index)}
            key={clip.id}
          >
            <Image
              src={clip.thumbnail_url}
              width={480}
              height={272}
              layout="responsive"
            />
          </div>
        ))}
    </div>
  );
};

export default ThumbnailCarousel;
