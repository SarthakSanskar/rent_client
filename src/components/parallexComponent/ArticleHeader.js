import React from "react";
import classnames from "classnames";

const ArticleHeader = props => (
  <p className={classnames("article-intro w-4/5 text-xl sm:text-4xl")}>
    Developing an intuitive system to control multiple in-vehicle systems.
  </p>
);

export default ArticleHeader;
