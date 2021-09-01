import React from "react";
import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";

// styles
import styles from "assets/jss/material-dashboard-pro-react/custom/customMenuStyle";
import GridItem from "components/Grid/GridItem";
import logo from "assets/img/itsys-logo.png";
import GridContainer from "components/Grid/GridContainer";
const useStyles = makeStyles(styles);

export default function CustomMenu(props) {
  const classes = useStyles();
  const MenuList = props.MenuList;

  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={4}>
        <Link to="/home">
          <img src={logo} className={classes.logo} />
        </Link>
      </GridItem>
      <GridItem xs={12} sm={12} md={8}>
        <nav className={classes.nav}>
          <ul className={classes.navUl}>
            {MenuList &&
              MenuList.map((item, key) => {
                return (
                  <li key={"li-" + key}>
                    {item.link ? (
                      <a href={item.Url} target="_blank" className="link">
                        {item.Name}
                      </a>
                    ) : (
                      <Link
                        to={item.Url ? item.Url : "#"}
                        onClick={() => {
                          if (item.Click) {
                            item.Click();
                          }
                        }}
                        className="link"
                      >
                        {item.Name}
                        {/* {item.DropDownMenus && item.DropDownMenus.length > 0 && (
                      <ArrowDropDownIcon />
                    )} */}
                      </Link>
                    )}
                  </li>
                );
              })}
          </ul>
        </nav>
      </GridItem>
    </GridContainer>
  );
}
