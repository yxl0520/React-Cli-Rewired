import React from 'react'
// import { Router, Route, IndexRoute, Redirect, browserHistory, hashHistory } from 'react-router'
// import { IndexRoute } from 'react-router'
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'

import Home from '@/pages/home' //- 首页
import CssModuleDemo from '@/pages/cssModuleDemo' // css模块化演示
import Picdemo from '@/pages/picRecognise' // css模块化演示

// 嵌套路由
// import NestedRouter from '@/pages/nestedRoutes'
import NestHome from '@/pages/nestedRoutes/HomeComponent'
import NestLogin from '@/pages/nestedRoutes/LoginComponent'

export const RouteConfig = (
  <Router>
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/moduledemo" component={CssModuleDemo} />
      <Route exact path="/picdemo" component={Picdemo} />

      {/* React-Router 4是不支持嵌套路由的，我们可是使用重定向功能：实现默认展示组件，实现与之前版本的IndexRoute相同功能 */}
      <Route exact path="/nest" render={()=>(
        <Redirect to="/nest/home" />
      )} />
      <Route exact path="/nest/home" component={NestHome} />
      <Route path="/nest/login" component={NestLogin} />

      <Redirect from="*" to="/" />

    </Switch>
  </Router>
)

export default RouteConfig
