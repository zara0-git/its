import React, { Component } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";

import SearchIcon from "@material-ui/icons/Search";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Drawer from "@material-ui/core/Drawer";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { ToolbarMenuList } from "assets/store/ToolbarMenuList";
// import { MenuList1 } from "../../store/menulist";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";
import { ClickAwayListener } from "@material-ui/core";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

const styles = {
  input: {
    height: "unset",
    padding: "6px 0 6px 12px ",
    "&": {
      color: "#666666",
    },
    "&,&::placeholder": {
      fontSize: "14px",
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: "400",
      lineHeight: 1.5,
      opacity: "1",
    },
    "&::placeholder": {
      color: "#ccc",
    },
  },
  notchedOutline: {
    backgroundColor: "#fff",
    "& .MuiOutlinedInput-adornedEnd": {
      paddingRight: "8px",
      "&:hover": {
        cursor: "pointer",
      },
    },
    "& .MuiOutlinedInput-root": {
      borderRadius: 0,
      "& fieldset": {
        borderColor: "#ccc",
      },
      "&:hover fieldset": {
        borderColor: "rgba(0, 46, 74, 0.4)",
      },
      "&.Mui-focused fieldset": {
        borderColor: "rgba(0, 46, 74, 0.4)",
        borderWidth: "1px",
      },
    },
  },

  list: {
    width: "70%",
  },
  links: {
    textDecoration: "none",
    fontSize: "13px",
    fontWeight: "300",
    textTransform: "uppercase",
    color: "#fff",
    "&:hover": {
      color: "#fff",
    },
    "&:focus": {
      color: "#fff",
    },
  },
  links1: {
    fontSize: "12px",
  },

  links2: {
    fontSize: "12px",
    marginLeft: "20px",
  },

  listRoot: {
    padding: "0 10px",
    borderBottom: "1px dashed rgba(255, 255, 255, 0.2)",
    // "&:last-child": {
    //   borderBottom: "1px dashed red",
    // },
  },
  dropListItem: {
    padding: "0",
  },
  dropTextRoot: {
    paddingLeft: "25px",
    borderBottom: "1px dashed rgba(255, 255, 255, 0.2)",
  },
  listTextRoot: {
    paddingLeft: "5px",
  },
  menuHeader: {
    paddingLeft: "30px",
  },
};

class DrawMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      state1: false,
    };
  }

  toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    // setState({ ...state, [anchor]: open });
    this.setState({ state1: open });
  };
  closeDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    this.setState({ state1: open });
  };
  handleDrawerClose = () => {
    this.setState({ open: false });
  };
  // this method sets the current state of a menu item i.e whether it is in expanded or collapsed or a collapsed state
  handleClick = (item) => {
    this.setState((prevState) => ({ [item]: !prevState[item] }));
  };

  // if the menu item doesn't have any child, this method simply returns a clickable menu item that redirects to any location and if there is no child this method uses recursion to go until the last level of children and then returns the item by the first condition.
  handler(DropDownMenus) {
    const { classes } = this.props;
    const { state } = this;
    return DropDownMenus.map((subOption, key) => {
      return (
        <div
          style={{ backgroundColor: "#042a64" }}
          key={"root-" + key}
          role="presentation"
        >
          <ListItem
            button
            onClick={
              subOption.Url
                ? this.toggleDrawer(false)
                : () => this.handleClick(subOption.Name)
            }
            classes={{
              root: classes.listRoot,
            }}
          >
            <ListItemIcon style={{ marginLeft: "3px", minWidth: "10px" }}>
              <FiberManualRecordIcon
                style={{ fontSize: "8px", color: "white" }}
              />
            </ListItemIcon>

            <ListItemText
              inset
              primary={
                subOption.Url ? (
                  <Link
                    to={subOption.Url}
                    className={classes.links}
                    onClick={
                      subOption.Url
                        ? this.toggleDrawer(false)
                        : () => this.handleClick(subOption.Name)
                    }
                  >
                    {subOption.Name}
                  </Link>
                ) : (
                  subOption.Name
                )
              }
              classes={{
                primary: classes.links,
                root: classes.listTextRoot,
              }}
            />

            {subOption.DropDownMenus && subOption.DropDownMenus.length > 0 ? (
              <div
                style={{ color: "white", display: "inline", float: "right" }}
              >
                {state[subOption.Name] ? (
                  <ExpandLess
                    style={{
                      color: "rgba(255, 255, 255, 0.3)",
                      fontSize: "17px",
                    }}
                  />
                ) : (
                  <ExpandMore
                    style={{
                      color: "rgba(255, 255, 255, 0.3)",
                      fontSize: "17px",
                    }}
                  />
                )}
              </div>
            ) : null}
          </ListItem>
          <Collapse
            in={state[subOption.Name]}
            timeout="auto"
            unmountOnExit
            color="black"
            style={{
              backgroundColor: "#042a64",
            }}
          >
            {subOption.DropDownMenus && subOption.DropDownMenus.length > 0 ? (
              <div>
                {subOption.DropDownMenus.map((value, key) => {
                  return (
                    <div key={"drop-" + key}>
                      <ListItem
                        button
                        onClick={
                          value.Url
                            ? this.toggleDrawer(false)
                            : () => this.handleClick(value.Name)
                        }
                        classes={{
                          root: classes.dropListItem,
                        }}
                      >
                        <ListItemText
                          inset
                          primary={
                            !value.link ? (
                              value.Url ? (
                                <Link
                                  to={value.Url}
                                  className={
                                    classes.links + " " + classes.links1
                                  }
                                  onClick={
                                    value.Url
                                      ? this.toggleDrawer(false)
                                      : () => this.handleClick(value.Name)
                                  }
                                >
                                  {value.Name}
                                </Link>
                              ) : (
                                value.Name
                              )
                            ) : (
                              <a
                                href={value.Url}
                                target="_blank"
                                className={classes.links + " " + classes.links1}
                              >
                                {value.Name}
                              </a>
                            )
                          }
                          classes={{
                            primary: classes.links + " " + classes.links1,
                            root: classes.dropTextRoot,
                          }}
                        />
                        {value.SubMenus && value.SubMenus.length > 0 ? (
                          <div
                            style={{
                              color: "white",
                              display: "inline",
                              float: "right",
                            }}
                          >
                            {state[value.Name] ? (
                              <ExpandLess
                                style={{
                                  color: "rgba(255, 255, 255, 0.3)",
                                  fontSize: "17px",
                                }}
                              />
                            ) : (
                              <ExpandMore
                                style={{
                                  color: "rgba(255, 255, 255, 0.3)",
                                  fontSize: "17px",
                                }}
                              />
                            )}
                          </div>
                        ) : null}
                      </ListItem>
                      <Collapse
                        in={state[value.Name]}
                        timeout="auto"
                        unmountOnExit
                        color="black"
                        style={{
                          backgroundColor: "#042a64",
                        }}
                      >
                        {value.SubMenus && value.SubMenus.length > 0 ? (
                          <div>
                            {value.SubMenus.map((value, key) => {
                              return (
                                <div key={"sub-" + key}>
                                  <ListItem
                                    button
                                    onClick={() => {
                                      value.Url
                                        ? this.toggleDrawer(false)
                                        : this.handleClick(value.Name);
                                    }}
                                    classes={{
                                      root: classes.dropListItem,
                                    }}
                                  >
                                    <ListItemText
                                      inset
                                      primary={
                                        !value.link ? (
                                          value.Url ? (
                                            <Link
                                              to={value.Url}
                                              className={
                                                classes.links +
                                                " " +
                                                classes.links2
                                              }
                                              onClick={
                                                value.Url
                                                  ? this.toggleDrawer(false)
                                                  : () =>
                                                      this.handleClick(
                                                        value.Name
                                                      )
                                              }
                                            >
                                              {value.Name}
                                            </Link>
                                          ) : (
                                            value.Name
                                          )
                                        ) : (
                                          <a
                                            href={value.Url}
                                            target="_blank"
                                            className={
                                              classes.links +
                                              " " +
                                              classes.links2
                                            }
                                          >
                                            {value.Name}
                                          </a>
                                        )
                                      }
                                      classes={{
                                        primary:
                                          classes.links + " " + classes.links2,
                                        root: classes.dropTextRoot,
                                      }}
                                    />
                                  </ListItem>
                                </div>
                              );
                            })}
                          </div>
                        ) : null}
                      </Collapse>
                    </div>
                  );
                })}
              </div>
            ) : null}
          </Collapse>
        </div>
      );
    });
  }
  render() {
    const { classes, MenuList, drawerOpen, menuOptions } = this.props;
    return (
      <div className={classes.list}>
        <Button onClick={this.toggleDrawer(true)}>
          <MenuIcon
            style={{
              width: "50px",
              height: "50px",
              color: "white",
            }}
          />
        </Button>
        <ClickAwayListener onClickAway={this.handleDrawerClose}>
          <Drawer
            variant="persistent"
            anchor="left"
            open={this.state.state1}
            classes={{ paper: classes.list }}
            // onMouseLeave={this.toggleDrawer(false)}
            onEscapeKeyDown={this.toggleDrawer(false)}
            onBackdropClick={this.toggleDrawer(false)}
            variant="temporary"
          >
            <div>
              <List style={{ backgroundColor: "#042a64", height: "100vh" }}>
                <ListItem key="menuHeading" divider disableGutters>
                  <div
                    style={{
                      paddingLeft: "15px",
                    }}
                  >
                    <TextField
                      placeholder="Хайлт..."
                      variant="outlined"
                      size="small"
                      className={classes.notchedOutline}
                      InputProps={{
                        classes: {
                          input: classes.input,
                        },
                        endAdornment: (
                          <InputAdornment position="end" onClick={() => {}}>
                            <SearchIcon
                              name="magnifier"
                              style={{ color: "#d1d1d1", fontWeight: "700" }}
                            />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </div>
                </ListItem>
                {this.handler(MenuList)}
                <div
                  style={{
                    borderBottom: "2px solid rgba(255, 255, 255, 0.2)",
                    height: "25px",
                    marginBottom: "15px",
                  }}
                />
                {this.handler(ToolbarMenuList)}
              </List>
            </div>
          </Drawer>
        </ClickAwayListener>
      </div>
    );
  }
}
export default withStyles(styles)(DrawMenu);
