(self.webpackChunkexperimenter_docs=self.webpackChunkexperimenter_docs||[]).push([[801],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=i,f=p["".concat(c,".").concat(d)]||p[d]||m[d]||o;return n?r.createElement(f,a(a({ref:t},l),{},{components:n})):r.createElement(f,a({ref:t},l))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6460:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return m}});var r=n(2122),i=n(9756),o=(n(7294),n(3905)),a={id:"outcomes",title:"Outcomes"},s=void 0,c={unversionedId:"jetstream/outcomes",id:"jetstream/outcomes",isDocsHomePage:!1,title:"Outcomes",description:"An Outcome is a reusable configuration snippet",source:"@site/docs/jetstream/outcomes.md",sourceDirName:"jetstream",slug:"/jetstream/outcomes",permalink:"/jetstream/outcomes",editUrl:"https://github.com/mozilla/experimenter-docs/edit/main/docs/jetstream/outcomes.md",version:"current",frontMatter:{id:"outcomes",title:"Outcomes"},sidebar:"sidebar",previous:{title:"Statistics",permalink:"/jetstream/statistics"},next:{title:"Configuring Jetstream",permalink:"/jetstream/configuration"}},u=[{value:"Defining an Outcome",id:"defining-an-outcome",children:[]},{value:"When should I use Outcomes?",id:"when-should-i-use-outcomes",children:[]},{value:"What happens if an Outcome changes?",id:"what-happens-if-an-outcome-changes",children:[]}],l={toc:u};function m(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"An Outcome is a reusable configuration snippet\nthat defines metrics and statistical summaries for Jetstream to compute,\nwhich will be displayed on the Experimenter results page."),(0,o.kt)("p",null,"Outcomes are defined in TOML snippets in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mozilla/jetstream-config/tree/main/outcomes"},(0,o.kt)("inlineCode",{parentName:"a"},"outcomes/")," path of the jetstream-config repository"),"."),(0,o.kt)("p",null,"Watch a demo about how to use Outcomes:"),(0,o.kt)("iframe",{src:"https://drive.google.com/file/d/10pHG1S8ucpVBlNgCq2CIR5lXPLdJQfwm/preview",width:"640",height:"480"}),(0,o.kt)("h2",{id:"defining-an-outcome"},"Defining an Outcome"),(0,o.kt)("p",null,"A simple Outcome definition (excerpted from ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mozilla/jetstream-config/blob/main/outcomes/firefox_desktop/picture_in_picture.toml"},"a live Outcome"),") looks like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-toml"},'friendly_name = "Picture in Picture"\ndescription = "Usage and engagement metrics for the video Picture-in-Picture feature."\n\n[metrics.used_picture_in_picture]\nfriendly_name = "Used Picture in Picture"\ndescription = "Fraction of clients that used PiP over the measurement window"\nselect_expression = """\n    LOGICAL_OR(\n        event_category = "pictureinpicture"\n        AND event_method = "create"\n    )\n"""\ndata_source = "events"\nstatistics = { binomial = {} }\n')),(0,o.kt)("p",null,"The important elements are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Top-level ",(0,o.kt)("inlineCode",{parentName:"li"},"friendly_name")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"description")," fields, which define how the Outcome appears in Experimenter"),(0,o.kt)("li",{parentName:"ul"},"One or more ",(0,o.kt)("inlineCode",{parentName:"li"},"metrics")," blocks that describe the metrics to compute, and any supporting ",(0,o.kt)("inlineCode",{parentName:"li"},"data_source"),"s as necessary.")),(0,o.kt)("p",null,"The configuration languge is identical to the custom experiment configuration language described in ",(0,o.kt)("a",{parentName:"p",href:"/jetstream/configuration"},"Configuring Jetstream"),"."),(0,o.kt)("p",null,"Opening a pull request to ",(0,o.kt)("inlineCode",{parentName:"p"},"jetstream-config")," with an Outcome definition will cause it to be validated.\nIf it passes, a data scientist can merge the Outcome definition without additional review."),(0,o.kt)("p",null,"Experimenter will need to be re-deployed to pick up a new Outcome. Please ask in #nimbus-project if you're in a hurry!"),(0,o.kt)("h2",{id:"when-should-i-use-outcomes"},"When should I use Outcomes?"),(0,o.kt)("p",null,"As a data scientist, it's useful to define Outcomes whenever an endpoint is going to be used more than once.\nIt reduces the amount of work you will need to do for each follow-up experiment and ensures that metrics are defined consistently."),(0,o.kt)("p",null,"If you're not certain about how you want to define a metric, it's okay to use a custom configuration first,\nand then copy-paste the metrics into an Outcome for later use."),(0,o.kt)("h2",{id:"what-happens-if-an-outcome-changes"},"What happens if an Outcome changes?"),(0,o.kt)("p",null,"Changing an Outcome does not re-run any experiments.\nA commit hash associated with the version of each Outcome is captured in the ",(0,o.kt)("a",{parentName:"p",href:"/jetstream/data-products"},"experiment metadata")," published to GCS,\nso it's possible to understand which version of an Outcome was associated with an experiment analysis."))}m.isMDXComponent=!0}}]);