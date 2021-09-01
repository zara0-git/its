import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";

import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";

import HomeSlider from "user/components/home-slider/HomeSlider.js";
import Methodology from "user/components/methodology/Methodology";
import Sidemenu from "user/components/sidemenu/Sidemenu";
import PdfList from "user/components/PdfList/FileList";
// styles
import styles from "assets/jss/material-dashboard-pro-react/custom/homePageStyle";

const useStyles = makeStyles(styles);

export default function (props) {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.container}>
        <GridContainer style={{ background: "#FFFFFF" }}>
          <GridItem xs={12} sm={12} md={9}>
            <div>
              <PdfList />
            </div>
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <div style={{ marginTop: "10px" }}>
              <Sidemenu index="3" />
            </div>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
