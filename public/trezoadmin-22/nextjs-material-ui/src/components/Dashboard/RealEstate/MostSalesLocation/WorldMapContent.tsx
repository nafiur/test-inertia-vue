"use client";

import React, { FC } from "react";
import WorldMap from "react-svg-worldmap";

interface CountryData {
  country: string;
  value: number;
}

const WorldMapContent: FC = () => {
  const data: CountryData[] = [
    { country: "us", value: 331883986 }, // United States
    { country: "de", value: 83129285 }, // Germany
    { country: "gb", value: 67886011 }, // United Kingdom
    { country: "ca", value: 38005238 }, // Canada
    { country: "pt", value: 10196709 }, // Portugal
    { country: "es", value: 47351567 }, // Spain
    { country: "fr", value: 65273511 }, // France
  ];

  return (
    <div className="text-center">
      <WorldMap backgroundColor="transparent" color="blue" value-suffix="people" size="sm" data={data} />
    </div>
  );
};

export default WorldMapContent;
