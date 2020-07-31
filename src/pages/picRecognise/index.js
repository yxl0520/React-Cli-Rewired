import React, { Component } from 'react';
import Style from './style.module.less'
// import Style from './style.less'

/**
 * 本地图片识别
 */
class Home extends Component {
  constructor() {
    super();

    this.state = {
      data: {}
    }
  }

  render() {
    console.log('Sytle', Style)
    return (
      <div className={Style['pic-local-recognise']}>
        <div className="title">
          <h2>本地图片识别</h2>
          <p className="describe">电脑上素材文件太多，客户着急要图怎么办？拖入客户图片，快速识别图像。</p>
        </div>
        <div className="step-one">
          <div className="step1-left">
            <img className="image1" src={require('./images/step1-client.png')} alt="" />
          </div>
          <div className="step1-right">
            <div className="step-title-step1">
              <div className="icon"></div>
              <div className="name">步骤</div>
            </div>
            <p className="p1">下载安装客户端</p>
            <p className="p2">下载最新版的链图云客户端</p>
            <p className="p2">按照提示完成安装</p>
            <div className="btn-down">
              <div className="icon"></div>
              <div className="name">下载链图云</div>
            </div>
          </div>
        </div>
        <div className="step-two">
          <div className="step2-left">
            <div className="left-wrapper"> 
              <div className="step-title-step2">
                <div className="icon"></div>
                <div className="name">步骤</div>
              </div>
              <p className="sub-title">添加文件夹</p>
              <p className="p2">在客户端<span className="span-blod">图库管家</span>页面，<span className="span-blod">添加</span>本地文件夹</p>
              <p className="p2">或添加移动硬盘 / NAS设备上面的文件夹</p>
              <p className="p2">可设置为<span className="span-blod">交易文件夹</span>或<span className="span-blod">普通文件夹</span></p>
            </div>
          </div>
          <div className="step2-right">
            <img className="image2" src={require('./images/step2-addfolder.png')} alt="" />
          </div>
        </div>
        <div className="step-three">
          <div className="step1-left">
            <img className="image1" src={require('./images/step3-recognise.png')} alt="" />
          </div>
          <div className="step1-right">
            <div className="step-title-step1">
              <div className="icon"></div>
              <div className="name">步骤</div>
            </div>
            <p className="p1">本地识图</p>
            <p className="p2">在客户端找图片页面，选择“<span className="span-blod">搜本机</span>”</p>
            <p className="p2"><span className="span-blod">拖拽</span>或<span className="span-blod">上传</span>文件，精确识图</p>
          </div>
        </div>
        <div className="step-four">
          <div className="step2-left">
            <div className="left-wrapper"> 
              <div className="step-title-step2">
                <div className="icon"></div>
                <div className="name">步骤</div>
              </div>
              <p className="sub-title">识别结果</p>
              <p className="p2">在您扫描的移动硬盘、磁盘阵列和NAS设备中</p>
              <p className="p2">全盘扫描识别搜图</p>
              <p className="p2">若结果不满意可进一步，精细识图</p>
            </div>
          </div>
          <div className="step2-right">
            <img className="image2" src={require('./images/step4-result.png')} alt="" />
          </div>
        </div>
      </div>
    )
  }

  // UNSAFE_componentWillMount() {
    componentDidMount() {
    document.title = '本地图片识别';
  }

  // componentWillUnmount() {
  //   //- 接触滚动事件
  //   $(window).unbind('scroll');
  // }
}

export default Home