// pages/novehicleinsurance/novehicleinsurance.js
const app = getApp();

Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    hidden: true
  },
  onShow: function () {
    var that = this;//用了wx.request这一句一定不能少
    //导入url.js方便以后修改ip地址
    var utilurl = require('../tools/url.js')
    var reverturl = utilurl.reverturl();
    var token = wx.getStorageSync('token')
    let list = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    wx.request({
      url: reverturl + '/api/getaddressbooknovehicleinsurance',
      method: "POST",
      header: {
        Authorization: token
      },
      success: function (res) {
        that.setData({
          namelist: res.data.results
        })
      }
    })
    this.setData({
      list: list,
      listCur: list[0]
    })
  },
  // onReady() {
  //   let that = this;
  //   wx.createSelectorQuery().select('.indexBar-box').boundingClientRect(function (res) {
  //     that.setData({
  //       boxTop: res.top
  //     })
  //   }).exec();
  //   wx.createSelectorQuery().select('.indexes').boundingClientRect(function (res) {
  //     that.setData({
  //       barTop: res.top
  //     })
  //   }).exec()
  // },
  tonovehicleinsurancepersonalmenu: function (e) {
    var name = e.currentTarget.dataset.name
    wx.navigateTo({
      url: '/pages/novehicleinsurancepersonalmenu/novehicleinsurancepersonalmenu?name=' + name
    })
  }
});