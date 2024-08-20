"use strict";(self["webpackChunkvue"]=self["webpackChunkvue"]||[]).push([[482],{482:function(e,t,a){a.r(t),a.d(t,{default:function(){return c}});var l=function(){var e=this,t=e._self._c;return t("div",{staticStyle:{display:"flex"}},[t("div",{staticClass:"intro-text",staticStyle:{"min-height":"calc(100vh - 60px)",width:"155px","background-color":"#ecedf1","flex-shrink":"0"}},[t("el-menu",{staticStyle:{border:"none"},attrs:{"default-openeds":["info"],collapse:e.isCollapse,"collapse-transition":!1,router:"","background-color":"#ecedf1","text-color":"#222221","active-text-color":"#fff","default-active":e.$route.path}},[t("el-menu-item",{attrs:{index:"/performance"}},[t("i",{staticClass:"el-icon-caret-right"}),t("span",{attrs:{slot:"title"},slot:"title"},[e._v("签到情况")])]),t("el-menu-item",{attrs:{index:"/standard"}},[t("i",{staticClass:"el-icon-caret-right"}),t("span",{attrs:{slot:"title"},slot:"title"},[e._v("操作标准")])]),t("el-menu-item",{attrs:{index:"/maintain"}},[t("i",{staticClass:"el-icon-caret-right"}),t("span",{attrs:{slot:"title"},slot:"title"},[e._v("维护记录")])]),t("el-menu-item",{attrs:{index:"/checkRecord"}},[t("i",{staticClass:"el-icon-caret-right"}),t("span",{attrs:{slot:"title"},slot:"title"},[e._v("点检记录")])])],1),e._m(0)],1),t("div",{staticStyle:{padding:"20px 0 0 20px",width:"100%"}},[t("div",[t("el-input",{staticStyle:{width:"300px","margin-right":"10px"},attrs:{placeholder:"请输入搜索内容"},model:{value:e.searchText,callback:function(t){e.searchText=t},expression:"searchText"}}),t("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.load(1)}}},[e._v("查询")]),t("el-button",{attrs:{type:"info"},on:{click:e.reset}},[e._v("重置")])],1),t("div",{staticStyle:{margin:"10px 0"}},[t("el-button",{attrs:{type:"primary",plain:""},on:{click:e.handleAdd}},[e._v("新增")]),t("el-button",{attrs:{type:"danger",plain:""},on:{click:e.delBatch}},[e._v("批量删除")]),t("el-button",{attrs:{type:"info",plain:""},on:{click:e.exportData}},[e._v("批量导出")])],1),t("el-table",{attrs:{data:e.tableData,stripe:"","header-cell-style":{backgroundColor:"aliceblue",color:"#666"}},on:{"selection-change":e.handleSelectionChange}},[t("el-table-column",{attrs:{type:"selection",width:"55",align:"center","show-overflow-tooltip":!0}}),t("el-table-column",{attrs:{label:"用户ID",prop:"id",align:"center","show-overflow-tooltip":!0}}),t("el-table-column",{attrs:{label:"工段",prop:"section",align:"center","show-overflow-tooltip":!0}}),t("el-table-column",{attrs:{label:"工号",prop:"workNum",align:"center","show-overflow-tooltip":!0}}),t("el-table-column",{attrs:{label:"姓名",prop:"name",align:"center","show-overflow-tooltip":!0}}),t("el-table-column",{attrs:{label:"所属部门",prop:"department",align:"center","show-overflow-tooltip":!0}}),t("el-table-column",{attrs:{label:"签到时间",prop:"signIn",align:"center","show-overflow-tooltip":!0}}),t("el-table-column",{attrs:{label:"到勤情况",prop:"attendance",align:"center","show-overflow-tooltip":!0}}),t("el-table-column",{attrs:{label:"操作",align:"center",width:"180",fixed:"right"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("el-button",{attrs:{size:"mini",type:"primary",plain:""},on:{click:function(t){return e.handleEdit(a.row)}}},[e._v("编辑")]),t("el-button",{attrs:{size:"mini",type:"danger",plain:""},on:{click:function(t){return e.del(a.row.id)}}},[e._v("删除")])]}}])})],1),t("div",{staticStyle:{margin:"10px 0"}},[t("el-pagination",{attrs:{"current-page":e.pageNum,"page-size":e.pageSize,layout:"total, prev, pager, next",total:e.total},on:{"current-change":e.handleCurrentChange}})],1),t("el-dialog",{attrs:{title:"新增签到信息",visible:e.fromVisible,width:"30%"},on:{"update:visible":function(t){e.fromVisible=t}}},[t("el-form",{ref:"formRef",staticStyle:{"padding-right":"20px"},attrs:{model:e.form,"label-width":"80px",rules:e.rules}},[t("el-form-item",{attrs:{label:"工段",prop:"section"}},[t("el-input",{attrs:{placeholder:"工段"},model:{value:e.form.section,callback:function(t){e.$set(e.form,"section",t)},expression:"form.section"}})],1),t("el-form-item",{attrs:{label:"工号",prop:"workNum"}},[t("el-input",{attrs:{placeholder:"工号"},model:{value:e.form.workNum,callback:function(t){e.$set(e.form,"workNum",t)},expression:"form.workNum"}})],1),t("el-form-item",{attrs:{label:"姓名",prop:"name"}},[t("el-input",{attrs:{placeholder:"姓名"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),t("el-form-item",{attrs:{label:"所属部门",prop:"department"}},[t("el-input",{attrs:{placeholder:"所属部门"},model:{value:e.form.department,callback:function(t){e.$set(e.form,"department",t)},expression:"form.department"}})],1),t("el-form-item",{attrs:{label:"到勤情况",prop:"attendance"}},[t("el-input",{attrs:{placeholder:"到勤情况"},model:{value:e.form.attendance,callback:function(t){e.$set(e.form,"attendance",t)},expression:"form.attendance"}})],1)],1),t("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(t){e.fromVisible=!1}}},[e._v("取 消")]),t("el-button",{attrs:{type:"primary"},on:{click:e.save}},[e._v("确 定")])],1)],1)],1)])},r=[function(){var e=this,t=e._self._c;return t("div",{staticStyle:{"padding-top":"160px"}},[t("img",{attrs:{src:a(7282),height:"234",width:"153"}})])}],i={name:"Performance",data(){return{searchText:"",tableData:[],pageNum:1,pageSize:10,name:"",total:0,fromVisible:!1,form:{},user:JSON.parse(localStorage.getItem("honey-user")||"{}"),rules:{name:[{required:!0,message:"请输入账号",trigger:"blur"}]},ids:[]}},created(){this.load()},methods:{exportData(){if(this.ids.length){let e=this.ids.join(",");window.open(this.$baseUrl+"/performance/export?token="+this.user.token+"&ids="+e)}else window.open(this.$baseUrl+"/performance/export?token="+this.user.token+"&name="+this.name)},delBatch(){this.ids.length?this.$confirm("您确认批量删除这些数据吗？","确认删除",{type:"warning"}).then((e=>{this.$request.delete("/performance/delete/batch",{data:this.ids}).then((e=>{"200"===e.code?(this.$message.success("操作成功"),this.load(1)):this.$message.error(e.msg)}))})).catch((()=>{})):this.$message.warning("请选择数据")},handleSelectionChange(e){this.ids=e.map((e=>e.id))},del(e){this.$confirm("您确认删除吗？","确认删除",{type:"warning"}).then((t=>{this.$request.delete("/performance/delete/"+e).then((e=>{"200"===e.code?(this.$message.success("操作成功"),this.load(1)):this.$message.error(e.msg)}))})).catch((()=>{}))},handleAdd(){this.form={},this.fromVisible=!0},handleEdit(e){this.form=JSON.parse(JSON.stringify(e)),this.fromVisible=!0},save(){this.$refs.formRef.validate((e=>{e&&this.$request({url:this.form.id?"/performance/update":"/performance/add",method:this.form.id?"PUT":"POST",data:this.form}).then((e=>{"200"===e.code?(this.$message.success("保存成功"),this.load(1),this.fromVisible=!1):this.$message.error(e.msg)}))}))},reset(){this.searchText="",this.load(1)},load(e){e&&(this.pageNum=e),this.$request.get("/performance/selectByPage",{params:{pageNum:this.pageNum,pageSize:this.pageSize,name:this.name,searchText:this.searchText}}).then((e=>{this.tableData=e.data.records,this.total=e.data.total}))},handleCurrentChange(e){this.load(e)}}},o=i,s=a(1001),n=(0,s.Z)(o,l,r,!1,null,"f978010a",null),c=n.exports},7282:function(e,t,a){e.exports=a.p+"static/img/金色时代.75266d23.png"}}]);
//# sourceMappingURL=482.acca249d.js.map