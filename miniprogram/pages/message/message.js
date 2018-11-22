// miniprogram/pages/message/message.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    useList: [{
      id: 1,
      name: '选择图片',
      url: "../progress/progress"
    }, {
      id: 2,
      name: '选择上传文件',
      url: "../progress/progress"
    }, {
      id: 3,
      name: 'canvas绘制进度条',
      url: "../progress/progress"
    }]
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
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

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


  onItemClick: function(event) {
    // bindtap传值方式,通过data-*的方式传递参数,然后从相应函数的参数event中获取对应的值
    console.log(event);
    console.log(event.currentTarget.dataset.url);

    wx.navigateTo({
      url: event.currentTarget.dataset.url,
    })
  }

})