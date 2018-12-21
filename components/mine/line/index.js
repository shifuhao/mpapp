// components/mine/line/index.js
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
    bool:false,
    phoneNum: "12345678"
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleContact(e) {
      console.log(e.path)
      console.log(e.query)
    },
    clickMe:function(){
      this.setData({
        bool:true
      })
    },
    cancel:function(){
      this.setData({
        bool:false
      })
    },
    call: function () {
      wx.makePhoneCall({
        phoneNumber: this.data.phoneNum,
      })
    }
  }
})
