import{T as b,a as r,b as n}from"./chunks/index.55731a4d.js";import{d as _,r as f,c as o,a as t,i as g,b as c,o as y,e as x,w as l,u as w,f as e}from"./chunks/framework.232639dd.js";function m(d){return typeof d=="function"||Object.prototype.toString.call(d)==="[object Object]"&&!g(d)}const k=_({name:"AlertApi",setup(){const d=f([["color","string","primary success danger warn dark RGB HEX","Change the color of the component and some of its sub components.","primary"],["type","boolean","solid border shadow gradient relief ","Change the style of all the alert.","default"],["hidden-content","boolean","boolean","With this property you can hide the content of the alert.","false"],["page","Number","Number","Determine the page that is active (this property is linked to the slots='page-{n}').","false"],["progress","Number","0-100","Add a progress bar to the alert and the value is the percentage of width.","0"],["closable","boolean","boolean","Add a button to close the alert (it is necessary to use v-model).","false"]]),h=f([["icon","slot","","Add an icon to the alert.",""],["title","slot","","Add a title to the alert.",""],["page-{n}","slot","(page-1 - page-{n})","Add the pages to the alert component if it is page one would be (slot='page-1').",""],["footer","slot","","Add a footer to the alert component.",""]]),p=a=>{switch(a){case 0:return"button#color";case 1:return"button#border";case 2:return"alert#";case 3:return"alert#hidden-content";case 4:return"alert#pagination";case 5:return"alert#progress-bar";case 6:return"alert#closable";default:return""}},u=a=>{switch(a){case 0:return"alert#icon";case 1:return"alert#title";case 2:return"alert#pagination";case 3:return"alert#footer";default:return""}};return()=>o("div",{class:"api"},[o("h2",{class:"title",id:"api"},[t("API")]),o("div",{class:"content"},[o("p",{class:"sub-title"},[t("Props")]),o("div",{class:"table"},[o(b,{striped:!0},{thead:()=>o(r,null,{default:()=>[o(n,null,{default:()=>[t("Property")]}),o(n,null,{default:()=>[t("Type")]}),o(n,null,{default:()=>[t("Values")]}),o(n,null,{default:()=>[t("Description")]}),o(n,null,{default:()=>[t("Default")]}),o(n,null,{default:()=>[t("Example")]}),o(n,null,{default:()=>[t("More")]})]}),tbody:()=>d.value.map((a,s)=>o(r,null,{default:()=>[a.map(i=>o(n,null,m(i)?i:{default:()=>[i]})),o(n,null,{default:()=>[o("a",{href:p(s)},[t("Usage"),o("i",{class:"bx bx-code-block"},null)])]}),o(n,null,{default:()=>[o("a",{href:`https://github.com/lusaxweb/vuesax/issues/new?title=[Alert]%20prop%20(${a[0]})%20-%20Your%20Bug%20Name&body=**Steps%20to%20Reproduce**%0A1.%20Do%20something%0A2.%20Do%20something%20else.%0A3.%20Do%20one%20last%20thing.%0A%0A**Expected**%0AThe%20icon%20should%20do%20this%0A%0A**Result**%0AThe%20icon%20does%20not%20do%20this%0A%0A**Testcase**%0A(fork%20this%20to%20get%20started)%0Ahttp://jsfiddle.net/example-bug/1/`},[o("i",{class:"bx bx-bug"},null)]),o("a",{href:"https://github.com/oil-oil/vuesax-ts",target:"_blank"},[o("i",{class:"bx bx-terminal"},null)])]})]}))})]),o("p",{class:"sub-title"},[t("Slots")]),o("div",{class:"table"},[o(b,{striped:!0},{thead:()=>o(r,null,{default:()=>[o(n,null,{default:()=>[t("Property")]}),o(n,null,{default:()=>[t("Type")]}),o(n,null,{default:()=>[t("Values")]}),o(n,null,{default:()=>[t("Description")]}),o(n,null,{default:()=>[t("Default")]}),o(n,null,{default:()=>[t("Example")]}),o(n,null,{default:()=>[t("More")]})]}),tbody:()=>h.value.map((a,s)=>o(r,null,{default:()=>[a.map(i=>o(n,null,m(i)?i:{default:()=>[i]})),o(n,null,{default:()=>[o("a",{href:u(s)},[t("Usage"),o("i",{class:"bx bx-code-block"},null)])]}),o(n,null,{default:()=>[o("a",{href:`https://github.com/lusaxweb/vuesax/issues/new?title=[Alert]%20prop%20(${a[0]})%20-%20Your%20Bug%20Name&body=**Steps%20to%20Reproduce**%0A1.%20Do%20something%0A2.%20Do%20something%20else.%0A3.%20Do%20one%20last%20thing.%0A%0A**Expected**%0AThe%20icon%20should%20do%20this%0A%0A**Result**%0AThe%20icon%20does%20not%20do%20this%0A%0A**Testcase**%0A(fork%20this%20to%20get%20started)%0Ahttp://jsfiddle.net/example-bug/1/`},[o("i",{class:"bx bx-bug"},null)]),o("a",{href:"https://github.com/oil-oil/vuesax-ts",target:"_blank"},[o("i",{class:"bx bx-terminal"},null)])]})]}))})])])])}}),v=e("h1",{id:"button",tabindex:"-1"},[t("Button "),e("a",{class:"header-anchor",href:"#button","aria-label":'Permalink to "Button"'},"​")],-1),A=e("h2",{id:"default",tabindex:"-1"},[t("Default "),e("a",{class:"header-anchor",href:"#default","aria-label":'Permalink to "Default"'},"​")],-1),T=e("p",null,"The buttons are a fundamental part of any project, with vuesax you can add a great button with a single line of code",-1),N=e("p",null,"the buttons have all the states as active, focus, hover, to make its implementation simpler and speed up the work",-1),P=e("h2",{id:"flat",tabindex:"-1"},[t("Flat "),e("a",{class:"header-anchor",href:"#flat","aria-label":'Permalink to "Flat"'},"​")],-1),B=e("p",null,[t("You can change the full style towards "),e("em",null,"flat"),t(" of a button with the "),e("code",null,"flat"),t(" property that its value is a "),e("code",null,"boolean"),t(", so just adding it will change the styles")],-1),S=e("h2",{id:"border",tabindex:"-1"},[t("Border "),e("a",{class:"header-anchor",href:"#border","aria-label":'Permalink to "Border"'},"​")],-1),z=e("p",null,[t("You can change the full style towards "),e("em",null,"border"),t(" of a button with the "),e("code",null,"border"),t(" property that its value is a "),e("code",null,"boolean"),t(" so just adding it will change the styles")],-1),C=e("h2",{id:"gradient",tabindex:"-1"},[t("Gradient "),e("a",{class:"header-anchor",href:"#gradient","aria-label":'Permalink to "Gradient"'},"​")],-1),D=e("p",null,[t("You can change the full style towards "),e("em",null,"Gradient"),t(" of a button with the "),e("code",null,"gradient"),t(" property that its value is a "),e("code",null,"boolean"),t(", so just adding it will change the styles")],-1),j=e("div",{class:"tip custom-block"},[e("p",{class:"custom-block-title"},"Gradient Auto Color"),e("p",null,[t("Gradient colors are automatically generated by the "),e("code",null,"color"),t(" property which in this example is the"),e("code",null,"primary"),t(" color")])],-1),I=e("h2",{id:"relief",tabindex:"-1"},[t("Relief "),e("a",{class:"header-anchor",href:"#relief","aria-label":'Permalink to "Relief"'},"​")],-1),V=e("p",null,[t("Change the style of the button to a relief aspect with the "),e("code",null,"relief"),t(" property, the property is a "),e("code",null,"boolean"),t(" so you can add it without any value.")],-1),F=e("h2",{id:"transparent",tabindex:"-1"},[t("Transparent "),e("a",{class:"header-anchor",href:"#transparent","aria-label":'Permalink to "Transparent"'},"​")],-1),Y=e("p",null,[t("Change the style of the button with the "),e("code",null,"transparent"),t(" property, the property is a "),e("code",null,"boolean"),t(" so you can add it without any value.")],-1),G=e("h2",{id:"shadow",tabindex:"-1"},[t("Shadow "),e("a",{class:"header-anchor",href:"#shadow","aria-label":'Permalink to "Shadow"'},"​")],-1),q=e("p",null,[t("Change the style of the button with the "),e("code",null,"shadow"),t(" property, the property is a "),e("code",null,"boolean"),t(" so you can add it without any value.")],-1),U=e("h2",{id:"color",tabindex:"-1"},[t("Color "),e("a",{class:"header-anchor",href:"#color","aria-label":'Permalink to "Color"'},"​")],-1),R=e("p",null,[t("Change the color of the Button component with the "),e("code",null,"color"),t(" property and the color value for example ("),e("strong",null,"#fff"),t(", "),e("strong",null,"rgba (100,10,5)"),t(" or the "),e("strong",null,"main colors of vuesax"),t("), this will only affect the component and its value can be dynamic")],-1),E=e("h2",{id:"icon",tabindex:"-1"},[t("Icon "),e("a",{class:"header-anchor",href:"#icon","aria-label":'Permalink to "Icon"'},"​")],-1),O=e("p",null,[t("If you need an icon-only button use the "),e("code",null,"icon"),t(" property, the property is a "),e("code",null,"boolean"),t(" so you can add it without any value.")],-1),L=e("p",null,"This property makes the button have a specific size making it the same width and height, do not use when it is icon and text",-1),H=e("div",null,[e("div",null,[e("div",{class:"warning custom-block"},[e("p",{class:"custom-block-title"}," Iconos por defecto "),e("p",null,[t(" Vuesax no usa ninguna librería o fuente de iconos por defecto, con esto damos la libertad de usar la que prefieras Todos los componentes que usen en algún lugar un icono por defecto como el de close en un "),e("b",null,"Alert"),t(" o un "),e("b",null,"Popup"),t(" va a ser un "),e("b",null,"svg"),t(" para no tener que instalar ningún tipo de fuente externa, y se podrá sustituir con un "),e("code",null,'slot="icon"'),t(" por el icono de su preferencia ")])]),e("div",{class:"tip custom-block"},[e("p",{class:"custom-block-title"}," Vuesax Docs Icons "),e("p",null,[t(" Estos documentos y los ejemplos usan la libreria de componentes "),e("a",{target:"_blank",href:"https://boxicons.com/"},"boxicons"),t(", no es obligatoria o necesaria para el uso de Vuesax pero la recomendamos por su amplia gama de iconos y como complementan visualmente el framework ")])])])],-1),M=e("h2",{id:"icon-text",tabindex:"-1"},[t("Icon - Text "),e("a",{class:"header-anchor",href:"#icon-text","aria-label":'Permalink to "Icon - Text"'},"​")],-1),$=e("p",null,[t("If you need a button with text and icon you can do them by adding them in the "),e("code",null,"slot"),t(" default.")],-1),J=e("h2",{id:"circle",tabindex:"-1"},[t("Circle "),e("a",{class:"header-anchor",href:"#circle","aria-label":'Permalink to "Circle"'},"​")],-1),W=e("p",null,[t("You can completely round the corners with the "),e("code",null,"circle"),t(" property, the property is a "),e("code",null,"boolean"),t(" so you can add it without any value.")],-1),X=e("h2",{id:"square",tabindex:"-1"},[t("Square "),e("a",{class:"header-anchor",href:"#square","aria-label":'Permalink to "Square"'},"​")],-1),K=e("p",null,[t("You can make all the corners completely straight with the "),e("code",null,"Square"),t(" property, the property is a "),e("code",null,"boolean"),t(" so you can add it without any value.")],-1),Q=e("h2",{id:"size",tabindex:"-1"},[t("Size "),e("a",{class:"header-anchor",href:"#size","aria-label":'Permalink to "Size"'},"​")],-1),Z=e("p",null,[t("Change the size of the entire button including padding, font-size and border with the "),e("code",null,"size"),t(" property")],-1),ee=e("p",null,"values:",-1),te=e("ul",null,[e("li",null,"xl"),e("li",null,"l"),e("li",null,"default"),e("li",null,"small"),e("li",null,"mini")],-1),oe={id:"loading",tabindex:"-1"},ae=e("a",{class:"header-anchor",href:"#loading","aria-label":'Permalink to "Loading <Badge text="New"/>"'},"​",-1),le=e("p",null,[t("Now you can add a loading status with the "),e("code",null,"loading"),t(" property, the property is a "),e("code",null,"boolean"),t(" so you can add it without any value.")],-1),ne={id:"upload",tabindex:"-1"},se=e("a",{class:"header-anchor",href:"#upload","aria-label":'Permalink to "Upload <Badge text="New"/>"'},"​",-1),ie=e("p",null,[t("Now you can add a status of sending or uploading data to the server with the "),e("code",null,"upload"),t(" property, the property is a "),e("code",null,"boolean"),t(" so you can add it without any value.")],-1),de={id:"block",tabindex:"-1"},re=e("a",{class:"header-anchor",href:"#block","aria-label":'Permalink to "Block <Badge text="New"/>"'},"​",-1),ue=e("p",null,[t("You can make the button have the full width allowed with the "),e("code",null,"block"),t(" property, the property is a "),e("code",null,"boolean"),t(" so you can add it without any value.")],-1),ce={id:"animate",tabindex:"-1"},he=e("a",{class:"header-anchor",href:"#animate","aria-label":'Permalink to "Animate <Badge text="New"/>"'},"​",-1),pe=e("p",null,'You can create an animation to the component by adding the ``#"animate" `and the content will be the one that appears when the component is animated',-1),be=e("p",null,[t("You can also change the type of animation with the "),e("code",null,"animation-type"),t(" property and the allowed values ​​are ("),e("code",null,"vertical"),t(", "),e("code",null,"scale"),t(","),e("code",null,"rotate"),t(")")],-1),fe={id:"social",tabindex:"-1"},me=e("a",{class:"header-anchor",href:"#social","aria-label":'Permalink to "Social <Badge text="New"/>"'},"​",-1),_e=e("p",null,"Using the colors of social networks is very common in a project either a login button or a share button so Vuesax makes it easy for you to search for each color and just by putting the name of the network you already change the whole style of the component",-1),ge=e("p",null,[t("Supported colors: ("),e("code",null,"facebook"),t(", "),e("code",null,"twitter"),t(", "),e("code",null,"youtube"),t(", "),e("code",null,"pinterest"),t(", "),e("code",null,"linkedin"),t(", "),e("code",null,"snapchat"),t(", "),e("code",null,"whatsapp"),t(", "),e("code",null,"tumblr"),t(", "),e("code",null,"reddit"),t(", "),e("code",null,"spotify"),t(", "),e("code",null,"amazon"),t(", "),e("code",null,"medium"),t(", "),e("code",null,"vimeo"),t(", "),e("code",null,"skype"),t(", "),e("code",null,"dribbble"),t(", "),e("code",null,"slack"),t(", "),e("code",null,"yahoo"),t(", "),e("code",null,"twitch"),t(", "),e("code",null,"discord"),t(", "),e("code",null,"telegram"),t(", "),e("code",null,"google-plus"),t(", "),e("code",null,"messenger"),t(")")],-1),ye={id:"floating",tabindex:"-1"},xe=e("a",{class:"header-anchor",href:"#floating","aria-label":'Permalink to "Floating <Badge text="New"/>"'},"​",-1),we=e("p",null,[t("You can make a float style button easily with the "),e("code",null,"Floating"),t(" property, the property is a "),e("code",null,"boolean"),t(" so you can add it without any value.")],-1),ke=e("p",null,"these buttons usually do an important action in specific and go with a fixed position in the lower corner",-1),ve={id:"group",tabindex:"-1"},Ae=e("a",{class:"header-anchor",href:"#group","aria-label":'Permalink to "Group <Badge text="New"/>"'},"​",-1),Te=e("p",null,[t("If you need to make a group of buttons you can use the "),e("strong",null,"sub-component"),t(),e("code",null,"<Vsbutton-group> </Vsbutton-group>"),t(" and inside the default slot put the buttons you want to group")],-1),Ne={id:"toggle",tabindex:"-1"},Pe=e("a",{class:"header-anchor",href:"#toggle","aria-label":'Permalink to "Toggle <Badge text="New"/>"'},"​",-1),Be=e("p",null,"This is an example of what you can achieve with simple logic and few lines of code.",-1),Se={id:"to-href",tabindex:"-1"},ze=e("a",{class:"header-anchor",href:"#to-href","aria-label":'Permalink to "To - href <Badge text="New"/>"'},"​",-1),Ce=e("p",null,[t("If you need to use a button such as a vue-router link or an external link you can do it with the properties ("),e("code",null,"to"),t(": vue-router link) or ("),e("code",null,"href"),t(": html external link)")],-1),Ve=JSON.parse('{"title":"Button","description":"","frontmatter":{},"headers":[],"relativePath":"documentation/components/button.md","filePath":"documentation/components/button.md","lastUpdated":1689040214000}'),De={name:"documentation/components/button.md"},Fe=Object.assign(De,{setup(d){return(h,p)=>{const u=c("docs-warn"),a=c("Card"),s=c("Badge");return y(),x("div",null,[v,o(a,{codesandbox:"https://codesandbox.io/embed/reverent-shape-pmyk2?fontsize=14&hidenavigation=1&module=%2Fsrc%2FApp.vue"},{default:l(()=>[A,o(u),T,N]),_:1}),o(a,{codesandbox:"https://codesandbox.io/embed/charming-maxwell-ms0xf?fontsize=14&hidenavigation=1&module=%2Fsrc%2FApp.vue&theme=dark",subtitle:"Flat"},{default:l(()=>[P,B]),_:1}),o(a,{codesandbox:"https://codesandbox.io/embed/vuesax-button-border-zc0td?fontsize=14&hidenavigation=1&theme=dark",subtitle:"Border"},{default:l(()=>[S,z]),_:1}),o(a,{codesandbox:"https://codesandbox.io/embed/vuesax-button-gradient-7en0i?fontsize=14&hidenavigation=1&theme=dark",subtitle:"Gradient"},{default:l(()=>[C,D,j]),_:1}),o(a,{codesandbox:"https://codesandbox.io/embed/vuesax-button-relief-7dfh7?fontsize=14&hidenavigation=1&theme=dark",subtitle:"Relief"},{default:l(()=>[I,V]),_:1}),o(a,{codesandbox:"https://codesandbox.io/embed/vuesax-button-transparent-4t6d6?fontsize=14&hidenavigation=1&theme=dark",subtitle:"Transparent"},{default:l(()=>[F,Y]),_:1}),o(a,{codesandbox:"https://codesandbox.io/embed/vuesax-button-shadow-ufx6y?fontsize=14&hidenavigation=1&theme=dark",subtitle:"Shadow"},{default:l(()=>[G,q]),_:1}),o(a,{codesandbox:"https://codesandbox.io/embed/vuesax-button-colors-gje98?fontsize=14&hidenavigation=1&theme=dark",subtitle:"Color"},{default:l(()=>[U,R]),_:1}),o(a,{subtitle:"Icon"},{default:l(()=>[E,O,L,H]),_:1}),o(a,{subtitle:"IconText"},{default:l(()=>[M,$]),_:1}),o(a,{subtitle:"Circle"},{default:l(()=>[J,W]),_:1}),o(a,{subtitle:"Square"},{default:l(()=>[X,K]),_:1}),o(a,{subtitle:"Size"},{default:l(()=>[Q,Z,ee,te]),_:1}),o(a,{subtitle:"Loading"},{default:l(()=>[e("h2",oe,[t("Loading "),o(s,{text:"New"}),t(),ae]),le]),_:1}),o(a,{subtitle:"Upload"},{default:l(()=>[e("h2",ne,[t("Upload "),o(s,{text:"New"}),t(),se]),ie]),_:1}),o(a,{subtitle:"Block"},{default:l(()=>[e("h2",de,[t("Block "),o(s,{text:"New"}),t(),re]),ue]),_:1}),o(a,{subtitle:"Animate"},{default:l(()=>[e("h2",ce,[t("Animate "),o(s,{text:"New"}),t(),he]),pe,be]),_:1}),o(a,{subtitle:"Social"},{default:l(()=>[e("h2",fe,[t("Social "),o(s,{text:"New"}),t(),me]),_e,ge]),_:1}),o(a,{subtitle:"Floating"},{default:l(()=>[e("h2",ye,[t("Floating "),o(s,{text:"New"}),t(),xe]),we,ke]),_:1}),o(a,{subtitle:"Group"},{default:l(()=>[e("h2",ve,[t("Group "),o(s,{text:"New"}),t(),Ae]),Te]),_:1}),o(a,{subtitle:"Toggle"},{default:l(()=>[e("h2",Ne,[t("Toggle "),o(s,{text:"New"}),t(),Pe]),Be]),_:1}),o(a,{subtitle:"ToHref"},{default:l(()=>[e("h2",Se,[t("To - href "),o(s,{text:"New"}),t(),ze]),Ce]),_:1}),o(w(k))])}}});export{Ve as __pageData,Fe as default};
