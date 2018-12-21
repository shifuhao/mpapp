// components/detail/shopdes/shopdes.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    productInfo:null,//父组件传过来的商品信息
  },

  /**
   * 组件的初始数据
   */
  data: {
    bool:true,
    title:{
      titlename:"迷你烤香肠145g炭烤味",
      price1:213,
      price2:"123"
    },
    sharepic:"http://xianqian-1255378077.file.myqcloud.com/weimeng-app/res/sharePic.png",
    sellnum:{
      mailMoney:"¥10.00-¥20.00",
      shengyu:5120,
      xiaoliang:1235
    },
    baoyou:[
      {
        tag: "包邮",
        des: "满68.00元部分地区包邮"
      },
      {
        tag: "满减",
        des: "满68.003424242元部分地区包邮"
      },
      {
        tag: "包邮",
        des: "满68.00元部分地区包邮"
      }
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    clickMe:function(){
      this.triggerEvent('test', { bool: true });

    },
    clickMe2: function () {
      this.triggerEvent('test2', { bool2: true });

    },
  }
})
