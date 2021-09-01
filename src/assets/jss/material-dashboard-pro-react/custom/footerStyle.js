import {
  primaryColor,
  whiteColor,
  grayColor,
  container,
  hexToRgb,
} from "assets/jss/material-dashboard-pro-react.js";

const footerStyle = (theme) => ({
  footerItem: {
    margin: "30px",
    "& h5": {
      borderBottom: "1px solid white",
      fontSize: "15px",
      fontWeight: "400",
      textTransform: "uppercase",
      paddingBottom: "10px",
    },
  },
  menuItem: {
    display: "flex",
    marginTop: "10px",
    color: "white",
    "& Link": {
      color: "white",
    },
  },
  menuLink: {
    color: "white",
    "&:hover": {
      color: "#3288c9",
    },
    "&:focus": {
      color: "#3288c9",
    },
  },
  container: {
    ...container,
  },
});

export default footerStyle;
