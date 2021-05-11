import React from "react";
import Fade from "react-reveal/Fade";
import OnVisible from "react-on-visible";
import classnames from "classnames";

const HiwOverlap = props => (
  <Fade bottom cascade>
    <div className={props.textDirection}>
      <div
        className={classnames(
          "hiw-overlap-image bg-image-src bg-cover bg-center h-0 relative sm:absolute ml-auto sm:mx-auto my-0 w-11/12 sm:w-2/5"
        )}
      />

      <div className="hiw-overlap-copy p-6 sm:pl-12 sm:w-2/5">
        <div className="hiw-marker text-white">
          <OnVisible
            visibleClassName="extend-line"
            percent={100}
            className={classnames("view-article-line", props.cardBackground)}
          />
          <div className="view-article-link">
            <a href="#algorithms">3. Algorithms</a>
          </div>
        </div>
        <h1 className=" hiw-overlap-copy-mw font-bold text-white text-4xl mt-5 mb-4 sm:mb-1 sm:mt-0">
          Each individual speaker can be triggered at different times.
        </h1>
        <div className="hiw-overlap-copy-mw text-white mr-3 sm:mx-0 text-sm">
          <p>
            Using our patented algorithms, each ultrasound speaker is triggered
            with very specific time differences.
          </p>
        </div>
      </div>
    </div>
  </Fade>
);

export default HiwOverlap;
