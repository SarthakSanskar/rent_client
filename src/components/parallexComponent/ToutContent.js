import React from "react";
import ToutCopy from "./ToutCopy";
import ToutImage from "./ToutImage";

const ToutContent = props => (
  <div className={props.textDirection}>
    <ToutCopy />
    <ToutImage imge={'https://images.pexels.com/photos/3929230/pexels-photo-3929230.jpeg?cs=srgb&dl=pexels-sid-ahmed-benmansour-3929230.jpg&fm=jpg'} fullWidth={props.fullWidth} />
  </div>
);

export default ToutContent;
