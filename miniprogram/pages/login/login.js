// miniprogram/pages/login/login.js

var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phoneNumber: '',
    password: '',
    userInfo: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {},

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

  loginBtnClick: function() {
    console.log('loginBtnClick')
    if (this.data.phoneNumber.length == 0 || this.data.password.length == 0) {
      wx.showToast({
        title: '用户名和密码不能为空',
        icon: 'none',
        duration: 2000
      })
    } else if (this.data.phoneNumber == 'songling' && this.data.password == '00') {
      wx.showToast({
        title: '登录成功',
        icon: 'success',
        duration: 2000,
        success: function() {
          // 跳转至tab页不能用redirectTo呀呀呀呀呀呀呀呀！！！！！！！！！！
          wx.switchTab({
            url: '../index/index',
          })
          app.globalData.userInfo = {
            phoneNumber: this.data.phoneNumber,
            password: this.data.password
          }
        }

      })
    } else {
      wx.showToast({
        title: '登录失败',
        icon: 'none',
        duration: 2000
      })
    }
   
    // wx.navigateBack()
    // wx.redirectTo({
    //   url: '../my/my',
    // })
  },

  phoneInput: function(event) {
    console.log(event.detail.value);
    this.setData({
      phoneNumber: event.detail.value
    })
  },

  passwordInput: function(event) {
    console.log(event.detail.value);
    this.setData({
      password: event.detail.value
    })
  }

})