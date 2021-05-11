import React from "react";

class PageHero extends React.Component {
  render() {
    return (
      <div className="w-full flex items-center page-hero">
        <div className="text-center mx-auto">
          <h1 className="text-white font-bold text-3xl sm:text-6xl">
          Quest for your perfect abode ends here
          </h1>
          <h3 className="page-hero-sub text-base sm:text-2xl text-white">
            Come and join US
          </h3>
        </div>
      </div>
    );
  }
}

export default PageHero;
