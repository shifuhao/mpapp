// pages/myAddress/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userId:null,
    addressList:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    var that = this;


    /*const userId = getApp().globalData.userId
    console.log('userId',userId);
    wx.showLoading({
      title: '加载中',
    }),
    wx.request({
      url:getApp().globalData.server+"/wechat-app/address/all",
      data:{
        userid:userId,
      },
      success:res=>{
        const data = res.data;
        console.log(data);
        if(data.result.length>0){
          that.setData({
            addressList:data.result
          })
        }

      },
      fail:res=>{
        console.log(res);
        wx.showToast({
          title: '请求服务器失败',
          icon: 'none',
          duration: 2000
        })
      },
      complete:e=>{
        wx.hideLoading();
      }
    })*/

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var that = this;

    that.getAddressList();
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  /**渲染地址表*/
  getAddressList:function(){
    var that = this;

    const userId = getApp().globalData.userId
    console.log('userId',userId);
    wx.showLoading({
      title: '加载中',
    }),
      wx.request({
        url:getApp().globalData.server+"/wechat-app/address/all",
        data:{
          userid:userId,
        },
        success:res=>{
          const data = res.data;
          console.log(data);
          if(data.result.length>0){
            that.setData({
              addressList:data.result
            })
          }

        },
        fail:res=>{
          console.log(res);
          wx.showToast({
            title: '请求服务器失败',
            icon: 'none',
            duration: 2000
          })
        },
        complete:e=>{
          wx.hideLoading();
        }
      })
  },

 /*选择地址返回到确认订单页*/
  chooseAddress:function(e){
    var addressId=e.currentTarget.dataset.id;
    console.log('#### choosed addressId #####',addressId)
    wx.setStorage({
      key:"addressId",
      data:addressId,
      success:function () {
        wx.navigateBack(1);
      }
    });
  },
  radioChange:function (e){
    console.log('radio发生change事件，携带value值为：', e.detail.value);
  },
  /**删除一条地址*/
  delAddress:function(e){
    var that = this;
    var id = e.currentTarget.dataset.id;
    var i = e.currentTarget.dataset.index;
    console.log('#### address id #####',id)
    wx.showModal({
      title:'提示',
      content:'确定要删除吗？',
      success: function(res) {
        if (res.confirm) {
          console.log('用户点击确定')
          console.log(i)
          var arr = that.data.addressList;
          arr.splice(i,1);
          wx.request({
            url:getApp().globalData.server+"/wechat-app/address/del",
            data:{
              id:id,
            },
            success:res=>{
              console.log('删除地址结果',res);
              if(res.data.result=='success'){
                that.setData({
                  addressList:arr
                })
                console.log(arr);
              }else{
                wx.showToast({
                  title: '删除地址失败',
                  icon:'none',
                  duration:'2000'
                })
              }
            },
            fail:res=>{
              wx.showToast({
                title: '请求服务器失败',
                icon:'none',
                duration:'2000'
              })
            }
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }

      }
    })
  },
  /**编辑一条地址*/
  editAddress:function (e) {
    var that = this;
    var addressId = e.currentTarget.dataset.id;

    wx.navigateTo({
      url: '/pages/newAddress/index?id='+addressId+'&new=0'
    })
  }
})