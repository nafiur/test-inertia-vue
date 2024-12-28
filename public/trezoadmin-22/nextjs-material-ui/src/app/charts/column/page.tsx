import * as React from "react";
import NextLink from 'next/link';
import Grid from "@mui/material/Grid";
import BasicColumnChart from "@/components/Charts/Column/BasicColumnChart";
import StackedColumnChart from "@/components/Charts/Column/StackedColumnChart";
import RotatedLabelsColumnChart from "@/components/Charts/Column/RotatedLabelsColumnChart";
import DataLabelsColumnChart from "@/components/Charts/Column/DataLabelsColumnChart";
import RangeColumnChart from "@/components/Charts/Column/RangeColumnChart";
import DistributedColumnChart from "@/components/Charts/Column/DistributedColumnChart";

export default function Page() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Column Charts</h5>

        <ul className="breadcrumb">
          <li>
            <NextLink href="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </NextLink>
          </li> 
          <li>Charts</li>
          <li>Column Charts</li>
        </ul>
      </div>

      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
        <Grid item xs={12} md={12} lg={12} xl={6}>
          <BasicColumnChart />

          <StackedColumnChart />

          <RotatedLabelsColumnChart />
        </Grid>

        <Grid item xs={12} md={12} lg={12} xl={6}>
          <DataLabelsColumnChart />

          <RangeColumnChart />

          <DistributedColumnChart />
        </Grid>
      </Grid>
    </>
  );
}
