import * as React from "react";
import NextLink from 'next/link';
import Grid from "@mui/material/Grid";  
import BasicPolarChart from "@/components/Charts/PolarCharts/BasicPolarChart";
import MonochromePolarChart from "@/components/Charts/PolarCharts/MonochromePolarChart";

export default function Page() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Polar Charts</h5>

        <ul className="breadcrumb">
          <li>
            <NextLink href="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </NextLink>
          </li> 
          <li>Charts</li>
          <li>Polar Charts</li>
        </ul>
      </div>

      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
        <Grid item xs={12} md={12} lg={12} xl={6}>
          <BasicPolarChart />
        </Grid>

        <Grid item xs={12} md={12} lg={12} xl={6}>
          <MonochromePolarChart />
        </Grid>
      </Grid>
    </>
  );
}
