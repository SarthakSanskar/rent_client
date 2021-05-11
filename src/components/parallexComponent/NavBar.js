import React from "react";
import classnames from "classnames";

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      prevScrollpos: window.pageYOffset,
      visible: true
    };
  }

  // Adds an event listener when the component is mount.
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  // Remove the event listener when the component is unmount.
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const { prevScrollpos } = this.state;
    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollpos > currentScrollPos;
    const pageHero = document.querySelector(".page-hero").clientHeight;
    const darken = pageHero < currentScrollPos;

    this.setState({
      prevScrollpos: currentScrollPos,
      visible,
      darken
    });
  };

  render() {
    return (
      <div
        className={classnames(
          "nav-bar",
          {
            "nav-bar--hidden": !this.state.visible
          },
          { "nav-bar--darken": this.state.darken }
        )}
      >
        <div className="nav-bar__cont">
          <div className="nav-bar__logo">
            <img
              src="https://mrb-code-handover-area.s3.eu-west-2.amazonaws.com/Sandbox/UHLogoRGBNewGreen.png"
              width="100%"
              alt="UH"
            />
          </div>
          <ul className="hidden sm:block">
            <li className="nav-bar-link nav-bar__active-link">Technology</li>
            <li className="nav-bar-link">Use Cases</li>
            <li className="nav-bar-link">Company</li>
            <li className="nav-bar-link">Create</li>
          </ul>
        </div>
        <div className="w-full sub-nav-bar-cont">
          <div className="sub-nav-bar">
            <ul className="hidden sm:block">
              <li className="sub-nav-bar-link sub-nav-bar__active-link">
                Technology
              </li>
              <li className="sub-nav-bar-link">Use Cases</li>
              <li className="sub-nav-bar-link">Company</li>
              <li className="sub-nav-bar-link">Create</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
