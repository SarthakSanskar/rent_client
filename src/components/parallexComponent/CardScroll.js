import React from "react";
import { Controller, Scene } from "react-scrollmagic";
import { Tween } from "react-gsap";
import CardScrollCopy from "./CardScrollCopy";
import CardScrollCards from "./CardScrollCards";

class CardScroll extends React.Component {
  render() {
    return (
      <div className="cardscroller">
        <div className="cardscroll-proto">
          <Controller>
            <Scene triggerElement="#card4" offset={180} duration={240}>
              {progress => (
                <Tween
                  from={{
                    css: { transform: "translate(0px, 0px)" },
                    ease: "easeInOut"
                  }}
                  to={{
                    css: { transform: "translate(0px, -240px)" },
                    ease: "easeInOut"
                  }}
                  totalProgress={progress}
                  paused
                >
                  <h1 className="cardScroller-heading">Here is some text</h1>
                </Tween>
              )}
            </Scene>
          </Controller>

          <CardScrollCards />
          <Controller>
            <Scene triggerElement="#card4" offset={180} duration={140}>
              {progress => (
                <Tween
                  from={{
                    css: { opacity: "1" }
                  }}
                  to={{
                    css: { opacity: "0" }
                  }}
                  totalProgress={progress}
                  paused
                >
                  <div className="card-scroll-copy-cont">
                    <CardScrollCopy />
                  </div>
                </Tween>
              )}
            </Scene>
          </Controller>
        </div>
      </div>
    );
  }
}

export default CardScroll;
