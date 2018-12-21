// pages/Coupon/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    titleArr:[
      "优惠券",
      "不可用"
    ],
    checked:0,
    img1:[
      "http://xianqian-1255378077.file.myqcloud.com/weimeng-app/res/youhui2.png",
    ],
    img2:[
      "http://xianqian-1255378077.file.myqcloud.com/weimeng-app/res/badyouhui1.png"
    ]
  },
clickMe:function(e){
  this.setData({
    checked: e.currentTarget.dataset.index
  })
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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