(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{X3zk:function(t,n,e){"use strict";e.r(n),e.d(n,"LoginPageModule",function(){return p});var o=e("ofXK"),i=e("3Pt+"),s=e("TEn/"),a=e("tyNb"),r=e("mrSG"),c=e("AytR"),l=e("fXoL"),d=e("lGQG");const h=["usuario"],b=["clave"],u=[{path:"",component:(()=>{class t{constructor(t,n,e,o){this._auth=t,this._router=n,this.toastCtrl=e,this.platform=o,this.AppName=c.a.appName,this.plataforma="login-card__desktop",this.ApiUrl=c.a.appUrl}ngOnInit(){this.platform.is("desktop")||(this.plataforma="login-card__mobile")}userLogin(){if(this.emailField.valid&&this.passwordField.valid){let t={username:this.nombreusuario,password:this.contrasena};this.platform.is("desktop")||this.platform.is("mobileweb")?this._auth.Autenticar(t).subscribe(n=>{let e=Object.assign({},n.body);void 0!==e&&null!=e.id?(e.password=t.password,this._auth.setAuthToken(this.nombreusuario,this.contrasena).then(()=>{this._auth.setSession(e).then(()=>{let t="\xa1HOLA, ".concat(e.first_name," ",e.last_name,"!").toUpperCase();this.showToast(t,!0)})})):this.showToast("Acceso Denegado")},t=>{console.error("Error: ".concat(t)),this.showToast(t)}):this._auth.AutenticarNative(t).then(n=>{let e=Object.assign({},JSON.parse(n.data));void 0!==e&&null!=e.id?(e.password=t.password,this._auth.setAuthToken(this.nombreusuario,this.contrasena).then(()=>{this._auth.setSession(e).then(()=>{let t="\xa1HOLA, ".concat(e.first_name," ",e.last_name,"!").toUpperCase();this.showToast(t,!0)})})):this.showToast("Acceso Denegado")}).catch(t=>{console.error("Error: ".concat(t.error)),this.showToast(t.error)})}else this.showToast("Datos No V\xe1lidos")}showToast(t,n=!1){return Object(r.a)(this,void 0,void 0,function*(){const e=yield this.toastCtrl.create({message:t,position:"middle",duration:2e3});n&&e.onDidDismiss().then(()=>{this._router.navigateByUrl(this._auth.redirectUrl?this._auth.redirectUrl:"/inicio")}),e.present()})}}return t.\u0275fac=function(n){return new(n||t)(l.Kb(d.a),l.Kb(a.g),l.Kb(s.Q),l.Kb(s.M))},t.\u0275cmp=l.Eb({type:t,selectors:[["app-login"]],viewQuery:function(t,n){if(1&t&&(l.qc(h,1),l.qc(b,1)),2&t){let t;l.hc(t=l.Wb())&&(n.emailField=t.first),l.hc(t=l.Wb())&&(n.passwordField=t.first)}},decls:22,vars:6,consts:[[1,"login-content"],[1,"login-item"],["type","email","maxlength","50","name","username","placeholder","Usuario","required","",3,"ngModel","ngModelChange"],["usuario","ngModel"],["slot","end","name","person-outline"],["type","password","name","password","maxlength","25","minlength","8","placeholder","Contrase\xf1a","required","",3,"ngModel","ngModelChange"],["clave","ngModel"],["slot","end","name","key-outline"],["expand","block",1,"login-button",3,"click"],["slot","end","name","enter-outline"]],template:function(t,n){1&t&&(l.Nb(0,"ion-header"),l.Nb(1,"ion-toolbar"),l.Nb(2,"ion-title"),l.mc(3),l.Mb(),l.Mb(),l.Mb(),l.Nb(4,"ion-content",0),l.Nb(5,"ion-card"),l.Nb(6,"ion-card-header"),l.Nb(7,"ion-card-title"),l.mc(8," Ingreso de Usuarios "),l.Mb(),l.Mb(),l.Nb(9,"ion-card-content"),l.Nb(10,"ion-item",1),l.Nb(11,"ion-input",2,3),l.Vb("ngModelChange",function(t){return n.nombreusuario=t}),l.Mb(),l.Lb(13,"ion-icon",4),l.Mb(),l.Nb(14,"ion-item",1),l.Nb(15,"ion-input",5,6),l.Vb("ngModelChange",function(t){return n.contrasena=t}),l.Mb(),l.Lb(17,"ion-icon",7),l.Mb(),l.Lb(18,"ion-item",1),l.Nb(19,"ion-button",8),l.Vb("click",function(){return n.userLogin()}),l.mc(20,"Entrar "),l.Lb(21,"ion-icon",9),l.Mb(),l.Mb(),l.Mb(),l.Mb()),2&t&&(l.zb(3),l.oc("",n.AppName,"\u2014Login"),l.zb(2),l.Bb("login-card ",n.plataforma,""),l.zb(6),l.dc("ngModel",n.nombreusuario),l.zb(4),l.dc("ngModel",n.contrasena))},directives:[s.q,s.I,s.H,s.n,s.h,s.j,s.l,s.i,s.t,s.s,s.P,i.b,i.i,i.f,i.g,s.r,i.c,s.f],styles:[".login-button[_ngcontent-%COMP%]{width:40%;margin:.5em auto}.login-content[_ngcontent-%COMP%]{position:relative}.login-card[_ngcontent-%COMP%]{display:inline-block;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.login-card__desktop[_ngcontent-%COMP%]{width:60%}@media screen and (max-width:80em){.login-card__desktop[_ngcontent-%COMP%]{width:50%}}@media screen and (min-width:79em){.login-card__desktop[_ngcontent-%COMP%]{width:40%}}.login-card__mobile[_ngcontent-%COMP%]{width:80%}@media screen and (max-width:90em){.login-card__mobile[_ngcontent-%COMP%]{width:80%}}@media screen and (min-width:89.9em){.login-card__mobile[_ngcontent-%COMP%]{width:60%}}.login-item[_ngcontent-%COMP%]:not(:first-child){margin-top:2rem}"]}),t})()}];let m=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=l.Ib({type:t}),t.\u0275inj=l.Hb({imports:[[a.i.forChild(u)],a.i]}),t})(),p=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=l.Ib({type:t}),t.\u0275inj=l.Hb({imports:[[o.b,i.a,s.J,m]]}),t})()}}]);