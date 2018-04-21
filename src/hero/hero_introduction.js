import React, {Component} from 'react';
import HeroName from "./hero_name";
import Introduction from "./introduction";

class HeroIntroduction extends Component {
    render() {
        return (
            <span className={"hero_introduction"}>
                <HeroName name={"迅捷斥候"}/>
                <Introduction/>
            </span>
        );
    }
}

export default HeroIntroduction;