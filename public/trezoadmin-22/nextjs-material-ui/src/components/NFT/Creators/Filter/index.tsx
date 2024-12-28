"use client";

import React, { useState } from "react";
import {
  Card,
  Box,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Grid,
  TextField,
} from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const Filter: React.FC = () => {
  // Select
  const [location, setLocation] = useState("");
  const handleChangeLocation = (event: SelectChangeEvent) => {
    setLocation(event.target.value as string);
  };

  const [fileQuantity, setFileQuantity] = useState("");
  const handleChangeFileQuantity = (event: SelectChangeEvent) => {
    setFileQuantity(event.target.value as string);
  };

  const [featured, setFeatured] = useState("");
  const handleChangeFeatured = (event: SelectChangeEvent) => {
    setFeatured(event.target.value as string);
  };

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
          Filter
        </Typography>

        <Box component="form" noValidate>
          <Grid container alignItems="center" spacing={2}>
            <Grid item xs={12} sm={6} lg={3}>
              <TextField
                autoComplete="search"
                name="search"
                required
                fullWidth
                id="search"
                label="Search"
                autoFocus
                InputProps={{
                  style: { borderRadius: 8 },
                }}
              />
            </Grid>

            <Grid item xs={12} sm={6} lg={3}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Location</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={location}
                  label="Location"
                  onChange={handleChangeLocation}
                >
                  <MenuItem value={0}>Bird</MenuItem>
                  <MenuItem value={1}>Pool</MenuItem>
                  <MenuItem value={2}>Watermelon</MenuItem>
                  <MenuItem value={3}>Flower</MenuItem>
                  <MenuItem value={4}>Cookies</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6} lg={3}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  File Quantity
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={fileQuantity}
                  label="File Type"
                  onChange={handleChangeFileQuantity}
                >
                  <MenuItem value={0}>.zip</MenuItem>
                  <MenuItem value={1}>.jpg</MenuItem>
                  <MenuItem value={2}>.png</MenuItem>
                  <MenuItem value={3}>.gif</MenuItem>
                  <MenuItem value={4}>.pdf</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6} lg={3}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Featured</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={featured}
                  label="Sales Type"
                  onChange={handleChangeFeatured}
                >
                  <MenuItem value={0}>Bird</MenuItem>
                  <MenuItem value={1}>Pool</MenuItem>
                  <MenuItem value={2}>Watermelon</MenuItem>
                  <MenuItem value={3}>Flower</MenuItem>
                  <MenuItem value={4}>Cookies</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Box>
      </Card>
    </>
  );
};

export default Filter;
