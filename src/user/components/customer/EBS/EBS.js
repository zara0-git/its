import React from "react";

import GridContainer from "components/Grid/GridContainer";

import NavPills from "user/components/customComponents/CustomNavPills";
import Swipe from "user/components/Swipe/Swipe";
//data\
import { EBSList } from "assets/store/EBSList";
import { makeStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  haha: {
    borderBottom: "1px solid rgba(0,0,0,0.2)",
  },
  imgCont: {},
  text: {
    textAlign: "justify",
    textIndent: "50px",
    padding: " 10px",
  },
});

const useStyles = makeStyles(styles);

export default function EBS(props) {
  var tabs = [];
  const classes = { ...useStyles() };
  React.useEffect(() => {}, []);
  const images = [];

  if (EBSList && EBSList.length > 0) {
    EBSList.map((tab, key) => {
      tabs.push({
        main: tab.main,
        tabButton: tab.name,

        tabContent: (
          <span>
            <h5 className={classes.haha}>{tab.name}</h5>
            <div className={classes.imgCont}>
              {" "}
              <img src={tab.img[0]} width="100%" />
            </div>

            <p className={classes.text}>{tab.text}</p>
          </span>
        ),
      });
    });
  }
  return (
    <GridContainer>
      <NavPills
        color="info"
        horizontal={{
          tabsGrid: { xs: 4, sm: 4, md: 3 },
          contentGrid: { xs: 8, sm: 8, md: 9 },
        }}
        tabs={tabs}
      />
    </GridContainer>
  );
}
