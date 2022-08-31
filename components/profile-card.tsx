import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ProfileCardProps {
  name: string;
  image: string;
  isLive: boolean;
  title: string;
  game: string;
  url: string;
  id: string;
}

const ProfileCard = ({
  name,
  image,
  isLive,
  title,
  game,
  url,
  id,
}: ProfileCardProps) => {
  return (
    <Link href={`/clips/${id}`}>
      <a>
        <div className="flex gap-4 items-center p-2 bg-twitch text-white rounded-xl hover:bg-twitch-dark cursor-pointer transition-all">
          <div className="relative w-8 h-8">
            <Image
              className="rounded-full"
              src={image}
              layout="responsive"
              width={150}
              height={150}
            />
            <div
              className={`w-4 h-4 -bottom-1 -right-1 border-2 border-twitch rounded-full absolute ${
                isLive ? "bg-red-500" : "bg-slate-600"
              }`}
            />
          </div>
          <div className="">
            <a className="inline-block" href={`https://twitch.tv/${url}`}>
              <p className="font-bold">{name}</p>
            </a>
            <p className="">
              {isLive
                ? `Playing ${game}`
                : game && `Last seen playing: ${game}`}
            </p>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default ProfileCard;
