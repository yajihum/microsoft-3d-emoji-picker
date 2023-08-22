import React from "react";
import { EmojiImage } from "../../../type";

const workerEndpoint = process.env.NEXT_PUBLIC_EmojiWorkerEndpoint;

export default async function Emoji(image: EmojiImage) {
  return (
    <button type="button" className="hover:bg-blue-100 rounded-md p-0.5">
      <img
        src={`${workerEndpoint}/${image.category}/${image.name}.${image.extension}`}
        width={30}
        height={30}
        alt={image.name}
      />
    </button>
  );
}
