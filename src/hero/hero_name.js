import React,{ Component } from 'react';
import './hero_namr.css';

class HeroName extends Component {
    render() {
        return(
            <div className={"hero_name"}>
                提莫
                {this.props.name}
            </div>
        );
    }
}

export default HeroName;