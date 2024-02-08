import { useState } from "react";
import {
  Box,
  Button,
  Container,
  Divider,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  Stack,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import MapIcon from "@mui/icons-material/Map";
import SearchIcon from "@mui/icons-material/Search";

// Styles
import "./SearchFilter.scss";

const SearchFilter = () => {
  const [propType, setPropType] = useState("");
  const [rent, setRent] = useState("To Rent");

  const handleChange = (e) => {
    setPropType(e.target.value);
  };
  const handleChangeRent = (e) => {
    setRent(e.target.value);
  };
  return (
    <Box className="search-filter-box">
      <Container maxWidth="lg">
        <Box className="search-wrapper">
          <Grid container gap={{ xs: 4, sm: 0 }} alignItems="center">
            <Grid item xs={12} sm={3}>
              <Stack direction="row" gap={2} alignItems="center">
                <FormControl
                  fullWidth
                  variant="standard"
                  className="input-plain"
                >
                  <Select
                    value={rent}
                    label="To Rent"
                    onChange={handleChangeRent}
                  >
                    <MenuItem value="To Rent">To Rent</MenuItem>
                    <MenuItem value="Apartment">Apartment</MenuItem>
                  </Select>
                </FormControl>
                <Divider
                  orientation="vertical"
                  sx={{
                    display: { xs: "none", md: "inline-block" },
                    width: 2,
                    height: 50,
                    mx: 2,
                  }}
                />
              </Stack>
            </Grid>
            <Grid item sm={7}>
              <Grid container alignItems="center">
                <Grid item xs={8} sm={6} md={9}>
                  <FormControl
                    variant="outlined"
                    className="search-bar"
                    fullWidth
                  >
                    <OutlinedInput
                      placeholder="Search here"
                      startAdornment={
                        <InputAdornment position="end">
                          <SearchIcon />
                        </InputAdornment>
                      }
                      inputProps={{
                        "aria-label": "weight",
                      }}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={4} sm={6} md={3}>
                  <Button variant="outlined" className="btn-map">
                    Map <MapIcon />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={2}>
              <Button
                variant="contained"
                color="error"
                fullWidth
                className="btn-search"
              >
                Search
              </Button>
            </Grid>
          </Grid>
        </Box>
        <Grid container spacing={4} className="filter-row">
          <Grid item xs={6} md={2.4}>
            <FormControl fullWidth variant="filled">
              <InputLabel>Property Type</InputLabel>
              <Select
                value={propType}
                label="Apartment"
                onChange={handleChange}
              >
                <MenuItem value={10}>House</MenuItem>
                <MenuItem value={20}>Apartment</MenuItem>
                <MenuItem value={30}>Townhouse</MenuItem>
                <MenuItem value={40}>Plot</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6} md={2.4}>
            <FormControl fullWidth variant="filled">
              <InputLabel>Min Price</InputLabel>
              <Select
                value={propType}
                label="Min Price"
                onChange={handleChange}
              >
                <MenuItem value={10}>R100k</MenuItem>
                <MenuItem value={20}>R150k</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6} md={2.4}>
            <FormControl fullWidth variant="filled">
              <InputLabel>Max Price</InputLabel>
              <Select
                value={propType}
                label="Max Price"
                onChange={handleChange}
              >
                <MenuItem value={10}>R100k</MenuItem>
                <MenuItem value={20}>R150k</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6} md={2.4}>
            <FormControl fullWidth variant="filled">
              <InputLabel>Bedrooms</InputLabel>
              <Select value={propType} label="Bedrooms" onChange={handleChange}>
                <MenuItem value={10}>1+</MenuItem>
                <MenuItem value={20}>2+</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={2.4}>
            <Button variant="outlined" className="btn-filter" fullWidth>
              More Filters <AddIcon />
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default SearchFilter;
