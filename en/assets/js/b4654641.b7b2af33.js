"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8521],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return u}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),s=c(n),u=o,k=s["".concat(l,".").concat(u)]||s[u]||m[u]||a;return n?r.createElement(k,i(i({ref:t},d),{},{components:n})):r.createElement(k,i({ref:t},d))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=s;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},6309:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return d},default:function(){return s}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],p={id:"molecule.component.IMonacoEditorProps",title:"Interface: IMonacoEditorProps",sidebar_label:"IMonacoEditorProps",custom_edit_url:null},l=void 0,c={unversionedId:"api/interfaces/molecule.component.IMonacoEditorProps",id:"api/interfaces/molecule.component.IMonacoEditorProps",isDocsHomePage:!1,title:"Interface: IMonacoEditorProps",description:"molecule.component.IMonacoEditorProps",source:"@site/docs/api/interfaces/molecule.component.IMonacoEditorProps.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/molecule.component.IMonacoEditorProps",permalink:"/molecule/en/docs/api/interfaces/molecule.component.IMonacoEditorProps",editUrl:null,tags:[],version:"current",frontMatter:{id:"molecule.component.IMonacoEditorProps",title:"Interface: IMonacoEditorProps",sidebar_label:"IMonacoEditorProps",custom_edit_url:null},sidebar:"api",previous:{title:"IModalProps",permalink:"/molecule/en/docs/api/interfaces/molecule.component.IModalProps"},next:{title:"IScrollbarProps",permalink:"/molecule/en/docs/api/interfaces/molecule.component.IScrollbarProps"}},d=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"options",id:"options",children:[]},{value:"override",id:"override",children:[]}]},{value:"Methods",id:"methods",children:[{value:"editorInstanceRef",id:"editorinstanceref",children:[]},{value:"onChangeEditorProps",id:"onchangeeditorprops",children:[]}]}],m={toc:d};function s(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"../namespaces/molecule"},"molecule"),".",(0,a.kt)("a",{parentName:"p",href:"../namespaces/molecule.component"},"component"),".IMonacoEditorProps"),(0,a.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"ComponentProps"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,a.kt)("p",{parentName:"li"},"\u21b3 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"IMonacoEditorProps"))))),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"options"},"options"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"options"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"IStandaloneEditorConstructionOptions")),(0,a.kt)("p",null,"The option of monaco editor"),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/DTStack/molecule/blob/b54d154/src/components/monaco/index.tsx#L16"},"src/components/monaco/index.tsx:16")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"override"},"override"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"override"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"IEditorOverrideServices")),(0,a.kt)("p",null,"The override for monaco editor"),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/DTStack/molecule/blob/b54d154/src/components/monaco/index.tsx#L20"},"src/components/monaco/index.tsx:20")),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("h3",{id:"editorinstanceref"},"editorInstanceRef"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"editorInstanceRef"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"instance"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("h4",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"instance")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"IStandaloneCodeEditor"))))),(0,a.kt)("h4",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/DTStack/molecule/blob/b54d154/src/components/monaco/index.tsx#L21"},"src/components/monaco/index.tsx:21")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"onchangeeditorprops"},"onChangeEditorProps"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"onChangeEditorProps"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"props"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"nextProps"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("h4",{id:"parameters-1"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"props")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"molecule.component.IMonacoEditorProps"},(0,a.kt)("inlineCode",{parentName:"a"},"IMonacoEditorProps")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"nextProps")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"molecule.component.IMonacoEditorProps"},(0,a.kt)("inlineCode",{parentName:"a"},"IMonacoEditorProps")))))),(0,a.kt)("h4",{id:"returns-1"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/DTStack/molecule/blob/b54d154/src/components/monaco/index.tsx#L22"},"src/components/monaco/index.tsx:22")))}s.isMDXComponent=!0}}]);