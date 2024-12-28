"use client";

import React from "react";
import { Card, Typography, CircularProgress, Box } from "@mui/material";

const CircularIndeterminate: React.FC = () => {
  return (
    <>
      <Card
        sx={{
          boxShadow: "none",
          borderRadius: "7px",
          mb: "25px",
          padding: { xs: "18px", sm: "20px", lg: "25px" },
        }}
        className="rmui-card"
      >
        <Typography
          variant="h3"
          sx={{
            fontSize: { xs: "16px", md: "18px" },
            fontWeight: 700,
            mb: "25px",
          }}
          className="text-black"
        >
          Circular Indeterminate
        </Typography>

        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      </Card>
    </>
  );
};

export default CircularIndeterminate;