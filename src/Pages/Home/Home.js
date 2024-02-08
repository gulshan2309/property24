import { useState } from "react";
import {
  Box,
  Container,
  FormControl,
  Grid,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import SearchFilter from "../../Components/SearchFilter/SearchFilter";
import BreadcrumbsCard from "../../Components/Breadcrumbs/BreadcrumbsCard";

// Styles
import "./Home.scss";
import Listing from "../../Components/Listings/Listing";

const Home = () => {
  const [orderBy, setOrderBy] = useState("Default");
  const handleChange = (e) => {
    setOrderBy(e.target.value);
  };

  return (
    <>
      <SearchFilter />
      <Box className="page-wrapper">
        <Container maxWidth="lg">
          <Box className="page-heading">
            <Typography variant="h3" className="section-title">
              Apartments / Flats to Rent in Vredehoek
            </Typography>
            <BreadcrumbsCard />
          </Box>

          <Grid container>
            <Grid item sm={12}>
              <Stack
                direction={{ xs: "column", md: "row" }}
                justifyContent="space-between"
                alignItems="center"
                className="sorting-card"
              >
                <Stack direction="row" gap={2} className="sort-by">
                  <Typography>
                    <b>Order by:</b>
                  </Typography>
                  <FormControl fullWidth variant="standard">
                    <Select
                      value={orderBy}
                      label="Default"
                      onChange={handleChange}
                    >
                      <MenuItem value="Default">Default</MenuItem>
                      <MenuItem value="Demo">Demo</MenuItem>
                    </Select>
                  </FormControl>
                </Stack>
                <Typography>
                  <span>Showing: </span>
                  <b>1-9 </b>
                  of
                  <b>1-9 </b>
                </Typography>
              </Stack>

              <Listing />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Home;
