import React from "react";
import Fade from "react-reveal/Fade";
import classnames from "classnames";
import ToutText from "./ToutText";
import ToutHeader from "./ToutHeader";
import Cta from "./Cta";

const ToutCopy = props => (
  <div className="toutCopy w-full sm:w-1/2">
    <Fade bottom>
      <ToutHeader />
      <ToutText />
      <div
        className={classnames({
          "hide-cta": props.hideCta
        })}
      >
        <Cta />
      </div>
    </Fade>
  </div>
);

export default ToutCopy;
