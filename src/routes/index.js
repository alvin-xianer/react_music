import React from 'react';
import { Redirect } from "react-router-dom";
import Index from '../pages/Index/index';
import Recommend from '../pages/Recommend/index';
import Singers from '../pages/Singers';
import RankList from '../pages/RankList';

export default [
  {
    path: "/",
    component: Index,
    routes: [
      {
        path: "/",
        exact: true,
        render: () => (
          <Redirect to={"/recommend"}/>
        )
      },
      {
        path: "/recommend",
        component: Recommend
      },
      {
        path: "/singers",
        component: Singers
      },
      {
        path: "/rank",
        component: RankList
      }
    ]
  }
]