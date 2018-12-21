// components/dingdanliebiao/titile/index.js
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
    titleArr: [
      "全部",
      "待付款",
      "待发货",
      "已发货",
      "已完成"
    ],
    checkedItemIndex: 0,

  },

  /**
   * 组件的方法列表
   */
  methods: {
    clickMe: function(e) {

      this.setData({
        checkedItemIndex: e.currentTarget.dataset.index
      })
      this.triggerEvent('index', {
        checkItem: e.currentTarget.dataset.index
      })
    },
  }
})