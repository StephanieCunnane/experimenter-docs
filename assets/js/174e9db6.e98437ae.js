(self.webpackChunkexperimenter_docs=self.webpackChunkexperimenter_docs||[]).push([[7510],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),s=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=s(n),m=r,d=f["".concat(l,".").concat(m)]||f[m]||p[m]||i;return n?o.createElement(d,a(a({ref:t},u),{},{components:n})):o.createElement(d,a({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2003:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return s},default:function(){return p}});var o=n(2122),r=n(9756),i=(n(7294),n(3905)),a={id:"index",title:"Feature Manifest Cookbook",slug:"/cookbook/fml/index"},c="Feature Manifest Cookbook",l={unversionedId:"cookbook/fml/index",id:"cookbook/fml/index",isDocsHomePage:!1,title:"Feature Manifest Cookbook",description:"The Feature Manifest Language is a tool and specification designed to help application developers manage tooling to interact with Nimbus. It sits on top of the Feature Variables API, and eliminates many of the weaknesses of that API:",source:"@site/docs/cookbook/fml/index.mdx",sourceDirName:"cookbook/fml",slug:"/cookbook/fml/index",permalink:"/cookbook/fml/index",editUrl:"https://github.com/mozilla/experimenter-docs/edit/main/docs/cookbook/fml/index.mdx",tags:[],version:"current",frontMatter:{id:"index",title:"Feature Manifest Cookbook",slug:"/cookbook/fml/index"},sidebar:"sidebar",previous:{title:"Previewing Experiments",permalink:"/experiment-owners/preview"},next:{title:"Experimentation for data scientists",permalink:"/data-scientists"}},s=[],u={toc:s};function p(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"feature-manifest-cookbook"},"Feature Manifest Cookbook"),(0,i.kt)("p",null,"The ","[Feature Manifest Language][/fml-spec]"," is a tool and specification designed to help application developers manage tooling to interact with Nimbus. It sits on top of the ","[Feature Variables API][/feature-variables-and-me]",", and eliminates many of the weaknesses of that API:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"no magic strings: application code now accesses configuration through generated data classes."),(0,i.kt)("li",{parentName:"ul"},"default values are specified away from the code."),(0,i.kt)("li",{parentName:"ul"},"channel specific configuration."),(0,i.kt)("li",{parentName:"ul"},"Decreasing interaction with ",(0,i.kt)("inlineCode",{parentName:"li"},"experimenter")," for application developers. Experimenter picks up changes in the manifest each day.")),(0,i.kt)("p",null,"This is the start of a collection of recipes and patterns that we're discovering."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"growable-collections"},"Managing collections not known before release"))))}p.isMDXComponent=!0}}]);