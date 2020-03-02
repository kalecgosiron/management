// pages/neworder/neworder.js
const app = getApp();
Page({
  data: {
    CustomBar: app.globalData.CustomBar,
    TabCur: 0,
    tabNav: ['车险', '非车险']
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // var that = this;
    var timestamp = Date.parse(new Date());
    var date = new Date(timestamp);
    //获取年份  
    var Y = date.getFullYear();
    //获取月份  
    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
    //获取当日日期 
    var D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    // console.log("当前时间：" + Y + '年' + M + '月' + D + '日');
    var date = Y + '-' + M + '-' + D;
    // console.log(nowdate)
    this.setData({
      date: date,
    })
  },
  // 新建表单输入框检测start
  DateChange(e) {
    this.setData({
      date: e.detail.value
    })
  },
  ordernumberInput: function (e) {
    this.setData({
      ordernumber: e.detail.value
    })
  },
  orderprintnumberInput: function (e) {
    this.setData({
      orderprintnumber: e.detail.value
    })
  },
  chargeInput: function (e) {
    this.setData({
      charge: e.detail.value
    })
  },
  attributiondepartmentInput: function (e) {
    this.setData({
      attributiondepartment: e.detail.value
    })
  },
  dispatchclerkInput: function (e) {
    this.setData({
      dispatchclerk: e.detail.value
    })
  },
  insuredInput: function (e) {
    this.setData({
      insured: e.detail.value
    })
  },
  licenseplateInput: function (e) {
    this.setData({
      licenseplate: e.detail.value
    })
  },
  // 新建表单输入框检测end

  // 切换保单选项
  tabSelect(e) {
    console.log(e);
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      scrollLeft: (e.currentTarget.dataset.id - 1) * 60
    })
  },
  // 缺失数据start
  lackordersignatureChange: function (e) {
    console.log(e.detail.value)
    this.setData({
      lackordersignature: e.detail.value
    })
  },
  lacksaleconfirmationChange: function (e) {
    this.setData({
      lacksaleconfirmation: e.detail.value
    })
  },
  lackdrivingpermitChange: function (e) {
    this.setData({
      lackdrivingpermit: e.detail.value
    })
  },
  lackidcardororganizationcodeChange: function (e) {
    this.setData({
      lackidcardororganizationcode: e.detail.value
    })
  },
  lackotherChange: function (e) {
    this.setData({
      lackother: e.detail.value
    })
  },
  //欠客户证件资料
  lackcustomercertificateinformationChange: function (e) {
    console.log(e.detail.value)
    this.setData({
      lackcustomercertificateinformation: e.detail.value
    })
  },
  //欠反洗黑钱资料
  lackopposemoneylaunderinginformationChange: function (e) {
    console.log(e.detail.value)
    this.setData({
      lackopposemoneylaunderinginformation: e.detail.value
    })
  },
  //欠报批材料
  lackapprovaldataChange: function (e) {
    console.log(e.detail.value)
    this.setData({
      lackapprovaldata: e.detail.value
    })
  },
  //各险种对应需要提供的材料
  lackinsurancetypecorresponddataChange: function (e) {
    console.log(e.detail.value)
    this.setData({
      lackinsurancetypecorresponddata: e.detail.value
    })
  },
  //欠销售确认书
  lacksaleconfirmationChange: function (e) {
    console.log(e.detail.value)
    this.setData({
      lacksaleconfirmation: e.detail.value
    })
  },

  // 缺失数据end
  formsubmit: function(e){ 
    var that = this;

    //普通数据
    var ordernumber = this.data.ordernumber;
    var date = this.data.date; 
    var orderprintnumber = this.data.orderprintnumber;
    var charge = this.data.charge;
    var attributiondepartment = this.data.attributiondepartment;
    var dispatchclerk = this.data.dispatchclerk;
    var insured = this.data.insured;
    var licenseplate = this.data.licenseplate;

    var lackordersignature = this.data.lackordersignature;
    var lacksaleconfirmation = this.data.lacksaleconfirmation;
    var lackdrivingpermit = this.data.lackdrivingpermit;
    var lackidcardororganizationcode = this.data.lackidcardororganizationcode;
    var lackother = this.data.lackother;

    // 缺失数据
    if (lackordersignature != "true"){
      var lackordersignature = "null";
    } else {
      var lackordersignature = "true";
    }

    if (lacksaleconfirmation != "true") {
      var lacksaleconfirmation = "null";
    } else {
      var lacksaleconfirmation = "true";
    }

    if (lackdrivingpermit != "true") {
      var lackdrivingpermit = "null";
    } else {
      var lackdrivingpermit = "true";
    }

    if (lackidcardororganizationcode != "true") {
      var lackidcardororganizationcode = "null";
    } else {
      var lackidcardororganizationcode = "true";
    }

    if (lackother != "true") {
      var lackother = "null";
    } else {
      var lackother = "true";
    }
    var utilurl = require('../tools/url.js')
    var reverturl = utilurl.reverturl();

    wx.request({
      url: reverturl + '/api/addorder?ordernumber=' + ordernumber + '&date=' + date + '&orderprintnumber=' + orderprintnumber + '&charge=' + charge + '&attributiondepartment=' + attributiondepartment + '&dispatchclerk=' + dispatchclerk + '&insured=' + insured + '&licenseplate=' + licenseplate + '&lackordersignature=' + lackordersignature + '&lacksaleconfirmation=' + lacksaleconfirmation + '&lackdrivingpermit=' + lackdrivingpermit + '&lackidcardororganizationcode=' + lackidcardororganizationcode + '&lackother=' + lackother,
      header: {"Content-Type": "application/x-www-form-urlencoded"},
      method: 'POST',
      success: function(res) {
        if (res.data.code == 200) {
          wx.showToast({
            title: '新建车险保单成功',
            icon: 'none',
          })
        } else {
          console.log(res.data)
          wx.showToast({
            title: '新建车险保单失败',
            icon: 'none',
          })
        }
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  applicantInput: function (e) {
    this.setData({
      applicant: e.detail.value
    })
  },

  form2submit: function (e) {
    var that = this;

    //普通数据
    var ordernumber = this.data.ordernumber;
    var date = this.data.date;
    var applicant = this.data.applicant;
    var orderprintnumber = this.data.orderprintnumber;
    var charge = this.data.charge;
    var attributiondepartment = this.data.attributiondepartment;
    var dispatchclerk = this.data.dispatchclerk;

    var lackordersignature = this.data.lackordersignature;
    var lackcustomercertificateinformation = this.data.lackcustomercertificateinformation;
    var lackopposemoneylaunderinginformation = this.data.lackopposemoneylaunderinginformation;
    var lackapprovaldata = this.data.lackapprovaldata;
    var lacksaleconfirmation = this.data.lacksaleconfirmation;
    var lackinsurancetypecorresponddata = this.data.lackinsurancetypecorresponddata;

    console.log(lacksaleconfirmation);

    // 缺失数据
    if (lackcustomercertificateinformation != "true") {
      var lackcustomercertificateinformation = "null";
    } else {
      var lackcustomercertificateinformation = "true";
    }

    if (lackopposemoneylaunderinginformation != "true") {
      var lackopposemoneylaunderinginformation = "null";
    } else {
      var lackopposemoneylaunderinginformation = "true";
    }

    if (lackapprovaldata != "true") {
      var lackapprovaldata = "null";
    } else {
      var lackapprovaldata = "true";
    }

    if (lacksaleconfirmation != "true") {
      var lacksaleconfirmation = "null";
    } else {
      var lacksaleconfirmation = "true";
    }

    if (lackordersignature != "true"){
      var lackordersignature = "null";
    } else {
      var lackordersignature = "true";
    }

    if (lackinsurancetypecorresponddata != "true") {
      var lackinsurancetypecorresponddata = "null";
    } else {
      var lackinsurancetypecorresponddata = "true";
    }

    var utilurl = require('../tools/url.js')
    var reverturl = utilurl.reverturl();

    console.log("ordernumber=",ordernumber);
    console.log("date=",date);
    console.log("orderprintnumber=",orderprintnumber);
    console.log("applicant=",applicant);
    console.log("charge=",charge);
    console.log("attributiondepartment=",attributiondepartment);
    console.log("dispatchclerk=",dispatchclerk);
    console.log("lackordersignature=",lackordersignature);
    console.log("lackcustomercertificateinformation=",lackcustomercertificateinformation);
    console.log("lackopposemoneylaunderinginformation=",lackopposemoneylaunderinginformation);
    console.log("lackapprovaldata=",lackapprovaldata);
    console.log("lacksaleconfirmation=",lacksaleconfirmation);
    console.log("lackinsurancetypecorresponddata=",lackinsurancetypecorresponddata);

    wx.request({
      url: reverturl + '/api/addnovehicleorder?ordernumber=' + ordernumber + '&date=' + date + '&orderprintnumber=' + orderprintnumber + '&applicant=' + applicant + '&charge=' + charge + '&attributiondepartment=' + attributiondepartment + '&dispatchclerk=' + dispatchclerk + + '&lackordersignature=' + lackordersignature + '&lackcustomercertificateinformation=' + lackcustomercertificateinformation + '&lackopposemoneylaunderinginformation=' + lackopposemoneylaunderinginformation + '&lackapprovaldata=' + lackapprovaldata + '&lacksaleconfirmation=' + lacksaleconfirmation + "&lackinsurancetypecorresponddata=" + lackinsurancetypecorresponddata,
      header: { "Content-Type": "application/x-www-form-urlencoded" },
      method: 'POST',
      success: function (res) {
        if (res.data.code == 200) {
          wx.showToast({
            title: '新建车险保单成功',
            icon: 'none',
          })
        } else {
          console.log(res.data)
          wx.showToast({
            title: '新建车险保单失败',
            icon: 'none',
          })
        }
      },
      fail: function (res) { },
      complete: function (res) { },
    })
  }
})