import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";

import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";

import HomeNews from "user/components/news/homeNews/HomeNews";

// styles
import styles from "assets/jss/material-dashboard-pro-react/custom/homePageStyle";
import Greeting from "user/components/Introduction/greeting/Greeting";

const useStyles = makeStyles(styles);

export default function (props) {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.container}>
        <GridContainer style={{ background: "#FFFFFF" }}>
          <GridItem xs={12} sm={12} md={12}>
            <HomeNews />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
