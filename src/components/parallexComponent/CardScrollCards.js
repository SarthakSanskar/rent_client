import React from "react";
import { Controller, Scene } from "react-scrollmagic";
import { Tween } from "react-gsap";

class CardScrollCards extends React.Component {
  render() {
    return (
      <div className="cardscroll-cont">
        <ul>
          <li className="card">
            <Controller>
              <Scene triggerElement="#card2" offset={0} duration={200}>
                {progress => (
                  <Tween
                    from={{
                      css: {
                        transform: "translate(0px, 0px) scale(1)",
                        opacity: "1"
                      },
                      ease: "easeInOut"
                    }}
                    to={{
                      css: {
                        transform: "translate(0px, -40px) scale(0.9)",
                        opacity: "0"
                      },
                      ease: "easeInOut"
                    }}
                    totalProgress={progress}
                    paused
                  >
                    <div className="card-contents" id="card1" />
                  </Tween>
                )}
              </Scene>
            </Controller>
          </li>
          <li className="card">
            <Controller>
              <Scene triggerElement="#card3" offset={0} duration={200}>
                {progress => (
                  <Tween
                    from={{
                      css: {
                        transform: "translate(0px, 0px) scale(1)",
                        opacity: "1"
                      },
                      ease: "easeInOut"
                    }}
                    to={{
                      css: {
                        transform: "translate(0px, -40px) scale(0.9)",
                        opacity: "0"
                      },
                      ease: "Strong.easeOut"
                    }}
                    totalProgress={progress}
                    paused
                  >
                    <div className="card-contents" id="card2" />
                  </Tween>
                )}
              </Scene>
            </Controller>
          </li>
          <li className="card">
            <Controller>
              <Scene triggerElement="#card4" offset={0} duration={200}>
                {progress => (
                  <Tween
                    from={{
                      css: {
                        transform: "translate(0px, 0px) scale(1)",
                        opacity: "1"
                      },
                      ease: "easeInOut"
                    }}
                    to={{
                      css: {
                        transform: "translate(0px, -40px) scale(0.9)",
                        opacity: "0"
                      },
                      ease: "Strong.easeOut"
                    }}
                    totalProgress={progress}
                    paused
                  >
                    <div className="card-contents" id="card3" />
                  </Tween>
                )}
              </Scene>
            </Controller>
          </li>
          <li className="card">
            <div className="card-contents" id="card4" />
          </li>
        </ul>
      </div>
    );
  }
}

export default CardScrollCards;
