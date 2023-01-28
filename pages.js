// 多页配置
module.exports = {
  // 页面名称（对应 chunk 名）
  index: {
    js: "./src/pages/index", // 页面入口js
    html: "./src/pages/index/index.html", // 页面使用的html模板
    out: "index.html", // 输出目录中的页面文件名
  },
  product_list: {
    js: "./src/pages/product_list",
    html: "./src/pages/product_list/index.html",
    out: "product_list.html",
  },
  product_view: {
    js: "./src/pages/product_view",
    html: "./src/pages/product_view/index.html",
    out: "product_view.html",
  },
  news_list: {
    js: "./src/pages/news_list",
    html: "./src/pages/news_list/index.html",
    out: "news_list.html",
  },
  news_view: {
    js: "./src/pages/news_view",
    html: "./src/pages/news_view/index.html",
    out: "news_view.html",
  },
  case: {
    js: "./src/pages/case",
    html: "./src/pages/case/index.html",
    out: "case.html",
  },
  message: {
    js: "./src/pages/message",
    html: "./src/pages/message/index.html",
    out: "message.html",
  },
  about: {
    js: "./src/pages/about",
    html: "./src/pages/about/index.html",
    out: "about.html",
  },
};
