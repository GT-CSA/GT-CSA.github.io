"use strict";(self.webpackChunkgeorgia_tech_chinese_student_association_webiste=self.webpackChunkgeorgia_tech_chinese_student_association_webiste||[]).push([[651],{4108:function(e,t,a){var n=a(7294);t.Z=function(e){var t=e.className,a=e.children,r=e.as,l=void 0===r?"div":r;return n.createElement(l,{className:t,style:{maxWidth:"var(--size-max-width)",margin:"0 auto",padding:"var(--space-2xl) var(--size-x-content)"}},a)}},4984:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(7294),r=a(9230),l=a(8872),c=a(4108),o=function(e){var t=e.image,a=e.title,o=e.subtitle,i=e.description,s=e.children;return n.createElement("div",null,n.createElement("div",{className:"home-hero-module--hero---0++8"},t&&n.createElement(r.G,{className:"home-hero-module--image--6qpp+",alt:a,image:t,imgStyle:{objectPosition:"bottom"}}),n.createElement("div",{className:"home-hero-module--background-shade--Fxvn7"}),n.createElement("div",{className:"home-hero-module--detailsContainer--HSg4y"},n.createElement("div",{className:"home-hero-module--details--YS50I"},n.createElement("h1",{className:"home-hero-module--title--DrBBj"},a),n.createElement("h2",{className:"home-hero-module--subtitle--lzXQF"},o),s))),i&&n.createElement(c.Z,{className:"home-hero-module--description--60Ec3"},(0,l.Z)(i)))}},9119:function(e,t,a){a.r(t),a.d(t,{default:function(){return b}});var n=a(7294),r=a(1597),l=a(8889),c=a(4984),o=a(9230),i=a(8872),s=function(e){var t=e.startDate,a=e.endDate,r=e.at,l=e.coordinates,c=e.link,o=t.split(", "),i=o[0],s=o[1],m=o[2],d=o[3],u=a.split(", "),f=u[0],b=u[1],v=u[2],h=u[3],p=i+" "+s;return p=s===b&&m===v?p+", "+m+", "+d+" - "+h:m===v?p+" - "+f+" "+b+", "+v+", "+d+" - "+h:p+" "+m+" - "+f+" "+b+", "+v+", "+d+" - "+h,n.createElement("h3",{className:"events-preview-module--meta--inZJK"},p," ",n.createElement("a",{href:c||"https://www.google.com/maps/search/?api=1&query="+l.lat+"%2C"+l.lon,target:"_blank",rel:"noopener noreferrer"},r))},m=function(e){var t=e.events,a=void 0===t?[]:t;return Array.isArray(a)?n.createElement("div",{className:"events-preview-module--container--rITSP"},n.createElement("h2",{className:"events-preview-module--title--RlCBF"},"Upcoming CSA Events"),n.createElement("ul",{className:"events-preview-module--event-list--V5pwG"},a.map((function(e){var t;return n.createElement("li",{key:e.title},n.createElement("h2",{className:"events-preview-module--event-title--5U9bX"},e.title),n.createElement(s,{startDate:e.startDate,endDate:e.endDate,at:e.locationSlug,coordinates:e.location,link:e.locationLink?e.locationLink.locationLink:null}),n.createElement("div",{className:"events-preview-module--description--Dbr+C"},(null===(t=e.description)||void 0===t?void 0:t.raw)&&(0,i.Z)(e.description)),n.createElement(o.G,{alt:e.title,image:e.banner.gatsbyImageData}))})))):null},d=function(){return n.createElement("div",{style:{textAlign:"center"}},n.createElement("h2",{className:"events-calendar-module--title--atXq5"},"Events Calendar"),n.createElement("iframe",{src:"https://calendar.google.com/calendar/embed?src=csa.gatech%40gmail.com&ctz=America%2FNew_York&showTitle=0",title:"CSA Calendar",style:{border:0},width:"800",height:"600",frameborder:"0",scrolling:"no"}))},u=a(4108),f=function(e){var t=e.children;return n.createElement(u.Z,{className:"bamboo-footer-module--container--v68WO"},n.createElement("div",{className:"bamboo-footer-module--image-container--08UjI"},n.createElement(o.S,{src:"../images/Bamboo.png",__imageData:a(3885)})),t)},b=function(e){var t=e.data,a=t.hero,o=t.events,i=new Date,s=o.nodes.filter((function(e){return new Date(e.endDateTs)>i}));return n.createElement(l.Z,null,n.createElement(c.Z,{image:a.images[0].gatsbyImageData,title:a.title,subtitle:a.subtitle,description:a.longDescription}),n.createElement(m,{events:s}),n.createElement(d,null),n.createElement(f,null,n.createElement("p",null,"Looking for past events? See event recap posts"," ",n.createElement(r.rU,{to:"/cctv"},"at our blog here!"))))}},3885:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/eef023f677cd91ff932d89a95b955c9b/c67bd/Bamboo.png","srcSet":"/static/eef023f677cd91ff932d89a95b955c9b/80f68/Bamboo.png 134w,\\n/static/eef023f677cd91ff932d89a95b955c9b/f24df/Bamboo.png 267w,\\n/static/eef023f677cd91ff932d89a95b955c9b/c67bd/Bamboo.png 534w","sizes":"(min-width: 534px) 534px, 100vw"},"sources":[{"srcSet":"/static/eef023f677cd91ff932d89a95b955c9b/24337/Bamboo.webp 134w,\\n/static/eef023f677cd91ff932d89a95b955c9b/42722/Bamboo.webp 267w,\\n/static/eef023f677cd91ff932d89a95b955c9b/bd466/Bamboo.webp 534w","type":"image/webp","sizes":"(min-width: 534px) 534px, 100vw"}]},"width":534,"height":713}')}}]);
//# sourceMappingURL=component---src-pages-events-js-c4c39335c8b5a2513bca.js.map