(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9523bae0"],{"26cc":function(t,a,e){t.exports=e.p+"img/map.b96b1e56.png"},"345a":function(t,a,e){t.exports=e.p+"img/parklot5.902e9ddd.jpg"},8655:function(t,a,e){t.exports=e.p+"img/parklot1.8ab328e3.jpg"},"8dee":function(t,a,e){t.exports=e.p+"img/parklot4.a604fb87.jpg"},9086:function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"parklot-container"},[e("van-nav-bar",{attrs:{title:"黄金商业广场停车场","left-text":"返回","left-arrow":"",fixed:""},on:{"click-left":function(a){return t.$router.back()}},scopedSlots:t._u([{key:"right",fn:function(){return[e("van-icon",{attrs:{name:"search",size:"18"}})]},proxy:!0}])}),e("van-swipe",{staticClass:"my-swipe",attrs:{autoplay:3e3}},t._l(t.parklotImages,(function(t,a){return e("van-swipe-item",{key:a},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t,expression:"image"}]})])})),1),e("van-tabs",{attrs:{color:"skyblue"},model:{value:t.activeName,callback:function(a){t.activeName=a},expression:"activeName"}},[e("van-tab",{staticClass:"content",attrs:{title:"详细情况",name:"a"}},[e("p",[t._v(" 黄金商业广场为保证顾客有舒适、贴心的购物环境，商场公共区域已成精装修格局。全场WIFI免费覆盖，集中有效的媒体宣传活动，以此带动整个商场的正常运营，让商户在短期内进入稳定的盈利中。 ")]),e("p",[t._v(" 黄金商业广场专业的运营团队为您的经营提供专业的服务，全场统一收银、提供开业指导，货源优化、广告投放等超出您期待的服务。商户们只需要以专业、热情、周到的服务来迎接每一位顾客的到来。 ")]),e("van-image",{attrs:{width:"100%",height:"6rem",fit:"contain",src:t.parklotImages[0]}}),e("p",[t._v(" 黄金商业广场停车场，隶属黄金商业广场内部停车场，是大良城区新桂区域中心商业地带，是大良中心繁华地带人气较高的停车场。 ")])],1),e("van-tab",{staticClass:"content",attrs:{title:"收费规则",name:"b"}},[e("p",[t._v(" 小型车——白天时段（8:00——20:00)2小时内5元/车，2小时后每30分钟1元/车，夜间时段（20:00—8:00）4元/车。 ")]),e("p",[t._v(" 中型车——白天时段（8:00——20:00)2小时内8元/车，2小时后每30分钟2元/车，夜间时段（20:00—8:00)6元/车。 ")]),e("p",[t._v(" 大型车——白天时段（8:00——20:00)2小时内10元/车,2小时后每30分钟3元/车,夜间时段（20:00—8:00）8元/车。 ")])]),e("van-tab",{staticClass:"content",attrs:{title:"附近周边",name:"c"}},[e("van-image",{attrs:{width:"100%",height:"100%",fit:"contain",src:t.mapImages}}),e("van-row",[e("van-col",{attrs:{span:"4"}},[t._v("超市：")]),e("van-col",{attrs:{span:"20"}},[t._v("百惠，沃尔玛")])],1),e("van-row",[e("van-col",{attrs:{span:"4"}},[t._v("餐饮：")]),e("van-col",{attrs:{span:"20"}},[t._v("星巴克，顺德人家，港式茶餐厅，大岛站居酒屋，九哥龙虾馆等")])],1),e("van-row",[e("van-col",{attrs:{span:"4"}},[t._v("住宿：")]),e("van-col",{attrs:{span:"20"}},[t._v("Eleven-迷迭香复古式公寓，麦芽糖榻榻米")])],1)],1)],1),e("van-sku",{attrs:{sku:t.sku,goods:t.goods,"goods-id":t.goodsId,quota:t.quota,"quota-used":t.quotaUsed,"hide-stock":t.sku.hide_stock,"show-add-cart-btn":"","reset-stepper-on-hide":"","initial-sku":t.initialSku},on:{"buy-clicked":t.onBuyClicked},scopedSlots:t._u([{key:"sku-header",fn:function(a){return[e("div",{staticClass:"van-sku-header van-hairline--bottom"},[e("div",{staticClass:"van-sku-header__img-wrap"},[e("img",{attrs:{src:t.parklotImages[1]}})]),e("div",{staticClass:"van-sku-header__goods-info"},[e("div",{staticClass:"van-sku__goods-price"},[e("span",{staticClass:"van-sku__price-symbol"},[t._v("￥")]),e("span",{staticClass:"van-sku__price-num"},[t._v("5.00")])]),e("div",{staticClass:"van-sku-header-item"},[e("span",{staticClass:"van-sku__stock"},[t._v("剩余")]),e("span",{staticClass:"van-sku__stock-num van-sku__stock-num--highlight"},[t._v("6"+t._s(a.stock_num))]),t._v(" 个车位 ")])]),e("div")])]}},{key:"sku-stepper",fn:function(a){return[e("div",{staticClass:"van-sku__stepper"},[t._v(" "+t._s(a.stepper)+" ")])]}},{key:"sku-actions",fn:function(a){return[e("div",{staticClass:"van-sku-actions"},[e("van-button",{attrs:{square:"",size:"large",type:"warning"},on:{click:function(t){return a.skuEventBus.$emit("sku:buy")}}},[t._v(" 预定车位 ")])],1)]}}]),model:{value:t.show,callback:function(a){t.show=a},expression:"show"}}),e("van-divider",[t._v("为你推荐")]),e("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了"},on:{load:t.onLoad},model:{value:t.loading,callback:function(a){t.loading=a},expression:"loading"}},[e("van-card",{attrs:{tag:"推荐",price:"4.00",desc:"距您790m,步行需要9分钟",title:"西山上筑停车场",thumb:t.parklotImages[1]},scopedSlots:t._u([{key:"tags",fn:function(){return[e("van-tag",{attrs:{plain:"",type:"warning "}},[t._v("价格最低")]),e("van-tag",{attrs:{plain:"",type:"warning "}},[t._v("一小时内免费")])]},proxy:!0}])}),e("van-card",{attrs:{price:"5.00",desc:"距您1.6km,驾车需要7分钟",title:"明日广场露天停车场",thumb:t.parklotImages[2]}}),e("van-card",{attrs:{price:"5.00",desc:"距您2.0km,驾车需要9分钟",title:"永旺购物中心停车场",thumb:t.parklotImages[3]},scopedSlots:t._u([{key:"tags",fn:function(){return[e("van-tag",{attrs:{plain:"",type:"warning "}},[t._v("剩余车位多")])]},proxy:!0}])}),e("van-card",{attrs:{price:"8.00",desc:"距您2.4km,驾车需要10分钟",title:"步行街停车场",thumb:t.parklotImages[4]},scopedSlots:t._u([{key:"tags",fn:function(){return[e("van-tag",{attrs:{plain:"",type:"warning "}},[t._v("休闲娱乐")])]},proxy:!0}])}),e("van-card",{attrs:{price:"5.00",desc:"距您2.0km,驾车需要9分钟",title:"永旺购物中心停车场",thumb:t.parklotImages[3]},scopedSlots:t._u([{key:"tags",fn:function(){return[e("van-tag",{attrs:{plain:"",type:"warning "}},[t._v("剩余车位多")])]},proxy:!0}])}),e("van-card",{attrs:{price:"8.00",desc:"距您2.4km,驾车需要10分钟",title:"步行街停车场",thumb:t.parklotImages[4]},scopedSlots:t._u([{key:"tags",fn:function(){return[e("van-tag",{attrs:{plain:"",type:"warning "}},[t._v("休闲娱乐")])]},proxy:!0}])}),e("van-card",{attrs:{price:"5.00",desc:"距您2.0km,驾车需要9分钟",title:"永旺购物中心停车场",thumb:t.parklotImages[3]},scopedSlots:t._u([{key:"tags",fn:function(){return[e("van-tag",{attrs:{plain:"",type:"warning "}},[t._v("剩余车位多")])]},proxy:!0}])}),e("van-card",{attrs:{price:"8.00",desc:"距您2.4km,驾车需要10分钟",title:"步行街停车场",thumb:t.parklotImages[4]},scopedSlots:t._u([{key:"tags",fn:function(){return[e("van-tag",{attrs:{plain:"",type:"warning "}},[t._v("休闲娱乐")])]},proxy:!0}])})],1),e("van-divider",[t._v("没有更多了")]),e("van-goods-action",[e("van-goods-action-button",{attrs:{color:"#be99ff",type:"warning",text:"预约停车"},on:{click:t.onReserve}}),e("van-goods-action-button",{attrs:{color:"#7232dd",type:"danger",text:"立即停车"}})],1)],1)},s=[],i=(e("d3b7"),{name:"ParklotIndex",components:{},props:{},data:function(){return{activeName:"a",show:!1,loading:!1,finished:!0,parklotImages:[e("8655"),e("b2d4"),e("9cc7"),e("8dee"),e("345a")],mapImages:e("26cc"),goodsId:"123",quota:0,quotaUsed:0,initialSku:{s1:"1",s2:"1",selectedNum:3,selectedProp:{123:[1222]}},sku:{tree:[{k:"A区可选车位",k_s:"s1",v:[{id:"1",name:"1001"},{id:"1",name:"1002"},{id:"3",name:"1003"},{id:"1",name:"1004"},{id:"5",name:"1005"},{id:"6",name:"1006"},{id:"7",name:"1007"},{id:"1",name:"1008"},{id:"9",name:"1009"},{id:"1",name:"1010"},{id:"11",name:"1011"},{id:"1",name:"1012"}]}],list:[{id:2259,s1:"1",s2:"1",price:100,stock_num:10}],price:"5.00",stock_num:12,collection_id:2261,none_sku:!1,messages:[{datetime:"0",multiple:"0",name:"车牌",type:"text",required:"1",placeholder:"请输入车牌号"},{datetime:"1",multiple:"0",name:"预约时间",type:"date",required:"1",placeholder:"请选择预约时间"},{datetime:"1",multiple:"0",name:"预停时长",type:"time",required:"1",placeholder:"请选择预停时长"},{datetime:"0",multiple:"0",name:"留言",type:"text",required:"0",placeholder:""}],hide_stock:!1},goods:{picture:"https://img.yzcdn.cn/1.jpg"},messageConfig:{uploadImg:function(){return new Promise((function(t){setTimeout((function(){return t("https://img.yzcdn.cn/upload_files/2017/02/21/FjKTOxjVgnUuPmHJRdunvYky9OHP.jpg!100x100.jpg")}),1e3)}))},uploadMaxSize:3,placeholderMap:{text:"xxx",tel:"xxx"},initialMessages:{"留言":"留言信息"}}}},computed:{},watch:{},created:function(){},mounted:function(){},methods:{onLoad:function(){},onReserve:function(){this.show=!0},onBuyClicked:function(){}}}),o=i,r=(e("c8d5"),e("2877")),c=Object(r["a"])(o,n,s,!1,null,"6638e141",null);a["default"]=c.exports},"9cc7":function(t,a,e){t.exports=e.p+"img/parklot3.2f7abfeb.jpg"},b2d4:function(t,a,e){t.exports=e.p+"img/parklot2.7f676150.jpg"},c8d5:function(t,a,e){"use strict";var n=e("d265"),s=e.n(n);s.a},d265:function(t,a,e){}}]);
//# sourceMappingURL=chunk-9523bae0.990d8f7e.js.map