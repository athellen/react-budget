//has the job of bundling the files
const path = require('path');//to read path we have in file
// const webpack = require("webpack")
module.exports = { //exporting objects
    entry: './src/playground/redux-101.js', //to bundle app.js and produce output
    output: {//produce output
        path: path.join(__dirname, 'public'),//create a key called path and joins them together to be able to read and puts them in a folder public
        filename: 'bundle.js'//creaete a new file
    },
    module: {////specifies the rules
        rules: [{
            loader: 'babel-loader',//converts the code into what the broswer can understand
            test: /\.js$/,//rule that tells babel loader to convert only js files
            exclude: /node_modules///tells babel not to run node modules/dont bundle node modules
        },{
            test: /\.s?css$/,//scss another framework ?means or
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    devtool: 'cheap-module-eval-source-map',//takes you to original file bundler
    devServer: {
        //running server....create a server and then checks the contents of the file
        inline:false,
    //    historyApiFallBack: true
        contentBase: path.join(__dirname, 'public'),
    }
};