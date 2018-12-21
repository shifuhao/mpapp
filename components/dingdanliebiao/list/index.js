// components/dingdanliebiao/list/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // chkeckItem:0 
    propA: {
      type:Number,
      // value: checkItem
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    all: [
      {
        img: 'http://xianqian-1255378077.file.myqcloud.com/weimeng-app/res/Group41.png',
        title: '迷你烤香肠145g炭烤味纯肉鲜香小身材',
        des: '炭烤味一件',
        price: "¥ 11.89",
        num: 'x1'
      },
      {
        img: 'http://xianqian-1255378077.file.myqcloud.com/weimeng-app/res/Group4.png',
        title: '原味肉松饼',
        des: '原味一件',
        price: "¥ 7.34",
        num: 'x1'
      }, {
        img: 'http://xianqian-1255378077.file.myqcloud.com/weimeng-app/res/Group41.png',
        title: '迷你烤香肠145g炭烤味纯肉鲜香小身材',
        des: '炭烤味一件',
        price: "¥ 11.89",
        num: 'x1'
      },
      {
        img: 'http://xianqian-1255378077.file.myqcloud.com/weimeng-app/res/Group4.png',
        title: '原味肉松饼',
        des: '原味一件',
        price: "¥ 7.34",
        num: 'x1'
      },

    ],
    checkedItemIndex:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
   
  },
  onLoad: function () {
    this.setData({
      checkedItemIndex: this.properties.propA.value
    })
  }
})
