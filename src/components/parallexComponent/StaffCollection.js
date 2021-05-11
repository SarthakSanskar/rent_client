import React, { Fragment } from "react";
import Card from "./Card";

class StaffCollection extends React.Component {
  render() {
    return (
      <Fragment>
        <div className="card-collection staff-profiles w-full">
          <h1 className="green-font block text-4xl w-full p-12">
            Where great minds meet
          </h1>
          <Card
            cardType="staff-card"
            cardMobile="w-11/12"
            cardCollection="mr-8 relative"
            showJobTitle={true}
            showStaffDescription={true}
          />
          <Card
            cardType="staff-card"
            cardMobile="w-11/12"
            cardCollection="mr-8 relative"
            showJobTitle={true}
          />
          <Card
            cardType="staff-card"
            cardMobile="w-11/12"
            cardCollection="mr-8 relative"
            showJobTitle={true}
          />
          <Card
            cardType="staff-card"
            cardMobile="w-11/12"
            cardCollection="mr-8 relative"
            showJobTitle={true}
          />
          <Card
            cardType="staff-card"
            cardMobile="w-11/12"
            cardCollection="mr-8 relative"
            showJobTitle={true}
          />
          <Card
            cardType="staff-card"
            cardMobile="w-11/12"
            cardCollection="mr-8 relative"
            showJobTitle={true}
          />
          <Card
            cardType="staff-card"
            cardMobile="w-11/12"
            cardCollection="mr-8 relative"
            showJobTitle={true}
          />
          <Card
            cardType="staff-card"
            cardMobile="w-11/12"
            cardCollection="mr-8 relative"
            showJobTitle={true}
          />
        </div>
      </Fragment>
    );
  }
}

export default StaffCollection;
