(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{"wiM/":function(l,n,u){"use strict";u.r(n);var o=u("CcnG"),t=u("ccyI"),i=u("mMyO"),b=function(){function l(l,n,u){this.authService=l,this.router=n,this.ga=u}return l.prototype.ngOnInit=function(){console.log("ngOnInit logout"),this.ga.sendPageView("logout","logout")},l.prototype.ionViewDidLoad=function(){console.log("ionViewDidLoad LogoutPage")},l.prototype.signout=function(){this.authService.logout(),this.router.navigateByUrl("/login")},l.prototype.dismiss=function(){this.router.navigateByUrl("/master-view")},l}(),e=function(){return function(){}}(),c=u("pMnS"),r=u("oBZk"),p=u("ZZ/e"),a=u("ZYCi"),s=o.nb({encapsulation:0,styles:[[""]],data:{}});function g(l){return o.Ib(0,[(l()(),o.pb(0,0,null,null,11,"ion-header",[],null,null,null,r.ib,r.r)),o.ob(1,49152,null,0,p.C,[o.h,o.k],null,null),(l()(),o.pb(2,0,null,0,9,"ion-toolbar",[],null,null,null,r.Gb,r.P)),o.ob(3,49152,null,0,p.Cb,[o.h,o.k],null,null),(l()(),o.pb(4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,r.V,r.e)),o.ob(5,49152,null,0,p.m,[o.h,o.k],null,null),(l()(),o.pb(6,0,null,0,2,"ion-back-button",[],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==o.zb(l,8).onClick(u)&&t),t},r.S,r.b)),o.ob(7,49152,null,0,p.h,[o.h,o.k],null,null),o.ob(8,16384,null,0,p.i,[[2,p.ib],p.Jb],null,null),(l()(),o.pb(9,0,null,0,2,"ion-title",[],null,null,null,r.Eb,r.N)),o.ob(10,49152,null,0,p.Ab,[o.h,o.k],null,null),(l()(),o.Gb(-1,0,["Logout"])),(l()(),o.pb(12,0,null,null,28,"ion-content",[["padding",""]],null,null,null,r.eb,r.n)),o.ob(13,49152,null,0,p.v,[o.h,o.k],null,null),(l()(),o.pb(14,0,null,0,0,"p",[["style","padding-top: 10%;"]],null,null,null,null,null)),(l()(),o.pb(15,0,null,0,8,"ion-row",[],null,null,null,r.sb,r.B)),o.ob(16,49152,null,0,p.jb,[o.h,o.k],null,null),(l()(),o.pb(17,0,null,0,1,"ion-col",[],null,null,null,r.db,r.m)),o.ob(18,49152,null,0,p.u,[o.h,o.k],null,null),(l()(),o.pb(19,0,null,0,2,"ion-col",[["size","4"],["size-lg","2"],["size-md","3"],["size-xl","2"]],null,null,null,r.db,r.m)),o.ob(20,49152,null,0,p.u,[o.h,o.k],{size:[0,"size"]},null),(l()(),o.pb(21,0,null,0,0,"img",[["alt","key"],["src","assets/images/logout.svg"],["style","width: 100%;"]],null,null,null,null,null)),(l()(),o.pb(22,0,null,0,1,"ion-col",[],null,null,null,r.db,r.m)),o.ob(23,49152,null,0,p.u,[o.h,o.k],null,null),(l()(),o.pb(24,0,null,0,0,"p",[["style","padding-top: 5%;"]],null,null,null,null,null)),(l()(),o.pb(25,0,null,0,15,"ion-row",[["justify-content-center",""]],null,null,null,r.sb,r.B)),o.ob(26,49152,null,0,p.jb,[o.h,o.k],null,null),(l()(),o.pb(27,0,null,0,13,"ion-col",[["size","12"],["size-md","6"],["size-xl","4"]],null,null,null,r.db,r.m)),o.ob(28,49152,null,0,p.u,[o.h,o.k],{size:[0,"size"]},null),(l()(),o.pb(29,0,null,0,5,"ion-text",[],null,null,null,r.Cb,r.L)),o.ob(30,49152,null,0,p.xb,[o.h,o.k],null,null),(l()(),o.pb(31,0,null,0,1,"h4",[["text-center",""]],null,null,null,null,null)),(l()(),o.Gb(-1,null,["Are you sure?"])),(l()(),o.pb(33,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),o.pb(34,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),o.pb(35,0,null,0,2,"ion-button",[["color","primary"],["expand","block"],["margin-top","10px"]],null,[[null,"click"]],function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.signout()&&o),o},r.U,r.d)),o.ob(36,49152,null,0,p.l,[o.h,o.k],{color:[0,"color"],expand:[1,"expand"]},null),(l()(),o.Gb(-1,0,[" Sign Out "])),(l()(),o.pb(38,0,null,0,2,"ion-button",[["color","primary"],["expand","block"],["fill","outline"],["margin-top","10px"]],null,[[null,"click"]],function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.dismiss()&&o),o},r.U,r.d)),o.ob(39,49152,null,0,p.l,[o.h,o.k],{color:[0,"color"],expand:[1,"expand"],fill:[2,"fill"]},null),(l()(),o.Gb(-1,0,[" Cancel "]))],function(l,n){l(n,20,0,"4"),l(n,28,0,"12"),l(n,36,0,"primary","block"),l(n,39,0,"primary","block","outline")},null)}function d(l){return o.Ib(0,[(l()(),o.pb(0,0,null,null,1,"app-logout",[],null,null,null,g,s)),o.ob(1,114688,null,0,b,[t.a,a.m,i.a],null,null)],function(l,n){l(n,1,0)},null)}var k=o.lb("app-logout",b,d,{},{},[]),h=u("Ip0R"),m=u("gIcY");u.d(n,"LogoutPageModuleNgFactory",function(){return x});var x=o.mb(e,[],function(l){return o.wb([o.xb(512,o.j,o.bb,[[8,[c.a,k]],[3,o.j],o.x]),o.xb(4608,h.n,h.m,[o.u,[2,h.x]]),o.xb(4608,m.o,m.o,[]),o.xb(4608,p.c,p.c,[o.z,o.g]),o.xb(4608,p.Ib,p.Ib,[p.c,o.j,o.q,h.d]),o.xb(4608,p.Mb,p.Mb,[p.c,o.j,o.q,h.d]),o.xb(1073742336,h.c,h.c,[]),o.xb(1073742336,m.m,m.m,[]),o.xb(1073742336,m.b,m.b,[]),o.xb(1073742336,p.Eb,p.Eb,[]),o.xb(1073742336,a.o,a.o,[[2,a.v],[2,a.m]]),o.xb(1073742336,e,e,[]),o.xb(1024,a.k,function(){return[[{path:"",component:b}]]},[])])})}}]);