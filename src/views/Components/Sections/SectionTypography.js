import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Quote from "components/Typography/Quote.js";

import aj_profile from "assets/img/faces/aj_profile.jpg";
import jean_profile from "assets/img/faces/jean_profile.jpg";
import geo_profile from "assets/img/faces/geo_profile.jpg";
import shebin_profile from "assets/img/faces/shebin_profile.jpg";

import styles from "assets/jss/material-kit-react/views/componentsSections/typographyStyle.js";

const useStyles = makeStyles(styles);

export default function SectionTypography() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div id="typography">
          <GridContainer>
            <div className={classes.typo}>
              <h1>Like minded peoples</h1>
            </div>
          </GridContainer>
        </div>
        <div className={classes.space50} />
        <div id="images">
          <div className={classes.title}>
            <h2>Founders</h2>
          </div>
          <br />
          <GridContainer>
            <GridItem xs={12} sm={2}>
              <h4>Jean</h4>
              <img
                src={jean_profile}
                alt="..."
                className={classes.imgRounded + " " + classes.imgFluid}
              />
            </GridItem>
            <GridItem xs={12} sm={2} className={classes.marginLeft}>
              <h4>Shebin</h4>
              <img
                src={shebin_profile}
                alt="..."
                className={classes.imgRounded + " " + classes.imgFluid}
              />
            </GridItem>
            <GridItem xs={12} sm={2} className={classes.marginLeft}>
              <h4>Geo</h4>
              <img
                src={geo_profile}
                alt="..."
                className={classes.imgRounded + " " + classes.imgFluid}
              />
            </GridItem>
            <GridItem xs={12} sm={2} className={classes.marginLeft}>
              <h4>Aj</h4>
              <img
                src={aj_profile}
                alt="..."
                className={classes.imgRounded + " " + classes.imgFluid}
              />
            </GridItem>
          </GridContainer>
          <GridContainer />
          <div className={classes.typo}>
            <div className={classes.note}>Shebin says</div>
            <Quote
              text="Helping the people who tried before will never fail. Here we aggressive in fund raising to help to them. They will bring powers to them and their surroundings."
              author=" Owner, SP designs"
            />
          </div>
          <div className={classes.typo}>
            <div className={classes.note}>AJ says</div>
            <Quote
              text="Helping the people who tried before will never fail. Here we aggressive in fund raising to help to them. They will bring powers to them and their surroundings."
              author=" Owner, Learn from failures"
            />
          </div>
          <div className={classes.typo}>
            <div className={classes.note}>Jean says</div>
            <Quote
              text="Helping the people who tried before will never fail. Here we aggressive in fund raising to help to them. They will bring powers to them and their surroundings."
              author=" Engineer, Flex"
            />
          </div>
          <div className={classes.typo}>
            <div className={classes.note}>Geo says</div>
            <Quote
              text="Helping the people who tried before will never fail. Here we aggressive in fund raising to help to them. They will bring powers to them and their surroundings."
              author=" Accountant, Ford"
            />
          </div>
        </div>
        <div className={classes.space50} />
      </div>
    </div>
  );
}
