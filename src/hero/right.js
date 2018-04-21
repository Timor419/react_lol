import React,{ Component } from 'react';
import './right.css';
import ProgressBar from "./progress_bar";
import StartTime from "./start_time";
import Other from "./other";
import Owner from "./owner";


class Right extends Component{
    render() {
        return(
            <span className={"right"}>
                <Owner/>
                <StartTime/>
                <ProgressBar/>
                <Other/>
            </span>
        );
    }
}

export default Right;