import { useState, useEffect } from "react";

import api from "../services";
import RightArrow from "../assets/icons/sidebar_right_arrow.svg";
import LeftArrow from "../assets/icons/sidebar_left_arrow.svg";
import { StreamObject } from "../types";

function SideBar() {
  const [open, setOpen] = useState<boolean>(true);
  const [dimension, setDimension] = useState<number>(1025);
  const [data, setData] = useState<Array<StreamObject>>([]);

  function handleResize() {
    const { innerWidth } = window;
    setDimension(innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
    <div className="bg-light_brown min-h-screen   ">
      <div className={open && dimension >= 1024 ? "w-64" : "w-20"}>
        <div className="fixed my-5 ml-2">
          {dimension >= 1024 ? (
            <div className="flex  ">
              <div className="w-full">
                {open && (
                  <span className="text-12 font-bold ">Live Streams</span>
                )}
              </div>

              <div className={open && dimension >= 1024 ? "w-60" : "w-14"}>
                <img
                  src={open ? LeftArrow : RightArrow}
                  alt="arrow"
                  className="cursor-pointer flex "
                  onClick={() => setOpen(!open)}
                />
              </div>
            </div>
          ) : (
            ""
          )}

          {data?.map((item: StreamObject) => {
            return (
              <div className="flex space-x-2 my-4" key={item.id}>
                <div className="relative w-9 h-9">
                  <img
                    className="rounded-full border  shadow-sm"
                    src={item.thumbnail_url}
                    alt="user"
                  />
                </div>
                {open && dimension >= 1024 && (
                  <div className="flex">
                    <div className="block">
                      <div className=" w-48 flex">
                        <span className="w-full ">{item.user_name}</span>
                        <div className="flex">
                          <div className="rounded-full h-3 w-3  ring-1 bg-red mx-2 my-2 "></div>
                          <span className="text-right">
                            {item.viewer_count}
                          </span>
                        </div>
                      </div>

                      <div className="block">{item.game_name}</div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SideBar;
