import React from "react";

const InfoStat = (props:{
    count:number,
    title:string
}) => {
  return (
    <>
  <div className="text-white flex space-x-3">
  <div>
        <h1 className="text-3xl font-bold">{props.count}K+</h1>
        <p className="text-center ">{props.title}</p>
        </div>
      </div>
    </>
  );
};

export default InfoStat;
