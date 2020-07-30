const {
  override,
  addWebpackAlias,
  addLessLoader,

} = require('customize-cra')
const path = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const myPlugin = [
  new UglifyJsPlugin({
    uglifyOptions: {
      warnings: false,
      compress: {
        drop_debugger: true,
        drop_console: true,
      },
    },
  }),
]

module.exports = override(
  addWebpackAlias({
    //路径别名
    '@': path.resolve(__dirname, 'src'),
  }),
  addLessLoader({
    lessOptions: {
      strictMath: true,
      noIeCompat: true,
      javascriptEnabled: true,
      // localIdentName: '[path][local]--[hash:base64:8]',
      // cssLoaderOptions: {},
      cssModules: {
        localIdentName: '[local]--[hash:base64:6]' // if you use CSS Modules, and custom `localIdentName`, default is '[local]--[hash:base64:5]'.
      }
    }
  }),
  (config) => {
    // 暴露webpack的配置 config ,evn
    // console.log('webpack-config', config)

    // 1.去掉打包生产map 文件
    // config.devtool = config.mode === 'development' ? 'cheap-module-source-map' : false;

    // 2.生产环境关闭devtool
    if (process.env.NODE_ENV === 'production') config.devtool = false

    // 3.非开发环境，添加自定义插件，如代码压缩插件等...
    if (process.env.NODE_ENV !== 'development') config.plugins = [...config.plugins, ...myPlugin]

    // 4.修改、添加loader 配置 :
    // 备注：所有的loaders规则是在config.module.rules(数组)的第二项，即：config.module.rules[2].oneof  (如果不是，具体可以打印 一下是第几项目)
    // const loaders = config.module.rules.find((rule) =>
    //   Array.isArray(rule.oneOf)
    // ).oneOf
    
    return config
  }
)
