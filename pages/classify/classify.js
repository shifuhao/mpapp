// pages/classify/classify.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      page:1,//分类页面类型
      tapIndex:0,
      class1:[
          {
              id:1,
              className:'热门推荐',
              adImg:'',
              class2List:[
                  {
                      id:11,
                      className:'吃货必选',
                      class3List:[
                          {
                              id:111,
                              className:'冲调饮品',
                              class3Img:'/res/small1.png',
                          },
                          {
                              id:111,
                              className:'零食礼包',
                              class3Img:'/res/small1.png',
                          },
                          {
                              id:111,
                              className:'每日坚果',
                              class3Img:'/res/small1.png',
                          },
                          {
                              id:111,
                              className:'进口水',
                              class3Img:'/res/small1.png',
                          },
                          {
                              id:111,
                              className:'咖啡冲调',
                              class3Img:'/res/small1.png',
                          },
                      ]
                  },
                  {
                      id:11,
                      className:'个人护理',
                      class3List:[
                          {
                              id:111,
                              className:'洗发水',
                              class3Img:'/res/small1.png',
                          },
                          {
                              id:111,
                              className:'护手霜',
                              class3Img:'/res/small1.png',
                          },
                          {
                              id:111,
                              className:'面膜',
                              class3Img:'/res/small1.png',
                          },
                      ]
                  },
              ]

          },
          {
              id:2,
              className:'生鲜水果',
              adImg:'',
              class2List:[
                  {
                      id:11,
                      className:'吃货必选2',
                      class3List:[
                          {
                              id:111,
                              className:'冲调饮品',
                              class3Img:'/res/small1.png',
                          },
                          {
                              id:111,
                              className:'零食礼包',
                              class3Img:'/res/small1.png',
                          },
                          {
                              id:111,
                              className:'每日坚果',
                              class3Img:'/res/small1.png',
                          },
                          {
                              id:111,
                              className:'进口水',
                              class3Img:'/res/small1.png',
                          },
                          {
                              id:111,
                              className:'咖啡冲调',
                              class3Img:'/res/small1.png',
                          },
                      ]
                  },
                  {
                      id:11,
                      className:'个人护理2',
                      class3List:[
                          {
                              id:111,
                              className:'洗发水',
                              class3Img:'/res/small1.png',
                          },
                          {
                              id:111,
                              className:'护手霜',
                              class3Img:'/res/small1.png',
                          },
                          {
                              id:111,
                              className:'面膜',
                              class3Img:'/res/small1.png',
                          },
                      ]
                  },
              ]

          },
          {
              id:3,
              className:'休闲零食',
              adImg:'',
              class2List:[
                  {
                      id:11,
                      className:'吃货必选',
                      class3List:[
                          {
                              id:111,
                              className:'冲调饮品',
                              class3Img:'/res/small1.png',
                          },
                          {
                              id:111,
                              className:'零食礼包',
                              class3Img:'/res/small1.png',
                          },
                          {
                              id:111,
                              className:'每日坚果',
                              class3Img:'/res/small1.png',
                          },
                          {
                              id:111,
                              className:'进口水',
                              class3Img:'/res/small1.png',
                          },
                          {
                              id:111,
                              className:'咖啡冲调',
                              class3Img:'/res/small1.png',
                          },
                      ]
                  },
                  {
                      id:11,
                      className:'个人护理',
                      class3List:[
                          {
                              id:111,
                              className:'洗发水',
                              class3Img:'/res/small1.png',
                          },
                          {
                              id:111,
                              className:'护手霜',
                              class3Img:'/res/small1.png',
                          },
                          {
                              id:111,
                              className:'面膜',
                              class3Img:'/res/small1.png',
                          },
                      ]
                  },
              ]

          },
          {
              id:4,
              className:'酒水乳饮',
              adImg:'',
              class2List:[
                  {
                      id:11,
                      className:'吃货必选',
                      class3List:[
                          {
                              id:111,
                              className:'冲调饮品',
                              class3Img:'/res/small1.png',
                          },
                          {
                              id:111,
                              className:'零食礼包',
                              class3Img:'/res/small1.png',
                          },
                          {
                              id:111,
                              className:'每日坚果',
                              class3Img:'/res/small1.png',
                          },
                          {
                              id:111,
                              className:'进口水',
                              class3Img:'/res/small1.png',
                          },
                          {
                              id:111,
                              className:'咖啡冲调',
                              class3Img:'/res/small1.png',
                          },
                      ]
                  },
                  {
                      id:11,
                      className:'个人护理',
                      class3List:[
                          {
                              id:111,
                              className:'洗发水',
                              class3Img:'/res/small1.png',
                          },
                          {
                              id:111,
                              className:'护手霜',
                              class3Img:'/res/small1.png',
                          },
                          {
                              id:111,
                              className:'面膜',
                              class3Img:'/res/small1.png',
                          },
                      ]
                  },
              ]

          },
          {
              id:5,
              className:'粮油副食',
              adImg:'',
              class2List:[
                  {
                      id:11,
                      className:'吃货必选',
                      class3List:[
                          {
                              id:111,
                              className:'冲调饮品',
                              class3Img:'/res/small1.png',
                          },
                          {
                              id:111,
                              className:'零食礼包',
                              class3Img:'/res/small1.png',
                          },
                          {
                              id:111,
                              className:'每日坚果',
                              class3Img:'/res/small1.png',
                          },
                          {
                              id:111,
                              className:'进口水',
                              class3Img:'/res/small1.png',
                          },
                          {
                              id:111,
                              className:'咖啡冲调',
                              class3Img:'/res/small1.png',
                          },
                      ]
                  },
                  {
                      id:11,
                      className:'个人护理',
                      class3List:[
                          {
                              id:111,
                              className:'洗发水',
                              class3Img:'/res/small1.png',
                          },
                          {
                              id:111,
                              className:'护手霜',
                              class3Img:'/res/small1.png',
                          },
                          {
                              id:111,
                              className:'面膜',
                              class3Img:'/res/small1.png',
                          },
                      ]
                  },
              ]

          },
          {
              id:6,
              className:'个人护理',
              adImg:'',
              class2List:[
                  {
                      id:11,
                      className:'吃货必选',
                      class3List:[
                          {
                              id:111,
                              className:'冲调饮品',
                              class3Img:'/res/small1.png',
                          },
                          {
                              id:111,
                              className:'零食礼包',
                              class3Img:'/res/small1.png',
                          },
                          {
                              id:111,
                              className:'每日坚果',
                              class3Img:'/res/small1.png',
                          },
                          {
                              id:111,
                              className:'进口水',
                              class3Img:'/res/small1.png',
                          },
                          {
                              id:111,
                              className:'咖啡冲调',
                              class3Img:'/res/small1.png',
                          },
                      ]
                  },
                  {
                      id:11,
                      className:'个人护理',
                      class3List:[
                          {
                              id:111,
                              className:'洗发水',
                              class3Img:'/res/small1.png',
                          },
                          {
                              id:111,
                              className:'护手霜',
                              class3Img:'/res/small1.png',
                          },
                          {
                              id:111,
                              className:'面膜',
                              class3Img:'/res/small1.png',
                          },
                      ]
                  },
              ]

          },
      ],
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

  },
  tapNav:function (e) {
      var that = this;
      // console.log('标签索引'+e.currentTarget.dataset.navindex);
      console.log('此一级分类id为'+e.currentTarget.dataset.oneid);
      this.setData({
          tapIndex:e.currentTarget.dataset.navindex
      })
  },
  toGoodsList:function (e) {
      var that = this;
      console.log(e);
      that.setData({
          page:0
      })
  }
})