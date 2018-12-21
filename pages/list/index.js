// pages/list/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cla:"abc",
    paramBtoA:0,
    page:0,//分类页面类型,0为分类级数较少的页面，1为三级分类页面
    classList:[
      {
        id:1,
        className:'热门推荐1',
        adImg:'',
        class2List:[
          {
            id:11,
            className:'吃货必选1',
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
    tapIndex:null,
  },
  methods:{

  },
  onTapTab: function (e) {
    let that = this;
    console.log('主页面获取点击项索引为'+e.detail.tapIndex);
    that.setData({
      tapIndex: e.detail.tapIndex
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
    console.log('从分类页查看授权状态',getApp().globalData.isAuthorized);
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
})