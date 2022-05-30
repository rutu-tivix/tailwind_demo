import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Cards from "./cards";
import api from "../services";
import SideBar from "./sidebar";
import {StreamObject} from "../types"


function GameStream() {
  const [data, setData] = useState<Array<StreamObject>>([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const result = await api.get(
        `https://api.twitch.tv/helix/streams?game_id=${id}`
      );
      let dataArray = result.data.data;
      let finalArray = dataArray.map((game: StreamObject) => {
        let newURL = game.thumbnail_url?.replace(/{width}|{height}/g, "400");
        game.thumbnail_url = newURL;
        return game;
      });
      setData(finalArray);
    };
    fetchData();
  }, [id]);
  return (
    <div className="flex">
      {/* Sidebar */}
      <SideBar />

      {/* Content */}
      <div className="h-full pt-8">
        {" "}
        <div className="flex justify-center my-5 uppercase font-bold text-3xl"></div>
        <div className="flex flex-wrap justify-center ">
          {data?.map((item:StreamObject) => {
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

export default GameStream;
