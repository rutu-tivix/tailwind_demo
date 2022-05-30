import { useEffect, useState } from "react";
import Cards from "./cards";

import api from "../services";
import SideBar from "./sidebar";
import { StreamObject } from "../types";

function Stream() {
  const [data, setData] = useState<Array<StreamObject>>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await api.get("https://api.twitch.tv/helix/streams");
      let dataArray = result.data?.data;
      let finalArray = dataArray.map((game: StreamObject) => {
        let newURL = game.thumbnail_url?.replace(/{width}|{height}/g, "400");
        game.thumbnail_url = newURL;
        return game;
      });
      setData(finalArray);
    };
    fetchData();
  }, []);

  return (
    <div className="flex">
      {/* Sidebar */}
      <SideBar />

      {/* Content */}
      <div className="h-full pt-8">
        {" "}
        <div className="flex justify-center my-5 uppercase font-bold text-3xl">
          Most Popular Live Streams
        </div>
        <div className="flex flex-wrap justify-center ">
          {data?.map((item: StreamObject) => {
            return (
              <div className="">
                <Cards data={item} gameStream={true} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Stream;
