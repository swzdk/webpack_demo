// 引入path模块，又因为基本只用join命令，所以可以解构
const { join } = require("path");
// import path from "path";
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
    filename: "webpack_demo.js",
    // 导出时是否先清除目录
    clean: true,
  },
};
