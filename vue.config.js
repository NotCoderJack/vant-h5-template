const path = require('path')

const resolveAlias = (alias) => {
  for (key in alias) {
    alias[key] = path.resolve(__dirname, alias[key])
  }
  return alias
}
module.exports = {
  chainWebpack (config) {
    config.module.rules.delete('svg')
    config.module
      .rule('svg-sprite-loader')
      .test(/\.svg$/)
      .include
      .add(path.resolve(__dirname, 'src/assets/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
  },
  configureWebpack: {
    resolve: {
      alias: resolveAlias({
        '@views': 'src/views/'
      })
    }
  },
  devServer: {
    disableHostCheck: true
  },
  css: {
    loaderOptions: {
      less: {
        // 若使用 less-loader@5，请移除 lessOptions 这一级，直接配置选项。
        // lessOptions: {
          modifyVars: {
            // 直接覆盖变量
            'text-color': '#111',
            'border-color': '#eee',
            'button-primary-background-color': '#108ee9',
            'button-border-radius': '4px',
            // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
            // hack: `true; @import "your-less-file-path.less";`,
          },
        // },
      },
    },
  },
}
