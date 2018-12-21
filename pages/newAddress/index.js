// pages/newAddress/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    formData:null,
    addressId:null,
    isEditAddress:null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const that = this;

    console.log('#### options #####',options)
    const isEditAddress = options.new==0?true:false;
    const addressId = options.id;
    if(isEditAddress){
      wx.request({
        url:getApp().globalData.server+"/wechat-app/address",
        data:{
          id:addressId
        },
        success:res=>{
          console.log('#### find the address #####',res);
          let data = res.data.result;
          if(typeof data != "undefined"){
            that.setData({
              formData:data,
              addressId:addressId,
              isEditAddress:isEditAddress
            })
          }
        }
      })
    }
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

  }
})