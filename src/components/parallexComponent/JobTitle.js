import React from "react";
import OnVisible from "react-on-visible";
import classnames from "classnames";

const JobTitle = props => (
  <div className={classnames("staff-header w-4/5 text-xl absolute")}>
    <div className="view-article pb-6">
      <OnVisible
        visibleClassName="extend-line"
        percent={100}
        className={classnames("view-article-line")}
      />
      <div className="view-article-link">Department</div>
    </div>
    <span className="staff-name block text-white">Full Name</span>
    <span className="job-title block text-white">Job Title</span>
  </div>
);

export default JobTitle;
