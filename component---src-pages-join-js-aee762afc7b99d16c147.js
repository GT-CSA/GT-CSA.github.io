"use strict";(self.webpackChunkgeorgia_tech_chinese_student_association_website=self.webpackChunkgeorgia_tech_chinese_student_association_website||[]).push([[985],{1284:function(e,t,a){a.d(t,{Z:function(){return l}});var n=a(9230),r=a(7294),l=function(e){var t=e.images,a=e.imgStyle,l=e.imageClass,c=e.manual,o=void 0!==c&&c,i=(0,r.useState)(0),m=i[0],s=i[1];return(0,r.useEffect)((function(){if(!o){var e=setTimeout((function(){return s((m+1)%t.length)}),7e3);return function(){return clearTimeout(e)}}}),[m,t.length,o]),r.createElement("div",{className:"carousel-module--container--8DeBy"},t.map((function(e,t){return r.createElement(n.G,{key:e.title,alt:e.title?e.title:"CSA Gatech",image:e.gatsbyImageData,className:(m===t?"carousel-module--active--MhiBk":"")+" carousel-module--image--wHqfk "+(l||""),imgStyle:a})})))}},803:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(7294),r=a(8872),l=a(4108),c=a(1284),o=function(e){var t=e.hero,a=e.children,o=t.images,i=t.title,m=t.subtitle,s=t.description,u=o[0].gatsbyImageData;return n.createElement("div",null,n.createElement("div",{className:"hero-module--hero--JreNK"},u&&n.createElement(c.Z,{imageClass:"hero-module--image--wE2lP",images:o,imgStyle:{objectPosition:"bottom"}}),n.createElement("div",{className:"hero-module--background-shade---xrNT"}),n.createElement("div",{className:"hero-module--detailsContainer--nWsLZ"},n.createElement("div",{className:"hero-module--details--WWO7r"},n.createElement("h1",{className:"hero-module--title--+uEef"},i),n.createElement("h2",{className:"hero-module--subtitle--3AMZa"},m),a))),s&&n.createElement(l.Z,{className:"hero-module--description--z3BUB"},(0,r.Z)(s)))}},5941:function(e,t,a){a.r(t),a.d(t,{default:function(){return b}});var n=a(7294),r=a(8889),l=a(803),c=a(9230),o=a(8872),i=a(4108),m=function(e){var t=e.contact;return n.createElement("div",{className:"contact-information-module--contact--eqwLn"},n.createElement("a",{className:"contact-information-module--icon--DdzRI",href:t.link.link,target:"_blank",rel:"noopener noreferrer"},n.createElement(c.G,{alt:t.platform,image:t.icon.gatsbyImageData})),n.createElement("div",null,n.createElement("h3",null,t.platform),(0,o.Z)(t.description)))},s=function(e){var t=e.contacts;return n.createElement(i.Z,null,n.createElement("div",{className:"contact-information-module--container--JwuHp"},t.map((function(e){return n.createElement(m,{contact:e,key:e.platform})}))))},u=a(6479),d=a.n(u),E="board-module--clicked--3DAL9",f="board-module--heading--Z+KwM",v=function(e){var t=e.list;return n.createElement("div",{className:"board-module--card-container--4GFqq"},t.map((function(e){return n.createElement(g,{person:e,key:e.name})})))},g=function(e){var t=e.person,a=(0,n.useState)(!1),r=a[0],l=a[1],i=(0,n.useRef)(null);return n.createElement("button",{className:"board-module--card--Dyiz4 "+(r?E:""),onClick:function(){l(!r),i.current.scrollTo({top:0,behavior:"smooth"})}},n.createElement("div",{className:"board-module--background-image--UnBvX"},t.image?n.createElement(c.G,{alt:t.name,image:t.image.gatsbyImageData}):n.createElement(d(),{style:{padding:10}})),n.createElement("div",{className:"board-module--shade--k-kdc  "+(r?E:"")}),n.createElement("div",{ref:i,className:"board-module--overflow--P08fT "+(r?E:"")},n.createElement("div",{className:"board-module--content--gp5SY"},n.createElement("h3",{className:f},t.name),n.createElement("h4",{className:f},t.position),n.createElement("div",{className:"board-module--description--MCAbF"},(0,o.Z)(t.description)))))},h=function(e){for(var t=e.board,a=e.meta,r=0;r<t.length&&t[r].exec;r++);var l=t.slice(0,r),c=t.slice(r);return n.createElement(i.Z,null,n.createElement("h1",{style:{textAlign:"center",color:"var(--primary)"}},a.title?a.title:"Meet Our Board"),n.createElement("div",null,(0,o.Z)(a.description)),n.createElement("div",null,n.createElement(v,{list:l}),n.createElement("div",{className:"board-module--divider--vGDOY"}),n.createElement(v,{list:c})))},b=function(e){var t=e.data,a=t.hero,c=t.contacts,o=t.board,i=t.boardMeta;return n.createElement(r.Z,null,n.createElement(l.Z,{hero:a}),n.createElement(s,{contacts:c.nodes}),n.createElement(h,{board:o.nodes,meta:i}))}}}]);
//# sourceMappingURL=component---src-pages-join-js-aee762afc7b99d16c147.js.map