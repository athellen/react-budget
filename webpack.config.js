//has the job of bundling the files
const path = require("path"); //to read path we have in file
// const webpack = require("webpack")
const webpack = require("webpack");

process.env.NODE_ENV = process.env.NODE_ENV || "development";

if (process.env.NODE_ENV === "development") {
  require("dotenv").config({ path: ".env.development" });
}

module.exports = env => {
  console.log(env);
  return {
    //exporting objects
    entry: "./src/app.js", //to bundle app.js and produce output
    output: {
      //produce output
      path: path.join(__dirname, "public"), //create a key called path and joins them together to be able to read and puts them in a folder public
      filename: "bundle.js" //creaete a new file
    },
    module: {
      ////specifies the rules
      rules: [
        {
          loader: "babel-loader", //converts the code into what the broswer can understand
          test: /\.js$/, //rule that tells babel loader to convert only js files
          exclude: /node_modules/ //tells babel not to run node modules/dont bundle node modules
        },
        {
          test: /\.s?css$/, //scss another framework ?means or
          use: ["style-loader", "css-loader", "sass-loader"]
        }
      ]
    },

    plugins: [
      new webpack.DefinePlugin({
        "process.env.FIREBASE_API_KEY": JSON.stringify(
          process.env.FIREBASE_API_KEY
        ),
        "process.env.FIREBASE_AUTH_DOMAIN": JSON.stringify(
          process.env.FIREBASE_AUTH_DOMAIN
        ),
        "process.env.FIREBASE_DATABASE_URL": JSON.stringify(
          process.env.FIREBASE_DATABASE_URL
        ),
        "process.env.FIREBASE_PROJECT_ID": JSON.stringify(
          process.env.FIREBASE_PROJECT_ID
        ),
        "process.env.FIREBASE_STORAGE_BUCKET": JSON.stringify(
          process.env.FIREBASE_STORAGE_BUCKET
        ),
        "process.env.FIREBASE_MESSAGING_SENDER_ID": JSON.stringify(
          process.env.FIREBASE_MESSAGING_SENDER_ID
        ),
        "process.env.FIREBASE_APP_ID": JSON.stringify(
          process.env.FIREBASE_APP_ID
        )
      })
    ],
    devtool: "cheap-module-eval-source-map", //takes you to original file bundler
    devServer: {
      historyApiFallback: true,
      contentBase: path.join(__dirname, "public")
    }
  };
};
