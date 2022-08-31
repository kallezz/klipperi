import React from "react";

interface TwitchEmbedProps {
  src: string;
}

const TwitchEmbed = ({ src }: TwitchEmbedProps) => {
  return (
    <div className="aspect-video">
      <iframe
        src={`${src}&parent=localhost&autoplay=true`}
        height={720}
        width={1280}
        allowFullScreen
      />
    </div>
  );
};

export default TwitchEmbed;
