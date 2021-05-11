import React, { Component } from "react";
// import "../node_modules/react-dat-gui/build/react-dat-gui.css";
import DatGui, { DatNumber, DatSelect, DatButton } from "react-dat-gui";
import {Modal,Button} from 'antd';
import FluidAnimation from "../../components/fluidAnimation/react-fluid-animation";
import random from "random";
import Bounce from 'react-reveal/Bounce';
import { SendOutlined } from '@ant-design/icons';
import './buttonload.css'
import { Link } from 'react-router-dom';
import chalk from 'chalk';

const defaultConfig = {
  textureDownsample: 1,
  densityDissipation: 0.98,
  velocityDissipation: 0.99,
  pressureDissipation: 0.8,
  pressureIterations: 25,
  curl: 30,
  splatRadius: 0.005
};
const log = console.log;

log(chalk.blue('Hello') + ' World' + chalk.red('!'));
export default class App extends Component {
  state = {
    config: {
      ...defaultConfig
    }
  };

  componentDidMount() {
    this._reset();
  }

  render() {
    const { config } = this.state;

    return (
      <div
        style={{
          height: "85vh"
        }}
      >
        <FluidAnimation config={config} animationRef={this._animationRef} />

        <div
          style={{
            position: "absolute",
            zIndex: 1,
            height: '100%',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            padding: "1em",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "#fff",
            fontFamily: 'Quicksand, "Helvetica Neue", sans-serif',
            pointerEvents: "none"
          }}
        >
          <h1
            style={{
              fontSize: "4em",
              color: "grey",
              textShadow: "2px 2px 8px rgba(0, 0, 0, 0.5)"
            }}
          >
            {/* <Zoom left opposite cascade collapse> */}
            <Bounce delay={800} bottom cascade>
            <div className='center '>DREAM-E-RENT</div>
           {/* </Zoom> */}
           </Bounce>
          </h1>
          
        </div>
        <div style={{zIndex : 1, color:'red', background:'black'}} class="arrow bounce"><Link to={`/sanskar`}> 
            <p  >Getting Started <span className='ngmc'><SendOutlined /></span></p></Link>
          </div>
      </div>
    );
  }

  _animationRef = ref => {
    this._animation = ref;
    this._reset();
  };

  _onUpdate = config => {
    this.setState({ config });
  };

  _onClickRandomSplats = () => {
    this._animation.addSplats((5 + Math.random() * 20) | 0);
  };

  _onReset = () => {
    this.setState({ config: { ...defaultConfig } });
  };

  _reset() {
    if (this._animation) {
      this._animation.addRandomSplats(random.int(100, 180));
    }
  }
}
