"use strict";(self.webpackChunkgeorgia_tech_chinese_student_association_website=self.webpackChunkgeorgia_tech_chinese_student_association_website||[]).push([[239],{6592:function(e,t,a){a.d(t,{Z:function(){return o}});var l=a(7294),r=a(1597),n=a(9230),i=a(8872),c=a(6886),o=function(e){var t=e.posts;return t&&Array.isArray(t)?l.createElement("ul",{className:"article-preview-module--article-list--pjL0a"},t.map((function(e){var t;return l.createElement("li",{key:e.slug},l.createElement(r.rU,{to:"/cctv/blog/"+e.slug,className:"article-preview-module--link--Hg6gs"},l.createElement(n.G,{alt:e.title,image:e.heroImage.gatsbyImageData}),l.createElement("h2",{className:"article-preview-module--title--vFhz+"},e.title)),l.createElement("div",null,(null===(t=e.description)||void 0===t?void 0:t.raw)&&(0,i.Z)(e.description)),l.createElement("div",{className:"article-preview-module--meta--HPhQ8"},l.createElement("small",{className:"meta"},e.publishDate),l.createElement(c.Z,{tags:e.tags})))}))):null}},1284:function(e,t,a){a.d(t,{Z:function(){return n}});var l=a(9230),r=a(7294),n=function(e){var t=e.images,a=e.imgStyle,n=e.imageClass,i=e.manual,c=void 0!==i&&i,o=(0,r.useState)(0),m=o[0],s=o[1];return(0,r.useEffect)((function(){if(!c){var e=setTimeout((function(){return s((m+1)%t.length)}),7e3);return function(){return clearTimeout(e)}}}),[m,t.length,c]),r.createElement("div",{className:"carousel-module--container--8DeBy"},t.map((function(e,t){return r.createElement(l.G,{key:e.title,alt:e.title?e.title:"CSA Gatech",image:e.gatsbyImageData,className:(m===t?"carousel-module--active--MhiBk":"")+" carousel-module--image--wHqfk "+(n||""),imgStyle:a})})))}},803:function(e,t,a){a.d(t,{Z:function(){return c}});var l=a(7294),r=a(8872),n=a(4108),i=a(1284),c=function(e){var t=e.hero,a=e.popup,c=e.children,o=t.images,m=t.title,s=t.subtitle,u=t.description,d=o[0].gatsbyImageData;return l.createElement("div",null,l.createElement("div",{className:"hero-module--hero--JreNK "+(a?"hero-module--popped--rAJr5":"")},d&&l.createElement(i.Z,{imageClass:"hero-module--image--wE2lP",images:o,imgStyle:{objectPosition:"bottom"}}),l.createElement("div",{className:"hero-module--background-shade---xrNT"}),l.createElement("div",{className:"hero-module--detailsContainer--nWsLZ"},l.createElement("div",{className:"hero-module--details--WWO7r"},l.createElement("h1",{className:"hero-module--title--+uEef"},m),l.createElement("h2",{className:"hero-module--subtitle--3AMZa"},s),c))),a&&a,u&&l.createElement(n.Z,{className:"hero-module--description--z3BUB"},(0,r.Z)(u)))}},2738:function(e,t,a){a.d(t,{Z:function(){return o}});var l=a(3366),r=a(8872),n=a(7294),i=a(4108),c=["containerTitle","containerDescription","title","className"],o=function(e){var t=e.containerTitle,a=e.containerDescription,o=e.title,m=e.className,s=(0,l.Z)(e,c);return n.createElement(i.Z,null,n.createElement("h1",null,t||"Title"),a&&n.createElement("div",{className:"iframe-container-module--container-description--bCeD6"},(0,r.Z)(a)),n.createElement("div",{className:"iframe-container-module--frame-container--lkuDt "+m},n.createElement("iframe",Object.assign({className:"iframe-container-module--frame--PUHLq",title:o},s))))}},6886:function(e,t,a){a.d(t,{Z:function(){return r}});var l=a(7294),r=function(e){var t=e.tags;return(null==t?void 0:t.length)>0&&l.createElement("small",{className:"tags-module--tags--qfz9t"},t.map((function(e){return l.createElement("div",{key:e,className:"tags-module--tag--1TqEx"},e)})))}},2442:function(e,t,a){a.r(t),a.d(t,{default:function(){return f}});var l=a(7294),r=a(1597),n=a(9376),i=a(8678),c=a(803),o=a(6592),m=a(4108),s=a(2738),u=a(9230),d=a(8872),g=function(e){var t=e.title,a=e.description,r=e.imageData;return l.createElement(m.Z,null,l.createElement("h1",{className:"generic-block-module--header--ig66f"},t),l.createElement("div",{className:"generic-block-module--content--1CqYb"},l.createElement("div",{className:"generic-block-module--image--L8Y7e"},l.createElement(u.G,{alt:t,image:r})),l.createElement("div",null,(0,d.Z)(a))))},f=function(e){var t=e.data,a=t.posts,u=t.hero,f=t.convo,E=t.youtube,p=t.blog;return l.createElement(i.Z,null,l.createElement(n.Z,{title:"CCTV"}),l.createElement(c.Z,{hero:u}),l.createElement(s.Z,{containerTitle:E.title,containerDescription:E.description,src:"https://www.youtube.com/embed/videoseries?list=PLUmMiMpeUbtBc2U2RKD5efE293nPwiud1",title:"CSA Youtube Full Playlist",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),l.createElement(m.Z,null,l.createElement("h1",{style:{color:"var(--primary)",textAlign:"center"}},p.title?p.title:"From Our Blog"),l.createElement("div",{className:"cctv-module--centered-text--sROp0"},p.description?(0,d.Z)(p.description):l.createElement("p",null,l.createElement(r.rU,{to:"/cctv/blog"},"Click here to see all of our posts!"))),l.createElement(o.Z,{posts:a.nodes})),l.createElement(g,{title:f.title,description:f.description,imageData:f.images[0].gatsbyImageData}))}},3366:function(e,t,a){function l(e,t){if(null==e)return{};var a,l,r={},n=Object.keys(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||(r[a]=e[a]);return r}a.d(t,{Z:function(){return l}})}}]);
//# sourceMappingURL=component---src-pages-cctv-js-e0c7b6221090e39c7cbe.js.map