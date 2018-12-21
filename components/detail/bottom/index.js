// components/detail/bottom/index.js
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

  },

  /**
   * 组件的方法列表
   */
  methods: {
    goShopping: function () {
      wx.switchTab({
        url: "../index/index"
      })
    },
    toShopcar: function () {
      wx.switchTab({
        url: "../shopcar/index"
      })
    },
    join:function(){
      this.triggerEvent("join",{bool1:true})
    },
    buy:function(){
      this.triggerEvent("join", { bool1: true,time:"now"})

    
    }
  }
})
