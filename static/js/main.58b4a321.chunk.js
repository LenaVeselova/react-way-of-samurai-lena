(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,function(e,a,t){e.exports={nav:"Navbar_nav__SJi6x",item:"Navbar_item__1TDW7",activeLink:"Navbar_activeLink__39ANm"}},,,,function(e,a,t){e.exports={dialogs:"Dialogs_dialogs__2zUv9",dialogsItems:"Dialogs_dialogsItems__IXnyM",dialog:"Dialogs_dialog__lOJgI"}},,,function(e,a,t){e.exports={postsBlock:"MyPosts_postsBlock__AHMqt",posts:"MyPosts_posts__1n-BK"}},,,,function(e,a,t){e.exports={descriptionBlock:"ProfileInfo_descriptionBlock__x4uM6"}},,,,function(e,a,t){e.exports={header:"Header_header__1-pO1"}},,,function(e,a,t){e.exports={item:"Post_item__1KRVQ"}},function(e,a,t){e.exports=t(51)},,,,,function(e,a,t){},,function(e,a,t){},,,,,,,,,function(e,a,t){},,,,,,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),i=t(18),l=t.n(i),r=(t(28),t(30),t(19)),c=t.n(r),o=function(){return s.a.createElement("header",{className:c.a.header})},m=t(4),u=t.n(m),d=t(6),v=function(){return s.a.createElement("nav",{className:u.a.nav},s.a.createElement("div",{className:u.a.item},s.a.createElement(d.b,{to:"/profile",activeClassName:u.a.activeLink},"Profile")),s.a.createElement("div",{className:"".concat(u.a.item," ").concat(u.a.active)},s.a.createElement(d.b,{to:"/dialogs",activeClassName:u.a.activeLink},"Messages")),s.a.createElement("div",{className:u.a.item},s.a.createElement(d.b,{to:"/news",activeClassName:u.a.activeLink},"News")),s.a.createElement("div",{className:u.a.item},s.a.createElement(d.b,{to:"/music",activeClassName:u.a.activeLink},"Music")),s.a.createElement("div",{className:u.a.item},s.a.createElement(d.b,{to:"/settings",activeClassName:u.a.activeLink},"Settings")))},E=(t(39),t(11)),p=t.n(E),g=t(22),f=t.n(g),_=function(e){return s.a.createElement("div",null,s.a.createElement("div",{className:f.a.item},s.a.createElement("img",{src:"https://movies4maniacs.liberty.me/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg"}),e.message,s.a.createElement("div",null,s.a.createElement("span",null,"like")," ",e.likesCount)))},N=function(e){var a=e.posts.map(function(e){return s.a.createElement(_,{message:e.message,likesCount:e.likesCount})});return s.a.createElement("div",{className:p.a.postsBlock},s.a.createElement("h2",{className:p.a.posts},"My posts"),s.a.createElement("div",null,s.a.createElement("div",null,s.a.createElement("textarea",null)),s.a.createElement("div",null,s.a.createElement("button",null,"Add post"))),s.a.createElement("div",{className:p.a.posts},a))},k=t(15),h=t.n(k),w=function(){return s.a.createElement("div",null,s.a.createElement("div",null,s.a.createElement("img",{src:"./background.jpg",alt:"fff"})),s.a.createElement("div",{className:h.a.profile}),s.a.createElement("div",{className:h.a.descriptionBlock},"ava + description"))},b=function(e){return s.a.createElement("div",null,s.a.createElement(w,null),s.a.createElement(N,{posts:e.posts}))},y=t(8),x=t.n(y),C=function(e){var a="/dialogs/"+e.id;return s.a.createElement("div",{className:x.a.dialog},s.a.createElement(d.b,{to:a},e.name))},P=function(e){return s.a.createElement("div",{className:x.a.message},e.message)},B=function(e){var a=e.state.dialogs.map(function(e){return s.a.createElement(C,{name:e.name,id:e.id})}),t=e.state.messages.map(function(e){return s.a.createElement(P,{message:e.message})});return s.a.createElement("div",{className:x.a.dialogs},s.a.createElement("div",{className:x.a.dialogsItems},a),s.a.createElement("div",{className:x.a.messages},t))},M=(t(45),function(e){return s.a.createElement("div",null,"Music")}),I=(t(47),function(e){return s.a.createElement("div",null,"News")}),L=(t(49),function(e){return s.a.createElement("div",null,"Settings")}),H=t(3),A=function(e){var a=e.state,t=a.dialogsPage,n=a.profilePage;return s.a.createElement(d.a,null,s.a.createElement("div",{className:"app-wrapper"},s.a.createElement(o,null),s.a.createElement(v,null),s.a.createElement("div",{className:"app-wrapper-content"},s.a.createElement(H.a,{path:"/dialogs",render:function(){return s.a.createElement(B,{state:t})}}),s.a.createElement(H.a,{path:"/profile",render:function(){return s.a.createElement(b,{posts:n.posts})}}),s.a.createElement(H.a,{path:"/news",compopnent:function(){return s.a.createElement(I,null)}}),s.a.createElement(H.a,{path:"/music",render:function(){return s.a.createElement(M,null)}}),s.a.createElement(H.a,{path:"/settings",render:function(){return s.a.createElement(L,null)}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var D={dialogsPage:{dialogs:[{id:1,name:"Dima"},{id:2,name:"Vova"},{id:3,name:"Petr"},{id:4,name:"Anna"},{id:5,name:"Kate"},{id:6,name:"Nina"}],messages:[{id:1,message:"Hi! How are you?"},{id:2,message:"Hey!"},{id:3,message:"Where are you?"}]},profilePage:{posts:[{id:1,message:"Hi, I'm here!",likesCount:0},{id:2,message:"Anyone's here?",likesCount:23}]}};l.a.render(s.a.createElement(A,{state:D}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[23,2,1]]]);
//# sourceMappingURL=main.58b4a321.chunk.js.map