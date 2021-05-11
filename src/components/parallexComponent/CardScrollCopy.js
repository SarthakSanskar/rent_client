import React from "react";
import { Controller, Scene } from "react-scrollmagic";
import { Tween } from "react-gsap";

class CardScrollCopy extends React.Component {
  render() {
    return (
      <Controller>
        <Scene triggerElement="#card1" offset={0} duration={200}>
          {progress => (
            <Tween
              from={{
                css: {
                  opacity: "0"
                },
                ease: "easeInOut"
              }}
              to={{
                css: {
                  opacity: "1"
                },
                ease: "Strong.easeOut"
              }}
              totalProgress={progress}
              paused
            >
              <div className="scroller-info">
                <p>SOME TEXT FOR CARD ONE</p>
              </div>
            </Tween>
          )}
        </Scene>
        <Scene triggerElement="#card2" offset={0} duration={200}>
          {progress => (
            <Tween
              from={{
                css: {
                  opacity: "0"
                },
                ease: "easeInOut"
              }}
              to={{
                css: {
                  opacity: "1"
                },
                ease: "Strong.easeOut"
              }}
              totalProgress={progress}
              paused
            >
              <div className="scroller-info">
                <p>HERE IS THE INFO FOR THE SECOND CARD</p>
              </div>
            </Tween>
          )}
        </Scene>
        <Scene triggerElement="#card3" offset={0} duration={200}>
          {progress => (
            <Tween
              from={{
                css: {
                  opacity: "0"
                },
                ease: "easeInOut"
              }}
              to={{
                css: {
                  opacity: "1"
                },
                ease: "Strong.easeOut"
              }}
              totalProgress={progress}
              paused
            >
              <div className="scroller-info">
                <p>AND NOW TIME FOR THE THIRD CARD</p>
              </div>
            </Tween>
          )}
        </Scene>
        <Scene triggerElement="#card4" offset={0} duration={200}>
          {progress => (
            <Tween
              from={{
                css: {
                  opacity: "0"
                },
                ease: "easeInOut"
              }}
              to={{
                css: {
                  opacity: "1"
                },
                ease: "Strong.easeOut"
              }}
              totalProgress={progress}
              paused
            >
              <div className="scroller-info">
                <p>THE FOURTH AND FINAL CARD</p>
              </div>
            </Tween>
          )}
        </Scene>
      </Controller>
    );
  }
}

export default CardScrollCopy;
