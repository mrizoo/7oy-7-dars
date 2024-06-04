import React from "react";

function Help() {
  return (
    <div className="flex justify-center gap-52 items-center my-10 ">
      <div className=" w-[500px] flex flex-col gap-5">
        <h2 className="font-bold text-3xl">
          Seedra helps to grow fast and efficiant
        </h2>
        <p className="flex gap-1 flex-col">
          <span className="">
            {" "}
            SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and
            professional instructions created by PhD Helga George{" "}
          </span>
          <br className=" my-5 block" />
          <span className="">
            {" "}
            Be sure of our quality - the freshest batches of this season.
            Non-GMO, Heirloom - our seeds were tested and have the best
            germination ratings.
          </span>{" "}
          <br />
          <span className="">
            Your easy growing experience is our guarantee Spinach commom
            culinary uses: salads, soups, smoothies, lasagne, pizza, pies,
            risotto, and more{" "}
          </span>
          <br />
          Proudly sourced in the USA - our garden seeds are grown, harvested,
          and packaged in the USA. We support local farmers and are happy to
          produce this American-made product
        </p>
      </div>
      <div>
        <img src="/big_avatar.png" alt="" />
      </div>
    </div>
  );
}

export default Help;
