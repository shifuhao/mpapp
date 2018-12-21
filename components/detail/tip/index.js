// components/detail/tip/index.js
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
    baoyou: [
      {
        tag: "包邮",
        des: "满68.00元部分地区包邮"
      },
      {
        tag: "manjian",
        des: "满68."
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
    cancel:function(e){
      this.triggerEvent('tip', { bool:false});

    }
  }
})
