const presets = [
  ['@babel/preset-env', { useBuiltIns: 'entry' }],
  'react-app'
]
const plugins = []

if (process.env.NODE_ENV === 'development') {
  plugins.push('react-hot-loader/babel')
}

module.exports = { presets, plugins };
