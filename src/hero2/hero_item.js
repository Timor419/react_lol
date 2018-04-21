import React, {Component} from 'react';
import './hero_item.css'

export default class HeroItem extends Component {
    render() {
        let hero = this.props.hero;
        return (
            <div className={'cp_hero_item'}>
                <div className={'title'}>{this.props.title}</div>
                <div>{hero.name}</div>
                <div>{hero.nickname}</div>
                <img src={hero.avatar}/>
                <p>{hero.story}</p>
            </div>
        );
    }
}

