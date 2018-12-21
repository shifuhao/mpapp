// components/index/newhot/index.js
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
    url1: "https://xianqian-1255378077.cos.ap-shanghai.myqcloud.com/weimeng-app/res/tag_hot%402x.png",
    url2:"https://xianqian-1255378077.cos.ap-shanghai.myqcloud.com/weimeng-app/res/tag_new%402x.png",
    checkedItemIndex: 0,
    imagearr: [
      "https://xianqian-1255378077.cos.ap-shanghai.myqcloud.com/weimeng-app/res/snack-colorful_pic_middle1%402x.png",
      "https://xianqian-1255378077.cos.ap-shanghai.myqcloud.com/weimeng-app/res/snack-colorful_pic_middle2%402x.png",
      "https://xianqian-1255378077.cos.ap-shanghai.myqcloud.com/weimeng-app/res/snack-colorful_pic_middle3%402x.png",
    ],
    imagesArr:[
      {
        url:'https://xianqian-1255378077.cos.ap-shanghai.myqcloud.com/weimeng-app/res/pic_biggood%402x.png',
        title:"印尼进口Tango咔咔脆威化",
        price:"¥ 42.49"
      },
      {
        url: 'https://xianqian-1255378077.cos.ap-shanghai.myqcloud.com/weimeng-app/res/pic_biggood%402x.png',
        title: "瑞士进口亦滋Toblehahb三角巧克力",
        price: "¥ 42.49"
      },
      {
        url: 'https://xianqian-1255378077.cos.ap-shanghai.myqcloud.com/weimeng-app/res/pic_biggood%402x.png',
        title: "满99减50 绅士坚果 越南腰果",
        price: "¥ 42.49"
      }
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    clickMe: function (e) {

      // var id = e.target.dataset.index; 
      // console.log(e.currentTarget.dataset.index)
      this.setData({
        checkedItemIndex: e.currentTarget.dataset.index
      })
      this.triggerEvent('myevent', { paramBtoA: this.data.checkedItemIndex });
    }
  }
})
