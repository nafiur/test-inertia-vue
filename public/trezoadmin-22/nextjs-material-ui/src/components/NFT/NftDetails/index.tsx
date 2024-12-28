"use client";

import { Grid } from "@mui/material";
import Gallery from "./Gallery";
import Content from "./Content";

const NftDetails: React.FC = () => {
  return (
    <>
      <Grid
        container
        columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 3 }}
        justifyContent="center"
      >
        <Grid item xs={12} md={4} lg={4} xl={4}>
          <Gallery />
        </Grid>

        <Grid item xs={12} md={8} lg={8} xl={8}>
          <Content />
        </Grid>
      </Grid>
    </>
  );
};

export default NftDetails;