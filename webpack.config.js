
// webpack bundles data to help loading times and keeps everything orginized
const path = require('path');
const postCSSPlugins = [
    require('postcss-simple-vars'),
    require('postcss-nested'),
    require('autoprefixer')
]
module.exports = {
    entry: './app/assets/scripts/App.js',// what we want to bundle
    output: {
        filename: 'bundled.js',
        path: path.resolve(__dirname, 'app')
    },// where we want to put the bundeled code
    mode: 'development',
    watch: true, //makes it keep runing an watch for changes
    module: {
        rules: [ //tells web pack what to do with specific files
            {//test if the file name ends in .css
                test: /\.css$/i,
                use: ['style-loader','css-loader?url=false', {loader: 'postcss-loader', options: {plugins: postCSSPlugins}}]
            }
        ]
    }
}