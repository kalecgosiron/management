//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    str01: "出单日期",
    str02: "保单号",
    str03: "保单印刷号",
    str04: "欠投保单签章",
    str05: "欠保险销售确认书",
    str06: "欠行驶证复印件",
    str07: "欠身份证复印件/组织机构代码证",
    str08: "欠其他资料",
    str09: "经办人",
    str10: "业务归属部门（代码）",
    str11: "出单员",
    str12: "被保险人",
    str13: "车牌"
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    var that = this;//用了wx.request这一句一定不能少
    //加载弹窗
    //导入url.js方便以后修改ip地址
    var utilurl = require('../tools/url.js')
    var reverturl = utilurl.reverturl();

    wx.showLoading({
      title: '加载中',
    })
    wx.request({
      // 访问不了数据库需要修改IP地址
      url: reverturl + '/api/getlist', 
      method:"GET",
      header: {
        'content-type': 'application/json' // 默认值
      },
      success:function(res){
        that.setData({
          list: res.data.results
        })
        // 隐藏加载弹窗
        wx.hideLoading()
      }
    })

    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  orderDetailsJump:function(e){
    var id = e.currentTarget.dataset.id
    console.log(id)
    wx.navigateTo({
      url: '/pages/orderdetails/orderdetails?ordernumber=' + id,
    })
  }
})
