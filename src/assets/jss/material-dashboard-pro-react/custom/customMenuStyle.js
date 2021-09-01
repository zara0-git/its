import {
  primaryColor,
  grayColor,
  dangerColor,
  blackColor,
  whiteColor,
  hexToRgb,
} from "assets/jss/material-dashboard-pro-react.js";

const customMenuStyle = {
  nav: {
    margin: 0,
    float: "right",
  },
  logo: {
    height: "60px",

    float: "left",
    // transition: "height 2s, width 2s",
    // "&:hover": {
    //   height: "100px",
    // },
  },

  navUl: {
    margin: 0,
    padding: 0,
    height: "60px",
    alignItems: "center",
    justifyContent: "center",
    listStyle: "none",
    position: "relative",
    textTransform: "uppercase",
    "& > li": {
      position: "relative",
      float: "left",
      height: "60px",
      alignItems: "center",
      justifyContent: "center",

      "&:hover > ul": {
        visibility: "visible",
        opacity: "1",
      },
    },

    "& > li > .link": {
      position: "relative",
      display: "flex",
      alignItems: "center",
      background: "transparent",
      height: "100%",

      padding: "0 8px",
      lineHeight: "0.8",
      fontWeight: "400",
      fontSize: "14px",
      color: "#2E2E2E",

      borderRadius: 0,
      textTransform: "uppercase",
      textDecoration: "none",
      "&:hover": {
        backgroundColor: "rgba(0, 0, 0, 0.18)",
      },
      "&:focus": {
        backgroundColor: "rgba(0, 0, 0, 0.18)",
      },
    },
  },
};

export default customMenuStyle;
