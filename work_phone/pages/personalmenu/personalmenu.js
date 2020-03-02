const app = getApp();
Page({
  options: {
    addGlobalClass: true,
  },
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
  },
  onLoad: function (options) {
    var that = this;
    var name = decodeURIComponent(options.name); //option.参数名,参数名对应前面路径的参数名
    this.setData({
      name: name,
    })
  },
  tojump01: function(e){
    var daytype = e.currentTarget.dataset.daytype
    var name = e.currentTarget.dataset.name
    wx.navigateTo({
      url: '/pages/orderlist/orderlist?daytype=' + daytype + "&name=" + name
    })
  },
});