import React from "react";
import axios from "axios";
import Populars from "./Populars";

const HomeSeries = ({populars}) => {
console.log(populars);

  return (
    <>
   <Populars populars={populars} />
    </>
  );
};

export default HomeSeries;
