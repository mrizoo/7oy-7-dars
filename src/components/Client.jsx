import React from "react";
let koment = [1, 2, 3];
function Client() {
  return (
    <div className="flex flex-col gap-10">
      <h1 className="text-center font-bold text-2xl mb-2">
        What out clients say
      </h1>
      <ul className="flex gap-20 justify-between">
        {koment.map((id) => {
          return (
            <li
              className={`border rounded-md drop-shadow-lg mb-5 p-5 flex flex-col w-[540px] gap-5 h-80 cursor-pointer ${
                id != 2 ? " opacity-50 " : ""
              } ${id != 2 ? " " : "-mt-7"}${id == 1 ? " -ml-52" : ""}${
                id == 3 ? " -mr-52" : ""
              }`}
            >
              <div className="flex gap-5 items-center justify-start">
                <img src="/avatar.png" height="64" width="64" alt="" />
                <h4 className="flex flex-col font-bold">
                  Carla Samantoes-Diego{" "}
                  <span className=" opacity-60 font-normal">12.09.2021</span>
                </h4>
              </div>
              <p>⭐⭐⭐⭐⭐</p>
              <p>
                SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and
                professional instructions created by PhD Helga George Be sure of
                our quality - the freshest batches of this season. Non-GMO,
                Heirloom - our seeds were tested and have the best germination
                ratings.{" "}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Client;
