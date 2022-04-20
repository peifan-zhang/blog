(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{556:function(t,s,a){"use strict";a.r(s);var n=a(20),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"一行代码-黑-掉任意网站"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一行代码-黑-掉任意网站"}},[t._v("#")]),t._v(" 一行代码“黑”掉任意网站")]),t._v(" "),a("p",[t._v("实用技巧：只需一行代码，轻轻一点就可以把任意网站变成暗黑模式。\n")]),a("p",{attrs:{align:"center"}},[a("img",{staticStyle:{cursor:"zoom-in"},attrs:{src:"https://cdn.jsdelivr.net/gh/xugaoyi/image_store@master/blog/QQ20211125-163111.2tmjlvz28n80.png",width:"500"}})]),a("p"),t._v(" "),a("p",[t._v("首先我们先做一个实验，在任意网站中，打开浏览器开发者工具(F12)，在"),a("code",[t._v("Console")]),t._v("控制台输入如下代码并回车：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("documentElement"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("filter"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'invert(85%) hue-rotate(180deg)'")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("神奇的事情发生了，当前打开的网站变成了暗黑模式。")]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("原理解释")]),t._v(" "),a("ol",[a("li",[a("code",[t._v("document.documentElement")]),t._v(" 获取文档对象的根元素，即"),a("code",[t._v("<html>")]),t._v("元素")]),t._v(" "),a("li",[t._v("给"),a("code",[t._v("html")]),t._v("元素的"),a("code",[t._v(".style")]),t._v("样式添加"),a("code",[t._v("filter")]),t._v("滤镜样式为"),a("code",[t._v("invert(85%) hue-rotate(180deg)")])]),t._v(" "),a("li",[a("code",[t._v("invert()")]),t._v(" 反转图像。")]),t._v(" "),a("li",[a("code",[t._v("hue-rotate()")]),t._v("色相旋转。")])]),t._v(" "),a("p",[t._v("更多滤镜知识："),a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/filter",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("filter")]),a("OutboundLink")],1),t._v("。")])]),t._v(" "),a("p",[t._v("为了更方便实用，达到轻轻一点就可以对网页施加魔法🎉，")]),t._v(" "),a("p",[t._v("我们对代码做了一点点🤏🏻改动。（修正了滤镜对图片等元素的影响）")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("javascript")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" docStyle "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("documentElement"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("modeIndex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("    window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("modeIndex "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" styleList "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'invert(85%) hue-rotate(180deg)'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'invert(100%) hue-rotate(180deg)'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  modeIndex "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" modeIndex "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" styleList"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" modeIndex "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  docStyle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("filter "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" styleList"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("modeIndex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("querySelectorAll")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'img, picture, video'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("forEach")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("el")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" el"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("filter "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" modeIndex "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'invert(1) hue-rotate(180deg)'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("然后打开浏览器书签管理器，添加新书签，在网址栏粘贴这段代码并保存：\n")]),a("p",{attrs:{align:"center"}},[a("img",{staticStyle:{cursor:"zoom-in"},attrs:{src:"https://cdn.jsdelivr.net/gh/xugaoyi/image_store@master/blog/QQ20211125-154655.1byvlo5a60xs.png",width:"600"}})]),a("p"),t._v(" "),a("p",[t._v("以后在任意网站，只需要轻轻一点"),a("code",[t._v("切换模式")]),t._v("书签就可以让它变成85%的暗黑，再点一次就是100%的暗黑，再点一次变回正常模式。")]),t._v(" "),a("p",{attrs:{align:"center"}},[a("img",{staticStyle:{cursor:"zoom-in"},attrs:{src:"https://cdn.jsdelivr.net/gh/xugaoyi/image_store@master/blog/QQ20211125-163111.2tmjlvz28n80.png",width:"600"}})])])}),[],!1,null,null,null);s.default=e.exports}}]);