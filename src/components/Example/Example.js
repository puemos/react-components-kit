import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Example extends Component {
    static propTypes = {
        message: PropTypes.string
    };

    render() {
        const { message } = this.props;
        return <div>{message}</div>;
    }
}
