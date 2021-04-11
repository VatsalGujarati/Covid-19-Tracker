import { Card, CardContent, Typography } from "@material-ui/core";
import React from "react";
import "./InfoBox.css";

function InfoBox({ title, cases, isRed, isGrey, active, total, ...props }) {
  return (
    <div
      onClick={props.onClick}
      className={`infoBox ${active && "infoBox--selected"} ${
        isRed && "infoBox--red"
      } ${isGrey && "infoBox--grey"}`}
    >
      <Card>
        <CardContent>
          <Typography className="infoBox_title" color="textSecondary">
            {title}
          </Typography>
          <h2
            className={`infoBox_cases ${!isRed && "infoBox_cases--green"} ${
              isGrey && "infoBox_cases--grey"
            }`}
          >
            {cases}
          </h2>
          <Typography className="infoBox_total"> {total} Total</Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default InfoBox;
