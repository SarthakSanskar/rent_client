import React from "react";
import Fade from "react-reveal/Fade";
import OnVisible from "react-on-visible";
import classnames from "classnames";

const HiwSidebySide = props => (
  <div className={props.textDirection}>
    <Fade bottom cascade>
      <div
        className={classnames(
          "bg-image-src bg-image-padding bg-cover bg-center h-0 hidden sm:block sm:mx-0 sm:my-0 sm:w-2/4"
        )}
      />
      <div className="hiw-sbs-copy pb-0 pt-32 sm:py-32 pl-6 sm:pr-12 sm:w-2/6">
        <div className="hiw-marker text-black">
          <OnVisible
            visibleClassName="extend-line"
            percent={100}
            className={classnames("hiw-line bg-black", props.cardBackground)}
          />
          <div className="view-article-link">
            <a href="#algorithms">4. The focal point</a>
          </div>
        </div>

        <h1 className="text-4xl purple-font font-bold leading-tight relative z-10 mt-5 mb-0 sm:mb-4 sm:mb-1 sm:mt-0">
          By finding a focal point on your hand, we’re able to send the
          soundwaves to it.
        </h1>
        <div
          className={classnames(
            "hiw-sbs-mobile-image bg-image-src bg-cover bg-center block sm:hidden relative h-56 mx-auto my-0 w-full"
          )}
        />
        <div className="mr-3 sm:mx-0 text-sm">
          <p>
            Because of the triggered time differences, we’re able to ensure each
            ultrasound wave arrives at the same point, at the same time. Using
            our hand tracking device, we can then track the exact position of
            your hand and focus those waves on a certain point of it.
          </p>
        </div>
      </div>
    </Fade>
  </div>
);

export default HiwSidebySide;
