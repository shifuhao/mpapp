// pages/detail/detail.js
const WxParse =require('../../wxParse/wxParse.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bool: false,
    bool1: false,
    bool2: false,
    //标签页
    checkedItemIndex:0,
    titleArr:[
      "商品详情",
      "成交纪录"
    ],
    title:[
      "买家",
      "成交时间",
      "数量"
    ],des:[
      {
        name:"1234",
        time:"02-12 19:08",
        num:"1"
      },
      {
        name: "1234",
        time: "02-12 19:08",
        num: "1"
      }
    ],
    imgSrc:"http://xianqian-1255378077.file.myqcloud.com/weimeng-app/res/detail3.png",
    time: "",
    productInfo:null,//商品信息结构
    /*
    * product_name: '好商品',
      product_current_price: 0,
      product_origin_price: 0,
      product_stock: 0,
      property_id_list: List [],
      product_imgs: List [],
      product_list: null,
      product_description: null,
      product_face:
       'http://xianqian-1255378077.file.myqcloud.com/weimeng-app/res/Group41.png',
      product_share_description: 'string',
      product_type: null,
      sell_ponit: null,
      mail_price: null,
      create_time: 2018-12-12T14:21:33.000Z,
      update_time: null,
      productBanner:[
       { image_id: 2,
         image_url:
          'http://xianqian-1255378077.file.myqcloud.com/weimeng-app/res/detail.png',
         product_id: 2,
         image_size: 0,
         create_time: 2018-12-12T08:43:32.000Z },
       { image_id: 3,
         image_url:
          'http://xianqian-1255378077.file.myqcloud.com/weimeng-app/res/detail.png',
         product_id: 2,
         image_size: 0,
         create_time: 2018-12-12T08:43:32.000Z } ] }
    * */
    shopInfo:null,//商店信息
    description:null
  },

  ontest: function(e) {
    console.log(1)
    console.log(e.detail.bool)
    this.setData({
      bool: e.detail.bool
    })
  },
  ontest2: function (e) {
    console.log(2)
    console.log(e.detail.bool2)
    this.setData({
      bool: e.detail.bool2
    })
  },
  onTip: function(e) {
    this.setData({
      bool: e.detail.bool
    })
  },
  onJoin: function(e) {
    console.log(e)
    this.setData({
      bool1: e.detail.bool1,
      time: e.detail.time || ""
    })
  },
  toBuy: function() {

  },
  onDone: function(e) {
    // console.log(e)
    if (this.data.time == "now") {
      wx.navigateTo({
        url: '/pages/order/index',
      })
    }
    this.setData({
      bool1: e.detail.bool1,
      // time:e.detail.time
    })
  },
  onCancel: function(e) {
    this.setData({
      bool1: e.detail.bool1
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    const that = this;
    const productId = options.id;
    /**获取商品信息*/
    wx.request({
      url:getApp().globalData.server+"/wechat-app/product",
      data:{
        id:productId
      },
      success:res=>{
        console.log('获取商品详情',res.data);
        that.setData({
          productInfo:res.data.result,
        })
        WxParse.wxParse('article','html',res.data.result.product_description,that,0);
      }
    });
    /**获取商店信息*/
    wx.request({
      url:getApp().globalData.server+"/wechat-app/shop",
      data:{
        token:getApp().globalData.token
      },
      success:res=>{
        console.log('获取商店详情',res.data);
        if(res.data.result!='error'){
          that.setData({
            shopInfo:res.data.result
          })
        }
      }
    })
  },
  clickMe: function (e) {

    this.setData({
      checkedItemIndex: e.currentTarget.dataset.index
    })

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

  }
})