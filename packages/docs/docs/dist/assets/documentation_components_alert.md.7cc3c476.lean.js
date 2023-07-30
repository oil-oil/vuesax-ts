import{T as b,a as d,b as l}from"./chunks/index.55731a4d.js";import{d as m,r as f,c as t,a as e,i as g,b as c,o as y,e as x,w as n,u as w,f as o}from"./chunks/framework.232639dd.js";function _(i){return typeof i=="function"||Object.prototype.toString.call(i)==="[object Object]"&&!g(i)}const A=m({name:"AlertApi",setup(){const i=f([["active","boolean","boolean","Determine if the component is visible.","true"],["color","string","primary success danger warn dark RGB HEX","Change the color of the component and some of its sub components.","primary"],["type","boolean","solid border shadow gradient relief ","Change the style of all the alert.","default"],["hidden-content","boolean","boolean","With this property you can hide the content of the alert.","false"],["page","Number","Number","Determine the page that is active (this property is linked to the slots='page-{n}').","false"],["progress","Number","0-100","Add a progress bar to the alert and the value is the percentage of width.","0"],["closable","boolean","boolean","Add a button to close the alert (it is necessary to use v-model).","false"]]),u=f([["icon","slot","","Add an icon to the alert.",""],["title","slot","","Add a title to the alert.",""],["page-{n}","slot","(page-1 - page-{n})","Add the pages to the alert component if it is page one would be (slot='page-1').",""],["footer","slot","","Add a footer to the alert component.",""]]),p=a=>{switch(a){case 0:return"alert#closable";case 1:return"alert#color";case 2:return"alert#solid";case 3:return"alert#hidden-content";case 4:return"alert#pagination";case 5:return"alert#progress-bar";case 6:return"alert#closable";default:return""}},h=a=>{switch(a){case 0:return"alert#icon";case 1:return"alert#title";case 2:return"alert#pagination";case 3:return"alert#footer";default:return""}};return()=>t("div",{class:"api"},[t("h2",{class:"title",id:"api"},[e("API")]),t("div",{class:"content"},[t("p",{class:"sub-title"},[e("Props")]),t("div",{class:"table"},[t(b,{striped:!0},{thead:()=>t(d,null,{default:()=>[t(l,null,{default:()=>[e("Property")]}),t(l,null,{default:()=>[e("Type")]}),t(l,null,{default:()=>[e("Values")]}),t(l,null,{default:()=>[e("Description")]}),t(l,null,{default:()=>[e("Default")]}),t(l,null,{default:()=>[e("Example")]}),t(l,null,{default:()=>[e("More")]})]}),tbody:()=>i.value.map((a,s)=>t(d,null,{default:()=>[a.map(r=>t(l,null,_(r)?r:{default:()=>[r]})),t(l,null,{default:()=>[t("a",{href:p(s)},[e("Usage"),t("i",{class:"bx bx-code-block"},null)])]}),t(l,null,{default:()=>[t("a",{href:`https://github.com/lusaxweb/vuesax/issues/new?title=[Alert]%20prop%20(${a[0]})%20-%20Your%20Bug%20Name&body=**Steps%20to%20Reproduce**%0A1.%20Do%20something%0A2.%20Do%20something%20else.%0A3.%20Do%20one%20last%20thing.%0A%0A**Expected**%0AThe%20icon%20should%20do%20this%0A%0A**Result**%0AThe%20icon%20does%20not%20do%20this%0A%0A**Testcase**%0A(fork%20this%20to%20get%20started)%0Ahttp://jsfiddle.net/example-bug/1/`},[t("i",{class:"bx bx-bug"},null)]),t("a",{href:"https://github.com/oil-oil/vuesax-ts",target:"_blank"},[t("i",{class:"bx bx-terminal"},null)])]})]}))})]),t("p",{class:"sub-title"},[e("Slots")]),t("div",{class:"table"},[t(b,{striped:!0},{thead:()=>t(d,null,{default:()=>[t(l,null,{default:()=>[e("Property")]}),t(l,null,{default:()=>[e("Type")]}),t(l,null,{default:()=>[e("Values")]}),t(l,null,{default:()=>[e("Description")]}),t(l,null,{default:()=>[e("Default")]}),t(l,null,{default:()=>[e("Example")]}),t(l,null,{default:()=>[e("More")]})]}),tbody:()=>u.value.map((a,s)=>t(d,null,{default:()=>[a.map(r=>t(l,null,_(r)?r:{default:()=>[r]})),t(l,null,{default:()=>[t("a",{href:h(s)},[e("Usage"),t("i",{class:"bx bx-code-block"},null)])]}),t(l,null,{default:()=>[t("a",{href:`https://github.com/lusaxweb/vuesax/issues/new?title=[Alert]%20prop%20(${a[0]})%20-%20Your%20Bug%20Name&body=**Steps%20to%20Reproduce**%0A1.%20Do%20something%0A2.%20Do%20something%20else.%0A3.%20Do%20one%20last%20thing.%0A%0A**Expected**%0AThe%20icon%20should%20do%20this%0A%0A**Result**%0AThe%20icon%20does%20not%20do%20this%0A%0A**Testcase**%0A(fork%20this%20to%20get%20started)%0Ahttp://jsfiddle.net/example-bug/1/`},[t("i",{class:"bx bx-bug"},null)]),t("a",{href:"https://github.com/oil-oil/vuesax-ts",target:"_blank"},[t("i",{class:"bx bx-terminal"},null)])]})]}))})])])])}}),v=o("h1",{id:"alert",tabindex:"-1"},[e("Alert "),o("a",{class:"header-anchor",href:"#alert","aria-label":'Permalink to "Alert"'},"​")],-1),k=o("h2",{id:"default",tabindex:"-1"},[e("Default "),o("a",{class:"header-anchor",href:"#default","aria-label":'Permalink to "Default"'},"​")],-1),N=o("p",null,"Easily generate an alert with this component apart from functionalities such as hiding it and showing its color change and title icons among other things",-1),P={id:"solid",tabindex:"-1"},B=o("a",{class:"header-anchor",href:"#solid","aria-label":'Permalink to "Solid <Badge text="New"/>"'},"​",-1),T=o("p",null,[e("You can change the style of the component by adding the "),o("code",null,"solid"),e(" property, the property is a"),o("code",null," boolean"),e(" so you can add it without any value.")],-1),C={id:"border",tabindex:"-1"},D=o("a",{class:"header-anchor",href:"#border","aria-label":'Permalink to "Border <Badge text="New"/>"'},"​",-1),S=o("p",null,[e("You can change the style of the component by adding the "),o("code",null,"border"),e(" property, the property is a"),o("code",null," boolean"),e(" so you can add it without any value.")],-1),V={id:"shadow",tabindex:"-1"},Y=o("a",{class:"header-anchor",href:"#shadow","aria-label":'Permalink to "Shadow <Badge text="New"/>"'},"​",-1),j=o("p",null,[e("You can change the style of the component by adding the "),o("code",null,"shadow"),e(" property, the property is a"),o("code",null," boolean"),e(" so you can add it without any value.")],-1),I={id:"gradient",tabindex:"-1"},R=o("a",{class:"header-anchor",href:"#gradient","aria-label":'Permalink to "Gradient <Badge text="New"/>"'},"​",-1),E=o("p",null,[e("You can change the style of the component by adding the "),o("code",null,"gradient"),e(" property, the property is a "),o("code",null,"boolean"),e(" so you can add it without any value.")],-1),U={id:"relief",tabindex:"-1"},G=o("a",{class:"header-anchor",href:"#relief","aria-label":'Permalink to "Relief <Badge text="New"/>"'},"​",-1),H=o("p",null,[e("You can change the style of the component by adding the "),o("code",null,"relief"),e(" property, the property is a"),o("code",null," boolean"),e(" so you can add it without any value.")],-1),O=o("h2",{id:"animate",tabindex:"-1"},[e("Animate "),o("a",{class:"header-anchor",href:"#animate","aria-label":'Permalink to "Animate"'},"​")],-1),M=o("p",null,"A beautiful and simple animation to show and hide the alert to the user",-1),$=o("h2",{id:"color",tabindex:"-1"},[e("Color "),o("a",{class:"header-anchor",href:"#color","aria-label":'Permalink to "Color"'},"​")],-1),z=o("p",null,[e("Change the color of the entire alert with the "),o("code",null,"color"),e(" property")],-1),F=o("p",null,[e("In this example you can click on the buttons and dynamically change the color value to display it in the component "),o("strong",null,"VsAlert")],-1),J=o("h2",{id:"icon",tabindex:"-1"},[e("Icon "),o("a",{class:"header-anchor",href:"#icon","aria-label":'Permalink to "Icon"'},"​")],-1),W=o("p",null,[e("Add an icon to the alert easily with the slot "),o("strong",null,"icon")],-1),X=o("b",null,"Alert",-1),q=o("b",null,"Popup",-1),K=o("b",null,"svg",-1),L=o("code",{style:{padding:".25rem .5rem","font-size":".85rem","background-color":"var(--vs-theme-bg2)","border-radius":"3px"}},'slot="icon"',-1),Q=o("a",{href:"https://boxicons.com/",target:"_blank"},"boxicons",-1),Z=o("h2",{id:"title",tabindex:"-1"},[e("Title "),o("a",{class:"header-anchor",href:"#title","aria-label":'Permalink to "Title"'},"​")],-1),ee=o("p",null,[e("You can add a descriptive title to the alert with the "),o("code",null,'slot="title"')],-1),te={id:"hidden-content",tabindex:"-1"},oe=o("a",{class:"header-anchor",href:"#hidden-content","aria-label":'Permalink to "Hidden Content <Badge text="New"/>"'},"​",-1),ae=o("p",null,"You can hide the content of an alert and just leave the title to display the content dynamically",-1),le={id:"pagination",tabindex:"-1"},ne=o("a",{class:"header-anchor",href:"#pagination","aria-label":'Permalink to "Pagination <Badge text="New"/>"'},"​",-1),se=o("p",null,"There are times when we need to show a lot of content to the user but we don't want to extend the text and make the alert very large and tall",-1),re={id:"footer",tabindex:"-1"},ie=o("a",{class:"header-anchor",href:"#footer","aria-label":'Permalink to "footer <Badge text="New"/>"'},"​",-1),de=o("p",null,[e("Use the "),o("code",null,"footer"),e(" slot to add a footer to the alert where for example you can add interactions with the user such as a button or a checkbox.")],-1),ce={id:"progress-bar",tabindex:"-1"},he=o("a",{class:"header-anchor",href:"#progress-bar","aria-label":'Permalink to "Progress bar <Badge text="New"/>"'},"​",-1),ue=o("p",null,[e("You can add a progress bar to the alert with the progress property and a number of ("),o("code",null,"0 - 100"),e(")")],-1),pe={id:"closable",tabindex:"-1"},be=o("a",{class:"header-anchor",href:"#closable","aria-label":'Permalink to "Closable <Badge text="New"/>"'},"​",-1),fe=o("p",null,[e("You can add a close alert icon with the "),o("code",null,"closable"),e(" property, the property is a"),o("code",null," boolean"),e(" so you can add it without any value.")],-1),_e={id:"time-close",tabindex:"-1"},me=o("a",{class:"header-anchor",href:"#time-close","aria-label":'Permalink to "Time Close <Badge text="New"/>"'},"​",-1),ge=o("p",null,"If you need an alert to have time to hide, you can do so by joining some properties and few lines of code",-1),Ae=JSON.parse('{"title":"Alert","description":"","frontmatter":{},"headers":[],"relativePath":"documentation/components/alert.md","filePath":"documentation/components/alert.md","lastUpdated":1689040214000}'),ye={name:"documentation/components/alert.md"},ve=Object.assign(ye,{setup(i){return(u,p)=>{const h=c("docs-warn"),a=c("card"),s=c("Badge"),r=c("VsAlert");return y(),x("div",null,[v,t(a,null,{default:n(()=>[k,t(h),N]),_:1}),t(a,{subtitle:"Solid"},{default:n(()=>[o("h2",P,[e("Solid "),t(s,{text:"New"}),e(),B]),T]),_:1}),t(a,{subtitle:"Border"},{default:n(()=>[o("h2",C,[e("Border "),t(s,{text:"New"}),e(),D]),S]),_:1}),t(a,{subtitle:"Shadow"},{default:n(()=>[o("h2",V,[e("Shadow "),t(s,{text:"New"}),e(),Y]),j]),_:1}),t(a,{subtitle:"Gradient"},{default:n(()=>[o("h2",I,[e("Gradient "),t(s,{text:"New"}),e(),R]),E]),_:1}),t(a,{subtitle:"Relief"},{default:n(()=>[o("h2",U,[e("Relief "),t(s,{text:"New"}),e(),G]),H]),_:1}),t(a,{subtitle:"Animate"},{default:n(()=>[O,M]),_:1}),t(a,{subtitle:"Color"},{default:n(()=>[$,z,F]),_:1}),t(a,{subtitle:"Icon"},{default:n(()=>[J,W,t(r,{warn:""},{title:n(()=>[e(" Default Icons ")]),default:n(()=>[e(" Vuesax does not use any library or default icon source, with this we give you the freedom to use the one you prefer All the components that use a default icon somewhere like the close one in an "),X,e(" or a "),q,e(" will be an "),K,e(" for not having to install any type of external font, and it can be replaced with an icon of your preference"),L]),_:1}),t(r,{success:"",style:{margin:"10px 0 0 0"}},{title:n(()=>[e(" Vuesax Docs Icons ")]),default:n(()=>[e(" These documents and examples use the "),Q,e(" component library, it is not mandatory or necessary for the use of Vuesax but we recommend it for its wide range of icons and how they visually complement the framework ")]),_:1})]),_:1}),t(a,{subtitle:"Title"},{default:n(()=>[Z,ee]),_:1}),t(a,{subtitle:"HiddenContent"},{default:n(()=>[o("h2",te,[e("Hidden Content "),t(s,{text:"New"}),e(),oe]),ae]),_:1}),t(a,{subtitle:"Pagination"},{default:n(()=>[o("h2",le,[e("Pagination "),t(s,{text:"New"}),e(),ne]),se]),_:1}),t(a,{subtitle:"Footer"},{default:n(()=>[o("h2",re,[e("footer "),t(s,{text:"New"}),e(),ie]),de]),_:1}),t(a,{subtitle:"ProgressBar"},{default:n(()=>[o("h2",ce,[e("Progress bar "),t(s,{text:"New"}),e(),he]),ue]),_:1}),t(a,{subtitle:"Closable"},{default:n(()=>[o("h2",pe,[e("Closable "),t(s,{text:"New"}),e(),be]),fe]),_:1}),t(a,{subtitle:"TimeClose"},{default:n(()=>[o("h2",_e,[e("Time Close "),t(s,{text:"New"}),e(),me]),ge]),_:1}),t(w(A))])}}});export{Ae as __pageData,ve as default};
