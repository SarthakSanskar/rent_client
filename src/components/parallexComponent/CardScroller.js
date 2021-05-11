import React from "react";
import classnames from "classnames";
import styled from "styled-components";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { Controller, Scene } from "react-scrollmagic";
import { Tween } from "react-gsap";

const featureCards = ["one", "two", "three", "four"];
const numberOfCards = featureCards.length - 1;

const CardSlider = styled.div`
  .feature-card {
    width: 100%;
    height: 0;
    padding-top: 58%;
    margin: 0 auto;
    position: relative;
    background: #00cf75;
    top: 100%;
  }
`;

class CardScroller extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      featureCards,
      numberOfCards,
      firstCard: "first-card"
    };
  }

  render() {
    const { firstCard } = this.state;
    console.log(featureCards);
    return (
      <div className="card-scroller">
        <div
          className="feature-card-cont"

          // onMouseEnter={event => {
          //   this.lockBody(event);
          // }}
          // onMouseLeave={event => {
          //   this.freeScroll(event);
          // }}
        >
          <CardSlider>
            <Controller>
              {this.state.featureCards.map((cards, i) => (
                <Scene
                  key={cards + "scene"}
                  triggerElement={"#target"}
                  duration={600}
                  pin={"#pin" + i}
                  id={"#pin" + i}
                >
                  {progress => (
                    <Tween
                      to={{
                        top: "0"
                      }}
                      ease="Strong.easeOut"
                      totalProgress={progress}
                      paused
                    >
                      <FeatureCard
                        key={cards}
                        index={i}
                        // frontCard={i === numberOfCards ? firstCard : ""}
                      />
                    </Tween>
                  )}
                </Scene>
              ))}
            </Controller>
          </CardSlider>
        </div>
      </div>
    );
  }
}

const FeatureCard = React.forwardRef((props, ref) => (
  <div
    ref={ref}
    id={props.pinTarget}
    className={classnames("feature-card", props.frontCard)}
  />
));

export default CardScroller;
