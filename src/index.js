/**
 * 技术栈 react | hooks | redux | axios拦截器 | material-ui | antd-mobile
 */
import React from "react";
import ReactDOM from "react-dom";
import Router from "./router/index.js";
import "typeface-roboto";//material-ui 字体样式
import "antd-mobile/dist/antd-mobile.css";//antd样式
import "./utils/common.css"; //公共样式
import * as serviceWorker from "./serviceWorker";
import "lib-flexible";

const { render } = ReactDOM;
render(<Router />, document.getElementById("root"));

serviceWorker.unregister();
