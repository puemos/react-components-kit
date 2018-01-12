import React, { Component } from "react";
import PropTypes from "prop-types";
import style from "./Example.scss";

export default class Example extends Component {
  static propTypes = {
    message: PropTypes.string
  };
  static defaultProps = {
    message: "Hello world, React is awesome !!!"
  };

  render() {
    const { message } = this.props;
    return <span className={style.Example}>{message}</span>;
  }
}
