(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{MpVM:function(i,t,o){"use strict";o.r(t),o.d(t,"InicioPageModule",function(){return Y});var e=o("ofXK"),n=o("3Pt+"),c=o("TEn/"),r=o("tyNb"),a=o("mrSG"),s=o("fXoL"),b=o("EnSQ"),l=o("lGQG");const h=function(i){return["/inicio/ver/",i]};function u(i,t){if(1&i&&(s.Nb(0,"ion-item",1),s.Lb(1,"ion-icon",2),s.Nb(2,"ion-label",3),s.Nb(3,"h2"),s.mc(4),s.Yb(5,"uppercase"),s.Mb(),s.Nb(6,"ion-note",4),s.mc(7),s.Yb(8,"date"),s.Mb(),s.Nb(9,"ion-text",5),s.Nb(10,"p"),s.mc(11),s.Yb(12,"uppercase"),s.Mb(),s.Mb(),s.Mb(),s.Nb(13,"ion-label"),s.Nb(14,"h3"),s.mc(15),s.Yb(16,"number"),s.Mb(),s.Mb(),s.Mb()),2&i){const i=s.Xb();s.dc("routerLink",s.gc(17,h,i.contribucion.id))("detail",!0),s.zb(1),s.ec("name",i.icono),s.zb(3),s.oc(" ",s.Zb(5,7,i.beneficiario.primer_nombre.concat(" ",i.beneficiario.primer_apellido))," "),s.zb(3),s.nc(s.ac(8,9,i.contribucion.fecha,"d-MM-yyyy")),s.zb(4),s.oc(" ",s.Zb(12,12,i.funcionario.institucion.siglas)," "),s.zb(4),s.oc("C$ ",s.ac(16,14,i.contribucion.monto,"1.2-2"),"")}}let d=(()=>{class i{constructor(i,t){this._data=i,this.platform=t}ngOnInit(){this.icono=this._data.Tipos[this.contribucion.tipo].icon,this.platform.is("desktop")||this.platform.is("mobileweb")?(this._data.getBeneficiarioById(this.contribucion.beneficiario,this.token).subscribe(i=>{this.beneficiario=Object.assign({},i.body)}),this._data.getFuncionarioById(this.contribucion.funcionario,this.token).subscribe(i=>{this.funcionario=Object.assign({},i.body)})):(this._data.getBeneficiarioByIdNative(this.contribucion.beneficiario,this.token).then(i=>{this.beneficiario=Object.assign({},JSON.parse(i.data))}),this._data.getFuncionarioByIdNative(this.contribucion.funcionario,this.token).then(i=>{this.funcionario=Object.assign({},JSON.parse(i.data))}))}}return i.\u0275fac=function(t){return new(t||i)(s.Kb(b.a),s.Kb(c.M))},i.\u0275cmp=s.Eb({type:i,selectors:[["app-item-contribucion"]],inputs:{contribucion:"contribucion",token:"token"},decls:1,vars:1,consts:[[3,"routerLink","detail",4,"ngIf"],[3,"routerLink","detail"],["slot","start",1,"contrib-item__read",3,"name"],[1,"ion-text-wrap"],["slot","end"],["color","success"]],template:function(i,t){1&i&&s.lc(0,u,17,19,"ion-item",0),2&i&&s.dc("ngIf",t.contribucion&&t.beneficiario&&t.funcionario)},directives:[e.k,c.t,c.N,r.h,c.r,c.v,c.y,c.F],pipes:[e.n,e.d,e.e],styles:[".contrib-item__unread[_ngcontent-%COMP%]{color:--ion-color-success}.contrib-item__read[_ngcontent-%COMP%]{color:--ion-color-primary}.contrib-item__concept[_ngcontent-%COMP%]{text-overflow:ellipsis}"]}),i})();const p=["searchField"];function m(i,t){if(1&i&&s.Lb(0,"app-item-contribucion",27),2&i){const i=t.$implicit,o=s.Xb(2);s.dc("contribucion",i)("token",o.token)}}function f(i,t){if(1&i){const i=s.Ob();s.Nb(0,"ion-content"),s.Nb(1,"ion-item"),s.Nb(2,"ion-text",10),s.Nb(3,"h5"),s.mc(4),s.Yb(5,"uppercase"),s.Mb(),s.Mb(),s.Mb(),s.Nb(6,"ion-item"),s.Nb(7,"ion-input",11,12),s.Vb("ngModelChange",function(t){return s.ic(i),s.Xb().cedula=t}),s.Mb(),s.Nb(9,"ion-button",13),s.Vb("click",function(){return s.ic(i),s.Xb().ContribucionesPorBeneficiario()}),s.Lb(10,"ion-icon",14),s.Mb(),s.Mb(),s.Nb(11,"ion-item-divider",15),s.Nb(12,"ion-label"),s.mc(13,"Leyenda"),s.Mb(),s.Mb(),s.Nb(14,"ion-grid"),s.Nb(15,"ion-row"),s.Nb(16,"ion-col"),s.Nb(17,"ion-item"),s.Lb(18,"ion-icon",16),s.Nb(19,"ion-label",17),s.mc(20,"Dinero"),s.Mb(),s.Mb(),s.Mb(),s.Nb(21,"ion-col"),s.Nb(22,"ion-item"),s.Lb(23,"ion-icon",18),s.Nb(24,"ion-label",17),s.mc(25,"Medicinas"),s.Mb(),s.Mb(),s.Mb(),s.Mb(),s.Nb(26,"ion-row"),s.Nb(27,"ion-col"),s.Nb(28,"ion-item"),s.Lb(29,"ion-icon",19),s.Nb(30,"ion-label",17),s.mc(31,"Provisi\xf3n"),s.Mb(),s.Mb(),s.Mb(),s.Nb(32,"ion-col"),s.Nb(33,"ion-item"),s.Lb(34,"ion-icon",20),s.Nb(35,"ion-label",17),s.mc(36,"Pasajes"),s.Mb(),s.Mb(),s.Mb(),s.Mb(),s.Nb(37,"ion-row"),s.Nb(38,"ion-col"),s.Nb(39,"ion-item"),s.Lb(40,"ion-icon",21),s.Nb(41,"ion-label",17),s.mc(42,"Materiales"),s.Mb(),s.Mb(),s.Mb(),s.Nb(43,"ion-col"),s.Nb(44,"ion-item"),s.Lb(45,"ion-icon",22),s.Nb(46,"ion-label",17),s.mc(47,"Art. Escolares"),s.Mb(),s.Mb(),s.Mb(),s.Mb(),s.Nb(48,"ion-row"),s.Nb(49,"ion-col",23),s.Nb(50,"ion-item"),s.Lb(51,"ion-icon",24),s.Nb(52,"ion-label",17),s.mc(53,"Otro"),s.Mb(),s.Mb(),s.Mb(),s.Mb(),s.Mb(),s.Nb(54,"ion-item-divider",15),s.Nb(55,"ion-label"),s.mc(56,"Lista"),s.Mb(),s.Mb(),s.Nb(57,"ion-refresher",25),s.Vb("ionRefresh",function(t){return s.ic(i),s.Xb().refresh(t)}),s.Lb(58,"ion-refresher-content"),s.Mb(),s.Nb(59,"ion-list"),s.lc(60,m,1,2,"app-item-contribucion",26),s.Mb(),s.Mb()}if(2&i){const i=s.Xb();s.zb(4),s.nc(s.Zb(5,3,"Instituciones auton\xf3micas")),s.zb(3),s.dc("ngModel",i.cedula),s.zb(53),s.dc("ngForOf",i.contribuciones)}}let M=(()=>{class i{constructor(i,t,o,e,n){this._data=i,this._auth=t,this._router=o,this.toastCtrl=e,this.platform=n}ngOnInit(){this.filtrar=!1,this._auth.getAuthToken().then(i=>{this.token=i.value,this.LlenaDatos()})}ionViewDidEnter(){this.filtrar=!1,this.cedula=null,this.refresh(null)}refresh(i){this._auth.getAuthToken().then(t=>{this.token=t.value,this.platform.is("desktop")||this.platform.is("mobileweb")?this._data.getContribCount(this.token).subscribe(t=>{this.CountList(t,i)},i=>{console.error("Error: ".concat(i)),this.showToast(i)}):this._data.getContribCountNative(this.token).then(t=>{this.CountList(t,i)}).catch(i=>{this.showToast(i.error)})})}CountList(i,t){let o=0;i.data?o=JSON.parse(i.data).count:i.body&&(o=JSON.parse(i.body).count),null!=this.contribuciones&&this.contribuciones.length>0&&o>this.contribuciones.length&&this.LlenaDatos(),null!=t&&t.detail.complete()}LlenaDatos(){this._auth.updateSession().then(()=>{}),this.platform.is("desktop")||this.platform.is("mobileweb")?this.filtrar?this._data.getContribucionesPorBeneficiario(this.cedula.toUpperCase(),this.token).subscribe(i=>{i.body&&i.body.length>0&&this.FillIfExists(i.body)},i=>{console.error("Error: ".concat(i)),this.showToast(i)}):this._data.getContribuciones(this.token).subscribe(i=>{this.contribuciones=i.body},i=>{console.error("Error: ".concat(i)),this.showToast(i,!1)}):this.filtrar?this._data.getContribPorBenefNative(this.cedula.toUpperCase(),this.token).then(i=>{let t=JSON.parse(i.data);this.FillIfExists(t)}).catch(i=>{console.error("Error: ".concat(i.error)),this.showToast(i.error)}):this._data.getContribucionesNative(this.token).then(i=>{this.contribuciones=JSON.parse(i.data)}).catch(i=>{console.error("Error: ".concat(i.error)),this.showToast(i.error)})}ContribucionesPorBeneficiario(){this.cedulaField.valid?(this.filtrar=!0,this.LlenaDatos()):this.showToast("Valor Incorrecto")}FillIfExists(i){i&&i.length>0?this.contribuciones=i:this.showToast("No hay contribuciones para el beneficiario.")}Logout(){this._auth.UserLogout().then(()=>{this.showToast("\xa1Adi\xf3s!",!0)}).catch(i=>{this.showToast(i)})}showToast(i,t=!1){return Object(a.a)(this,void 0,void 0,function*(){const o=yield this.toastCtrl.create({message:i,position:"middle",duration:2e3});t&&o.onDidDismiss().then(()=>{this._router.navigateByUrl("/hamster")}),o.present()})}}return i.\u0275fac=function(t){return new(t||i)(s.Kb(b.a),s.Kb(l.a),s.Kb(r.g),s.Kb(c.Q),s.Kb(c.M))},i.\u0275cmp=s.Eb({type:i,selectors:[["app-inicio"]],viewQuery:function(i,t){if(1&i&&s.qc(p,1),2&i){let i;s.hc(i=s.Wb())&&(t.cedulaField=i.first)}},decls:14,vars:5,consts:[[3,"translucent"],["slot","start"],[3,"click"],["name","exit-outline","slot","icon-only"],["slot","end"],["routerLink","/beneficiarios","fill","clear"],["name","people-outline","slot","icon-only"],["routerLink","/inicio/nuevo","fill","clear"],["name","add-outline","slot","icon-only"],[4,"ngIf"],["color","dark"],["name","txtCedula","inputmode","text","slot","end","type","text","pattern","[0-9]{3}-[0-9]{6}-[0-9A-Za-z]{5}","maxlength","16","minlength","16","color","primary","placeholder","000-000000-XXXXX",1,"search-input",3,"ngModel","ngModelChange"],["searchField","ngModel"],["color","light","slot","end",3,"click"],["slot","icon-only","name","search-outline"],[1,"header-divider"],["name","cash-outline"],[1,"legend-label"],["name","medkit-outline"],["name","cart-outline"],["name","bus-outline"],["name","hammer-outline"],["name","library-outline"],["size","6"],["name","flower-outline"],["slot","fixed",3,"ionRefresh"],[3,"contribucion","token",4,"ngFor","ngForOf"],[3,"contribucion","token"]],template:function(i,t){1&i&&(s.Nb(0,"ion-header",0),s.Nb(1,"ion-toolbar"),s.Nb(2,"ion-buttons",1),s.Nb(3,"ion-button",2),s.Vb("click",function(){return t.Logout()}),s.Lb(4,"ion-icon",3),s.Mb(),s.Mb(),s.Nb(5,"ion-title",2),s.Vb("click",function(){return t.LlenaDatos()}),s.mc(6),s.Yb(7,"uppercase"),s.Mb(),s.Nb(8,"ion-buttons",4),s.Nb(9,"ion-button",5),s.Lb(10,"ion-icon",6),s.Mb(),s.Nb(11,"ion-button",7),s.Lb(12,"ion-icon",8),s.Mb(),s.Mb(),s.Mb(),s.Mb(),s.lc(13,f,61,5,"ion-content",9)),2&i&&(s.dc("translucent",!0),s.zb(6),s.nc(s.Zb(7,3,"Ayudas Sociales")),s.zb(7),s.dc("ngIf",t.contribuciones))},directives:[c.q,c.I,c.g,c.f,c.r,c.H,c.N,r.h,e.k,c.n,c.t,c.F,c.s,c.P,n.h,n.b,n.c,n.f,n.g,c.u,c.v,c.p,c.C,c.m,c.z,c.A,c.w,e.j,d],pipes:[e.n],styles:[".legend-label[_ngcontent-%COMP%]{margin-left:2rem}.header-divider[_ngcontent-%COMP%]{background-color:#3880ff;color:#fff}.search-input[_ngcontent-%COMP%]{border:1px solid #000;border-radius:.5rem;text-align:right}"]}),i})();function g(i,t){if(1&i&&(s.Nb(0,"ion-card",3),s.Nb(1,"ion-card-header"),s.Nb(2,"ion-card-title"),s.mc(3),s.Yb(4,"uppercase"),s.Mb(),s.Nb(5,"ion-card-subtitle"),s.mc(6),s.Yb(7,"uppercase"),s.Mb(),s.Mb(),s.Nb(8,"ion-card-content"),s.Lb(9,"ion-icon",4),s.Nb(10,"ion-label",5),s.mc(11),s.Yb(12,"uppercase"),s.Yb(13,"date"),s.Mb(),s.Lb(14,"ion-item-divider"),s.Nb(15,"ion-item"),s.Nb(16,"h3"),s.mc(17),s.Yb(18,"uppercase"),s.Mb(),s.Mb(),s.Nb(19,"ion-item"),s.Nb(20,"h3"),s.mc(21),s.Yb(22,"uppercase"),s.Mb(),s.Mb(),s.Nb(23,"ion-item"),s.Nb(24,"h3"),s.mc(25),s.Yb(26,"uppercase"),s.Mb(),s.Mb(),s.Nb(27,"ion-item"),s.Nb(28,"h2"),s.mc(29),s.Yb(30,"uppercase"),s.Mb(),s.Nb(31,"ion-text",6),s.Nb(32,"h1"),s.mc(33),s.Yb(34,"number"),s.Mb(),s.Mb(),s.Mb(),s.Mb(),s.Mb()),2&i){const i=s.Xb();s.zb(3),s.nc(s.Zb(4,10,i.beneficiario.primer_nombre.concat(" ",i.beneficiario.primer_apellido))),s.zb(3),s.oc(" ",s.Zb(7,12,i.beneficiario.cedula)," "),s.zb(3),s.ec("name",i.icono),s.zb(2),s.pc("",s.Zb(12,14,"Fecha: "),"",s.ac(13,16,i.contribucion.fecha,"d-MM-y"),""),s.zb(6),s.nc(s.Zb(18,19,"Concepto: "+i.contribucion.concepto)),s.zb(4),s.oc(" ",s.Zb(22,21,"Entregado por: "+i.funcionario.usuario.first_name+" "+i.funcionario.usuario.last_name)," "),s.zb(4),s.oc(" ",s.Zb(26,23,"Instituci\xf3n: "+i.funcionario.institucion.nombre)," "),s.zb(4),s.oc("",s.Zb(30,25,"Monto: C$"),"\xa0"),s.zb(4),s.nc(s.ac(34,27,i.contribucion.monto,"1.2-2"))}}let N=(()=>{class i{constructor(i,t,o,e,n,c){this._auth=i,this._data=t,this._router=o,this._activatedRoute=e,this.toastCtrl=n,this.platform=c}ngOnInit(){this.LlenaDatos()}LlenaDatos(){let i=this._activatedRoute.snapshot.paramMap.get("id");this._auth.updateSession().then(()=>{}),this._auth.getAuthToken().then(t=>{this.platform.is("desktop")||this.platform.is("mobileweb")?this._data.getContribucionById(parseInt(i),t.value).subscribe(i=>{this.contribucion=Object.assign({},i.body),this._data.getBeneficiarioById(this.contribucion.beneficiario,t.value).subscribe(i=>{this.beneficiario=Object.assign({},i.body)},i=>{console.error("Error: ".concat(i)),this.showToast(i)}),this._data.getFuncionarioById(this.contribucion.funcionario,t.value).subscribe(i=>{this.funcionario=Object.assign({},i.body)},i=>{console.error("Error: ".concat(i)),this.showToast(i)}),this.Complementos()},i=>{console.error("Error: ".concat(i)),this.showToast(i)}):this._data.getContribucionByIdNative(parseInt(i),t.value).then(i=>{i.data&&(this.contribucion=Object.assign({},JSON.parse(i.data)),this._data.getBeneficiarioByIdNative(this.contribucion.beneficiario,t.value).then(i=>{i.data&&(this.beneficiario=Object.assign({},JSON.parse(i.data)))}).catch(i=>{console.error("Error: ".concat(i.error)),this.showToast(i.error)}),this._data.getFuncionarioByIdNative(this.contribucion.funcionario,t.value).then(i=>{i.data&&(this.funcionario=Object.assign({},JSON.parse(i.data)))}).catch(i=>{console.error("Error: ".concat(i.error)),this.showToast(i.error)}),this.Complementos())}).catch(i=>{this.showToast(i.error)})}).catch(i=>{this.showToast(i)})}Complementos(){this._auth.updateSession().then(()=>{}),this.icono=this._data.Tipos[this.contribucion.tipo].icon}showToast(i){return Object(a.a)(this,void 0,void 0,function*(){(yield this.toastCtrl.create({message:i,duration:2e3,position:"middle"})).present()})}}return i.\u0275fac=function(t){return new(t||i)(s.Kb(l.a),s.Kb(b.a),s.Kb(r.g),s.Kb(r.a),s.Kb(c.Q),s.Kb(c.M))},i.\u0275cmp=s.Eb({type:i,selectors:[["app-contribucion"]],decls:9,vars:4,consts:[["slot","start"],["defaultHref","/inicio"],["class","card",4,"ngIf"],[1,"card"],["size","large",1,"card-icon",3,"name"],[1,"card-date"],["color","primary"]],template:function(i,t){1&i&&(s.Nb(0,"ion-header"),s.Nb(1,"ion-toolbar"),s.Nb(2,"ion-buttons",0),s.Lb(3,"ion-back-button",1),s.Mb(),s.Nb(4,"ion-title"),s.mc(5),s.Yb(6,"uppercase"),s.Mb(),s.Mb(),s.Mb(),s.Nb(7,"ion-content"),s.lc(8,g,35,30,"ion-card",2),s.Mb()),2&i&&(s.zb(5),s.oc(" ",s.Zb(6,2,"Detalle de Ayuda")," "),s.zb(3),s.dc("ngIf",t.contribucion&&t.beneficiario&&t.funcionario))},directives:[c.q,c.I,c.g,c.c,c.d,c.H,c.n,e.k,c.h,c.j,c.l,c.k,c.i,c.r,c.v,c.u,c.t,c.F],pipes:[e.n,e.d,e.e],styles:[".card-icon[_ngcontent-%COMP%]{float:left}.card-date[_ngcontent-%COMP%]{float:right}"]}),i})();var v=o("AytR"),y=o("myAU");const _=["dtFecha"],w=["optBeneficiario"],C=["optTipoAporte"],k=["txtMonto"],L=["txtConcepto"];function O(i,t){if(1&i&&(s.Nb(0,"ion-select-option",23),s.mc(1),s.Yb(2,"uppercase"),s.Mb()),2&i){const i=t.$implicit;s.ec("value",i.cedula),s.zb(1),s.nc(s.Zb(2,2,i.primer_nombre+" "+i.primer_apellido+" "+i.cedula))}}function T(i,t){if(1&i&&(s.Nb(0,"ion-select-option",23),s.mc(1),s.Yb(2,"uppercase"),s.Mb()),2&i){const i=t.$implicit,o=s.Xb(2);s.ec("value",i),s.zb(1),s.nc(s.Zb(2,2,o.tipos[i].label))}}const z=function(){return["/beneficiarios/nuevo/contrib"]};function F(i,t){if(1&i){const i=s.Ob();s.Nb(0,"ion-content"),s.Nb(1,"ion-card"),s.Nb(2,"ion-card-content"),s.Nb(3,"ion-text",3),s.Nb(4,"h4",4),s.mc(5," Llene los campos con los datos correspondientes y presione el bot\xf3n para guardar el registro en la base central. "),s.Mb(),s.Mb(),s.Lb(6,"ion-item-divider"),s.Nb(7,"ion-text",5),s.Nb(8,"h5",4),s.mc(9," Verifique que la informaci\xf3n sea correcta. Una vez enviado, no podr\xe1 modificar el registro sin ayuda del administrador. "),s.Mb(),s.Mb(),s.Mb(),s.Mb(),s.Nb(10,"ion-item",6),s.Nb(11,"ion-label",7),s.mc(12),s.Yb(13,"uppercase"),s.Mb(),s.Nb(14,"ion-datetime",8,9),s.Vb("ngModelChange",function(t){return s.ic(i),s.Xb().contribucion.fecha=t}),s.Mb(),s.Mb(),s.Nb(16,"ion-item",6),s.Nb(17,"ion-label",7),s.mc(18),s.Yb(19,"uppercase"),s.Mb(),s.Nb(20,"ion-select",10,11),s.Vb("ngModelChange",function(t){return s.ic(i),s.Xb().contribucion.beneficiario=t}),s.lc(22,O,3,4,"ion-select-option",12),s.Mb(),s.Nb(23,"ion-button",13),s.Lb(24,"ion-icon",14),s.Mb(),s.Mb(),s.Nb(25,"ion-item",6),s.Nb(26,"ion-label",7),s.mc(27),s.Yb(28,"uppercase"),s.Mb(),s.Nb(29,"ion-select",15,16),s.Vb("ngModelChange",function(t){return s.ic(i),s.Xb().contribucion.tipo=t}),s.lc(31,T,3,4,"ion-select-option",12),s.Mb(),s.Mb(),s.Nb(32,"ion-item",6),s.Nb(33,"ion-label",7),s.mc(34),s.Yb(35,"uppercase"),s.Mb(),s.Nb(36,"ion-input",17,18),s.Vb("ngModelChange",function(t){return s.ic(i),s.Xb().contribucion.monto=t}),s.Mb(),s.Mb(),s.Nb(38,"ion-item",6),s.Nb(39,"ion-label",7),s.mc(40),s.Yb(41,"uppercase"),s.Mb(),s.Nb(42,"ion-textarea",19,20),s.Vb("ngModelChange",function(t){return s.ic(i),s.Xb().contribucion.concepto=t}),s.Mb(),s.Mb(),s.Nb(44,"ion-item"),s.Nb(45,"ion-button",21),s.Vb("click",function(){return s.ic(i),s.Xb().showAlert()}),s.mc(46),s.Yb(47,"uppercase"),s.Lb(48,"ion-icon",22),s.Mb(),s.Mb(),s.Mb()}if(2&i){const i=s.Xb();s.zb(12),s.nc(s.Zb(13,18,"fecha")),s.zb(2),s.ec("max",i.hoy),s.ec("value",i.hoy),s.dc("ngModel",i.contribucion.fecha)("monthShortNames",i.meses)("dayNames",i.dias),s.zb(4),s.nc(s.Zb(19,20,"Beneficiario")),s.zb(2),s.dc("ngModel",i.contribucion.beneficiario),s.zb(2),s.dc("ngForOf",i.beneficiarios),s.zb(1),s.dc("routerLink",s.fc(30,z)),s.zb(4),s.nc(s.Zb(28,22,"Tipo")),s.zb(2),s.dc("ngModel",i.contribucion.tipo),s.zb(2),s.dc("ngForOf",i.keyTipo),s.zb(3),s.oc("",s.Zb(35,24,"Monto")," C$"),s.zb(2),s.dc("ngModel",i.contribucion.monto),s.zb(4),s.nc(s.Zb(41,26,"Concepto")),s.zb(2),s.dc("ngModel",i.contribucion.concepto),s.zb(4),s.oc(" ",s.Zb(47,28,"Guardar"),"\xa0 ")}}let I=(()=>{class i{constructor(i,t,o,e,n,c,r){this._auth=i,this._data=t,this._router=o,this._activatedRoute=e,this._toastCtrl=n,this._alertCtrl=c,this.platform=r,this.AppName=v.a.appName,this.meses=["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"],this.dias=["Domingo","Lunes","Martes","Mi\xe9rcoles","Jueves","Viernes","S\xe1bado"],this.digitador=255}ngOnInit(){this.LlenaDatos()}ionViewDidEnter(){this._activatedRoute.snapshot.paramMap.has("ref")&&this._auth.getAuthToken().then(i=>{this.LlenaBeneficiarios(i.value)}).catch(i=>{this.showToast(i)})}LlenaDatos(){this.hoy=(new Date).toISOString(),this.contribucion={id:null,fecha:this.hoy,beneficiario:null,tipo:null,monto:null,concepto:null,funcionario:null,creado:this.hoy},this._auth.updateSession().then(()=>{}),this.tipos=this._data.Tipos,this.keyTipo=Object.keys(this.tipos),this.contribucion.funcionario=this._auth.Usuario.funcionario,this._auth.getAuthToken().then(i=>{this.LlenaBeneficiarios(i.value)}).catch(i=>{this.showToast(i)})}LlenaBeneficiarios(i){this.platform.is("desktop")||this.platform.is("mobileweb")?this._data.getBeneficiarios(i).subscribe(i=>{this.beneficiarios=i.body},i=>{console.error("Error: ".concat(i)),this.showToast(i)}):this._data.getBeneficiariosNative(i).then(i=>{i.data&&(this.beneficiarios=JSON.parse(i.data))}).catch(i=>{console.error("Error: ".concat(i.error)),this.showToast(i.error)})}showToast(i,t=!1,o){return Object(a.a)(this,void 0,void 0,function*(){const e=yield this._toastCtrl.create({message:i,duration:2e3,position:"middle"});1==t&&e.onDidDismiss().then(()=>{o&&this._router.navigateByUrl(o)}),e.present()})}showAlert(){return Object(a.a)(this,void 0,void 0,function*(){if(this.Validar()){const i=yield this._alertCtrl.create({header:"Confirma Guardar",message:"Verifique que los datos son correctos. \xbfDesea continuar?",buttons:[{text:"Si",handler:()=>{this.Guardar()}},{text:"No",role:"cancel"}]});yield i.present()}else this.showToast("Datos No V\xe1lidos")})}Guardar(){this.contribucion.fecha=y.a.DateFormat(this.contribucion.fecha),this._auth.getAuthToken().then(i=>{this.platform.is("desktop")||this.platform.is("mobileweb")?this._data.newContribucion(this.contribucion,i.value).subscribe(i=>{i.ok&&this.showToast("Registro Guardado",!0,"/inicio")},i=>{console.error("Error: ".concat(i)),this.showToast(i)}):this._data.newContribucionNative(this.contribucion,i.value).then(i=>{200==i.status&&this.showToast("Registro Guardado",!0,"/inicio")}).catch(i=>{console.error("Error: ".concat(i.error)),this.showToast(i.error)})}).catch(i=>{this.showToast(i)})}Validar(){let i=!1;return this.dateField.valid&&this.benefField.valid&&this.tipoField.valid&&this.montoField.valid&&this.conecptoField.valid&&(i=!0),i}}return i.\u0275fac=function(t){return new(t||i)(s.Kb(l.a),s.Kb(b.a),s.Kb(r.g),s.Kb(r.a),s.Kb(c.Q),s.Kb(c.a),s.Kb(c.M))},i.\u0275cmp=s.Eb({type:i,selectors:[["app-nueva-contribucion"]],viewQuery:function(i,t){if(1&i&&(s.qc(_,1),s.qc(w,1),s.qc(C,1),s.qc(k,1),s.qc(L,1)),2&i){let i;s.hc(i=s.Wb())&&(t.dateField=i.first),s.hc(i=s.Wb())&&(t.benefField=i.first),s.hc(i=s.Wb())&&(t.tipoField=i.first),s.hc(i=s.Wb())&&(t.montoField=i.first),s.hc(i=s.Wb())&&(t.conecptoField=i.first)}},decls:8,vars:4,consts:[["slot","start"],["defaultHref","/inicio"],[4,"ngIf"],["color","dark"],[1,"uppercase"],["color","secondary"],[1,"field-item"],["position","stacked"],["displayFormat","DDDD, MMM D, YYYY","doneText","Hecho","cancelText","Cancelar","name","fecha","type","date","required","",3,"ngModel","max","value","monthShortNames","dayNames","ngModelChange"],["dtFecha","ngModel"],["interface","action-sheet","name","beneficiario","required","",3,"ngModel","ngModelChange"],["optBeneficiario","ngModel"],[3,"value",4,"ngFor","ngForOf"],["fill","clear","slot","end",3,"routerLink"],["slot","icon-only","name","add-outline"],["interface","action-sheet","name","tipoAporte","required","",3,"ngModel","ngModelChange"],["optTipoAporte","ngModel"],["type","number","name","monto","inputmode","numeric","required","",3,"ngModel","ngModelChange"],["txtMonto","ngModel"],["name","concepto","maxlength","150","cols","50","rows","3","inputmode","text","required","",3,"ngModel","ngModelChange"],["txtConcepto","ngModel"],["size","big",3,"click"],["name","save-outline"],[3,"value"]],template:function(i,t){1&i&&(s.Nb(0,"ion-header"),s.Nb(1,"ion-toolbar"),s.Nb(2,"ion-buttons",0),s.Lb(3,"ion-back-button",1),s.Mb(),s.Nb(4,"ion-title"),s.mc(5),s.Yb(6,"uppercase"),s.Mb(),s.Mb(),s.Mb(),s.lc(7,F,49,31,"ion-content",2)),2&i&&(s.zb(5),s.nc(s.Zb(6,2,"Ingresar Ayuda")),s.zb(2),s.dc("ngIf",t.contribucion))},directives:[c.q,c.I,c.g,c.c,c.d,c.H,e.k,c.n,c.h,c.i,c.F,c.u,c.t,c.v,c.o,c.O,n.i,n.f,n.g,c.D,e.j,c.f,c.N,r.h,c.r,c.s,c.L,c.G,c.P,n.b,c.E],pipes:[e.n],styles:[".field-item[_ngcontent-%COMP%]:not(:first-child){margin-top:1.5rem}.field-label[_ngcontent-%COMP%]{margin-right:2rem}"]}),i})();var x=o("UTcu");const D=[{path:"",component:M},{path:"ver/:id",canActivate:[x.a],component:N},{path:"nuevo",canActivate:[x.a],component:I},{path:"nuevo/:ref",canActivate:[x.a],component:I}];let E=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=s.Ib({type:i}),i.\u0275inj=s.Hb({imports:[[r.i.forChild(D)],r.i]}),i})(),Y=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=s.Ib({type:i}),i.\u0275inj=s.Hb({imports:[[e.b,n.a,c.J,E]]}),i})()}}]);