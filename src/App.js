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
        fixed: [
            {
                name: '迅捷斥候',
                nickname: '提莫',
                avatar: 'http://ossweb-img.qq.com/images/lol/img/champion/Teemo.png',
                story: '不惧艰难险阻、不惧坎坷危途，提莫怀着无比的热情和欢欣的精神探索着整个世界。作为一个约德尔人，他对自己的道德观坚定不移，同时对班德尔斥候的信条感到自豪，有的时候，他的热忱甚至会让他无法看到，自己行为会在更大的意义上导致什么样的后果。虽然有的人认为这支斥候小队是否真正存在还有待商榷，但有一件事是肯定的：提莫的信念绝不容小觑',
            }, {
                name: '迅捷斥候2',
                nickname: '提莫',
                avatar: 'http://ossweb-img.qq.com/images/lol/img/champion/Teemo.png',
                story: '不惧艰难险阻、不惧坎坷危途，提莫怀着无比的热情和欢欣的精神探索着整个世界。作为一个约德尔人，他对自己的道德观坚定不移，同时对班德尔斥候的信条感到自豪，有的时候，他的热忱甚至会让他无法看到，自己行为会在更大的意义上导致什么样的后果。虽然有的人认为这支斥候小队是否真正存在还有待商榷，但有一件事是肯定的：提莫的信念绝不容小觑',
            }, {
                name: '迅捷斥候3',
                nickname: '提莫',
                avatar: 'http://ossweb-img.qq.com/images/lol/img/champion/Teemo.png',
                story: '不惧艰难险阻、不惧坎坷危途，提莫怀着无比的热情和欢欣的精神探索着整个世界。作为一个约德尔人，他对自己的道德观坚定不移，同时对班德尔斥候的信条感到自豪，有的时候，他的热忱甚至会让他无法看到，自己行为会在更大的意义上导致什么样的后果。虽然有的人认为这支斥候小队是否真正存在还有待商榷，但有一件事是肯定的：提莫的信念绝不容小觑',
            }
        ],
        server: []
    };

    componentWillMount() {
        this.fetchListData(1);
    }

    clickButton(e) {
        this.fetchListData(1);
    }

    fetchListData(page, pageSize=7) {
        getListHeroes(page, pageSize)
            .then(list => this.setState({
                    server: list
                })
            );
    }

    onPageChange(targetPage) {
        this.fetchListData(targetPage);
    }

    render() {
        let heroItems = [];
        for (let i = 0; i < this.state.fixed.length; i++) {
            let heroItem = <HeroItem hero={this.state.fixed[i]} title={'列表数据'}/>;
            heroItems.push(heroItem);
        }

        let serverHeroItems = [];
        for (let i = 0; i < this.state.server.length; i++) {
            let serverHeroItem = <HeroItem hero={this.state.server[i]} title={'后端数据'}/>;
            serverHeroItems.push(serverHeroItem);
        }

        return (
            <div className="App">
                {/*<List/>*/}

                {/*{heroItems}*/}

                <Button onClick={this.clickButton.bind(this)}>请求后端数据</Button>
                {serverHeroItems}

                <Paginations pageChangeHandler={this.onPageChange.bind(this)} />
            </div>
        );
    }
}

export default App;
