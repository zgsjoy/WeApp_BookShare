//bookList.js 个人中心共用图书列表
//获取应用实例
var app = getApp()
Page({
    data: {
        
    },

    onLoad: function () {
        var that = this;
        wx.request({
            url: 'http://' + app.globalData.apiUrl + '/bookshare?m=home&c=Api&a=getBookListCount&userId=' + app.globalData.userId,
            method: "GET",
            header: {
                'content-type': 'application/json'
            },
            success: function (res) {
                that.setData({
                    readNum: res.data.readNum,
                    loveNum: res.data.loveNum,
                    shareNum: res.data.shareNum,
                    
                })
            },
            fail: function () {
                wx.showToast({
                    title: '获取数据失败，请稍后重试！',
                    icon: 'false',
                    duration: 2000
                })
            }
        })
    },

    //进入各书单列表页
    openBookListInfo:function(e){
        var bookListType = e.currentTarget.dataset.type;
        wx.navigateTo({
            url: '../bookListInfo/bookListInfo?bookListType=' + bookListType,
        })
    }

})
