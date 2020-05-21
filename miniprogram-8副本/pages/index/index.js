//index.js
Page({
  data: {
    swiper_list:[],
    jxz:[],
    module_exports:[],
  },
  getSwiperList: function (e) {
    const swiper_list = {
      "message": [
        {
        "image_src": "../image/b1.jpg",
        "goods_id": 1229,
      }, {
        "image_src": "../image/b2.jpg",
        "goods_id": 3295,
      }, {
        "image_src": "../image/b3.jpg",
        "goods_id": 382,
      }],
      "meta": {
        "msg": "获取成功",
        "status": 200
      }
    }
    this.setData({
      swiper_list: swiper_list.message
    })
  },
  jxzts:function(){
    const zt = {
      "jxzt": [{  //最近新品数据
        "floor_title": {
          "name": "精选主题",
        },
        "photo":[{
          imageUrl:"../image/s1.png",
        },
        {
          imageUrl: '../image/s2.png',
        },
        {
          imageUrl: '../image/s3.png',
        }]
      }],
    }
        this.setData({
          jxz:zt.jxzt
        })
        
  },
  
    
  newest:function(){
    const module_exports = {
      "newes": [{  //最近新品数据
        "floor_title": {
          "name": "最近新品",
        },
        "module_export":[{
          id: 'guazi',
          imageUrl: '../image/s4.png',
          title: "瓜子",
          price: "0.01",
          count: "100",
          unit: "g"
        },
        {
          id: 'qincai',
          imageUrl: '../image/s5.png',
          title: "芹菜",
          price: "0.02",
          count: "0.5",
          unit: "斤"
        },
        {
          id: 'sumi',
          imageUrl: '../image/s6.png',
          title: "素米",
          price: "0.03",
          count: "375",
          unit: "g"
        }]
      }],
    }
        this.setData({
          module_exports:module_exports.newes
        })
        
  },
  
  
  onLoad: function () {
  this.getSwiperList()
  this.newest()
  this.jxzts()
  },
})