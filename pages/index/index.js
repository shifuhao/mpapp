//index.js
//获取应用实例
const app = getApp();

Page({
  data: {
    pageset:0,
    motto: 'Hello World',
    userInfo: {},
    /*第一种首页的底部商品*/
    products:[],
    /*product:{
      title: "凝胶墨水圆珠笔_0.5 0.5mm",
      des:"容纳所有人思想的终极的自由性",
      price: "¥ 10"
    },*/
    hasUserInfo: false,
    message: 'Hello MINA!',
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    item: {
      index: 0,
      msg: 'this is a template',
      time: '2016-09-15'
    },
    test:"ABC",
    imgUrls:[
      "https://xianqian-1255378077.cos.ap-shanghai.myqcloud.com/weimeng-app/res/pic_dailyuse_banner2%402x.png"
    ],
    routers:[
      {
        url: "https://xianqian-1255378077.cos.ap-shanghai.myqcloud.com/weimeng-app/res/icon_dailyuse_pack%402x.png",
        title: "新人礼包",
        des: "进店有礼新人大礼包",
      },
      {
        url:"https://xianqian-1255378077.cos.ap-shanghai.myqcloud.com/weimeng-app/res/icon_dailyuse_member%402x.png",
        title:"会员专区",
        des:"会员专享商品",
      },
      {
        url: "https://xianqian-1255378077.cos.ap-shanghai.myqcloud.com/weimeng-app/res/icon_dailyuse_recommend%402x.png",
        title: "店长推荐",
        des: "精选商品为您推荐",
      },

    ]
  },
  methods: {

  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function() {
    const that = this;
/*
    /!**第一版首页底部显示所有商品*!/
    commonApi.get('/wechat-app/product/all',{},function (res) {
      console.log('get all product response',res.data);
      const products = res.data.result;
      that.setData({
        products:products,
      })
    });
    /!**首页自定义设置*!/
    commonApi.get('/wechat-app/pageset/index', {}, function (res) {
        console.log('get index pageset response',res.data);
    });*/
    /**第一版首页底部显示所有商品*/
    wx.request({
      url: app.globalData.server+'/wechat-app/product/all', //仅为示例，并非真实的接口地址
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log('get all product response',res.data);
        const products = res.data.result;
        that.setData({
          products:products,
        })
      }
    })
    /**首页自定义设置*/
    wx.request({
      url: app.globalData.server+'/wechat-app/pageset/index', //仅为示例，并非真实的接口地址
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log('get index pageset response',res.data);
      }
    })
    /*if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true,
      })

    } else if (this.data.canIUse) {
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
    }*/
  },

  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})