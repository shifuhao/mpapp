// compents/final/final.js
Component({
  /**
   * Component properties
   */
  properties: {
    products: {            // 属性名
      type: Array,     // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
      value: []     // 属性初始值（可选），如果未指定则会根据类型选择一个
    }

  },

  /**
   * Component initial data
   */
  data: {
    shopcar:"http://xianqian-1255378077.file.myqcloud.com/weimeng-app/res/shopcar.png",
      list:[
        {
          imagesrc:"http://xianqian-1255378077.file.myqcloud.com/weimeng-app/res/Group41.png",
          title:"香辣鸡翅鸭舌鸡脖套装大礼包",
          price:"¥45",
          sellnum:"月销111111件",
        }, {
          imagesrc: "http://xianqian-1255378077.file.myqcloud.com/weimeng-app/res/Group41.png",
          title: "香辣鸡翅鸭舌鸡脖套装大礼包",
          price: "¥45",
          sellnum: "月销111111件",
        }, {
          imagesrc: "http://xianqian-1255378077.file.myqcloud.com/weimeng-app/res/Group41.png",
          title: "香辣鸡翅鸭舌鸡脖套装大礼包",
          price: "¥45",
          sellnum: "月销111111件",
        }
      ]
  },

  /**
   * Component methods
   */
  methods: {
      clickMe:function(e){
        const productId = e.currentTarget.dataset.productid;
        this.setData({
          checkedItemIndex: e.currentTarget.dataset.index
        });
        wx.navigateTo({
          url: "/pages/detail/detail?id="+productId
        })
      }
  }
})
