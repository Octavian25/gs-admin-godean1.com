(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{1247:function(e,t,a){"use strict";a.r(t);var n=a(19),l=a(20),r=a(33),o=a(22),i=a(21),c=a(12),s=a(678),u=(a(679),a(11)),m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=(arguments.length>1&&void 0!==arguments[1]&&arguments[1],arguments.length>2&&void 0!==arguments[2]&&arguments[2],new s.default("l","mm",[297,210])),a=[],n=[],l=[],r=30,o=0,i=0;t.setFontSize(15),t.text("LAPORAN KEUANGAN NON CASH REKAP",14,15),t.setFontSize(20),t.text(Object(u.j)().nama_toko,200,15),t.setFontSize(8);var c=Object(u.j)().alamat_toko.length;c>20&&t.text(Object(u.j)().alamat_toko.slice(0,48),200,20),c>50&&t.text(Object(u.j)().alamat_toko.slice(48,90),200,25),t.setFontSize(10),t.setProperties({title:"LAPORAN KEUANGAN NON CASH REKAP"}),t.text("Tanggal : ".concat(0===Object(u.l)("tgl_laporan").length?null:JSON.parse(Object(u.l)("tgl_laporan")).tanggal),14,25),e.forEach(function(e,t){l=[[{content:"KATEGORI"},{content:"UANG MASUK",styles:{halign:"right"}},{content:"Uang Masuk + Fee",styles:{halign:"right"}}]];var n=[e.kategori,{content:parseInt(e.jumlah_in).toLocaleString("kr-KO"),styles:{halign:"right"}},{content:parseInt(e.jumlah_in_fee).toLocaleString("kr-KO"),styles:{halign:"right"}}];o+=e.jumlah_in,i+=e.jumlah_in_fee,a.push(n)});var m=[{content:"",styles:{fillColor:"#E8E5E5",textColor:"#000"}},{content:"".concat(o.toLocaleString("kr-KO")),styles:{fillColor:"#E8E5E5",textColor:"#000",halign:"right"}},{content:"".concat(i.toLocaleString("kr-KO")),styles:{fillColor:"#E8E5E5",textColor:"#000",halign:"right"}}];n.push(m);var h=[{content:"Printed By ".concat(JSON.parse(Object(u.l)("userdata")).user_id," / ").concat(Object(u.i)()),colSpan:3,styles:{fontStyle:"italic",textColor:"#000"}}];n.push(h),t.autoTable({head:l,body:a,foot:n,startY:r,theme:"plain",rowPageBreak:"avoid",margin:{top:10},bodyStyles:{fontSize:8},headStyles:{fontSize:8,fillColor:"#E8E5E5",textColor:"#000"},tableLineColor:[255,255,255],tableLineWidth:1}),r=t.autoTableEndPosY()+3,a=[],n=[];var d=t.internal.getNumberOfPages(),g=t.internal.pageSize.width,p=t.internal.pageSize.height;t.setFontSize(10);for(var E=1;E<d+1;E++){var f=g/2,b=p-10;t.setPage(E),t.text("".concat(E," of ").concat(d),f,b,{align:"center"})}var k=t.output("datauristring"),x=window.open();x.document.open(),x.document.write("<html><head><title>LAPORAN KEUANGAN NON CASH REKAP</title></head><body style='margin:0 !important'><embed width='100%' height='100%'  src="+k+"></embed></body></html>")},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=(arguments.length>1&&void 0!==arguments[1]&&arguments[1],arguments.length>2&&void 0!==arguments[2]&&arguments[2],new s.default("l","mm",[297,210])),a=[],n=[],l=[],r=30,o=0,i=0;t.setFontSize(15),t.text("LAPORAN KEUANGAN NON CASH DETAIL",14,15),t.setFontSize(20),t.text(Object(u.j)().nama_toko,200,15),t.setFontSize(8);var c=Object(u.j)().alamat_toko.length;c>20&&t.text(Object(u.j)().alamat_toko.slice(0,48),200,20),c>50&&t.text(Object(u.j)().alamat_toko.slice(48,90),200,25),t.setFontSize(10),t.setProperties({title:"LAPORAN KEUANGAN NON CASH DETAIL"}),t.text("Tanggal : ".concat(0===Object(u.l)("tgl_laporan").length?null:JSON.parse(Object(u.l)("tgl_laporan")).tanggal),14,25),e.forEach(function(e,t){l=[[{content:"KATEGORI"},{content:"DESKRIPSI"},{content:"FEE",styles:{halign:"right"}},{content:"UANG MASUK",styles:{halign:"right"}},{content:"Uang Masuk + Fee",styles:{halign:"right"}}]];var n="";if(void 0!==e.deskripsi){var r=e.deskripsi.split("<br/>");if(r.length>2)for(var c=1;c<r.length;c++)n+=""===n?r[c]:"\n"+r[c];else n=r[1]}var s=[e.kategori,n,{content:e.fee+"%",styles:{halign:"right"}},{content:parseInt(e.jumlah_in).toLocaleString("kr-KO"),styles:{halign:"right"}},{content:parseInt(e.jumlah_in_fee).toLocaleString("kr-KO"),styles:{halign:"right"}}];o+=e.jumlah_in,i+=e.jumlah_in_fee,a.push(s)});var m=[{content:"",colSpan:3,styles:{fillColor:"#E8E5E5",textColor:"#000"}},{content:"".concat(o.toLocaleString("kr-KO")),styles:{fillColor:"#E8E5E5",textColor:"#000",halign:"right"}},{content:"".concat(i.toLocaleString("kr-KO")),styles:{fillColor:"#E8E5E5",textColor:"#000",halign:"right"}}];n.push(m);var h=[{content:"Printed By ".concat(JSON.parse(Object(u.l)("userdata")).user_id," / ").concat(Object(u.i)()),colSpan:5,styles:{fontStyle:"italic",textColor:"#000"}}];n.push(h),t.autoTable({head:l,body:a,foot:n,startY:r,theme:"plain",rowPageBreak:"avoid",margin:{top:10},bodyStyles:{fontSize:8},headStyles:{fontSize:8,fillColor:"#E8E5E5",textColor:"#000"},tableLineColor:[255,255,255],tableLineWidth:1}),r=t.autoTableEndPosY()+3,a=[],n=[];var d=t.internal.getNumberOfPages(),g=t.internal.pageSize.width,p=t.internal.pageSize.height;t.setFontSize(10);for(var E=1;E<d+1;E++){var f=g/2,b=p-10;t.setPage(E),t.text("".concat(E," of ").concat(d),f,b,{align:"center"})}var k=t.output("datauristring"),x=window.open();x.document.open(),x.document.write("<html><head><title>LAPORAN KEUANGAN NON CASH DETAIL</title></head><body style='margin:0 !important'><embed width='100%' height='100%'  src="+k+"></embed></body></html>")},d=a(0),g=a.n(d),p=a(677),E=a.n(p),f=function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(e){var l;return Object(n.a)(this,a),(l=t.call(this,e)).state={},l}return Object(l.a)(a,[{key:"render",value:function(){var e=0,t=0;return this.props.data.forEach(function(a,n){e+=a.jumlah_in,t+=a.jumlah_in_fee}),g.a.createElement(g.a.Fragment,null,g.a.createElement(E.a,{id:"test-table-xls-button",className:"btn btn-success btn-block",table:"table-to-xls",filename:"Laporan Keuangan Non Cash Rekap",sheet:"Laporan Keuangan Non Cash Rekap",buttonText:"Export Exel"}),g.a.createElement("table",{rowkey:"kode_member",id:"table-to-xls",style:{display:"none"}},g.a.createElement("thead",null,g.a.createElement("tr",null,g.a.createElement("th",{colSpan:"3",style:{textAlign:"center"}}," ","LAPORAN KEUANGAN NON CASH REKAP")),g.a.createElement("tr",null,g.a.createElement("th",{colSpan:"3"}," Tanggal  ")),g.a.createElement("tr",null,g.a.createElement("th",{colSpan:"3"}," ",0===Object(u.l)("tgl_laporan").length?null:JSON.parse(Object(u.l)("tgl_laporan")).tanggal," ")),g.a.createElement("tr",null,g.a.createElement("th",{colSpan:"3"}," TOKO :  ",Object(u.j)().nama_toko," ")),g.a.createElement("tr",null,g.a.createElement("th",{colSpan:"3"}," ALAMAT :  ",Object(u.j)().alamat_toko," ")),g.a.createElement("tr",null,g.a.createElement("th",{colSpan:"3"})),g.a.createElement("tr",null,g.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"Kategori"),g.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"right"}},"Uang Masuk"),g.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"right"}},"Uang Masuk + Fee"))),g.a.createElement("tbody",null,this.props.data.map(function(e,t){return g.a.createElement("tr",{key:t},g.a.createElement("td",null," ",e.kategori),g.a.createElement("td",{style:{textAlign:"right"}}," ",e.jumlah_in.toLocaleString("kr-KO")),g.a.createElement("td",{style:{textAlign:"right"}}," ",e.jumlah_in_fee.toLocaleString("kr-KO")))})),g.a.createElement("tfoot",null,g.a.createElement("tr",null,g.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}}," "),g.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"right"}},e.toLocaleString("kr-KO")," "),g.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"right"}},t.toLocaleString("kr-KO"))))))}}]),a}(d.Component),b=function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(e){var l;return Object(n.a)(this,a),(l=t.call(this,e)).state={},l}return Object(l.a)(a,[{key:"deskripsi",value:function(e){var t=e.split("<br/>");return void 0===e?"-":g.a.createElement(g.a.Fragment,null," ",t[1]," ",g.a.createElement("br",null)," ",t[2]," ")}},{key:"render",value:function(){var e=this,t=0,a=0;return this.props.data.forEach(function(e,n){t+=e.jumlah_in,a+=e.jumlah_in_fee}),g.a.createElement(g.a.Fragment,null,g.a.createElement(E.a,{id:"test-table-xls-button",className:"btn btn-success btn-block",table:"table-to-xls",filename:"Laporan Keuangan Non Cash Detail",sheet:"Laporan Keuangan Non Cash Detail",buttonText:"Export Exel"}),g.a.createElement("table",{rowkey:"kode_member",id:"table-to-xls",style:{display:"none"}},g.a.createElement("thead",null,g.a.createElement("tr",null,g.a.createElement("th",{colSpan:"5",style:{textAlign:"center"}}," ","LAPORAN KEUANGAN NON CASH DETAIL"," ")),g.a.createElement("tr",null,g.a.createElement("th",{colSpan:"5"}," Tanggal  ")),g.a.createElement("tr",null,g.a.createElement("th",{colSpan:"5"}," ",0===Object(u.l)("tgl_laporan").length?null:JSON.parse(Object(u.l)("tgl_laporan")).tanggal," ")),g.a.createElement("tr",null,g.a.createElement("th",{colSpan:"5"}," TOKO :  ",Object(u.j)().nama_toko," ")),g.a.createElement("tr",null,g.a.createElement("th",{colSpan:"5"}," ALAMAT :  ",Object(u.j)().alamat_toko," ")),g.a.createElement("tr",null,g.a.createElement("th",{colSpan:"5"})),g.a.createElement("tr",null,g.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"Kategori"),g.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"Deskripsi"),g.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"right"}},"Fee"),g.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"right"}},"Uang Masuk"),g.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"right"}},"Uang Masuk + Fee"))),g.a.createElement("tbody",null,this.props.data.map(function(t,a){return g.a.createElement("tr",{key:a,style:{verticalAlign:"top"}},g.a.createElement("td",null," ",t.kategori),g.a.createElement("td",null," ",e.deskripsi(t.deskripsi||"-")),g.a.createElement("td",{style:{textAlign:"right"}}," ",t.fee,"%"),g.a.createElement("td",{style:{textAlign:"right"}}," ",void 0===t.jumlah_in||null===t.jumlah_in?0:t.jumlah_in.toLocaleString("kr-KO")),g.a.createElement("td",{style:{textAlign:"right"}}," ",void 0===t.jumlah_in_fee||null===t.jumlah_in_fee?0:t.jumlah_in_fee.toLocaleString("kr-KO")))})),g.a.createElement("tfoot",null,g.a.createElement("tr",null,g.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}}," "),g.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"right"},colSpan:"2"}),g.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"right"}},t.toLocaleString("kr-KO")," "),g.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"right"}},a.toLocaleString("kr-KO"))))))}}]),a}(d.Component),k=function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(e){var l;return Object(n.a)(this,a),(l=t.call(this,e)).state={date:new Date,columnsdetail:[{dataField:"kategori",text:"Kategori",formatter:function(e){return void 0===e?"-":e},csvFormatter:function(e){return void 0===e?"-":e},footerAttrs:{colSpan:"3"},footer:"Total"},{dataField:"deskripsi",text:"Deskripsi",formatter:function(e){var t=(e||"-").split("<br/>");return void 0===e?"-":c.n.createElement(c.n.Fragment,null," ",t[1]," ",c.n.createElement("br",null)," ",t[2]," ")},csvFormatter:function(e){return void 0===e?"-":e}},{dataField:"fee",text:"Fee",headerClasses:"text-right",formatter:function(e){return c.n.createElement("div",{className:"text-right"}," ",void 0===e?"-":e+"%"," ")}},{dataField:"jumlah_in",text:"Uang Masuk",headerClasses:"text-right",formatter:function(e){return c.n.createElement("div",{className:"text-right"}," ",void 0===e?0:parseFloat(e).toLocaleString("kr-KO"))},csvFormatter:function(e){return c.n.createElement("div",{className:"text-right"}," ",void 0===e?"0":e," ")},footer:function(e){return c.n.createElement("div",{className:"text-right"}," ",parseInt(e.reduce(function(e,t){return e+t},0)).toLocaleString("kr-KO")," ")}},{dataField:"jumlah_in_fee",text:"Uang Masuk + Fee",headerClasses:"text-right",formatter:function(e){return c.n.createElement("div",{className:"text-right"}," ",void 0===e?0:parseFloat(e).toLocaleString("kr-KO"))},csvFormatter:function(e){return c.n.createElement("div",{className:"text-right"}," ",void 0===e?"0":e," ")},footer:function(e){return c.n.createElement("div",{className:"text-right"}," ",parseInt(e.reduce(function(e,t){return e+t},0)).toLocaleString("kr-KO")," ")}}],columnsrekap:[{dataField:"kategori",text:"Kategori",footer:"Total",formatter:function(e){return void 0===e?"-":e}},{dataField:"jumlah_in",text:"Uang Masuk",headerClasses:"text-right",formatter:function(e){return c.n.createElement("div",{className:"text-right"}," ",void 0===e?0:parseFloat(e).toLocaleString("kr-KO"))},csvFormatter:function(e){return c.n.createElement("div",{className:"text-right"}," ",void 0===e?"0":e," ")},footer:function(e){return c.n.createElement("div",{className:"text-right"}," ",parseInt(e.reduce(function(e,t){return e+t},0)).toLocaleString("kr-KO")," ")}},{dataField:"jumlah_in_fee",text:"Uang Masuk + Fee",headerClasses:"text-right",formatter:function(e){return c.n.createElement("div",{className:"text-right"}," ",void 0===e?0:parseFloat(e).toLocaleString("kr-KO"))},csvFormatter:function(e){return c.n.createElement("div",{className:"text-right"}," ",void 0===e?"0":e," ")},footer:function(e){return c.n.createElement("div",{className:"text-right"}," ",parseInt(e.reduce(function(e,t){return e+t},0)).toLocaleString("kr-KO")," ")}}]},l.setStartDate=l.setStartDate.bind(Object(r.a)(l)),l.setLastDate=l.setLastDate.bind(Object(r.a)(l)),l}return Object(l.a)(a,[{key:"exportPdfRekap",value:function(){m(this.props.datalaporancash)}},{key:"exportPdfDetail",value:function(){h(this.props.datalaporancash)}},{key:"componentDidMount",value:function(){this.props.change("type","REKAP"),this.props.change("filter","TRANSFER")}},{key:"setStartDate",value:function(e){this.setState({tgl_awal:new Date(e)})}},{key:"setLastDate",value:function(e){this.setState({tgl_akhir:new Date(e)})}},{key:"render",value:function(){var e=this;return c.n.createElement("form",{onSubmit:this.props.handleSubmit,autoComplete:"off"},c.n.createElement("div",{className:"row"},c.n.createElement("div",{className:"col-lg-4"},c.n.createElement(c.c,{name:"tgl_awal",component:c.f,label:"Tanggal Dari",type:"text",selected:this.state.tgl_awal,onChange:function(t){return e.setStartDate(t)},placeholder:"Masukan Tanggal Dari"})),c.n.createElement("div",{className:"col-lg-4"},c.n.createElement(c.c,{name:"type",component:c.q,onChange:function(t){return e.props.onChange(t)},options:[{value:"DETAIL",name:"DETAIL"},{value:"REKAP",name:"REKAP"}],label:"Type",placeholder:"Pilih Type"})),c.n.createElement("div",{className:"col-lg-4"},c.n.createElement(c.c,{name:"filter",component:c.q,onChange:function(t){return e.props.onChange(t)},options:[{value:"TRANSFER",name:"TRANSFER"},{value:"DEBET",name:"DEBET"},{value:"CREDIT",name:"KREDIT"}],label:"Filter",placeholder:"Filter Type Pembayaran"})),c.n.createElement("div",{className:"col-lg-12"},c.n.createElement("div",{className:"text-right"},c.n.createElement("label",null,"\xa0"),c.n.createElement("button",{type:"submit",value:"PDF",name:"type_btn",className:"btn btn-primary btn-block"},this.props.isLoading?c.n.createElement(c.n.Fragment,null,c.n.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Mencari"):"Cari Laporan"))),c.n.createElement("div",{className:"col-lg-12"},c.n.createElement(c.s,{keyField:"kategori",data:this.props.datalaporancash,columns:this.props.istypeRekap?this.state.columnsrekap:this.state.columnsdetail,empty:!0,textEmpty:"Data Keuangan Non Cash Kosong"})),c.n.createElement("div",{className:this.props.export?"col-lg-12":"col-lg-12 d-none"},c.n.createElement("label",{htmlFor:""},"\xa0"),c.n.createElement("div",{className:"row"},c.n.createElement("div",{className:"col-lg-6"},this.props.istypeRekap?c.n.createElement("button",{onClick:function(){return e.exportPdfRekap()},className:"btn btn-warning btn-block"}," ","Export Rekap PDF"," "):c.n.createElement("button",{onClick:function(){return e.exportPdfDetail()},className:"btn btn-warning btn-block"}," ","Export Detail PDF"," ")),c.n.createElement("div",{className:"col-lg-6"},this.props.istypeRekap?c.n.createElement(f,{data:this.props.datalaporancash}):c.n.createElement(b,{data:this.props.datalaporancash}))))),this.props.isLoading?c.n.createElement(c.h,{loading:!0,background:"rgba(0, 0, 0, 0.35)",loaderColor:"rgba(94, 147, 117, 1)"}):null)}}]),a}(c.b);k=Object(c.Q)({form:"HeadFormNonCash",enableReinitialize:!0})(k);var x=Object(c.u)(function(e){return{initialValues:{tgl_awal:Object(c.F)()}}})(k),y=function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(e){var l;return Object(n.a)(this,a),(l=t.call(this,e)).state={isLoading:!1,hidden:!1,istypeRekap:!0,tanggal:!1,datalaporancash:[],datamember:[],export:!1},l.handleSubmit=l.handleSubmit.bind(Object(r.a)(l)),l}return Object(l.a)(a,[{key:"handleSubmit",value:function(e){var t=this;this.setState({isLoading:!0});var a={tanggal:Object(c.z)(Object(c.L)(new Date(e.tgl_awal)).format("YYYY-MM-DD"))};Object(c.A)("report-non-cash?type=".concat(e.type,"&tanggal=").concat(a.tanggal,"&jenis=").concat(e.filter)).then(function(e){0===e.data.length?(Object(c.t)("info","Data Yang Di Cari Tidak Ada !!!"),t.setState({isLoading:!1})):(Object(c.t)("success","Laporan Keuangan Non Cash Tersedia"),t.setState({datalaporancash:e.data,isLoading:!1,export:!0})),Object(c.K)("tgl_laporan",JSON.stringify(a))}).catch(function(e){Object(c.t)("info","Data Yang Di Cari Tidak Ada !!!"),t.setState({isLoading:!1,export:!1}),console.log(e)})}},{key:"onChange",value:function(e){"REKAP"===e.type?this.setState({istypeRekap:!0,datalaporancash:[]}):this.setState({istypeRekap:!1,datalaporancash:[]})}},{key:"render",value:function(){var e=this;return c.n.createElement("div",null,c.n.createElement("ol",{className:"breadcrumb float-xl-right"},c.n.createElement("li",{className:"breadcrumb-item"},c.n.createElement(c.g,{to:"#"},"Laporan Keuangan")),c.n.createElement("li",{className:"breadcrumb-item active"},"Laporan Keuangan Non Cash")),c.n.createElement("h1",{className:"page-header"},"Laporan Keuangan Non Cash "),c.n.createElement(c.k,null,c.n.createElement(c.m,null,"Laporan Keuangan Non Cash"),c.n.createElement("br",null),c.n.createElement("div",{className:"container"},c.n.createElement(x,{onChange:function(t){return e.onChange(t)},isLoading:this.state.isLoading,export:this.state.export,datalaporancash:this.state.datalaporancash,istypeRekap:this.state.istypeRekap,onSubmit:function(t){return e.handleSubmit(t)}})),c.n.createElement("br",null)))}}]),a}(c.n.Component);y=Object(c.Q)({form:"LaporanNonCash",enableReinitialize:!0})(y);t.default=Object(c.u)()(y)},677:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),l=a(0),r=i(l),o=i(a(1));function i(e){return e&&e.__esModule?e:{default:e}}var c={table:o.default.string.isRequired,filename:o.default.string.isRequired,sheet:o.default.string.isRequired,id:o.default.string,className:o.default.string,buttonText:o.default.string},s=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.handleDownload=a.handleDownload.bind(a),a}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,l.Component),n(t,[{key:"handleDownload",value:function(){if(!document)return null;if(1!==document.getElementById(this.props.table).nodeType||"TABLE"!==document.getElementById(this.props.table).nodeName)return null;var e=document.getElementById(this.props.table).outerHTML,a=String(this.props.sheet),n=String(this.props.filename)+".xls",l={worksheet:a||"Worksheet",table:e};if(window.navigator.msSaveOrOpenBlob){var r=new Blob(['<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><meta charset="UTF-8">\x3c!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--\x3e</head><body>'+e+"</body></html>"]);return document.getElementById("react-html-table-to-excel").click()(function(){window.navigator.msSaveOrOpenBlob(r,n)}),!0}var o=window.document.createElement("a");return o.href="data:application/vnd.ms-excel;base64,"+t.base64(t.format('<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><meta charset="UTF-8">\x3c!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--\x3e</head><body>{table}</body></html>',l)),o.download=n,document.body.appendChild(o),o.click(),document.body.removeChild(o),!0}},{key:"render",value:function(){return r.default.createElement("button",{id:this.props.id,className:this.props.className,type:"button",onClick:this.handleDownload},this.props.buttonText)}}],[{key:"base64",value:function(e){return window.btoa(unescape(encodeURIComponent(e)))}},{key:"format",value:function(e,t){return e.replace(/{(\w+)}/g,function(e,a){return t[a]})}}]),t}();s.propTypes=c,s.defaultProps={id:"button-download-as-xls",className:"button-download",buttonText:"Download"},t.default=s}}]);
//# sourceMappingURL=78.7ab633f2.chunk.js.map