### 简介
> 通过实际的例子深入使用下webpack 打包文件，处理各种资源，以及配置开发环境，上线环境等。
> 学习地址：https://www.imooc.com/learn/802

#### 可能忘记的点
> 对.html文件进行打包
https://github.com/jantimon/html-webpack-plugin#minification

> 把js内容打包在html中，减少http请求：
https://www.imooc.com/video/14192     21:00
https://github.com/jantimon/html-webpack-plugin/blob/master/examples/inline/template.pug

#### 项目依赖
| 依赖包名  | 描述  | 网站地址 |
| :---------- | :----- | ------ |
| webpack，webpack-cli | 需要同时安装。 | https://webpack.docschina.org/guides/getting-started/ |
| @babel/core, babel-loader   |JavaScript 编译器，用于将 ECMAScript 2015+ 版本的代码转换为向后兼容的 JavaScript 语法，以便能够运行在当前和旧版本的浏览器或其他环境中。  |  https://www.babeljs.cn/docs/ |
| @babel/preset-env   | babel的一些智能预设，无需微观管理目标环境所需的语法转换 | https://babeljs.io/docs/en/babel-preset-env |
| style-loader，css-loader | 需要同时使用。两个loader的区别：https://blog.csdn.net/wu_xianqiang/article/details/104560613 |  |
| html-webpack-plugin | 对.html文件进行打包，处理在html中引用那些每次会随着编译而发生变化哈希的文件 。 | https://www.webpackjs.com/plugins/html-webpack-plugin/ |
| postcss-loader | 提供了一种方式用 JavaScript 代码来处理 CSS。它负责把 CSS 代码解析成抽象语法树结构（Abstract Syntax Tree，AST），再交由各种插件来进行处理css | https://webpack.js.org/loaders/postcss-loader/ |
| postcss-preset-env | 可以将现代CSS转换为大多数浏览器可以理解的内容，并根据目标浏览器或运行时环境确定所需的polyfill。 | https://www.npmjs.com/package/postcss-preset-env |

