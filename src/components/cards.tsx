import { Link } from "react-router-dom";

import { StreamObject } from "../types";

interface Props {
  data: StreamObject;
  gameStream: Boolean;
}

function Cards(props: Props) {
  return (
    <div className="p-8">
      {props.gameStream ? (
        <div className="max-w-xs relative rounded overflow-hidden shadow-lg transform transition duration-500 hover:scale-110">
          <img
            className="w-full"
            src={props.data?.thumbnail_url}
            alt="Mountain"
          />
          {props?.data?.type === "live" && (
            <div className="absolute w-20 py-2.5 top-5 left-8 inset-x-0 bg-red text-white text-xs text-center leading-4">
              Live
            </div>
          )}

          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{props.data?.name}</div>
          </div>
          <div className="flex justify-center my-4">
            <button
              type="button"
              className="text-white bg-brown hover:bg-light_brown  font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 flex justify-center"
            >
              <a
                rel="noreferrer"
                href={"https://twitch.tv/" + props.data?.user_name}
                className="link"
                target="_blank"
              >
                watch {props.data?.user_name}'s' stream
              </a>
            </button>
          </div>
        </div>
      ) : (
        <div className="max-w-xs  rounded overflow-hidden shadow-lg transform transition duration-500 hover:scale-110">
          <img
            className="w-full"
            src={props.data?.thumbnail_url}
            alt="Mountain"
          />

          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{props.data?.name}</div>
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
      )}
    </div>
  );
}

export default Cards;
