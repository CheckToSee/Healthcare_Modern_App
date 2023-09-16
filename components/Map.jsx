import React from "react";

/* 1128 w 697 h */

const Map = () => {
  return (
    <div className="h-screen w-full flex lg:flex-row flex-col items-center justify-center">
      <h1 className="text-[#272D4E] font-bold text-5xl text-center p-5">
        Find doctors around the US
      </h1>
      <div className="w-full max-w-[1130px] max-h-[800px] h-full bg-center bg-contain bg-no-repeat bg-[url('/usmap.png')] ml-10">
        <h1></h1>
      </div>
    </div>
  );
};

export default Map;
