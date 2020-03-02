// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // userName: "",
    // password: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;

  },
  //获取用户输入的用户名
  userNameInput: function (e) {
    this.setData({
      username: e.detail.value
    })
  },
  passWordInput: function (e) {
    this.setData({
      password: e.detail.value
    })
  },
  loginBtnClick: function (e) {
    var that = this;
    var utilurl = require('../tools/url.js');
    var reverturl = utilurl.reverturl();
    var utilMd5 = require('../tools/md5.js');
    var password = utilMd5.md5(this.data.password);
    wx.request({
      url: reverturl + '/api/checkUser',
      data: { username: this.data.username, password: password},
      method:"POST",
      header: {"Content-Type":"application/x-www-form-urlencoded"},
      success(res) {
        // console.log(res.data.token)
        if (res.data.code == 200){
          wx.setStorageSync('token', res.data.token)
          wx.switchTab({
            url: '/pages/addressbook/addressbook',
          })
          // wx.setStorageSync('token', token)
        }else{
          console.log(res.data)
          wx.showToast({
            title: '用户名或密码错误', 
            icon: 'none',
          }) 
        }
      },
      fail(res){
        console.log(res.data)
        wx.showToast({
          title: '连接服务器失败',
          icon: 'none',
        })
      }
    })
  },
})