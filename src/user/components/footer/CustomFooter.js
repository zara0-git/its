import React from "react";
import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import { Hidden } from "@material-ui/core";
// @material-ui/icons components
import MailOutlineOutlinedIcon from "@material-ui/icons/MailOutlineOutlined";
import CallIcon from "@material-ui/icons/Call";

import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";

// styles
import styles from "assets/jss/material-dashboard-pro-react/custom/footerStyle.js";
import logo from "assets/img/logo.png";
import footerTop from "assets/img/footerTopS.png";
import { Links } from "assets/store/Sidebar";
import { MenuList } from "assets/store/MenuList";
import { ToolbarMenuList } from "assets/store/ToolbarMenuList";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
const useStyles = makeStyles(styles);

export default function CustomFooter(props) {
  const classes = useStyles();

  const contactList = [
    { icon: MailOutlineOutlinedIcon, text: "bulgan@mecs.gov.mn" },
    { icon: CallIcon, text: "7034- 3414", subText: "Зөвлөгөө мэдээлэл авах" },
    {
      icon: CallIcon,
      text: "7034 - 2274",
      subText: "Санал хүсэлт хүлээн авах",
    },
  ];

  const relatedLinks = Links;

  return (
    <div
      style={{
        backgroundColor: "#2E2E2E",
        marginTop: "15px",
        paddingBottom: "45px",
        color: "white",
      }}
    >
      <div style={{ minHeight: "250px" }} className={classes.container}>
        <GridContainer>
          <GridItem xs={12} sm={4} md={3}>
            <div className={classes.footerItem}>
              <p>Бүх эрх хуулиар хамгаалагдсан</p>
              <p> © 2019 ITSYSTEM.MN</p>
            </div>
          </GridItem>
          <GridItem xs={12} sm={4} md={3}>
            <div className={classes.footerItem}>
              <h5>Үндсэн цэс</h5>

              {MenuList
                ? MenuList.map((item, key) => {
                    return (
                      <div className={classes.menuItem}>
                        <ChevronRightIcon style={{ height: "20px" }} />
                        <Link className={classes.menuLink} to={item.Url}>
                          {item.Name}
                        </Link>
                      </div>
                    );
                  })
                : null}
            </div>
          </GridItem>
          <GridItem xs={12} sm={4} md={3}>
            <div className={classes.footerItem}>
              <h5>Туслах цэс </h5>

              {ToolbarMenuList
                ? ToolbarMenuList.map((item, key) => {
                    return (
                      <div className={classes.menuItem}>
                        <ChevronRightIcon style={{ height: "20px" }} />
                        <Link className={classes.menuLink} to={item.Url}>
                          {item.Name}
                        </Link>
                      </div>
                    );
                  })
                : null}
              <div className={classes.menuItem}>
                <ChevronRightIcon style={{ height: "20px" }} />

                <Link className={classes.menuLink} to>
                  <FacebookIcon style={{ height: "20px" }} />
                </Link>
                <Link className={classes.menuLink} to>
                  <InstagramIcon style={{ height: "20px" }} />
                </Link>
                <Link className={classes.menuLink} to>
                  <TwitterIcon style={{ height: "20px" }} />
                </Link>
              </div>
            </div>
          </GridItem>
          <GridItem xs={12} sm={4} md={3}>
            <div className={classes.footerItem}>
              <h5>Хаяг байршил</h5>
              <p>
                Монгол улс, Улаанбаатар хот, СБД дүүрэг, 8-р хороо, Сүхбаатарын
                талбай, Эрдэм Тауэр, 1002 тоот
              </p>
              <p> Утас: 7710-0707 </p>
              <p> И-мэйл: info@itsystem.mn</p>
            </div>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
