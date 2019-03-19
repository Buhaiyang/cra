const {
  override,
  fixBabelImports,
  addLessLoader,
  disableEsLint,
  addDecoratorsLegacy,
  useBabelRc
} = require('customize-cra')
const addPrerenderSPAPlugin = config => {
  if (process.env.NODE_ENV === 'production') {
    const path = require('path')
    const PrerenderSPAPlugin = require('prerender-spa-plugin')
    config.plugins.push(
      new PrerenderSPAPlugin({
        staticDir: path.join(__dirname, 'build'),
        routes: ['/', '/insurance']
      })
    )
  }

  return config
}

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { 'primary-color': '#f96900', 'link-color': '#f96900' }
  }),
  disableEsLint(),
  addDecoratorsLegacy(),
  useBabelRc(),
  addPrerenderSPAPlugin
)
