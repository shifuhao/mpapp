//app.js
App({
  onLaunch: function () {
    var that = this;
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    var token = wx.getStorageSync('access_token') || undefined;
    // logs.unshift(Date.now())
    wx.login({
      success:loginResData => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        console.log('login data', loginResData);
        if(!!loginResData.code){
          that.globalData.code = loginResData.code;
          console.log('#### that.globalData #####',that.globalData);
        }
      }
    })
    console.log('查看缓存中的token',token);
    if(token){
      that.globalData.token=token;
      //用缓存中的token登录获得userId
      /*that.getWithToken('/wechat-app/login',{
        token:token,
      },function (res) {
        console.log('#### login with token res #####',res.data)
        that.globalData.userId = res.data.result.user_id;
      })*/
      console.log('#### start login with token #####');
      wx.request({
        url:that.globalData.server+'/wechat-app/login',
        method:'GET',
        data:{
          token:token
        },
        success:function (res) {
          console.log('#### login with token res #####',res)
          if(res.data.result){
            that.globalData.userId = res.data.result.user_id;
            that.globalData.userInfo = res.data.result.userInfo;
          }

        }
      })
      /*wx.getSetting({
        success: setResData => {
          console.log('查看 setting  ',setResData)
          if (setResData.authSetting['scope.userInfo']) {
            that.globalData.isAuthorized = true;
            console.log('已经授权，可以直接调用 getUserInfo 获取头像昵称',that.globalData.isAuthorized);
            that.getUserInfo();
          }
        }
      })*/
    }else{
      // 登录
      wx.login({
        success:loginResData => {
          // 发送 res.code 到后台换取 openId, sessionKey, unionId
          console.log('login data', loginResData);
          if(!!loginResData.code){
            that.globalData.code = loginResData.code;
            console.log('#### that.globalData #####',that.globalData);
          }
        }
      })
    }

  },
 /**获取用户信息保存到全局*/
  getUserInfo:()=>{
    wx.getUserInfo({
      withCredentials:false,//不需要返回加密数据
      success: UserInfoResData => {
        console.log('UserInfoResData', UserInfoResData)
        getApp().globalData.userInfo = UserInfoResData.userInfo;
        console.log('globalData',getApp().globalData);
        // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
        // 所以此处加入 callback 以防止这种情况
        if (getApp().userInfoReadyCallback) {
          getApp().userInfoReadyCallback(UserInfoResData)
        }

      }
    })
  },

  /**get请求携带缓存中的token*/
  getWithToken:(url,reqData, onSuccess)=>{
    console.log('#### start login with token #####');
    wx.request({
      url:getApp().globalData.server+url,
      method:'GET',
      data:reqData,
      success:function (res) {
        onSuccess(res);
      }
    })
  },



  globalData: {
    server:"http://192.168.31.109:3000",//测试服务器地址
    // server:"http://localhost:3000",//服务器地址
    userInfo: null,//用户信息
    isAuthorized:false,//授权状态
    code:null,
    userId:null,
    token:null
  }
})