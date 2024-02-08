import { Breadcrumbs, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import "./BreadcrumbsCard.scss";

const BreadcrumbsCard = () => {
  return (
    <Breadcrumbs
      separator={<NavigateNextIcon fontSize="small" />}
      aria-label="breadcrumb"
      className="breadcrumb-wrapper"
    >
      <Link key="1" to="/">
        Property to Rent
      </Link>
      <Link key="2" to="/">
        Western Cape
      </Link>
      <Link key="2" to="/">
        Cape Town
      </Link>
      <Typography key="3">Vredehoek</Typography>
    </Breadcrumbs>
  );
};

export default BreadcrumbsCard;
