// miniprogram/pages/index/index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    taskList: [{
        id: 1,
        title: '留档量',
        progress_txt: '65/106',
        progressbg: 'canvasProgressbg',
        progress: 'canvasProgress'
      }, {
        id: 2,
        title: '邀约试驾',
        progress_txt: '15/46',
        progressbg: 'canvasProgressbg1',
        progress: 'canvasProgress1'
      },
      {
        id: 3,
        title: '回访数量',
        progress_txt: '65/250',
        progressbg: 'canvasProgressbg2',
        progress: 'canvasProgress2'
      }
    ],
    gridList: [{
        id: 1,
        name: "新车审批",
        icon: 'time',
        bgColor: '#5FB9FF'
      },
      {
        id: 2,
        name: "业务报表",
        icon: 'daili',
        bgColor: '#3AC14E'
      },
      {
        id: 3,
        name: "员工业绩",
        icon: 'order',
        bgColor: '#4189FF'
      },
      {
        id: 4,
        name: "潜客分配",
        icon: 'order',
        bgColor: '#F5B248'
      },
      {
        id: 5,
        name: "新车线索",
        icon: 'order',
        bgColor: '#F7874B'
      },
      {
        id: 6,
        name: "客户管理",
        icon: 'order',
        bgColor: '#1EAFE5'
      },
      {
        id: 7,
        name: "车辆管理",
        icon: 'daili',
        bgColor: '#8092FC'
      },
      {
        id: 8,
        name: "营销工具",
        icon: 'daili',
        bgColor: '#C089D9'
      },
      {
        id: 9,
        name: "使用帮助",
        icon: 'order',
        bgColor: '#C089D9'
      },
      {
        id: 10,
        name: "保险客户",
        icon: 'order',
        bgColor: '#5594FC'
      },
      {
        id: 11,
        name: "车辆库存",
        icon: 'order',
        bgColor: '#6488ED'
      },
      {
        id: 12,
        name: "新车潜客",
        icon: 'order',
        bgColor: '#59A9F4'
      },

    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    const a = ['canvasProgressbg', 'canvasProgressbg1', 'canvasProgressbg2']
    const b = [{
      step: 0.5,
      name: 'canvasProgress'
    }, {
      step: 1,
      name: 'canvasProgress1'
    }, {
      step: 0.8,
      name: 'canvasProgress2'
    }]
    a.forEach((item) => {
      this.drawProgressbg(item);
    })

    b.forEach((item) => {
      this.drawCircle(item.step, item.name)
    })

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    console.log(this.route)
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  drawProgressbg: function(item) {
    // 使用 wx.createContext 获取绘图上下文 context
    var ctx = wx.createCanvasContext(item)
    ctx.setLineWidth(6); // 设置圆环的宽度
    ctx.setStrokeStyle('#e9e9e9'); // 设置圆环的颜色
    ctx.setLineCap('round') // 设置圆环端点的形状
    ctx.beginPath(); //开始一个新的路径
    ctx.arc(40, 40, 30, 0, 2 * Math.PI, false);
    //设置一个原点(110,110)，半径为100的圆的路径到当前路径
    ctx.stroke(); //对当前路径进行描边
    ctx.draw();
  },
  drawCircle: function(step, item) {
    var context = wx.createCanvasContext(item);
    // 设置渐变
    // var gradient = context.createLinearGradient(200, 100, 100, 200);
    // gradient.addColorStop("0", "#2661DD");
    // gradient.addColorStop("0.5", "#40ED94");
    // gradient.addColorStop("1.0", "#5956CC");
    context.setStrokeStyle('#217dde'); // 设置圆环的颜色

    context.setLineWidth(8);
    // context.setStrokeStyle(gradient);
    context.setLineCap('round')
    context.beginPath();
    // 参数step 为绘制的圆环周长，从0到2为一周 。 -Math.PI / 2 将起始角设在12点钟位置 ，结束角 通过改变 step 的值确定
    context.arc(40, 40, 30, -Math.PI / 2, step * Math.PI - Math.PI / 2, false);
    context.stroke();
    context.draw()
  },


})