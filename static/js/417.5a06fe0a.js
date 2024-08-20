"use strict";(self["webpackChunkvue"]=self["webpackChunkvue"]||[]).push([[417],{3417:function(t,e,i){i.r(e),i.d(e,{default:function(){return h}});i(7658);var a=function(){var t=this,e=t._self._c;return e("div",{staticStyle:{display:"flex"}},[e("div",{staticClass:"intro-text",staticStyle:{"min-height":"calc(100vh - 60px)",width:"155px","background-color":"#ecedf1","flex-shrink":"0"}},[e("div",{staticStyle:{"font-size":"18px","font-weight":"bold","text-align":"center",margin:"10px 0 10px 0",color:"grey"}},[t._v("设备信息")]),e("el-menu",{staticStyle:{border:"none"},attrs:{"default-openeds":["info"],collapse:t.isCollapse,"collapse-transition":!1,router:"","background-color":"#ecedf1","text-color":"#222221","active-text-color":"#fff","default-active":t.$route.path}},[e("el-menu-item",{attrs:{index:"/deviceList"}},[e("i",{staticClass:"el-icon-caret-right"}),e("span",{attrs:{slot:"title"},slot:"title"},[t._v("设备列表")])]),e("el-menu-item",{attrs:{index:"/childDevice"}},[e("i",{staticClass:"el-icon-caret-right"}),e("span",{attrs:{slot:"title"},slot:"title"},[t._v("部件表")])]),e("el-menu-item",{attrs:{index:"/meterList"}},[e("i",{staticClass:"el-icon-caret-right"}),e("span",{attrs:{slot:"title"},slot:"title"},[t._v("仪表列表")])]),e("div",{staticStyle:{"font-size":"18px","font-weight":"bold","text-align":"center",margin:"10px 0 10px 0",color:"grey"}},[t._v("点检标准录入")]),e("el-menu-item",{attrs:{index:"/entryForm"}},[e("i",{staticClass:"el-icon-caret-right"}),e("span",{attrs:{slot:"title"},slot:"title"},[t._v("标准录入")])]),e("el-menu-item",{attrs:{index:"/standardView"}},[e("el-dropdown",{attrs:{placement:"bottom"}},[e("div",[e("i",{staticClass:"el-icon-location-outline"}),e("span",{attrs:{slot:"title"},slot:"title"},[t._v("设备标准")])]),e("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[e("el-dropdown-item",{nativeOn:{click:function(e){return t.$router.push("/standardView")}}},[t._v("运行工标准")]),e("el-dropdown-item",{nativeOn:{click:function(e){return t.$router.push("/standardView2")}}},[t._v("维修工标准")])],1)],1)],1),e("el-menu-item",{attrs:{index:"/meterList1"}},[e("el-dropdown",{attrs:{placement:"bottom"}},[e("div",[e("i",{staticClass:"el-icon-location-outline"}),e("span",{attrs:{slot:"title"},slot:"title"},[t._v("仪表标准")])]),e("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[e("el-dropdown-item",{nativeOn:{click:function(e){return t.$router.push("/meterList1")}}},[t._v("运行工标准")]),e("el-dropdown-item",{nativeOn:{click:function(e){return t.$router.push("/meterList2")}}},[t._v("维修工标准")])],1)],1)],1)],1),t._m(0)],1),e("div",{staticStyle:{padding:"20px 0 0 20px",width:"100%"}},[e("div",[e("el-input",{staticStyle:{width:"300px","margin-right":"10px"},attrs:{placeholder:"请输入搜索内容"},model:{value:t.searchText,callback:function(e){t.searchText=e},expression:"searchText"}}),e("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.load(1)}}},[t._v("查询")]),e("el-button",{attrs:{type:"info"},on:{click:t.reset}},[t._v("重置")])],1),e("div",{staticStyle:{margin:"10px 0"}},[e("el-button",{attrs:{type:"primary",plain:""},on:{click:t.handleAdd}},[t._v("新增")]),"超级管理员"===t.user.authority?e("el-button",{attrs:{type:"danger",plain:""},on:{click:t.delBatch}},[t._v("批量删除")]):t._e()],1),e("el-table",{attrs:{data:t.tableData,stripe:"","header-cell-style":{backgroundColor:"aliceblue",color:"#666"}},on:{"selection-change":t.handleSelectionChange}},[e("el-table-column",{attrs:{type:"selection",width:"55",align:"center","show-overflow-tooltip":!0}}),e("el-table-column",{attrs:{label:"序号",prop:"id",width:"75",align:"center","show-overflow-tooltip":!0}}),e("el-table-column",{attrs:{label:"设备编号",prop:"equipmentNum",align:"center","show-overflow-tooltip":!0}}),e("el-table-column",{attrs:{label:"设备名称",prop:"equipmentName",align:"center","show-overflow-tooltip":!0}}),e("el-table-column",{attrs:{label:"部件名称",prop:"childName",align:"center","show-overflow-tooltip":!0}}),e("el-table-column",{attrs:{label:"操作",align:"center",width:"180",fixed:"right"},scopedSlots:t._u([{key:"default",fn:function(i){return["管理员"===t.user.authority||"超级管理员"===t.user.authority?e("el-button",{attrs:{size:"mini",type:"primary",plain:""},on:{click:function(e){return t.handleEdit(i.row)}}},[t._v("编辑")]):t._e(),"超级管理员"===t.user.authority?e("el-button",{attrs:{size:"mini",type:"danger",plain:""},on:{click:function(e){return t.del(i.row.id)}}},[t._v("删除")]):t._e()]}}])})],1),e("div",{staticStyle:{margin:"10px 0"}},[e("el-pagination",{attrs:{"current-page":t.pageNum,"page-size":t.pageSize,layout:"total, prev, pager, next",total:t.total},on:{"current-change":t.handleCurrentChange}})],1),e("el-dialog",{attrs:{title:"新增子设备",visible:t.fromVisible,width:"30%"},on:{"update:visible":function(e){t.fromVisible=e}}},[e("el-form",{ref:"formRef",staticStyle:{"padding-right":"20px"},attrs:{model:t.form,"label-width":"100px",rules:t.rules}},[e("el-form-item",{attrs:{label:"NFC标签值",prop:"nfcNum"}},[e("el-input",{attrs:{placeholder:"NFC标签值",disabled:""},model:{value:t.form.nfcNum,callback:function(e){t.$set(t.form,"nfcNum",e)},expression:"form.nfcNum"}})],1),e("el-form-item",{attrs:{label:"设备编号",prop:"equipmentNum"}},[e("el-input",{attrs:{placeholder:"设备编号"},model:{value:t.form.equipmentNum,callback:function(e){t.$set(t.form,"equipmentNum",e)},expression:"form.equipmentNum"}})],1),e("el-form-item",{attrs:{label:"设备名称",prop:"equipmentName"}},[e("el-input",{attrs:{placeholder:"设备名称"},model:{value:t.form.equipmentName,callback:function(e){t.$set(t.form,"equipmentName",e)},expression:"form.equipmentName"}})],1),e("el-form-item",{attrs:{label:"子设备名称",prop:"childName"}},[e("el-input",{attrs:{placeholder:"子设备名称"},model:{value:t.form.childName,callback:function(e){t.$set(t.form,"childName",e)},expression:"form.childName"}})],1)],1),e("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{on:{click:function(e){t.fromVisible=!1}}},[t._v("取 消")]),e("el-button",{attrs:{type:"primary"},on:{click:t.save}},[t._v("确 定")])],1)],1)],1)])},l=[function(){var t=this,e=t._self._c;return e("div",{staticStyle:{"padding-top":"40px"}},[e("img",{attrs:{src:i(7282),height:"234",width:"153"}})])}],o=i(911);const r=async()=>{try{const t=await o.Z.get("http://localhost:3000/read-uid");return console.log(t.data.uid),t.data.uid}catch(t){throw console.error("Error reading UID:",t),t}};var s={name:"ChildDevice",data(){return{nfcNum:"",childName:"",searchText:"",tableData:[],equipmentName:"",pageNum:1,pageSize:10,total:0,fromVisible:!1,form:{},user:JSON.parse(localStorage.getItem("honey-user")||"{}"),ids:[],uid:null,jsonData:null}},created(){this.load()},methods:{downNFC(){},exportData(){if(this.ids.length){let t=this.ids.join(",");window.open(this.$baseUrl+"/childDevice/export?token="+this.childDevice.token+"&ids="+t)}else window.open(this.$baseUrl+"/childDevice/export?token="+this.childDevice.token+"&childName="+this.childName)},delBatch(){this.ids.length?this.$confirm("您确认批量删除这些数据吗？","确认删除",{type:"warning"}).then((t=>{this.$request.delete("/childDevice/delete/batch",{data:this.ids}).then((t=>{"200"===t.code?(this.$message.success("操作成功"),this.load(1)):this.$message.error(t.msg)}))})).catch((()=>{})):this.$message.warning("请选择数据")},handleSelectionChange(t){this.ids=t.map((t=>t.id))},del(t){this.$confirm("您确认删除吗？","确认删除",{type:"warning"}).then((e=>{this.$request.delete("/childDevice/delete/"+t).then((t=>{"200"===t.code?(this.$message.success("操作成功"),this.load(1)):this.$message.error(t.msg)}))})).catch((()=>{}))},handleEdit(t){this.form=JSON.parse(JSON.stringify(t)),this.fromVisible=!0},handleAdd(){this.form={},this.fetchUid()},save(){this.$refs.formRef.validate((t=>{t&&this.$request({url:this.form.id?"/childDevice/update":"/childDevice/add",method:this.form.id?"PUT":"POST",data:this.form}).then((t=>{"200"===t.code?(this.$message.success("保存成功"),this.load(1),this.fromVisible=!1):this.$message.error("该标签已被使用")}))}))},reset(){this.searchText="",this.load(1)},load(t){t&&(this.pageNum=t),this.$request.get("/childDevice/selectByPage",{params:{pageNum:this.pageNum,pageSize:this.pageSize,equipmentName:this.equipmentName,searchText:this.searchText}}).then((t=>{this.tableData=t.data.records,this.total=t.data.total}))},handleCurrentChange(t){this.load(t)},getUid(){fetch("http://localhost:3000/read-uid").then((t=>{if(!t.ok)throw new Error("Network response was not ok喵");return t})).then((t=>{this.jsonData=t})).catch((t=>{console.error("Fetch error:",t)}))},async fetchUid(){try{this.form.nfcNum=await r(),console.log(this.form.nfcNum),this.fromVisible=!0}catch(t){console.error("Error fetching UID:",t)}}}},n=s,c=i(1001),d=(0,c.Z)(n,a,l,!1,null,"58c9accc",null),h=d.exports},7282:function(t,e,i){t.exports=i.p+"static/img/金色时代.75266d23.png"}}]);
//# sourceMappingURL=417.5a06fe0a.js.map