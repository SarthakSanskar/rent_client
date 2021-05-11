import React, { Fragment } from "react";
import Card from "./Card";

class NewsCard extends React.Component {
  render() {
    return (
      <Fragment>
        <div className="card-collection">
          {/* <Card
            cardType="article-card latest-news"
            cardMobile="w-11/12"
            cardCollection="mr-8 relative"
            showArticleHeader={true}
            viewArticleLink={true}
            showJobTitle={false}
          />
          <Card
            cardType="article-card latest-news"
            cardMobile="w-11/12"
            cardBackground="article-card__background-image"
            cardCollection="mr-8 relative"
            showArticleHeader={true}
            viewArticleLink={true}
            showJobTitle={false}
          />
          <Card
            cardType="article-card latest-news"
            cardMobile="w-11/12"
            cardCollection="mr-8 relative"
            showArticleHeader={true}
            viewArticleLink={true}
            showJobTitle={false}
          /> */}
          <Card
            cardType="article-card newsletter-card"
            cardMobile="w-11/12"
            cardCollection="mr-8 relative"
            showArticleHeader={false}
            viewArticleLink={false}
            showJobTitle={false}
            joinNewsletter={true}
          />
          <Card
            cardType="article-card latest-news"
            cardMobile="w-11/12"
            cardBackground="article-card__background-image"
            cardCollection="mr-8 relative"
            showArticleHeader={true}
            viewArticleLink={true}
            showJobTitle={false}
          />
          <Card
            cardType="article-card latest-news"
            cardMobile="w-11/12"
            cardCollection="mr-8 relative"
            showArticleHeader={true}
            viewArticleLink={true}
            showJobTitle={false}
          />
        </div>
      </Fragment>
    );
  }
}

export default NewsCard;
