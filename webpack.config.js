// 引入path模块，又因为基本只用join命令，所以可以解构
const { join } = require("path");
//引入生成html插件(引入的是构造函数)
const HtmlWebpackPlugin = require("html-webpack-plugin");

// webpack向外暴露遵循COMMONJS规范
module.exports = {
  // 1、模式，有生产模式和开发环境（production/development）
  mode: "production",
  // 2、定义初始化入口（相对路径）
  entry: "./src/main.js",
  // 3、定义导出路径（绝对路径）+ 需要引入path模块
  output: {
    // path：导出文件路径，一般导出到lib文件夹
    path: join(__dirname, "./lib"),
    // filename：导出文件名
    filename: "index.js",
    // 导出时是否先清除目录
    clean: true,
  },
  // 4、导入生成html插件
  plugins: [
    new HtmlWebpackPlugin({
      // 指定作为模板的html文件，否则会重新生成
      template: join(__dirname, "./public/index.html"),
    }),
  ],
  // 5、因为webpack只能解析js和json文件，所以需要引入loader来拓展其他格式文件
  module: {
    rules: [
      {
        test: /\.css/i,
        // use内是从右向左执行，所以先用css-loader进行转换，再用style-loader来建立样式链接
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
