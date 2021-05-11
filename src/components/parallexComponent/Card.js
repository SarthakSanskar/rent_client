import React from "react";
import classnames from "classnames";
import OnVisible from "react-on-visible";
import ArticleHeader from "./ArticleHeader";
import ViewArticle from "./ViewArticle";
import JobTitle from "./JobTitle";
import StaffDescription from "./StaffDescription";
import JoinNewsletter from "./JoinNewsletter";

function AddArticleHeader(props) {
  const articleHeader = props.showArticleHeader;
  if (articleHeader) {
    return <ArticleHeader />;
  }
  return null;
}

function AddStaffDescription(props) {
  const staffDescription = props.showStaffDescription;
  if (staffDescription) {
    return <StaffDescription />;
  }
  return null;
}

function AddJobTitle(props) {
  const jobTitle = props.showJobTitle;
  if (jobTitle) {
    return <JobTitle />;
  }
  return null;
}

function AddViewArticle(props) {
  const viewArticle = props.viewArticleLink;
  if (viewArticle) {
    return <ViewArticle />;
  }
  return null;
}

function AddJoinNewsletter(props) {
  const joinNewsletter = props.joinNewsletter;
  if (joinNewsletter) {
    return <JoinNewsletter />;
  }
  return null;
}

const Card = props => (
  <OnVisible
    visibleClassName="card-appear"
    percent={50}
    className={classnames(
      "p-8 pb-0",
      props.cardType,
      props.cardBackground,
      props.cardMobile,
      props.cardCollection
    )}
  >
    <AddArticleHeader showArticleHeader={props.showArticleHeader} />
    <AddStaffDescription showStaffDescription={props.showStaffDescription} />
    <AddJobTitle showJobTitle={props.showJobTitle} />
    <AddViewArticle viewArticleLink={props.viewArticleLink} />
    <AddJoinNewsletter joinNewsletter={props.joinNewsletter} />
  </OnVisible>
);

export default Card;
