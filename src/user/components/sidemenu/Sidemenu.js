import React from "react";
import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core";
import { Hidden } from "@material-ui/core";
import { Links } from "assets/store/Sidebar";
import { MenuList } from "assets/store/MenuList";

const styles = (theme) => ({
  linkItem: {
    backgroundColor: "white",

    width: "100%",

    display: "flex",
    borderBottom: "1px solid  rgba(0,0,0,0.2)",
    borderLeft: "1px solid  rgba(0,0,0,0.2)",

    color: "balck",
    alignItems: " center",
    marginTop: "10px",
  },
  linkItem1: {
    width: "100%",
    color: "black",
    alignItems: " center",

    zIndex: "1",
  },
  itemImg: { margin: "10px" },
  itemText: { margin: "10px" },
  headerSec: {
    borderBottom: "1px solid blue",
    width: "100%",
  },
});

const useStyles = makeStyles(styles);

export default function (props) {
  const classes = { ...useStyles() };
  var index = props.index;
  return (
    <Hidden smDown>
      <div>


      
        {MenuList && MenuList.length > 0
          ? MenuList[index].DropDownMenus.map((value, key) => {
              return value.link ? (
                <a
                  href={value.Url}
                  target="_blank"
                  className={classes.linkItem1}
                >
                  <div className={classes.linkItem}>
                    <h6 className={classes.itemText}>{value.Name}</h6>
                  </div>
                </a>
              ) : (
                <Link to={value.Url} className={classes.linkItem1} key={key}>
                  <div className={classes.linkItem}>
                    <h6 className={classes.itemText}>{value.Name}</h6>
                  </div>
                </Link>
              );
            })
          : null}
      </div>
    </Hidden>
  );
}
