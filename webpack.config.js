var HtmlWebpackPlugin = require('html-webpack-plugin');    // 让html中可以引入随时变化的带hash的js文件
var path = require('path');


module.exports = {
  entry: {
    index: './src/index.js',
    a: './src/test/a.js',
    b: './src/test/b.js',
  },
  output: {
    // publicPath:'http://baidu.com',     // 打包后的index.html会在引用js文件的时候，<script src="http://baidu.com/js/main-974465177bc0d55efc28.js>
    path: __dirname + '/dist',
    filename: 'js/[name].js',
    // filename: 'js/[name]-[chunkhash].js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,   //用于配置「css-loader 作用于 @import 的资源之前」有多少个 loader。不写的话 postcss-loader不生效
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: [
                require('postcss-preset-env')({
                  autoprefixer: { grid: true },
                  // browsers: 'last 5 versions'
                })
              ],
            }
          }
        ]
      },

      {
        test: /\.less$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: [
                require('postcss-preset-env')()
              ],
            }
          },
          { loader: 'less-loader' },
        ]
      },

      {
        test: /\.js$/,
        include: [     // 只对该文件夹下的插件进行编译
          path.resolve(__dirname, '/src')
        ],
        exclude: [     // 不对该文件夹下的插件进行编译，加快打包速度
          path.resolve(__dirname, '/node_modules')
        ],
        loader: "babel-loader",
        options: {
          presets: ['@babel/preset-env']
        }
      },


      {
        test: /\.ejs$/,
        loader: "html-loader",
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './index.html',     // 把带hash的js文件和./index.html打包进dist
      inject: 'head',            // 把js脚本放在bead里（或body、false） 
      title: 'Page_A',     // 把参数传到生成后的dist/index.html中
      date: new Date(),
      // minify: {    // index.html代码压缩配置
      //   collapseWhitespace: true,    // 去掉空格
      //   removeComments: true,       // 去掉注释
      // },  
      chunks: ['index'],      // 生成的 Page_A.html只引入 a.js 和 b.js
      // excludeChunks: ['a','b']     // 引入除了 a.js 和 b.js 之外的js
    })
  ]
};
