
// webpack bundles data to help loading times and keeps everything orginized
const path = require('path');
const postCSSPlugins = [
    require('postcss-import'),
    require('postcss-simple-vars'),
    require('postcss-nested'),
    require('autoprefixer')
];

module.exports = {
    entry: './app/assets/scripts/App.js',// what we want to bundle
    output: {
        filename: 'bundled.js',
        path: path.resolve(__dirname, 'app')
    },// where we want to put the bundeled code
    devServer: {
        before: function(app, server) {
            server._watch('./app/**/*.html');
        },
        contentBase: path.join(__dirname, 'app'),
        hot: true, // allows web pack to insert new js and css without reload
        port: 3000,
        host: '0.0.0.0'//allows other devices on network to acess site
    },
    mode: 'development',
    //watch nolonger necessary after adding devServer
    //watch: true, //makes it keep runing an watch for changes
    module: {
        rules: [ //tells web pack what to do with specific files
            {//test if the file name ends in .css
                test: /\.css$/i,
                use: ['style-loader','css-loader?url=false', {loader: 'postcss-loader', options: {plugins: postCSSPlugins}}]
            }
        ]
    }
}