import { useEffect, useState } from "react";

import Cards from "./cards";
import api from "../services";
import SideBar from "./sidebar";
import { StreamObject } from "../types";

function Games() {
  const [data, setData] = useState<Array<StreamObject>>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await api.get("https://api.twitch.tv/helix/games/top");
      let dataArray = result.data.data;
      let finalArray = dataArray.map((game: StreamObject) => {
        let newURL = game.box_art_url?.replace(/{width}|{height}/g, "400");
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
        <div className="flex justify-center my-2 uppercase font-bold text-3xl">
          Most Popular Games
        </div>
        <div className="flex flex-wrap justify-center ">
          {data?.map((item: StreamObject) => {
            return (
              <div key={item.id}>
                <Cards data={item} gameStream={false} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Games;
