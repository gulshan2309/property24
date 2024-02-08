import React, { useState } from "react";
import {
  Container,
  Grid,
  Button,
  Stack,
  IconButton,
  Drawer,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";
import logo from "../../assets/property-logo.svg";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <Container maxWidth="xl" className="header-wrapper">
      <Grid container alignItems="center">
        <Grid item xs={9} sm={3} md={3}>
          <img alt="logo" src={logo} className="logo" />
        </Grid>
        <Grid item sm={9} md={6} sx={{ display: { xs: "none", sm: "block" } }}>
          <Stack direction="row" gap={4} className="nav-menu">
            <Link to="/">Buy</Link>
            <Link to="/">Rent</Link>
            <Link to="/">Sell</Link>
            <Link to="/">Commercial</Link>
            <Link to="/">Calculators</Link>
            <Link to="/">Advice</Link>
          </Stack>
        </Grid>
        <Grid
          item
          sm={12}
          md={3}
          className="nav-buttons"
          sx={{ display: { xs: "none", sm: "block" } }}
        >
          <Button variant="outlined">List Privately</Button>
          <Button variant="contained" className="btn-login">
            Sign in
          </Button>
        </Grid>
        <Grid
          textAlign="right"
          item
          xs={3}
          sm={12}
          sx={{ display: { xs: "block", sm: "none" } }}
        >
          <IconButton aria-label="menu" onClick={toggleDrawer}>
            <MenuIcon />
          </IconButton>
          <Drawer
            anchor="left"
            open={isDrawerOpen}
            onClose={toggleDrawer}
            ModalProps={{
              onClose: toggleDrawer, // Close the drawer when clicking outside
            }}
          >
            <Stack direction="column" gap={4} className="nav-menu">
              <Link to="/">Buy</Link>
              <Link to="/">Rent</Link>
              <Link to="/">Sell</Link>
              <Link to="/">Commercial</Link>
              <Link to="/">Calculators</Link>
              <Link to="/">Advice</Link>
              <Box className="nav-buttons">
                <Button variant="outlined">List Privately</Button>
                <Button variant="contained" className="btn-login">
                  Sign in
                </Button>
              </Box>
            </Stack>
          </Drawer>
        </Grid>
      </Grid>

      {/* Mobile menu */}
    </Container>
  );
};
export default Header;
