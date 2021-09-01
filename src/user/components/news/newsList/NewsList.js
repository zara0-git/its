import React from "react";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core";

import { NewsLists } from "assets/store/NewsLists";
import DateRangeIcon from "@material-ui/icons/DateRange";
const styles = (theme) => ({
  newsItem: {
    position: "relative",
    margin: "10px",
    width: "calc(100%-20px)",
    justifyContent: "center",
    alignItems: "center",
  },
  newsImg: {
    width: "100%",
  },
  newsImgC: {
    width: "100%",
    height: "180px",
    overflow: "hidden",
  },
  newsTitle: {
    position: "absolute",

    bottom: "0",

    width: "100%",
    height: "35%",
    background: "rgba(0,0,0,0.5)",
    cursor: "pointer",
    color: "white",

    justifyContent: "center",
    alignItems: "center",
    "&:hover": {
      background: "rgba(0,0,0,0.2)",
    },
    "& h5": {
      textAlign: "center",
    },
  },
  newsDate: {
    "&:hover": {
      background: "rgba(0,0,0,0.1)",
    },

    fontSize: "12px",
    fontWeight: "300",
    alignItems: "center",
    width: "90px",
    fontStyle: "italic",
    display: "flex",
    justifyContent: "flex-end",
    position: "absolute",
    top: "0",
    background: "rgba(0,0,0,0.5)",
    width: "100%",
    height: "20%",

    cursor: "pointer",
    color: "white",
    "& span": {
      marginRight: "10px",
      marginLeft: "-10px",
    },
  },
});

const useStyles = makeStyles(styles);

export default function NewsList(props) {
  const classes = { ...useStyles() };
  return (
    <GridContainer>
      {NewsLists && NewsLists.length > 0
        ? NewsLists.map((value, key) => {
            return (
              <GridItem xs={12} sm={6} md={4} key={key}>
                <Link to={value.id ? "/home/news/" + value.id : "#"}>
                  <div className={classes.newsItem}>
                    <div className={classes.newsImgC}>
                      <img className={classes.newsImg} src={value.img[0]} />
                    </div>

                    <div className={classes.newsTitle}>
                      <h5 className={classes.h5tag}>
                        {value.title.length < 40
                          ? value.title
                          : value.title.substr(0, 40) + " . . ."}
                      </h5>
                    </div>

                    <div className={classes.newsDate}>
                      <span>
                        <DateRangeIcon
                          style={{
                            width: "13",
                            marginRight: "5px",
                            marginTop: "4px",
                          }}
                        />
                      </span>
                      <span>{value.date}</span>
                    </div>
                  </div>
                </Link>
              </GridItem>
            );
          })
        : null}
    </GridContainer>
  );
}
