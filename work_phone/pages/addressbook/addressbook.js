const app = getApp();

Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    hidden: true
  },
  onShow:function() {
    var that = this;//用了wx.request这一句一定不能少
    //导入url.js方便以后修改ip地址
    var utilurl = require('../tools/url.js')
    var reverturl = utilurl.reverturl();
    let list = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    var token = wx.getStorageSync('token')
    wx.request({
      url: reverturl + '/api/getAddressbookVehicleInsurance',
      method: "POST",
      header: {
        Authorization: token
      },
      success:function(res){
        // console.log(res)
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
  topersonalmenu: function (e) {
    var name = e.currentTarget.dataset.name
    // console.log(name)
    wx.navigateTo({
      // url: '/pages/orderlist/orderlist?charge=' + id,
      url: '/pages/personalmenu/personalmenu?name=' + name
    })
  }
});