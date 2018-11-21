//app.js
// App() 函数用来注册一个小程序。接受一个 Object 参数，其指定小程序的生命周期回调等。
// App() 必须在 app.js 中调用，必须调用且只能调用一次。不然会出现无法预期的后果。
App({
  // onLaunch(Object)小程序初始化完成时触发，全局只触发一次。
  onLaunch: function(options) {
    console.log('小程序初始化完成时触发，全局只触发一次')

    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        traceUser: true,
      })
    }

    this.globalData = {}

    // 使用 this 就可以拿到 app 实例
    console.log('使用 this 可以拿到 app 实例 =>', this.globalData);

    console.log("[onLaunch] 本次场景值:", options.scene);

    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)


  },
  onShow: function(options) {
    // 小程序启动，或从后台进入前台显示时触发。
    console.log('小程序启动，或从后台进入前台显示时触发')

    console.log("[onShow] 本次场景值:", options.scene)
  },
  onHide: function() {
    // 小程序从前台进入后台时触发。
    console.log('小程序从前台进入后台时触发')
  },
  onError: function() {
    // 小程序发生脚本错误，或者 api 调用失败时触发。
    console.log('小程序发生脚本错误，或者 api 调用失败时触发。')
  },
  onPageNotFound(res) {
    // 小程序要打开的页面不存在时触发。
    // 开发者可以在 onPageNotFound 回调中进行重定向处理，但必须在回调中同步处理，异步处理（例如 setTimeout 异步执行）无效

    // 注意：
    // 1.如果开发者没有添加 onPageNotFound 监听，当跳转页面不存在时，将推入微信客户端原生的页面不存在提示页面。
    // 2.如果 onPageNotFound 回调中又重定向到另一个不存在的页面，将推入微信客户端原生的页面不存在提示页面，并且不再回调 onPageNotFound。
    console.log('小程序要打开的页面不存在时触发。')

    wx.redirectTo({
      url: 'pages/index/index',
    })
    // 如果是 tabbar 页面，请使用 wx.switchTab
    wx.switchTab({
      url: 'pages/index/index',
    })
  },




  globalData: {
    userInfo: null
  }

})

// 全局的 getApp() 函数可以用来获取到小程序 App 实例。
// 注意：
// 1.不要在定义于 App() 内的函数中调用 getApp() ，使用 this 就可以拿到 app 实例。
// 2.通过 getApp() 获取实例之后，不要私自调用生命周期函数。
// var appInstance = getApp();
// console.log('I am global data =>', appInstance.globalData)