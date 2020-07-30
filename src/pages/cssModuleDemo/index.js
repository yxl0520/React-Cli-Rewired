import React from 'react';
// import logo from './logo.svg';

import './cssModuleDemo.css'
import styleMod from './cssModuleDemo.module.css';

import './cssModuleDemo.less';
import lessMod from './cssModuleDemo.module.less'

function CssModuleDemo() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <div className={styleMod['css-module']}> {/* 如果class含有“-”连字符，则使用数组下标的方式 */}
          <p>1.使用CSS Module</p>
          <span className={styleMod.content}>这部分内容，受“import ‘styleMod’ from ‘./App.module.css’影响”</span>
        </div>

        <div className="css-module">
          <p>2.不使用CSS Module</p>
          <span>该内容的样式受“import './App.css'”的影响</span>
        </div>

        <div className={lessMod['less-module']}>
          <p className="title">3.使用less Module</p>
          <span className="content">这部分内容，受“import ‘lessMod’ from ‘./App.module.less’影响</span>
          <div className={lessMod.lessStyle}>使用less嵌套写法Demo</div>
          <div className={lessMod.lessStyleNoSub}>不使用less嵌套写法Demo</div>
        </div>
        <div className="lessGolbal">
          <p className="title">4.Less不使用模块化</p>
          Edit <code>src/App.js</code> and save to reload.
        </div>
      </header>
    </div>
  );
}

export default CssModuleDemo;
