// components/mine/liebaio/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    arr:[
      {
        img:"http://xianqian-1255378077.file.myqcloud.com/weimeng-app/res/daifukuan.png",
        text:"待付款"
      }, {
        img: "http://xianqian-1255378077.file.myqcloud.com/weimeng-app/res/daifahuo.png",
        text: "待发货"
      }, {
        img: "http://xianqian-1255378077.file.myqcloud.com/weimeng-app/res/yifahuo.png",
        text: "已发货"
      }, {
        img: "http://xianqian-1255378077.file.myqcloud.com/weimeng-app/res/yiwancheng.png",
        text: "已完成"
      }
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    clickMe:function(){
      wx.navigateTo({
        url: '/pages/dingdanliebiao/index',
      })
    }
  }
})
