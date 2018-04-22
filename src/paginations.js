import React, {Component} from 'react';
import {Pagination} from 'antd';
import './paginations.css';


class Paginations extends Component {

    onChange(pageNumber) {
        console.log('Page: ', pageNumber);
        this.props.pageChangeHandler && this.props.pageChangeHandler(pageNumber);
    }

    render() {
        return (
            <div className={"paginations"}>
                <Pagination showQuickJumper defaultCurrent={1} total={500} onChange={this.onChange.bind(this)}/>
            </div>
        );
    }
}

export default Paginations;