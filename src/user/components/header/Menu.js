import React from "react";
// @material-ui/core components
import { withStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Hidden } from "@material-ui/core";

// custom components
import CustomMenu from "user/components/header/CustomMenu";
import DrawMenu from "user/components/header/DrawMenu";

// styles
import styles from "assets/jss/material-dashboard-pro-react/custom/headerStyle";
// history
import History from "History.js";

// store

import { MenuList } from "assets/store/MenuList";

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.AppBarRef = null;
    this.MenuList = MenuList;
  }

  clickGroup = (ButtonName) => {
    alert(ButtonName);
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    let scrollTop = window.scrollY;
    if (this.AppBarRef) {
      if (scrollTop > 96) {
        this.AppBarRef.style.position = "fixed";
        this.AppBarRef.style.top = 0;
      } else {
        this.AppBarRef.style.position = "relative";
      }
    }
  };

  render() {
    const { classes } = this.props;
    return (
      <AppBar
        position="relative"
        className={classes.appBar}
        ref={(ref) => (this.AppBarRef = ref)}
      >
        <Toolbar
          className={classes.container}
          style={{ minHeight: "40px", padding: 0 }}
        >
          <div className={classes.flex}>
            <Hidden mdDown>
              <CustomMenu MenuList={this.MenuList} />
            </Hidden>
            <Hidden lgUp>
              <span style={{ color: "#FFFFFF" }}>
                <DrawMenu MenuList={this.MenuList} />
              </span>
            </Hidden>
          </div>
        </Toolbar>
      </AppBar>
    );
  }
}
export default withStyles(styles)(Menu);
