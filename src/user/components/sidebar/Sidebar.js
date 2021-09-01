import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core";
import { Hidden } from "@material-ui/core";

import { Links } from "assets/store/Sidebar";

const styles = (theme) => ({
  linkItem: {
    backgroundColor: "white",
    // boxShadow: "0 4px 20px 0px rgba(0,0,0,0.5) ",
    width: "100%",

    display: "flex",
    border: "1px solid  rgba(0,0,0,0.2)",

    color: "balck",
    alignItems: " center",
    marginTop: "10px",
  },
  linkItem1: {
    width: "100%",
    color: "black",
    alignItems: " center",
  },
  itemImg: { margin: "10px" },
  itemText: { margin: "10px" },
  headerSec: {
    borderBottom: "1px solid blue",
    width: "100%",
  },
  facebookSec: {
    marginTop: "10px",
  },
});

const useStyles = makeStyles(styles);

export default function (props) {
  const classes = { ...useStyles() };
  // const Links = Links;

  return (
    <div>
      {Links && Links.length > 0
        ? Links.map((value, key) => {
            return (
              <a
                className={classes.linkItem1}
                href={value.link}
                target="_blank"
                key={"link-" + key}
              >
                <div className={classes.linkItem}>
                  <img
                    className={classes.itemImg}
                    width="50px"
                    height="auto"
                    src={value.img}
                  />
                  <h6 className={classes.itemText}>{value.name}</h6>
                </div>
              </a>
            );
          })
        : null}
      <br />
      <Hidden smDown>
        <div className={classes.facebookSec}>
          <div
            dangerouslySetInnerHTML={{
              __html:
                '<iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fbulgan.bsg&tabs=timeline&width=270&height=800&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" type="text/babel" width="270" height="800" scrolling="no" frameborder="0" allowfullscreen="false" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" ></iframe>',
            }}
            style={{ marginBottom: "10px" }}
          ></div>
        </div>
      </Hidden>
    </div>
  );
}
