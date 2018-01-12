import React, { Component } from "react";
import PropTypes from "prop-types";
import style from "./Example.scss";

export default class Example extends Component {
  static propTypes = {
    message: PropTypes.string
  };

  render() {
    const { message } = this.props;
    return <div className={style.Example}>{message}</div>;
  }
}
