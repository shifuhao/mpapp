// components/detail/dingdan/index.js
const WxParse =require('../../../wxParse/wxParse.js');
Component({
  /**
   * 组件的属性列表
   */
  properties: {
      productInfo:null,
      description:null
  },

  /**
   * 组件的初始数据
   */
  data: {
    checkedItemIndex:0,
    titleArr:[
      "商品详情",
      "成交纪录"
    ],
    title:[
      "买家",
      "成交时间",
      "数量"
    ],des:[
      {
        name:"1234",
        time:"02-12 19:08",
        num:"1"
      },
      {
        name: "1234",
        time: "02-12 19:08",
        num: "1"
      }
    ],
    imgSrc:"http://xianqian-1255378077.file.myqcloud.com/weimeng-app/res/detail3.png"
  },

  /**
   * 组件的方法列表
   */

  attached:function () {
      this.showIntroduce();
  },
  methods: {
    clickMe: function (e) {

      this.setData({
        checkedItemIndex: e.currentTarget.dataset.index
      })

    },
    showIntroduce(){
      const $this = this;
      const html = $this.properties.productInfo;
      console.log('需要的商品信息', $this.properties);
      console.log('商品富文本', $this.properties.description);
      WxParse.wxParse('article','html',$this.properties.description,$this,5);
    }
  }
})
