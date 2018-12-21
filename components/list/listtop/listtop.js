// components/list/listtop/listtop.js
Component({
  /**
   * Component properties
   */
  properties: {

  },

  /**
   * Component initial data
   */
  data: {
    checkedItemIndex:0,
    titlesarr: [
      {titlename: "每日精选",},
      {titlename: "肉铺",},
      {titlename: "冲调",},
      {titlename: "素食"},
      {titlename:"糕点"}
    ]
  },

  /**
   * Component methods
   */
  methods: {
    clickMe:function(e){
      
      // var id = e.target.dataset.index; 
      // console.log(e.currentTarget.dataset.index)
      this.setData({
        checkedItemIndex: e.currentTarget.dataset.index
      })
      this.triggerEvent('myevent', { paramBtoA: this.data.checkedItemIndex });
    }
  }
})