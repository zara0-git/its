import React from "react";
import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import LinkIcon from "@material-ui/icons/Link";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
// styles
import styles from "assets/jss/material-dashboard-pro-react/custom/toolbarMenuStyle";

const useStyles = makeStyles(styles);

export default function ToolbarCustomMenu(props) {
  const classes = useStyles();
  const MenuList = props.MenuList;

  return (
    <div>
      <nav className={classes.nav}>
        <ul className={classes.navUl}>
          {MenuList &&
            MenuList.map((item, key) => {
              var Width = item.Width;
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
                      {item.DropDownMenus && item.DropDownMenus.length > 0 && (
                        <ExpandMoreIcon style={{ marginLeft: "3px" }} />
                      )}
                    </Link>
                  )}
                  {item.DropDownMenus && item.DropDownMenus.length > 0 ? (
                    <ul>
                      {item.DropDownMenus.map((item, key) => {
                        return (
                          <li
                            key={"dropdown-" + key}
                            style={{ width: Width ? Width : "180px" }}
                          >
                            {item.link ? (
                              <a
                                href={item.Url}
                                target="_blank"
                                className="link"
                              >
                                {item.Name}
                                <LinkIcon
                                  style={{
                                    float: "right",
                                    color: "white",
                                  }}
                                />
                                {item.SubMenus && item.SubMenus.length > 0 && (
                                  <ArrowRightIcon style={{ float: "right" }} />
                                )}
                              </a>
                            ) : (
                              <Link
                                to={item.Url ? item.Url : "#"}
                                className="link"
                              >
                                {item.Name}
                                {item.SubMenus && item.SubMenus.length > 0 && (
                                  <ArrowRightIcon style={{ float: "right" }} />
                                )}
                              </Link>
                            )}
                            {item.SubMenus && item.SubMenus.length > 0 ? (
                              <ul>
                                {item.SubMenus.map((item, key) => {
                                  return (
                                    <li key={"submenu-" + key}>
                                      {item.link ? (
                                        <a
                                          href={item.Url}
                                          target="_blank"
                                          className="link"
                                        >
                                          {item.Name}
                                          {item.SubMenus &&
                                            item.SubMenus.length > 0 && (
                                              <ArrowRightIcon
                                                style={{ float: "right" }}
                                              />
                                            )}
                                        </a>
                                      ) : (
                                        <Link
                                          to={item.Url ? item.Url : "#"}
                                          className="link"
                                        >
                                          {item.Name}
                                        </Link>
                                      )}
                                    </li>
                                  );
                                })}
                              </ul>
                            ) : null}
                          </li>
                        );
                      })}
                    </ul>
                  ) : null}
                </li>
              );
            })}

          <Link className={classes.menuLink} to>
            <FacebookIcon
              style={{ marginLeft: "10px", height: "20px", color: "#3b5998" }}
            />
          </Link>
          <Link className={classes.menuLink} to>
            <InstagramIcon
              style={{ marginLeft: "10px", height: "20px", color: "#8a3ab9" }}
            />
          </Link>
          <Link className={classes.menuLink} to>
            <TwitterIcon
              style={{ marginLeft: "10px", height: "20px", color: " #00acee" }}
            />
          </Link>
        </ul>
      </nav>
    </div>
  );
}
