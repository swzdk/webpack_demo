// 按需引入抽离的功能块（后缀名js不能省略）
import { marquee } from "./marquee.js";
import { tab } from "./tab.js";

// 引入css文件
import "../style/index.css";
// 引入less文件
import "../style/index.less";
marquee();
tab();
