(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["account"],{"05ad":function(t,e,l){"use strict";l.r(e);var u=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("u-form",{attrs:{gap:"large"}},[l("u-form-item",{attrs:{label:"联系方式",required:""}},[l("u-input",{attrs:{size:"huge"},model:{value:t.model.phone,callback:function(e){t.$set(t.model,"phone",e)},expression:"model.phone"}})],1),l("u-form-item",{attrs:{label:"地址"}},[l("u-region-select",{model:{value:t.model.area,callback:function(e){t.$set(t.model,"area",e)},expression:"model.area"}})],1),l("u-form-item",{attrs:{label:"详细地址",layout:"block"}},[l("u-textarea",{attrs:{size:"huge"},model:{value:t.model.street,callback:function(e){t.$set(t.model,"street",e)},expression:"model.street"}})],1),l("u-form-item",[l("u-button",{attrs:{color:"primary"},on:{click:function(e){return t.submit()}}},[t._v("立即提交")])],1)],1)},s=[],r={data:function(){return{model:{area:void 0,street:"",phone:""},currentNav:"A"}},methods:{submit:function(){}}},a=r,i=l("2877"),n=Object(i["a"])(a,u,s,!1,null,null,null);e["default"]=n.exports},a86a:function(t,e,l){"use strict";l.r(e);var u=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("u-desc-list",[l("u-desc-list-group",{attrs:{title:"个人信息"}},[l("u-desc-list-item",{attrs:{label:"用户名"}},[t._v("cloudUser")]),l("u-desc-list-item",{attrs:{label:"登录账号"}},[t._v("develop@163.com")]),l("u-desc-list-item",{attrs:{label:"手机"}},[t._v("138****8888")]),l("u-desc-list-item",{attrs:{label:"邮箱"}},[t._v("dev****p@163.com")])],1),l("u-desc-list-group",{attrs:{title:"公司信息"}},[l("u-desc-list-item",{attrs:{label:"公司名"}},[t._v("xxxxxx")]),l("u-desc-list-item",{attrs:{label:"联系电话"}},[t._v("13688886666")]),l("u-desc-list-item",{attrs:{label:"联系邮箱"}},[t._v("xxxx@163.com")])],1)],1)},s=[],r={},a=r,i=l("2877"),n=Object(i["a"])(a,u,s,!1,null,null,null);e["default"]=n.exports},cfc1:function(t,e,l){"use strict";l.r(e);var u=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("u-desc-list",[l("u-desc-list-group",{attrs:{title:"安全信息"}},[l("u-desc-list-item",{attrs:{label:"安全手机"}},[t._v("138****8888 "),l("u-link",{on:{click:function(e){return t.updateSecurityMobile()}}},[t._v("修改")])],1),l("u-desc-list-item",{attrs:{label:"安全邮箱"}},[t._v("dev****p@163.com "),l("u-link",{on:{click:function(e){return t.updateSecurityEmail()}}},[t._v("修改")])],1)],1),l("u-desc-list-group",{attrs:{title:"账号安全"}},[l("u-desc-list-item",{attrs:{label:"登录密码"}},[l("u-link",{on:{click:function(e){return t.updatePassword()}}},[t._v("修改")])],1)],1)],1)},s=[],r={data:function(){return{}},methods:{updateSecurityMobile:function(){this.$toast.show("修改安全手机")},updateSecurityEmail:function(){this.$toast.show("修改安全邮箱")},updatePassword:function(){this.$toast.show("修改登录密码")}}},a=r,i=l("2877"),n=Object(i["a"])(a,u,s,!1,null,null,null);e["default"]=n.exports},f3ce:function(t,e,l){"use strict";l.r(e);var u=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("u-tabs",{attrs:{router:""}},t._l(t.tabs,(function(t){return l("u-tab",{key:t.to,attrs:{title:t.title,to:t.to}})})),1),l("router-view")],1)},s=[],r={data:function(){return{tabs:[{title:"个人中心",to:"/account/center"},{title:"个人设置",to:"/account/setting"},{title:"安全设置",to:"/account/security"}]}}},a=r,i=l("2877"),n=Object(i["a"])(a,u,s,!1,null,null,null);e["default"]=n.exports}}]);