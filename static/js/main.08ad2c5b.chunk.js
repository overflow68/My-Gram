(this["webpackJsonpmy-gram"]=this["webpackJsonpmy-gram"]||[]).push([[0],{41:function(e,t,r){},42:function(e,t,r){},54:function(e,t,r){},55:function(e,t,r){},56:function(e,t,r){"use strict";r.r(t);var c=r(3),s=r.n(c),n=r(28),i=r.n(n),a=r(16),j=r(6),o=r(18),d=r.n(o),u=r(21),l=r(14),b=r.p+"static/media/girl.cc488f03.jpg",O=(r(41),r(42),r(0)),x=r(22),h=r(30),p=r(31),v=r(32),g=r(33),m=r(29),A=(r(43),r(57),m.a.initializeApp({apiKey:"AIzaSyBiezE6KsMZUcjel_uLYOsrCE0oqdXK4sk",authDomain:"my-gram-52ca2.firebaseapp.com",projectId:"my-gram-52ca2",storageBucket:"my-gram-52ca2.appspot.com",messagingSenderId:"423244488326",appId:"1:423244488326:web:10f824d58b85b25f90bb07"})),f=A.auth(),w=A.firestore(),W=r(2),y=s.a.createContext();function V(){return Object(c.useContext)(y)}function C(e){var t=e.children,r=Object(c.useState)(),s=Object(l.a)(r,2),n=s[0],i=s[1],a=Object(c.useState)(!0),j=Object(l.a)(a,2),o=j[0],d=j[1];Object(c.useEffect)((function(){return f.onAuthStateChanged((function(e){i(e),d(!1)}))}),[]);var u={currentUser:n,login:function(e,t){return f.signInWithEmailAndPassword(e,t)},signup:function(e,t,r){return f.createUserWithEmailAndPassword(e,t).then((function(e){w.collection("users").doc(e.user.uid).set({username:r,followers:[],following:[],posts:[]})})).catch((function(e){e.code;var t=e.message;alert(t)}))},logout:function(){return f.signOut()}};return Object(W.jsx)(y.Provider,{value:u,children:!o&&t})}var L=function(){var e=V().logout;return Object(W.jsxs)("div",{id:"navbar",children:[Object(W.jsx)("div",{children:Object(W.jsx)("h1",{id:"home-btn",children:"My-Gram"})}),Object(W.jsx)("ul",{children:Object(W.jsxs)(O.b.Provider,{value:{color:"black",size:22},children:[Object(W.jsx)("li",{children:Object(W.jsx)(x.b,{})}),Object(W.jsx)("li",{children:Object(W.jsx)(h.a,{})}),Object(W.jsx)("li",{children:Object(W.jsx)(p.a,{})}),Object(W.jsx)("li",{children:Object(W.jsx)(x.a,{})}),Object(W.jsx)("li",{children:Object(W.jsx)(v.a,{})}),Object(W.jsx)("li",{children:Object(W.jsx)(g.a,{onClick:e})})]})})]})};function S(e){return Object(W.jsx)("div",{className:"alert",children:e.error})}var q=function(){var e=Object(c.useRef)(),t=Object(c.useRef)(),r=V(),s=r.login,n=r.currentUser,i=r.logout,o=Object(c.useState)(""),O=Object(l.a)(o,2),x=O[0],h=O[1],p=Object(c.useState)(!1),v=Object(l.a)(p,2),g=(v[0],v[1]),m=Object(j.g)();function A(){return(A=Object(u.a)(d.a.mark((function r(c){return d.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return c.preventDefault(),r.prev=1,h(""),g(!0),r.next=6,s(e.current.value,t.current.value);case 6:m.push("/profile"),r.next=12;break;case 9:r.prev=9,r.t0=r.catch(1),h("Ocorreu um erro.");case 12:g(!1);case 13:case"end":return r.stop()}}),r,null,[[1,9]])})))).apply(this,arguments)}return Object(W.jsx)(W.Fragment,{children:n?Object(W.jsxs)("div",{id:"reg",children:[Object(W.jsx)(L,{}),Object(W.jsx)("div",{id:"must-logout",children:"J\xe1 tens sess\xe3o iniciada"}),Object(W.jsx)("button",{id:"logout-btn",onClick:i,children:"Logout"})]}):Object(W.jsxs)("div",{id:"main-container",children:[Object(W.jsx)("div",{id:"imagens",children:Object(W.jsx)("img",{id:"image",alt:"",src:b})}),Object(W.jsxs)("div",{id:"dados-login-registo",children:[Object(W.jsxs)("div",{id:"dados-login",children:[Object(W.jsx)("h1",{id:"title",children:"My-Gram"}),x&&Object(W.jsx)(S,{error:x}),Object(W.jsxs)("form",{onSubmit:function(e){return A.apply(this,arguments)},children:[Object(W.jsx)("input",{type:"text",ref:e,placeholder:"Nome de utilizador"}),Object(W.jsx)("input",{type:"password",ref:t,placeholder:"Palavra-passe"}),Object(W.jsx)("button",{className:"login",type:"submit",children:"Entrar"})]})]}),Object(W.jsx)("div",{id:"registo",children:Object(W.jsxs)("p",{children:["N\xe3o tem uma conta? ",Object(W.jsx)(a.b,{to:"/register",id:"regist-link",href:"youtube.com",children:"Registe-se"})]})})]})]})})},F=r(23),G=r(35),E=["component"];function N(e){var t=e.component,r=Object(G.a)(e,E),c=V().currentUser;return Object(W.jsx)(j.b,Object(F.a)(Object(F.a)({},r),{},{render:function(e){return c?Object(W.jsx)(t,Object(F.a)({},e)):Object(W.jsx)(j.a,{to:"/"})}}))}r(54);function H(e){return Object(W.jsx)("div",{className:"alert",children:e.error})}var Y=function(){var e=Object(c.useRef)(),t=Object(c.useRef)(),r=Object(c.useRef)(),s=Object(c.useRef)(),n=(Object(c.useRef)(),V()),i=n.signup,o=n.currentUser,b=n.logout,O=Object(c.useState)(""),x=Object(l.a)(O,2),h=x[0],p=x[1],v=Object(c.useState)(!1),g=Object(l.a)(v,2),m=(g[0],g[1]),A=Object(j.g)();function f(){return(f=Object(u.a)(d.a.mark((function r(c){return d.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return c.preventDefault(),p(""),m(!0),r.next=5,i(e.current.value,t.current.value,s.current.value);case 5:A.push("/profile"),p("Ocorreu um erro ao criar conta."),m(!1);case 8:case"end":return r.stop()}}),r)})))).apply(this,arguments)}return Object(W.jsx)(W.Fragment,{children:o?Object(W.jsxs)("div",{id:"reg",children:[Object(W.jsx)(L,{}),Object(W.jsx)("div",{id:"must-logout",children:"N\xe3o podes registar enquanto tens sess\xe3o iniciada"}),Object(W.jsx)("button",{id:"logout-btn",onClick:b,children:"Logout"})]}):Object(W.jsxs)("div",{children:[Object(W.jsxs)("div",{className:"dados-registo",children:[Object(W.jsx)("h1",{children:"Regista-te"}),h&&Object(W.jsx)(H,{error:h}),Object(W.jsxs)("form",{onSubmit:function(e){return f.apply(this,arguments)},children:[Object(W.jsx)("input",{type:"text",ref:s,placeholder:"Nome de utilizador"}),Object(W.jsx)("input",{type:"text",ref:e,placeholder:"E-mail"}),Object(W.jsx)("input",{type:"password",ref:t,placeholder:"Palavra-passe"}),Object(W.jsx)("input",{type:"password",ref:r,placeholder:"Palavra-passe"}),Object(W.jsx)("button",{className:"register",type:"submit",children:"Criar conta"})]})]}),Object(W.jsx)("div",{id:"registo-conta",children:Object(W.jsxs)("p",{children:["J\xe1 tem uma conta? ",Object(W.jsx)(a.b,{to:"/",id:"login-link",children:"Fa\xe7a login"})]})})]})})};r(55);var I=function(){var e=V().currentUser,t=Object(c.useState)(),r=Object(l.a)(t,2),s=r[0],n=r[1];return Object(c.useEffect)((function(){var t=w.collection("users").doc(e.uid);console.log(e),t.get().then((function(e){e.exists?n(e.data()):console.log("No such document!")})).catch((function(e){console.log("Error getting document:",e)}))}),[]),Object(W.jsxs)("div",{id:"profile-container",children:[Object(W.jsx)("div",{children:Object(W.jsx)(L,{})}),Object(W.jsx)("div",{id:"profile",children:Object(W.jsxs)("div",{id:"profile-info",children:[Object(W.jsx)("div",{id:"pic",children:Object(W.jsx)("img",{id:"pfp",alt:"",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAMAAABOo35HAAABX1BMVEWqqqnm5eXq6enr6urv7u6srKy4t7fx8PCrq6rs6+u6ubnu7eyxsbHk4+PAwMCrrKvJyMi0s7Pt7Oyurq3NzMvMy8vFxMTw7+/OzczIx8ezsrLl5OStrazo5+esrKvT0tK+vb22trbv7+/GxcWxsbCwsLC5uLjPz87d3NzX19bn5uW6urrY2NfKycnDwsLCwsLn5ubS0dG9vby2trXp6Oe1tbXh4ODu7e7a2dm3t7avr6/HxsXU09O/vr7IxsbW1tXV1dW7urnBwMDCwsHd3N2zs7PR0dC7u7u0tLTo5ubMy8rZ2Nivrq7i4ODGxcSwsK/j4uHV1NPi4eHb2trAv763t7fd3NvW1dTj4uLPzs3Ozs3c29vBwL/HxsaysrHAv7/q6urW1dXBwcDHx8fm5eTe3t2ysrLQ0M/W1tbCwcHBwcHf3t7LysnX19fR0NC8vLu1tbTZ2djg39/Ew8O8vLxZSpAsAAAGvUlEQVR42u3d13riSBCG4QIELYGxAWNjG3DOOYdxznFyzjnncP/P7vhg92D3YAyqgq7+v0t4HwGi1V0ig/44AgGwgAUsYAELWCAAFrCABSxgAQsEwAIWsIAFLGCBAFjAAhawgAUsEAALWMACFrCABQJgAQtYwAIWsEAALGABC1jA4s67vDbxYjB7RuedZQdfTKxd9oD1n4J3fT0+/U9+T9+7AFj/Nt02+L9Q/4ANtk0D63e5rgT9QYmunPNYo30l+sNKfaNOY6UbfbpAfmPaWazy1IWozrmmyk5ieSedVEGdJ557WHv7VGH7e45heX1URX2eS1j3jqiqju65g7UVpyqLbzmCVWinEGovuICVWqdQWk/pxwqSFFLJQDtWkKDQSgS6scK0kteSxUolKdSSKcVYtyjkbunFaqfQa9eKtUkMberESsc5sOJpjVjeArG04CnEWiWmVvVhvSa2XmvD8rJ8WFlPGVaeGMvrwpqPc2LF51VhTRJrk5qwIj4vlh9RhLVLzO3qwTr2ubH8YzVYL4m9l1qwUs38WM0pJVjXSaDrSrCSElhJHVjzJNK8CqwhGawhFVjbMljbGrByvgyWn1OAdUpCnSrAapfCaleAlZDCStiPVWiSwmoqWI+VJrHS1mNtymFtWo/VIofVYj3WpBzWpPVYh3JYh9ZjLchhLViPNSCHNWA9VrMcVrP1WCQYsIAFLGBVmy9n5ePX0KVfQ2BdoH45rH7rsbJyWFnrsVbksFasxxqTwxqzHuupHNZT67Fa5bBarcf6JIf1yXqsL3JYX6zHGpHDGrEe64cc1g/rsaJyWFHrsYzc43tjP9a+FNa+AqxZKaxZBVgbUlgbCrBmpLBmFGANS2ENK8AKpLACBVhSa6X9RgNWtwxWtwqsCRmsCRVY32WwvqvAeiaD9UwFlumQsOowOrA+SGB9UILVJYHVpQQrIoEVUYIlsa90wGjBEtgLP6kGS+ChxYgarIB/YkigBot/WEHS6MG6z411XxHWKDfWqCIsM8drNWc0YbXxYrWpwhrV8CkUmybJegY/YXRhHXBiHSjDChi3PDQFyrBMIx9Wo9GGtceHtacOi++w9ILRh8W252FGIRbXTMnmlEIsrtlQgq/8EMSaZlnV8qdVYpkpDqwpoxOLZTpUWikWx41po9GKlbb7whJ+V9h62FbrRi9WMeQfRL+oGCvs04etRjNWNNS3pMSjqrHCHQHYYnRjpRrCs2pIKccy4+FhjRvtWOEdfJo1+rGmO8Ox6px2AMs8CAfrgXEBqxDKM8REwQksUwzhg9hZNG5ghfEKkCHjCpb5Wq3VV+MOVvRqdVZXow5hmTtVLT/4d4xLWNVt2GozbmFVs8TcaFzDSlV8t5VIOYdlohWerOuIGvewKj3/FDEuYlU4wyBwEqtcGVbZSayPlWF9dBKrwg1bM05i/awM66eTWE8qw3riItZipTeliw5iVfxwutU9rFjFy6XxmHNYq5X/kV51DetaFQta/jW3sLyeatazejynsK5Ut6x8xSWst9U+sHjrDtbd6h+F3XUFqyuEzZJ+lxtYIc0AnHAAK+gOa8tRd6Ad62GI46EGHqrGyj0Od7fy45xerJHQh+H2jyjFusHycqexGwqxImzH7xsjyrCKU4zzxvypoiKsxUfE3KNFHViFcfa5bL9Ljhesx4q2vSGh3rRFrcYa3hF82e/fX147w7ZixYayJF52KGYh1vD7JqpJTe+H7cKaz3dQDevIz9uC1Tve7VON87vHey3AimQuUV10KROpb6zez4dURx1+7q1brLq5qLgur/Cwbs5SXTZ7s96wlg6yVLdlD5bqCCvWckZ13VlLrE6wohtxqvviG9E6wIplLKA658rEaoy1lLeE6pwrv1RLrOcNZFUNz2uGVUySdSWLNcHqzTeRhTXle+WxXvWQpfW8ksbaKpG1lbZEsbxWsrpWTw4r2CbL2w6ksMrfyPq+lWWwyh2koI6yBFbsiFR0FOPH8gZJSYMeO9YuqWmXG2uNFLXGi3Vc0oRVOmbF+kWq+sWJtUzKWmbEmtOGNceHdUrqOmXDGtOHNcaFFSGFRZiwWjRitTBhrWjEWuHBipHKYixYyzqxllmwTnRinbBg7ejE2mHBuq0T6zYLVoNOrAYWrJJOrBILFikNWMACFrCABSxgAQtYwAKW81j4I30BrIxOrAwLVm5Oo9VcjgXL5DLqPokNmYuMK6vhPHj7AhawgAUsYAELAQtYwAIWsICFgAUsYAELWMBCwAIWsIAFLGAhYAELWMACFrAQsIAFLGABC1gIWMACFrCApbS/AEOZT/dVGYcqAAAAAElFTkSuQmCC"})}),Object(W.jsxs)("div",{id:"stats-container",children:[Object(W.jsx)("div",{id:"username",children:Object(W.jsx)("h1",{children:s?s.username:void 0})}),Object(W.jsxs)("div",{id:"stats",children:[Object(W.jsxs)("p",{className:"stat",children:[s?s.posts.length:void 0," Publica\xe7\xf5es"]}),Object(W.jsxs)("p",{className:"stat",children:[s?s.followers.length:void 0," Seguidores"]}),Object(W.jsxs)("p",{className:"stat",children:[s?s.following.length:void 0," Seguindo"]})]})]})]})})]})};var z=function(){return Object(W.jsx)(C,{children:Object(W.jsx)(a.a,{children:Object(W.jsx)("div",{children:Object(W.jsxs)(j.d,{children:[Object(W.jsx)(j.b,{exact:!0,path:"/register",component:Y}),Object(W.jsx)(j.b,{exact:!0,path:"/",component:q}),Object(W.jsx)(N,{exact:!0,path:"/profile",component:I})]})})})})};i.a.render(Object(W.jsx)(s.a.StrictMode,{children:Object(W.jsx)(C,{children:Object(W.jsx)(z,{})})}),document.getElementById("root"))}},[[56,1,2]]]);
//# sourceMappingURL=main.08ad2c5b.chunk.js.map