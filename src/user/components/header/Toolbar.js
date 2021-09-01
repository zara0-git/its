import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";

import SearchIcon from "@material-ui/icons/Search";

import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import CustomToolbarMenu from "user/components/header/CustomToolbarMenu.js";
// styles
import headerStyle from "assets/jss/material-dashboard-pro-react/custom/headerStyle";


const styles = (theme) => ({
 
});

const useHeaderStyles = makeStyles(headerStyle);
const useStyles = makeStyles(styles);

export default function Toolbar(props) {
  const classes = { ...useHeaderStyles(), ...useStyles() };

  return (
    <div
  
    >
      <div className={classes.container}>
        <GridContainer>
          <GridItem xs={12} sm={6} md={7}>
            
          </GridItem>
          <GridItem xs={12} sm={6} md={5} style={{ position: "relative" }}>
            <CustomToolbarMenu />
        
          </GridItem>
        </GridContainer>
      </div>
      <div style={{ clear: "both" }}></div>
    </div>
  );
}
