import React from 'react';
import { renderRoutes } from "react-router-config";
import { NavLink } from 'react-router-dom';
import {Header, Tab, TabItem} from './style'
function Index (props) {
    const { route } = props;
    return (
        <div>
            <Header>
                <span className="iconfont menu">&#xe65c;</span>
                <span className="title">波音</span>
                <span className="iconfont search">&#xe62b;</span>
            </Header>
            <Tab>
                <NavLink to="/recommend" activeClassName="selected"><TabItem><span > 每日推荐 </span></TabItem></NavLink>
                <NavLink to="/singers" activeClassName="selected"><TabItem><span > 歌手 </span></TabItem></NavLink>
                <NavLink to="/rank" activeClassName="selected"><TabItem><span > 排行榜 </span></TabItem></NavLink>
            </Tab>
            { renderRoutes (route.routes) }
        </div>
    )
}

export default React.memo (Index);