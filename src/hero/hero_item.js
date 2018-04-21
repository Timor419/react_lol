import React,{ Component } from "react";
import Left from "./left";
import Right from "./right";
import './hero_item.css';

class HeroItem extends Component{
    render() {
        return(
            <div className={"hero_item"}>
                <Left/>
                <Right/>
            </div>
        );
    }
}

export default HeroItem;