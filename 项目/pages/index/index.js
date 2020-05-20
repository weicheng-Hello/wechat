//index.js
Page({
  data: {
    swiper_list:[],
    catItems:[],
    floorData:[]
  },
  getSwiperList: function (e) {
    const swiper_list = {
      "message": [{
        "image_src": "http://www.linweiqin.cn/img/banner1.jpg",
        "goods_id": 1229,
      }, {
        "image_src": "http://www.linweiqin.cn/img/banner2.jpg",
        "goods_id": 3295,
      }, {
        "image_src": "http://www.linweiqin.cn/img/banner3.jpg",
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
  getCatItems: function (e) {
    const catItems = {
      "message": [{
        "name": "分类",
        "image_src": "http://www.linweiqin.cn/img/cat1.png",
        "open_type": "switchTab",
        "navigator_url": "/pages/user/index"
      }, {
        "name": "秒杀拍",
        "image_src": "http://www.linweiqin.cn/img/cat2.png",
        "open_type": "switchTab",
        "navigator_url": "/pages/user/index"
      }, {
        "name": "超市购",
        "image_src": "http://www.linweiqin.cn/img/cat3.png",
        "open_type": "switchTab",
        "navigator_url": "/pages/user/index"
      }, {
        "name": "母婴品",
        "image_src": "http://www.linweiqin.cn/img/cat4.png",
        "open_type": "switchTab",
        "navigator_url": "/pages/user/index"
      }, {
        "name": "母婴品",
        "image_src": "http://www.linweiqin.cn/img/cat5.png",
        "open_type": "switchTab",
        "navigator_url": "/pages/user/index"
      }],
      "meta": {
        "msg": "获取成功",
        "status": 200
      }
    }
    this.setData({
      catItems: catItems.message
    })
  },
  getFloorData: function (e) {
    const floorData = {
      "message": [{
        "floor_title": {
          "name": "时尚服装",
        },
        "product_list": [{
          "name": "服饰",
          "image_src": "http://www.linweiqin.cn/img/floor1.jpg",
          "open_type": "navigate",
          "navigator_url": "/pages/goodsList/index?query=服饰"
        }, {
          "name": "服饰",
          "image_src": "http://www.linweiqin.cn/img/floor2.jpg",
          "open_type": "navigate",
          "navigator_url": "/pages/goodsList/index?query=服饰"
        }, {
          "name": "服饰",
          "image_src": "http://www.linweiqin.cn/img/floor3.jpg",
          "open_type": "navigate",
          "navigator_url": "/pages/goodsList/index?query=服饰"
        }, {
          "name": "服饰",
          "image_src": "http://www.linweiqin.cn/img/floor4.jpg",
          "open_type": "navigate",
          "navigator_url": "/pages/goodsList/index?query=服饰"
        }, {
          "name": "服饰",
          "image_src": "http://www.linweiqin.cn/img/floor5.jpg",
          "open_type": "navigate",
          "navigator_url": "/pages/goodsList/index?query=服饰"
        }, {
          "name": "服饰",
          "image_src": "http://www.linweiqin.cn/img/floor6.jpg",
          "open_type": "navigate",
          "navigator_url": "/pages/goodsList/index?query=服饰"
        }]
      }],
      "meta": {
        "msg": "获取成功",
        "status": 200
      }
    }
    console.log(floorData.message)
    this.setData({
      floorData: floorData.message
    });
  },
  onLoad: function () {
  this.getSwiperList()
  this.getCatItems()
  this.getFloorData()
  },
})