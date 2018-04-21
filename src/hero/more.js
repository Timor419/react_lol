import React, {Component} from 'react';
import { Menu, Dropdown, Icon } from 'antd';

const menu = (
    <Menu>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">详情</a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">删除</a>
        </Menu.Item>
    </Menu>
);

class More extends Component {
    render() {
        return (
            <Dropdown overlay={menu}>
                <a className="ant-dropdown-link" href="#">
                    更多 <Icon type="down" />
                </a>
            </Dropdown>
        );
    }
}

export default More;