import React, { useState, useEffect } from "react";
import rgbToHex from "./utils";

const SingleColor = (color) => {
  const { rgb, weight } = color;
  console.log(rgb, weight);
  return <h4>single color</h4>;
};

export default SingleColor;
