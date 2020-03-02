// pages/orderlist/orderlist.js
var util = require('../../utils/util.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    str01: "出单日期",
    str02: "保单号",
    str03: "保单印刷号",
    str04: "投保单签章",
    str09: "经办人",
    str10: "业务归属部门（代码）",
    str11: "出单员",
    str12: "被保险人",
    str13: "车牌",
    str14: "剩余天数",
    str15: "距离超期扣罚还有"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this; //一定要这句话

    var name = decodeURIComponent(options.name); //option.参数名,参数名对应前面路径的参数名
    this.setData({
      name: name,
    })

    //调用时间函数获取时间
    var DATE = util.formatDate(new Date());
    var date = DATE;
    this.setData({
      date: DATE,
    });

    var daytype = decodeURIComponent(options.daytype); //option.参数名,参数名对应前面路径的参数名
    var name = decodeURIComponent(options.name);

    //导入url.js方便以后修改ip地址
    var utilurl = require('../tools/url.js')
    var reverturl = utilurl.reverturl();

    // console.log(day1)
    this.setData({
      daytype: daytype,
    })
    var token = wx.getStorageSync('token')
    wx.request({
      header: {
        Authorization: token
      },
      url: reverturl + '/api/vehicleInsuranceOrderList',
      data: {
        daytype: daytype,
        name: name
      },
      method: "get",
      success: function(res) {
        // console.log(res)
        that.setData({
          orderlist: res.data.message,
        })
      }
    })
  },
  idSubmit: function(e) {
    //导入url.js方便以后修改ip地址
    var utilurl = require('../tools/url.js')
    var reverturl = utilurl.reverturl();
    var ordernumber = e.currentTarget.id
    console.log(e.currentTarget.id)
    var token = wx.getStorageSync('token')
    wx.showModal({
      title: '提示',
      content: '确认提交吗',
      success(res) {
        if (res.confirm) {
          wx.request({
            url: reverturl + '/api/vehicleOrderComplete',
            data: {
              ordernumber: ordernumber
            },
            method: "POST",
            header: {
              Authorization: token
            },
            success: function(res) {
              console.log(res)
              if (res.data.code == 200) {
                wx.showModal({
                  title: '提示',
                  content: '提交成功,请耐心等待审核',
                  showCancel: false
                })
              } else {
                wx.showModal({
                  title: '提示',
                  content: '提交失败',
                  showCancel: false
                })
              }
            },
            fail: function() {
              wx.showModal({
                title: '提示',
                content: '提交失败',
                showCancel: false
              })
            }
          })
        }
      }
    })
  }
})