// 按需引入抽离的功能块（后缀名js不能省略）
import { marquee } from "./marquee.js";
import { tab } from "./tab.js";

// 引入css文件
import "../style/index.css";
// 引入less文件
import "../style/index.less";
// 引入字体图标库
import "../assets/fonts/iconfont.css";
/* 
    创建img元素并引入图片
*/

// 1、获取图片路径
import gifSrc from "../assets/1.gif";
import pngSrc from "../assets/logo_small.png";

// 2、创建dom元素
const gif = document.createElement("img");
const png = document.createElement("img");

// 3、引入图片
gif.src = gifSrc;
png.src = pngSrc;

// 4、在body中追加dom元素
document.body.appendChild(gif);
document.body.appendChild(png);

marquee();
tab();
