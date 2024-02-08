import { Box, Card, Grid, Stack, Typography } from "@mui/material";
import { listingData } from "../../Utils/utils.js";
import "./Listing.scss";
import heartIcon from "../../assets/heart-unselect.png";

const Listing = () => {
  return (
    <>
      {listingData?.map((value, index) => {
        return (
          <Card className="property-card" key={index}>
            <Grid container>
              <Grid item md={5}>
                <img
                  alt="property"
                  src={value.thumb}
                  className="img-fluid property-thumb"
                />
              </Grid>
              <Grid item md={7}>
                <Box className="property-details">
                  <Stack
                    direction={{ xs: "column", md: "row" }}
                    justifyContent="space-between"
                  >
                    <Box>
                      <Typography variant="h4" className="price">
                        {value.price}
                      </Typography>
                      <Typography>{value.needs}</Typography>
                    </Box>
                    <Box>
                      <img
                        alt="owner"
                        className="img-fluid owner-logo"
                        src={value.ownerLogo}
                      />
                    </Box>
                  </Stack>
                  <Typography variant="h4" className="city-title">
                    {value.city}
                  </Typography>
                  <Typography className="description">
                    {value.details}
                  </Typography>
                  <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                    className="amenity-row"
                  >
                    <Stack className="amenity-list" direction="row" gap={5}>
                      {value?.amenities?.map((el, index) => {
                        return (
                          <Box key={index} className="amenity-card">
                            <img
                              alt="room"
                              className="img-fluid amenity-icon"
                              src={el.icon}
                            />
                            <Typography>{el.rooms}</Typography>
                          </Box>
                        );
                      })}
                    </Stack>
                    <Box>
                      <img
                        alt="like"
                        className="img-fluid like-icon"
                        src={heartIcon}
                      />
                    </Box>
                  </Stack>
                </Box>
              </Grid>
            </Grid>
          </Card>
        );
      })}
    </>
  );
};

export default Listing;
