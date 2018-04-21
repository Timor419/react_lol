import React,{ Component } from 'react';
import { Pagination } from 'antd';
import './paginations.css';

function onChange(pageNumber) {
    console.log('Page: ', pageNumber);
}

class Paginations extends Component {
    render() {
        return(
            <div className={"paginations"}>
                <Pagination showQuickJumper defaultCurrent={2} total={500} onChange={onChange} />
            </div>
        );
    }
}

export default Paginations;