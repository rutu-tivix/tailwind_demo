import { useState } from "react";
import { Link } from "react-router-dom";
import { Textfit } from "react-textfit";

import { StreamObject } from "../types";

interface Props {
  data: StreamObject;
  gameStream: Boolean;
}

function Cards(props: Props) {
  const [loadedImage, setLoadImage] = useState(false);
  return (
    <div className="p-8">
      {props.gameStream ? (
        <a
          rel="noreferrer"
          href={"https://twitch.tv/" + props.data?.user_name}
          className="link"
          target="_blank"
        >
          <div className="max-w-xs relative rounded overflow-hidden shadow-lg transform transition duration-500 hover:scale-110 cursor-pointer">
            <img
              className="w-full"
              src={
                loadedImage
                  ? props.data?.thumbnail_url
                  : "https://via.placeholder.com/300?text=Image+Is+Loading...."
              }
              alt="Mountain"
              onLoad={() => setLoadImage(true)}
            />
            {props?.data?.type === "live" && (
              <div className="absolute w-20 py-2.5 top-5 left-8 inset-x-0 bg-red text-white text-xs text-center leading-4">
                Live
              </div>
            )}

            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">
                {" "}
                <Textfit mode="single" forceSingleModeWidth={false}>
                  {props.data.title?.length > 40
                    ? props.data?.title.slice(0, 40) + "..."
                    : props.data.title}
                </Textfit>
              </div>
            </div>

            <div className="flex justify-center my-4">
              <button
                type="button"
                className="text-white bg-brown hover:bg-light_brown font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 flex justify-center cursor-pointer"
                onClick={() =>
                  window.open(
                    `https://twitch.tv/${props.data?.user_name}`,
                    "_blank"
                  )
                }
              >
                watch {props.data?.user_name}'s' stream
              </button>
            </div>
          </div>
        </a>
      ) : (
        <Link to={`/streams/${props.data?.id}`}>
          <div className="max-w-xs  rounded overflow-hidden shadow-lg transform transition duration-500 hover:scale-110">
            <img
              className="w-full"
              src={
                loadedImage
                  ? props.data?.thumbnail_url
                  : "https://via.placeholder.com/300?text=Image+Is+Loading...."
              }
              alt="Mountain"
              onLoad={() => setLoadImage(true)}
            />

            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">
                <Textfit mode="single" forceSingleModeWidth={false}>
                  {props.data.name?.length > 40
                    ? props.data?.name.slice(0, 40) + "..."
                    : props.data.name}
                </Textfit>
              </div>
            </div>
            <div className="flex justify-center my-4">
              <Link to={`/streams/${props.data?.id}`}>
                <button
                  type="button"
                  className="text-white bg-brown hover:bg-light_brown  uppercase font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 flex justify-center"
                >
                  Go to channel
                </button>
              </Link>
            </div>
          </div>
        </Link>
      )}
    </div>
  );
}

export default Cards;
