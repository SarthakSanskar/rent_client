import React from "react";
import Fade from "react-reveal/Fade";
import classnames from "classnames";

const IntroContent = props => (
  <div className={classnames("pullout w-full mb-8", props.pulloutBackground)}>
    <div className="pullout-content relative flex sm:block w-11/12 sm:w-full ml-auto">
      <Fade bottom>
        <h2
          className={classnames(
            "pullout-header w-11/12 sm:w-4/12 mx-auto text-3xl text-center sm:text-4xl leading-tight",
            props.ICHeadingColour
          )}
        >
          Designed around your specific requirements and capabilities
        </h2>
        <div className="pullout-copy w-11/12 mx-auto flex">
          <div className="pullout-image relative left-0 w-1/2 block" />
          <div className="pullout-subheading ml-auto text-base pt-12 pb-0 sm:pb-16 pr-4 sm:pr-10 w-10/12 sm:w-4/12">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </div>
        </div>
      </Fade>
    </div>
  </div>
);

export default IntroContent;
