"use strict";(self["webpackChunkvue"]=self["webpackChunkvue"]||[]).push([[950],{4950:function(t,e,i){i.r(e),i.d(e,{default:function(){return h}});var a=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticStyle:{"margin-right":"86px","margin-left":"5%","padding-top":"20px","margin-top":"3%",width:"1300px",height:"600px","background-color":"white","box-shadow":"0 0 10px #C0C0C0"}},[e("div",{staticStyle:{width:"1200px",height:"150px","margin-right":"200px","margin-left":"76px"}},[t._m(0),e("div",{staticStyle:{display:"flex","align-items":"center","margin-bottom":"24px"}},[e("div",{staticStyle:{width:"80px",height:"80px",background:"#F4F6FA","border-radius":"40px","margin-top":"36px","margin-right":"24px"}},[e("img",{staticStyle:{width:"67px"},attrs:{src:t.img,alt:""}})]),e("div",[e("div",{staticStyle:{"margin-top":"20px",width:"100px",height:"16px","font-family":"PingFangSC","font-weight":"400","font-size":"16px",color:"#606A75","line-height":"12px"}},[t._v("任务包名称:   ")]),e("div",{staticStyle:{flex:"1","text-align":"center","margin-top":"24px"}},[t._v(t._s(this.$route.query.packageName))])]),e("div",{staticStyle:{"margin-left":"95px"}},[e("div",{staticStyle:{"margin-top":"25px",width:"100px",height:"16px","font-family":"PingFangSC","font-weight":"400","font-size":"16px",color:"#606A75","line-height":"12px"}},[t._v("设备类型:      ")]),e("div",{staticStyle:{"margin-top":"24px","font-size":"20px"}},[t._v(t._s(t.type))])]),e("div",{staticStyle:{"margin-left":"95px"}},[e("div",{staticStyle:{"margin-top":"20px",width:"100px",height:"16px","font-family":"PingFangSC","font-weight":"400","font-size":"16px",color:"#606A75","line-height":"12px"}},[t._v("设备名称:      ")]),e("div",{staticStyle:{"margin-top":"24px","font-size":"18px",width:"120px",height:"17px","font-family":"PingFangSC","font-weight":"400",color:"#14181D","line-height":"32px"}},[t._v(t._s(t.equipmentName))])])])]),e("div",{staticStyle:{width:"1200px",margin:"0 20px 0 30px",height:"500px",overflow:"auto"}},[e("el-table",{staticStyle:{flex:"1","margin-top":"20px"},attrs:{width:"1200",height:"370",data:t.tableData,stripe:"","header-cell-style":{backgroundColor:"aliceblue",color:"#666"}}},[e("el-table-column",{attrs:{label:"参数名称",prop:"parameter",align:"center"}}),e("el-table-column",{attrs:{label:"参数类型",prop:"type",align:"center"}}),e("el-table-column",{attrs:{label:"判断型数据",prop:"realData1",align:"center"}}),e("el-table-column",{attrs:{label:"数值型数据",prop:"realData2",align:"center"}}),e("el-table-column",{attrs:{label:"异常详情",align:"center"},scopedSlots:t._u([{key:"default",fn:function(i){return["异常"===i.row.result?e("el-button",{attrs:{size:"mini",type:"primary",plain:""},on:{click:function(e){return t.totalFuntion(i.row)}}}):t._e()]}}])}),e("el-table-column",{attrs:{label:"判断结果",prop:"result",align:"center"},scopedSlots:t._u([{key:"default",fn:function(i){return[e("span",{style:{color:"异常"===i.row.result?"red":"black"}},[t._v(t._s(i.row.result))])]}}])})],1),e("div",{staticStyle:{"margin-left":"748px",width:"82px",height:"12px","font-family":"PingFangSC","font-weight":"400","font-size":"12px",color:"#14181D"}},[e("el-pagination",{attrs:{"current-page":t.pageNum,"page-size":t.pageSize,layout:"total, prev, pager, next",total:t.total},on:{"current-change":t.handleCurrentChange1}})],1)],1)])])},r=[function(){var t=this,e=t._self._c;return e("div",{staticStyle:{display:"flex","align-items":"center","margin-right":"30px"}},[e("div",{staticStyle:{width:"3px",height:"20px",background:"#089925","margin-right":"8px"}}),e("div",{staticStyle:{width:"160px",height:"20px","font-family":"PingFangSC","font-weight":"500","font-size":"20px",color:"#14181D","line-height":"20px"}},[t._v("设备点检记录详情")])])}],s=(i(7658),{name:"CheckRecordInfo",data(){return{id:"",taskNum:"",nfcNum:"",parameter:"",real_data1:"",real_data2:"",result:"",type:"",img1:"",img:"",childEquipment:"",equipmentName:"",equipmentNum:"",tableData:[],pageNum:1,pageSize:10,total:0,taskNum1:"",imageUrl:""}},created(){let t=this.$route.query.packageId,e=this.$route.query.taskNum;if(null===e)return this.open4(),void this.redirectProblem2();let i=this.$route.query.id;function a(t){return!0}e?console.log("taskNum is "+e):console.log("没有taskNum"),t?(console.log(t),this.$request.get("/checkRecord/getEquipmentNum",{params:{packageId:t,id:i},headers:{Authorization:"Bearer "+this.token}}).then((t=>{if(void 0===t[0])return this.open3(),void this.redirectProblem2();let e=t[0];this.equipmentNum=e,console.log("res.data is "+t[0]),console.log("equipmentNum is "+e),a(e)?this.$request.get("/deviceList/getDeviceType",{params:{equipmentNum:e},headers:{Authorization:"Bearer "+this.token}}).then((t=>{if(void 0===t[0])return this.open3(),void this.redirectProblem2();this.type=t[0],console.log("type is "+this.type),a(this.type)?this.$request.get("/deviceList/getEquipmentImgByType",{params:{type:this.type},headers:{Authorization:"Bearer "+this.token}}).then((t=>{if(void 0===t[0])return this.open3(),void this.redirectProblem2();this.img=t[0],console.log("img is "+t[0])})).catch((t=>{console.error("最里层错误:",t)})):console.error("路径验证失败")})).catch((t=>{console.error("里层错误:",t)})):console.error("路径验证失败"),this.$request.get("/deviceList/getEquipment",{params:{equipmentNum:e},headers:{Authorization:"Bearer "+this.token}}).then((t=>{if(void 0===t[0])return this.open3(),void this.redirectProblem2();console.log("this equipment_num is "+e),console.log("this equipment_name is "+t[0]),void 0===t[0]?this.open3():this.equipmentName=t[0]})).catch((e=>{if(void 0===t[0])return this.open3(),void this.redirectProblem2();console.error("实时数据错误 equipment_name:",e)}))})).catch((t=>{console.error("外层错误:",t)})),this.$request.get("/realData/getNfcNum",{params:{taskNum:e},headers:{Authorization:"Bearer "+this.token}}).then((t=>{if(void 0===t[0])return this.open3(),void this.redirectProblem2();console.log("nfc_num is "+t[0]),this.nfcNum=t[0]})).catch((t=>{console.error("实时数据错误 nfc_num:",t)})),console.log("taskNum is "+e),this.taskNum1=e,this.pageNum=1,this.$request.get("/realData/getRealDatas",{params:{pageNum:this.pageNum,pageSize:this.pageSize,taskNum:this.taskNum1,searchText:this.searchText}}).then((t=>{if(void 0===t)return this.open3(),void this.redirectProblem2();console.log("res is "+t),this.tableData=t.data.records,console.log("tableData is "+this.tableData),this.total=t.data.total,console.log("this.img is "+this.img)}))):console.log("没有packageId")},methods:{open3(){this.$message({message:"没有搜到数据，已回调",type:"warning"})},open4(){this.$message({message:"没有任务编号，已回调",type:"warning"})},handleCurrentChange1(t){this.load(t)},load(t){t&&(this.pageNum=t),this.$request.get("/realData/getRealDatas",{params:{pageNum:this.pageNum,pageSize:this.pageSize,taskNum:this.taskNum1,searchText:this.searchText}}).then((t=>{console.log("res is "+t),this.tableData=t.data.records,console.log("second tableData is "+this.tableData),console.log("second taskNum is "+this.taskNum1),this.total=t.data.total}))},totalFuntion(t){this.viewCheckRecord(t),this.redirectToBasicInfo(t)},redirectToBasicInfo(t){this.$router.push({path:"/Feedback",query:{id:t.id,nfcNum:t.nfcNum,taskNum:this.$route.query.taskNum}})},async viewCheckRecord(t){if("异常"===t.result)try{this.$request.get("/problem/getId",{params:{nfcNum:t.nfcNum,taskNum:t.taskNum},headers:{Authorization:"Bearer "+this.token}}).then((t=>{this.id=t,console.log("id is "+this.id),this.$router.push({path:"/problemDetail?id="+this.id})})).catch((t=>{console.error("最里层错误:",t)}))}catch(e){console.error(e)}else this.$message.error("设备正常")},redirectProblem(){console.log("this.nfcNum is "+this.nfcNum),this.$router.push({path:"/problem",query:{nfcNum:this.nfcNum}})},redirectProblem1(){this.$router.push({path:"/maintain",query:{nfcNum:this.nfcNum}})},redirectProblem2(){this.$router.push({path:"/checkRecord"})},handleCurrentChange(t){this.load(t)},async loadByPackageIds(t){try{let e=[];const i=t.map((t=>this.$request.get("/checkRecord/selectByPackageIds",{params:{packageId:this.packageId,pageNum:this.pageNum,pageSize:this.pageSize}}))),a=await Promise.all(i);a.forEach((t=>{e=e.concat(t.data.records)})),this.tableData=e,this.total=e.length}catch(e){console.error(e)}}}}),o=s,n=i(1001),l=(0,n.Z)(o,a,r,!1,null,"598b7062",null),h=l.exports}}]);
//# sourceMappingURL=950.50950b9a.js.map