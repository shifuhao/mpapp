// pages/listDelivery/listDelivery.js
Page({

  /**
   * 页面的初始数据
   */
    data: {
      class1:[
          {
              id:1,
              className:'今日推荐',
              goods:[
                  {
                      id:1,
                      name:'冰摇芒果花草茶1',
                      tips:'1份/茶瓦纳',
                      sale:100,
                      tab:'美食销量排行第一',
                      price:25.5,
                      img:'/res/pic_takeput_good1.png',
                  },
                  {
                      id:1,
                      name:'冰摇芒果花草茶1',
                      tips:'1份/茶瓦纳',
                      sale:100,
                      price:25.5,
                      img:'/res/pic_takeput_good1.png'
                  },
              ]
          },
          {
              id:2,
              className:'所有果品',
              goods:[
                  {
                      id:1,
                      name:'冰摇芒果花草茶2',
                      tips:'1份/茶瓦纳',
                      sale:100,
                      tab:'美食销量排行第一',
                      price:25.5,
                      img:'/res/pic_takeput_good1.png',
                  },
                  {
                      id:1,
                      name:'冰摇芒果花草茶2',
                      tips:'1份/茶瓦纳',
                      sale:100,
                      price:25.5,
                      img:'/res/pic_takeput_good1.png'
                  },
              ]
          },
      ],
      tabIndex:null
  },

    onTapTab:function(e){
        let that = this;
        let i = e.detail.tapIndex;
        console.log('主页面获取点击项索引为'+i);
        that.setData({
            tapIndex:i
        })
    },
    /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      var that = this;
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