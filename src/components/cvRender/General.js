import React from "react";

function GeneralRender(props) {
  return (
    <div className="w-full flex flex-col w-full justify-center items-center bg-yellow-400 p-5 mt-10 tracking-widest">
      <div className="flex gap-5">
        <h1 className="text-4xl font-bold">{props.last}</h1>
        <h1 className="text-4xl font-normal">{props.first}</h1>
      </div>
      <h2 className="text-2xl">{props.job}</h2>
    </div>
  );
}

export default GeneralRender;