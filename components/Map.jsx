import React from 'react';

/* 1128 w 697 h */

const Map = () => {
  return (
    <div className="h-screen w-full flex lg:flex-row flex-col items-center justify-center">
      <div className="flex flex-[1] items-center justify-center w-full h-full">
        <h1 className="text-[#272D4E] font-bold text-5xl text-center p-5">
          Find doctors around the US
        </h1>
      </div>
      <div className="flex flex-[2] items-center justify-center w-full h-full">
        <img src="/usmap.png" className="pl-4" />
      </div>
      {/*<div className="w-full max-w-[1130px] max-h-[800px] h-full bg-center bg-contain bg-no-repeat bg-[url('/usmap.png')] ml-10">
        <div className="rounded-full h-4 w-4 mt-[38%] ml-[3%] bg-[#5F37EF]"></div>
      </div>*/}
    </div>
  );
};

export default Map;
