import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Paginations from "./paginations";
import List from "./hero/list";
import HeroItem from "./hero2/hero_item";
import {Button} from "antd";
import {findAllHeroes, getListHeroes} from './api.js'


class App extends Component {

    state = {
        fixed: {
            name: '迅捷斥候',
            nickname: '提莫',
            avatar: 'http://ossweb-img.qq.com/images/lol/img/champion/Teemo.png',
            story: '不惧艰难险阻、不惧坎坷危途，提莫怀着无比的热情和欢欣的精神探索着整个世界。作为一个约德尔人，他对自己的道德观坚定不移，同时对班德尔斥候的信条感到自豪，有的时候，他的热忱甚至会让他无法看到，自己行为会在更大的意义上导致什么样的后果。虽然有的人认为这支斥候小队是否真正存在还有待商榷，但有一件事是肯定的：提莫的信念绝不容小觑',
        },
        server: {
            name: '123456789'
        }
    };

    clickButton(e) {
        getListHeroes()
            .then(item => this.setState({
                server: item
            }));
    }

    render() {
        return (
            <div className="App">
                <List/>
                <Paginations/>

                <HeroItem hero={this.state.fixed} title={'写死的数据'}/>

                <Button onClick={this.clickButton.bind(this)}>请求后端数据</Button>
                <HeroItem hero={this.state.server} title={'后端请求的数据'}/>
            </div>
        );
    }
}

export default App;
