//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: null,
    phone:null,
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  clickMe:function(){
      this.setData({
        phone:true,
      })
  },
  cancel:function(){
    this.setData({
      phone:false
    })
  },
  onShow:function(){
    if(!!!this.data.userInfo){
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    }
  },
  onLoad: function () {
    if (app.globalData.isAuthorized) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } /*else if (this.data.canIUse) {
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
    console.log('我的页面中的userInfo',this.data.userInfo);
  },
  getUserInfo: function (e) {
    const _this = this;

    console.log('用户授权登录',e)
    /*用户授权后返回的数据格式*/
    /*
    detail={
      encryptedData: "8K3aZ/sLPq3XqyVUMWNM/c1kg4QTV7ubMzNnzqRsfnPE4USR373bguE/7mnmD8DRUSgwef2omR12GVP0wT0JGdXNYdOdxnImM17g5UC+Su36I8m/5fJBYcsEcvAJKvIyabAY3Zl3Z8IeCjDkXv7O/0+YGkQrSeG++ggKxT97gH2x+g442nC0uEe4EPOjE7esATvmNq4sNogjqyTiGyrmU4482JbbZPi62JmHnEOnkhzPWwqy302EhFbQUEc6BLH2RkfqTa5QK8e9y6y89wHemTDhXmEEA2Ln0+6/+GLTTf0ECR7JxMtFwMLYxi5Ku+a5wIQvAm+HtEBirNIuR7+VISf4lDC4NuT+HMgU1pL3rv1EkN6cGmNKDjv+e6kaRTxNay4VhE4YOPP3abRhpmFzReTo1ySVwsQR56bP484D6T2ru5P0Mk0py1xFhZf0qxUtkaXAPn4oq3k3MCo5WhhiyQZmRDE4HLmbG91KeKsBqjC6UXPv60DfI2M6ev3Odmgzn7oo1F0kQ5Ika9KsnXRqGQ=="
      errMsg: "getUserInfo:ok"
      iv: "71cfmO7NOyvRHSwpTUD85w=="
      rawData:'',
      signature: "ab98ccae3336e91dfee17927c06a5fc73e23c5f9"
    }*/
    /*
    e.detail.userInfo={
      avatarUrl:"https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLhMtBwGqqmyoe1w48U8ux3E6GvFsdlL1qnjp8LgngnQN9w6A0BiaRfzOBKkK5k0h7fLOZLsg5Gk0A/132",
      city:"Hangzhou",
      country:"China",
      gender:1,
      language:"zh_CN",
      nickName:"pwawn",
      province:"Zhejiang",
    }*/
    if(e.detail.userInfo){
      //用户同意授权
      const encryptedData = e.detail.encryptedData;
      const iv = e.detail.iv;
      // 获取用户信息
      wx.request({
        url:getApp().globalData.server+'/wechat-app/login',
        method:'POST',
        data:{
          code:getApp().globalData.code,
          encryptedData: encryptedData,
          iv: iv
        },
        success:function (res) {
          console.log('login api responce data',res.data);
          //保存token到缓存
          wx.setStorage({
            key:"access_token",
            data:res.data.result.access_token,
            success:res=>{
              console.log('success!!!!!',res);
            },
            fail:res=>{
              console.log('fail!!!!!!!!!!!',res);
            }
          });
          getApp().globalData.userId = res.data.result.user_id;
        }
      })
      getApp().globalData.userInfo = e.detail.userInfo
      getApp().globalData.isAuthorized = true;
      this.setData({
        userInfo: e.detail.userInfo,
        hasUserInfo: true
      })


    }
  },

  clickMe1: function () {
    wx.navigateTo({
      url: "/pages/myAddress/index"

    })
  },

})
