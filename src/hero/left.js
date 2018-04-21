import React, {Component} from 'react';
import './left.css';
import HeroName from "./hero_name";
import HeroPicture from "./hero_picture";
import HeroIntroduction from "./hero_introduction";

class Left extends Component {
    render() {
        return(
            <span className={"left"}>
                <HeroPicture/>
                <HeroIntroduction/>
            </span>
        );
    }
}

export default Left;