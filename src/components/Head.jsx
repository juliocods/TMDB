
import React from "react";
import Card from "../commons/Card";

const Head = ({ populars }) => {


  return (
    <>
      <div className="container text-center">
        <h1 className="pt-5">Populars</h1>
        <div className="row">
          {populars.map((data) => (
            <Card data={data}/>
          ))}
        </div>
      </div>
    </>
  );
};

export default Head;
