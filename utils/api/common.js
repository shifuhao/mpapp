// const baseUrl = "https://api.xianqianapp.com/"
const baseUrl = "http://localhost:3000"

export default {
  get(url, data, successCallback) {
    wx.request({
      url: baseUrl + url,
      data: data,
      method: "GET",
      success: function (res) {
        if (res.data.code == 200) {
          successCallback(res);
        } else {
          if (res.data.message) {
            wx.showToast({
              title: res.data.message,
              icon: 'none',
              duration: 1500
            })
          }
        }
      }
    })
  },
  post(url, data, successCallback) {
    wx.request({
      url: baseUrl + url,
      data: data,
      method: "POST",
      success: function (res) {
        if (res.data.code == 200) {
          successCallback(res);
        } else {
          if (res.data.message) {
            wx.showToast({
              title: res.data.message,
              icon: 'none',
              duration: 1500
            })
          }
        }
      }
    })
  },
  put(url, data, successCallback) {
    wx.request({
      url: baseUrl + url,
      data: data,
      method: "PUT",
      success: function (res) {
        if (res.data.code == 200) {
          successCallback(res);
        } else {
          if (res.data.message) {
            wx.showToast({
              title: res.data.message,
              icon: 'none',
              duration: 1500
            })
          }
        }
      }
    })
  },
  delete(url, data, successCallback) {
    wx.request({
      url: baseUrl + url,
      data: data,
      method: "DELETE",
      success: function (res) {
        if (res.data.code == 200) {
          successCallback(res);
        } else {
          if (res.data.message) {
            wx.showToast({
              title: res.data.message,
              icon: 'none',
              duration: 1500
            })
          }
        }
      }
    })
  }
}