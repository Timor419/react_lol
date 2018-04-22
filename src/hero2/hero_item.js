import React, {Component} from 'react';
import './hero_item.css'

export default class HeroItem extends Component {
    render() {
        let hero = this.props.hero;
        return (
            <div className={'cp_hero_item'}>
                {/*<div className={'title'}>{this.props.title}</div>*/}
                <img className={"hero_avatar"} src={hero.avatar}/>
                <div className={"hero_name"}>
                    <div className={"nickname"}>{hero.nickname}</div>
                    <div>({hero.name})</div>
                </div>
                <p>{hero.story}</p>
            </div>
        );
    }
}

