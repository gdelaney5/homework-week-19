(this.webpackJsonpemployees=this.webpackJsonpemployees||[]).push([[0],[,,,,,function(e){e.exports=JSON.parse('[{"id":1,"name":"Nicholas Fury","image":"https://media.buymoviejackets.co.uk/wp-content/uploads/2015/05/Captain-America-Nick-Fury-black-coat.jpg","occupation":"Director","location":"SHIELD HQ"},{"id":2,"name":"Maria Hill","image":"https://static.comicvine.com/uploads/original/11/113509/6656975-maria%20aos.jpg","occupation":"Commander Maria Hill","location":"SHIELD HQ"},{"id":3,"name":"Steven Rogers","image":"https://i.pinimg.com/564x/9b/76/75/9b767505f5a5df3df348a898ba4ae8bb.jpg","occupation":"Captain America","location":"Brooklyn, NY"},{"id":4,"name":"Bruce Banner","image":"https://i.pinimg.com/564x/c2/36/bc/c236bc8b910fd638d7b43ddc670f55de.jpg","occupation":"Physicist/The Hulk","location":"Dayton, OH"},{"id":5,"name":"Tony Stark","image":"https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/1-tony-stark-iron-man-geek-n-rock.jpg","occupation":"Ironman","location":"Malibu, CA"},{"id":6,"name":"Natasha Romanoff","image":"https://i.pinimg.com/originals/c9/29/3d/c9293d844ad1086f9d9e9085aa4a4ae2.jpg","occupation":"Black Widow","location":"Stalingrad, Russia"},{"id":7,"name":"Peter Parker","image":"https://vignette.wikia.nocookie.net/tomholland/images/2/23/Spider-man.png/revision/latest/top-crop/width/360/height/450?cb=20161223133641","occupation":"Spiderman","location":"Queens, NY"},{"id":8,"name":"Scott Lang","image":"https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/avengers-endgame-ant-man-geek-n-rock.jpg","occupation":"Ant-Man","location":"Atlanta, GA"},{"id":9,"name":"Carol Danvers","image":"https://im.rediff.com/movies/2019/mar/06captain-marvel1.jpg","occupation":"Captain Marvel","location":"Boston, MA"},{"id":10,"name":"Clint Barton","image":"https://images.wallpapersden.com/image/download/hawkeye-in-avengers-endgame_64430_750x1334.jpg","occupation":"Hawkeye","location":"Waverly, IA"},{"id":11,"name":"Peter Quill","image":"https://images.8tracks.com/cover/i/010/168/178/sl-6142.png?rect=0,44,590,590&q=98&fm=jpg&fit=max","occupation":"Starlord","location":"Galaxy"},{"id":12,"name":"Steven Strange","image":"https://vignette.wikia.nocookie.net/ultimate-marvel-cinematic-universe/images/6/61/Doc.jpg/revision/latest?cb=20160117222945","occupation":"Dr. Strange","location":"New York, NY"}]')},,,function(e,a,t){e.exports=t(17)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),o=t(2),c=t.n(o),r=t(3),m=t(4),l=t(6),s=t(7);t(13);var p=function(e){return i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"img-container"},i.a.createElement("img",{alt:e.name,src:e.image})),i.a.createElement("div",{className:"content"},i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement("strong",null,"Name:")," ",e.name),i.a.createElement("li",null,i.a.createElement("strong",null,"Occupation:")," ",e.occupation),i.a.createElement("li",null,i.a.createElement("strong",null,"Location:")," ",e.location))),i.a.createElement("span",{onClick:function(){return e.removeEmployee(e.id)},className:"remove"},"\ud835\ude05"))};t(14);var u=function(e){return i.a.createElement("div",{className:"wrapper"},e.children)};t(15);var g=function(e){return i.a.createElement("h1",{className:"title"},e.children)},d=t(5),v=function(e){Object(s.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(r.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(e=a.call.apply(a,[this].concat(i))).state={employees:d},e.removeEmployee=function(a){var t=e.state.employees.filter((function(e){return e.id!==a}));e.setState({employees:t})},e}return Object(m.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement(u,null,i.a.createElement(g,null,"SHIELD Employees Directory"),this.state.employees.map((function(a){return i.a.createElement(p,{removeEmployee:e.removeEmployee,id:a.id,key:a.id,name:a.name,image:a.image,occupation:a.occupation,location:a.location})})))}}]),t}(n.Component);t(16);c.a.render(i.a.createElement(v,null),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.44f24fc2.chunk.js.map