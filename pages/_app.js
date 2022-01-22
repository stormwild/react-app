import React from "react";
import DigitalClock from "../components/DigitalClock";

import "./styles.css";

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: props.time,
    };
  }

  static async getInitialProps() {
    return { time: new Date().toISOString() };
  }

  tick() {
    this.setState(() => {
      return { time: new Date().toISOString() };
    });
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return <DigitalClock time={this.state.time} />;
  }
}

export default Index;
