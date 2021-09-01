import {
  primaryColor,
  grayColor,
  dangerColor,
  blackColor,
  whiteColor,
  hexToRgb,
} from "assets/jss/material-dashboard-pro-react.js";

const toolbarMenuStyle = {
  nav: {
    margin: 0,
  },
  navUl: {
    margin: 0,
    padding: 0,
    listStyle: "none",
    position: "relative",
    textTransform: "uppercase",
    "& > li": {
      position: "relative",
      float: "left",
      "&:hover > ul": {
        display: "block",
      },
    },

    "& > li > .link": {
      position: "relative",
      display: "flex",
      alignItems: "center",
      background: "transparent",
      padding: "0 8px",
      lineHeight: "0.8",
      fontWeight: "400",
      fontSize: "10px",
      color: "#2E2E2E",
      height: "20px",
      borderRadius: 0,
      textTransform: "uppercase",
      textDecoration: "none",
      "&:hover": {
        // backgroundColor: "rgba(0, 0, 0, 0.08)",
      },
    },
  },
};

export default toolbarMenuStyle;
