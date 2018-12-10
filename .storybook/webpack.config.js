const path = require('path')
const rootPath = path.join(__dirname, '../')

module.exports = (baseConfig, env, defaultConfig) => {
  defaultConfig.module.rules.push({
    test: /\.tsx?$/,
    use: [
      {
        loader: 'awesome-typescript-loader',
        options: {
          useBabel: true,
          transpileOnly: true
        }
      },
      {
        loader: 'tslint-loader'
      },
      'stylelint-custom-processor-loader'
    ],
    exclude: /node_modules/
  })
  defaultConfig.resolve.extensions.push('.ts', '.tsx')
  defaultConfig.resolve.alias['@'] = path.join(rootPath, 'src')

  return defaultConfig
}
