// miniprogram/pages/add/add.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  open() {
    wx.cloud.callFunction({
      name: 'add',
      data: {
        a: 1,
        b: 2
      },
      success: (res) => {
        console.log(res)
      }
    })
  }
})