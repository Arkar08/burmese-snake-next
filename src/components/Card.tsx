import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SingleCardProps } from "@/utils/type";

const Card: React.FC<SingleCardProps> = ({ snake }) => {
  return (
    <div className="shadow-lg border flex flex-col justify-between items-center rounded-lg">
      <Image
        src={snake.Img}
        alt="photo"
        sizes="100vw"
        style={{
          width: "100%",
          height: "auto",
        }}
        width={500}
        height={300}
        className="mx-auto mt-4 px-4"
      />
      <h1 className="text-center text-2xl p-4"> {snake.EngName}</h1>
      <div className="flex items-center justify-center m-4">
        <Link href={`/detail/${snake.Id}`}>
          <p className="p-2 bg-black text-white cursor-pointer hover:bg-blue-500 hover:text-black rounded-md">
            More Details
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Card;
