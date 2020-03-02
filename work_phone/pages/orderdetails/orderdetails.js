// pages/orderdetails/orderdetails.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ordernumber:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var day = options.day; //option.参数名， 参数名对应前面路径的参数名
    // console.log(options)
    console.log(id);
    //导入url.js方便以后修改ip地址
    var utilurl = require('../tools/url.js')
    var reverturl = utilurl.reverturl();

    wx.request({
      url: reverturl + '/api/getmenulist?name=' + name ,
      method: "GET",
      success: function (res) {
        console.log(res.data)
        that.setData({
          orderdetails: res.data.message[0]
        })
        console.log(res.data.message[0])
        // 隐藏加载弹窗  
        // wx.hideLoading()
      }
    })
    //这里应该有个返回值
  },

  formSubmit: function (e) {

    console.log('form发生了submit事件，携带数据为：', e.detail.value)

    this.setData({

      allValue: e.detail.value

    })

  },
})