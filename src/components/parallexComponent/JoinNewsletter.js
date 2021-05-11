import React from "react";
import classnames from "classnames";

const JoinNewsletter = props => (
  <div
    className={classnames(
      "latest-news-title green-font w-4/5 p-8 text-xl sm:text-5xl"
    )}
  >
    <h2 className="text-3xl sm:text-5xl">Stay up to date on the latest</h2>
    <div className="relative flex items-center pt-16">
      <img
        src="https://mrb-code-handover-area.s3.eu-west-2.amazonaws.com/Sandbox/arrow-green-down.png"
        alt="arrow"
      />
      <p className="text-base p-2 w-3/4">Sign up to our newsletter</p>
    </div>
  </div>
);

export default JoinNewsletter;
