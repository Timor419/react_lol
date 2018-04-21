import React, {Component} from 'react';
import More from "./more";
import Edit from "./edit";
import './other.css';
import {Divider} from "antd";

class Other extends Component {
    render() {
        return (
            <span className={"other"}>
                <Edit/>
                <Divider type="vertical" />
                <More/>
            </span>
        );
    }
}

export default Other;