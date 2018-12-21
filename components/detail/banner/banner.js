// components/detail/banner/banner.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    productBanner:null,
  },

  /**
   * 组件的初始数据
   */
  data: {
    imagearr: [
      "http://xianqian-1255378077.file.myqcloud.com/weimeng-app/res/detail.png",
      "http://xianqian-1255378077.file.myqcloud.com/weimeng-app/res/detail.png"
    ],
    //轮播图设置
    indicatorDots: true,//导航按钮
    autoplay: true,//自动轮播
    interval: 4000,//每张停留时间
    duration: 1000,//完成滚动的时间间隔
    circular:true,//是否循环轮播
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})