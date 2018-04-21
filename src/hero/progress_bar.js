import React,{ Component } from 'react';
import {Progress} from "antd";
import './progress_bar.css';

class ProgressBar extends Component {
    render() {
        return(
            <div className={"progress_bar"}>
                <Progress percent={50} size="small" status="active" />
            </div>
        );
    }
}

export default ProgressBar;