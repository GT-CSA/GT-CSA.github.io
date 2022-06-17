"use strict";(self.webpackChunkgeorgia_tech_chinese_student_association_website=self.webpackChunkgeorgia_tech_chinese_student_association_website||[]).push([[651],{1284:function(e,t,a){a.d(t,{Z:function(){return l}});var n=a(9230),r=a(7294),l=function(e){var t=e.images,a=e.imgStyle,l=e.imageClass,i=e.manual,c=void 0!==i&&i,s=(0,r.useState)(0),o=s[0],m=s[1];return(0,r.useEffect)((function(){if(!c){var e=setTimeout((function(){return m((o+1)%t.length)}),7e3);return function(){return clearTimeout(e)}}}),[o,t.length,c]),r.createElement("div",{className:"carousel-module--container--8DeBy"},t.map((function(e,t){return r.createElement(n.G,{key:e.title,alt:e.title?e.title:"CSA Gatech",image:e.gatsbyImageData,className:(o===t?"carousel-module--active--MhiBk":"")+" carousel-module--image--wHqfk "+(l||""),imgStyle:a})})))}},803:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(7294),r=a(8872),l=a(4108),i=a(1284),c=function(e){var t=e.hero,a=e.popup,c=e.children,s=t.images,o=t.title,m=t.subtitle,u=t.description,d=s[0].gatsbyImageData;return n.createElement("div",null,n.createElement("div",{className:"hero-module--hero--JreNK "+(a?"hero-module--popped--rAJr5":"")},d&&n.createElement(i.Z,{imageClass:"hero-module--image--wE2lP",images:s,imgStyle:{objectPosition:"bottom"}}),n.createElement("div",{className:"hero-module--background-shade---xrNT"}),n.createElement("div",{className:"hero-module--detailsContainer--nWsLZ"},n.createElement("div",{className:"hero-module--details--WWO7r"},n.createElement("h1",{className:"hero-module--title--+uEef"},o),n.createElement("h2",{className:"hero-module--subtitle--3AMZa"},m),c))),a&&a,u&&n.createElement(l.Z,{className:"hero-module--description--z3BUB"},(0,r.Z)(u)))}},2738:function(e,t,a){a.d(t,{Z:function(){return s}});var n=a(3366),r=a(8872),l=a(7294),i=a(4108),c=["containerTitle","containerDescription","title","className"],s=function(e){var t=e.containerTitle,a=e.containerDescription,s=e.title,o=e.className,m=(0,n.Z)(e,c);return l.createElement(i.Z,null,l.createElement("h1",null,t||"Title"),a&&l.createElement("div",{className:"iframe-container-module--container-description--bCeD6"},(0,r.Z)(a)),l.createElement("div",{className:"iframe-container-module--frame-container--lkuDt "+o},l.createElement("iframe",Object.assign({className:"iframe-container-module--frame--PUHLq",title:s},m))))}},6886:function(e,t,a){a.d(t,{Z:function(){return r}});var n=a(7294),r=function(e){var t=e.tags;return(null==t?void 0:t.length)>0&&n.createElement("small",{className:"tags-module--tags--qfz9t"},t.map((function(e){return n.createElement("div",{key:e,className:"tags-module--tag--1TqEx"},e)})))}},6786:function(e,t,a){a.r(t),a.d(t,{default:function(){return E}});var n=a(7294),r=a(8678),l=a(803),i=a(9230),c=a(8872),s=a(4108),o=a(6886),m=function(e){var t=e.startDate,a=e.endDate,r=e.at,l=e.coordinates,i=e.link,c=t.split(", "),s=c[0],o=c[1],m=c[2],u=c[3],d=a.split(", "),v=d[0],g=d[1],E=d[2],f=d[3],h=s+" "+o;return h=o===g&&m===E?h+" "+m+", "+u+" - "+f:m===E?h+" - "+v+" "+g+" "+E+", "+u+" - "+f:h+" "+m+" - "+v+" "+g+" "+E+", "+u+" - "+f,n.createElement("h3",{className:"events-preview-module--meta--inZJK"},h," ",n.createElement("a",{href:i||"https://www.google.com/maps/search/?api=1&query="+l.lat+"%2C"+l.lon,target:"_blank",rel:"noopener noreferrer"},r))},u=function(e){var t=e.events,a=void 0===t?[]:t,r=e.title,l=e.description;return Array.isArray(a)?n.createElement(s.Z,null,n.createElement("div",{className:"events-preview-module--container--rITSP"},n.createElement("h2",{className:"events-preview-module--title--RlCBF"},r||"Upcoming CSA Events"),l&&n.createElement("div",null,(0,c.Z)(l)),n.createElement("ul",{className:"events-preview-module--event-list--V5pwG"},0===a.length&&n.createElement("p",null,"There are no listed events!"),a.map((function(e){var t;return n.createElement("li",{key:e.title},n.createElement("h2",{className:"events-preview-module--event-title--5U9bX"},e.title),n.createElement(m,{startDate:e.startDate,endDate:e.endDate,at:e.locationSlug,coordinates:e.location,link:e.locationLink?e.locationLink.locationLink:null}),n.createElement("div",{className:"events-preview-module--description--Dbr+C"},(null===(t=e.description)||void 0===t?void 0:t.raw)&&(0,c.Z)(e.description)),n.createElement("div",{className:"events-preview-module--tags--US9QU"},n.createElement(o.Z,{tags:e.tags})),n.createElement(i.G,{alt:e.title,image:e.banner.gatsbyImageData,className:"events-preview-module--banner--TFeH8"}))}))))):null},d=a(9376),v=a(2738),g=a(1284),E=function(e){var t=e.data,a=t.hero,i=t.events,o=t.photos,m=t.calendar,E=t.eventsTitleDescription;return n.createElement(r.Z,null,n.createElement(d.Z,{title:"CSA Events"}),n.createElement(l.Z,{hero:a}),n.createElement(u,{events:i.nodes,title:E.title,description:E.description}),n.createElement(s.Z,{className:"events-module--photos--iDcoC"},n.createElement("h1",null,o.title),n.createElement("div",{className:"events-module--carousel--Vtw-c"},n.createElement(g.Z,{images:o.images})),n.createElement("div",null,(0,c.Z)(o.description))),n.createElement("div",{className:"events-module--month--we7BD"},n.createElement(v.Z,{containerTitle:m.title,containerDescription:m.description,src:"https://calendar.google.com/calendar/embed?src=csa.gatech%40gmail.com&ctz=America%2FNew_York&showTitle=0",title:"CSA Calendar",style:{border:0},frameBorder:"0",scrolling:"no"})),n.createElement("div",{className:"events-module--agenda--Qs8ji"},n.createElement(v.Z,{containerTitle:"Events Calendar",src:"https://calendar.google.com/calendar/embed?src=csa.gatech%40gmail.com&ctz=America%2FNew_York&showTitle=0&mode=AGENDA",title:"CSA Calendar",style:{border:0},frameBorder:"0",scrolling:"no",className:"events-module--agenda-frame--Hkjxw"})))}},3366:function(e,t,a){function n(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}a.d(t,{Z:function(){return n}})}}]);
//# sourceMappingURL=component---src-pages-events-js-63876af2588a6926bd3b.js.map