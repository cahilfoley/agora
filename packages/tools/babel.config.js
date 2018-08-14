module.exports = {
  presets: ['@babel/preset-env'],
  plugins: [
    [
      'module-resolver',
      {
        root: 'src'
      }
    ],
    [
      '@babel/plugin-proposal-class-properties',
      {
        spec: true
      }
    ],
    '@babel/plugin-proposal-object-rest-spread'
  ]
}
