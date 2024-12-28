import * as React from "react";
import NextLink from 'next/link';
import Grid from "@mui/material/Grid";
import BasicRadialBarChart from "@/components/Charts/RadialBar/BasicRadialBarChart";
import MultipleRadialBarChart from "@/components/Charts/RadialBar/MultipleRadialBarChart";
import CustomAngleCircleRadialBarChart from "@/components/Charts/RadialBar/CustomAngleCircleRadialBarChart";
import GradientRadialBarChart from "@/components/Charts/RadialBar/GradientRadialBarChart";
import StrockedCircularGaugeRadialBarChart from "@/components/Charts/RadialBar/StrockedCircularGaugeRadialBarChart";
import SemiCircularGaugeRadialBarChart from "@/components/Charts/RadialBar/SemiCircularGaugeRadialBarChart";

export default function Page() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>RadialBar Charts</h5>

        <ul className="breadcrumb">
          <li>
            <NextLink href="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </NextLink>
          </li> 
          <li>Charts</li>
          <li>RadialBar Charts</li>
        </ul>
      </div>

      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
        <Grid item xs={12} sm={6} lg={6} xl={4}>
          <BasicRadialBarChart />
        </Grid>

        <Grid item xs={12} sm={6} lg={6} xl={4}>
          <MultipleRadialBarChart />
        </Grid>

        <Grid item xs={12} sm={6} lg={6} xl={4}>
          <CustomAngleCircleRadialBarChart />
        </Grid>

        <Grid item xs={12} sm={6} lg={6} xl={4}>
          <GradientRadialBarChart />
        </Grid>

        <Grid item xs={12} sm={6} lg={6} xl={4}>
          <StrockedCircularGaugeRadialBarChart />
        </Grid>

        <Grid item xs={12} sm={6} lg={6} xl={4}>
          <SemiCircularGaugeRadialBarChart />
        </Grid>
      </Grid>
    </>
  );
}
