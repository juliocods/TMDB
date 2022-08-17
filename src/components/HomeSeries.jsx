import React from "react";
import axios from "axios";
import Populars from "./Populars";

const HomeSeries = ({populars}) => {


  return (
    <>
   <Populars populars={populars} />
    </>
  );
};

export default HomeSeries;
