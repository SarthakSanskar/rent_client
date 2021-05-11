import React, { Fragment } from "react";
import Card from "./Card";

class CardCollection extends React.Component {
  render() {
    return (
      <Fragment>
        <div className="article-collection card-collection">
          <Card
            cardType="article-card"
            cardMobile="w-11/12"
            cardCollection="mr-8 relative"
            showArticleHeader={true}
            viewArticleLink={true}
            showJobTitle={false}
          />
          <Card
            cardType="article-card"
            cardMobile="w-11/12"
            cardBackground="article-card__background-image"
            cardCollection="mr-8 relative"
            showArticleHeader={true}
            viewArticleLink={true}
            showJobTitle={false}
          />
          <Card
            cardType="article-card"
            cardMobile="w-11/12"
            cardCollection="mr-8 relative"
            showArticleHeader={true}
            viewArticleLink={true}
            showJobTitle={false}
          />
          <Card
            cardType="article-card"
            cardMobile="w-11/12"
            cardCollection="mr-8 relative"
            showArticleHeader={true}
            viewArticleLink={true}
            showJobTitle={false}
          />
          <Card
            cardType="article-card"
            cardMobile="w-11/12"
            cardBackground="article-card__background-image"
            cardCollection="mr-8 relative"
            showArticleHeader={true}
            viewArticleLink={true}
            showJobTitle={false}
          />
          <Card
            cardType="article-card"
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

export default CardCollection;
