// components/detail/buy/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // time
  },

  /**
   * 组件的初始数据
   */
  data: {
    checkIndex: 0,
    title: {
      titleImg: '../../../res/Group4.png',
      titleText: '迷你烤香肠145g炭烤味',
      titlePrice: '¥ 11.87'
    },
    kouwei: [
      '原味',
      '碳烤味'
    ],
    buyNum: 1,
    time:"",
  },

  /**
   * 组件的方法列表
   */
  methods: {
    next: function() {
      // if (properties.time=="now"){

      // }
      this.triggerEvent("done", {
        bool1: false
      })
    },
    cancel: function () {
      this.triggerEvent("done", {
        bool1: false
      })
    },

    clickMe: function(e) {
      this.setData({
        checkIndex: e.currentTarget.dataset.index
      })
    },
    add: function() {
      this.setData({
        buyNum: this.data.buyNum + 1
      })
      // console.log(this.data.buyNum)

    },
    sub: function() {
      if (this.data.buyNum > 1) {
        this.setData({
          buyNum: this.data.buyNum - 1
        })
      } else {
        this.data.buyNum = 1
      }

    }
  }
})