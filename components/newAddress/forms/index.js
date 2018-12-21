// components/newAddress/form/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    formData:null,
    addressId:null,
    isEditAddress:null,
  },

  /**
   * 组件的初始数据
   */
  data: {
    region:[],
  },

  /**
   * 组件的方法列表
   */
  methods: {
    saveAddress(e){
      var that = this;
      var form = e.detail.value;
      var isEditAddress = that.data.isEditAddress;
      var addressId = that.data.addressId;
      form.userId=getApp().globalData.userId;
      console.log('#### 传入组件的属性值和自带数据 #####',that.data);
      console.log('地址表单', form);
      for(var i in form){
        if(!form[i]){
          if(i=='isDefault')continue
          wx.showToast({
            title: '请填写完整信息',
            icon: 'none',
            duration: 2000
          })
          return;
        }
      }
      if(isEditAddress){
        //更新这条地址记录
        wx.request({
          method:'POST',
          url:getApp().globalData.server+'/wechat-app/address/update',
          data:{
            formData:form,
            addressId:addressId
          },
          success:res=>{
            console.log(res);
            const data = res.data
            if( data.result=='success' ){
              wx.navigateBack({
                url:'/pages/myAddress/index'
              })
            }else{
              wx.showToast({
                title: '保存失败',
                duration: 2000
              })
            }
          }
        })
      }else{
        //创建一条新地址记录
        wx.request({
          method:'POST',
          url:getApp().globalData.server+'/wechat-app/address',
          data:form,
          success:res=>{
            console.log(res);
            const data = res.data
            if( data.result=='success' ){
              wx.navigateBack({
                url:'/pages/myAddress/index'
              })
            }else{
              wx.showToast({
                title: '保存失败',
                duration: 2000
              })
            }
          }
        })
      }

    },
    switchChange: function (e){
      var that = this;
      console.log('switch 发生 change 事件，携带值为', e.detail.value);
      that.setData({
        isDefault:e.detail.value,
      });
      console.log(that.data.isDefault)
    },
    bindRegionChange: function (e) {
      console.log('picker发送选择改变，携带值为', e.detail.value);
      var that = this;
      var arr = e.detail.value;
      var str = arr.join('');
      console.log('地区选择',arr);
      that.setData({
        'formData.region':str,
      });
    },
  }
})
