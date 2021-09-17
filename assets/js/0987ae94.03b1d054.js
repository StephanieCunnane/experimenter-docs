(self.webpackChunkexperimenter_docs=self.webpackChunkexperimenter_docs||[]).push([[105],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return m}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),h=p(n),m=r,c=h["".concat(s,".").concat(m)]||h[m]||u[m]||a;return n?i.createElement(c,o(o({ref:t},d),{},{components:n})):i.createElement(c,o({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},22:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return u}});var i=n(2122),r=n(9756),a=(n(7294),n(3905)),o={},l="Testing on mobile",s={unversionedId:"android-frontend-testing",id:"android-frontend-testing",isDocsHomePage:!1,title:"Testing on mobile",description:"We have three parts to test:",source:"@site/docs/android-frontend-testing.md",sourceDirName:".",slug:"/android-frontend-testing",permalink:"/android-frontend-testing",editUrl:"https://github.com/mozilla/experimenter-docs/edit/main/docs/android-frontend-testing.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Implementing an experiment",permalink:"/fenix-engineers"},next:{title:"Testing the preview flow on iOS",permalink:"/ios-preview-testing"}},p=[{value:"Overview",id:"overview",children:[]},{value:"The annotated guide to the experiment definition",id:"the-annotated-guide-to-the-experiment-definition",children:[]},{value:"Changing between experiments",id:"changing-between-experiments",children:[{value:"Experimenter",id:"experimenter",children:[]},{value:"Client side",id:"client-side",children:[]}]},{value:"Alternatives to Experimenter",id:"alternatives-to-experimenter",children:[]},{value:"Experiment set-ups for testing branches",id:"experiment-set-ups-for-testing-branches",children:[]},{value:"Testing the experiment document itself",id:"testing-the-experiment-document-itself",children:[]},{value:"Conclusion",id:"conclusion",children:[]}],d={toc:p};function u(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"testing-on-mobile"},"Testing on mobile"),(0,a.kt)("p",null,"We have three parts to test:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"The experiment definition document, as defined in Experimenter and delivered by Remote Settings. Problems with this definition should be resolved by the experiment owner."),(0,a.kt)("li",{parentName:"ol"},"The Nimbus system (Nimbus client side SDK and the Experimenter/Remote Settings/Glean)"),(0,a.kt)("li",{parentName:"ol"},"How the app responds to different branches/feature configurations. Problems with the app's response to different branches should be resolved by the app's engineering team.")),(0,a.kt)("p",null,"Testing the Nimbus system is out of the scope of this document."),(0,a.kt)("p",null,"At this point, there are few if any tools for QA to use to test either of 1, or 3."),(0,a.kt)("p",null,"However, using a local build, and by changing the ",(0,a.kt)("inlineCode",{parentName:"p"},"NIMBUS_URL")," to the Remote Settings staging server at ",(0,a.kt)("a",{parentName:"p",href:"https://settings.stage.mozaws.net"},"https://settings.stage.mozaws.net")," we can effectively vary the experiments definition document to test the app, and to replicate the experiment definition document used in production. This is ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/mozilla-mobile/fenix#using-nimbus-servers-during-local-development"},"documented here"),"."),(0,a.kt)("p",null,"Building Fenix locally is ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/mozilla-mobile/fenix#build-instructions"},"documented in the Fenix repository"),"."),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"We wish to get the app to ingest the experiment definition of our choice. Here is a sample experiment definition, which you can generate with the ",(0,a.kt)("a",{parentName:"p",href:"https://stage.experimenter.nonprod.dataops.mozgcp.net/nimbus/"},"staging instance of Experimenter"),". "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": [\n    {\n      "slug": "nimbus-aa-validation-for-ios-v2",\n      "appId": "org.mozilla.ios.FirefoxBeta",\n      "appName": "firefox_ios",\n      "channel": "beta",\n      "endDate": null,\n      "branches": [\n        {\n          "slug": "treatment",\n          "ratio": 40,\n          "feature": {\n            "value": {},\n            "enabled": true,\n            "featureId": "the-feature-id"\n          }\n        },\n        {\n          "slug": "control",\n          "ratio": 60,\n          "feature": {\n            "value": {},\n            "enabled": true,\n            "featureId": "the-feature-id"\n          }\n        }\n      ],\n      "outcomes": [],\n      "arguments": {},\n      "probeSets": [],\n      "startDate": "2021-04-19T22:40:44.614622Z",\n      "targeting": "true",\n      "featureIds": [\n        "the-feature-id"\n      ],\n      "application": "org.mozilla.ios.FirefoxBeta",\n      "bucketConfig": {\n        "count": 8000,\n        "start": 0,\n        "total": 10000,\n        "namespace": "nimbus-aa-validation-for-ios-v2-1",\n        "randomizationUnit": "nimbus_id"\n      },\n      "schemaVersion": "1.4.0",\n      "userFacingName": "A replica of the experiment under test",\n      "referenceBranch": "control",\n      "proposedDuration": 28,\n      "isEnrollmentPaused": false,\n      "proposedEnrollment": 7,\n      "userFacingDescription": "Is Nimbus working? This experiment tries to find out.",\n      "id": "nimbus-aa-validation-for-ios-v2",\n      "last_modified": 1619530368808\n    }\n  ]\n}\n')),(0,a.kt)("h2",{id:"the-annotated-guide-to-the-experiment-definition"},"The annotated guide to the experiment definition"),(0,a.kt)("p",null,"Many of the fields in the above JSON correspond to the experiment UI."),(0,a.kt)("p",null,"These fields affect which OS, app and build the experiment is for. These should align with the developer or nightly builds of the app your using, on the platform you're using. If these don't line up, the app will not pick up this experiment."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"appName"),": pick ",(0,a.kt)("inlineCode",{parentName:"li"},"fenix")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"firefox_ios")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"appId"),": The experimenter UI should help you select the right one."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"channel"),": this must be ",(0,a.kt)("inlineCode",{parentName:"li"},"nightly")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"developer"),". The experimenter UI should help you select the right one."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"feature_id"),"/",(0,a.kt)("inlineCode",{parentName:"li"},"featureIds"),": this is the identifier of the app feature under test. This should match what is hard coded into the App. Experimenter will put these in all the right places. If the feature id is not already listed, you can ","[add it here][experimenter-admin]",".")),(0,a.kt)("p",null,"These fields affect segment the population for eligibility for the experiment, and which branch they'll be given."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"targeting"),": Experimenter will help you generate this JEXL query string. If Nimbus evaluates this on a given device to ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),", then the device is eligible for the experiment. If your testing the app, then you (TODO)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"bucketConfig"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"start")," ",(0,a.kt)("inlineCode",{parentName:"li"},"count")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"total"),". Of the total eligible users, the proportion that will actually be enrolled in the experiment is given by ",(0,a.kt)("inlineCode",{parentName:"li"},"(count - start) / total"),". For testing purposes, you should make ",(0,a.kt)("inlineCode",{parentName:"li"},"start = 0"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"count = 10000"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"total = 10000"),", i.e. enroll 100% of eligible devices.")),(0,a.kt)("p",null,"If the device is enrolled in the experiment (i.e. is targeted as eligible, and in the experiment bucket), then it will be enrolled in to one of the two or more branches. Once enrolled it will not change branches."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"branch")," -> ",(0,a.kt)("inlineCode",{parentName:"li"},"slug"),": This should match the branches that the app's feature responds to. In most cases, it will be ",(0,a.kt)("inlineCode",{parentName:"li"},"treatment")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"control"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"branch")," -> ",(0,a.kt)("inlineCode",{parentName:"li"},"ratio"),": The ",(0,a.kt)("inlineCode",{parentName:"li"},"ratio")," property of each branch, gives the proportion of the enrolled population will get a particular branch. Tip: make your ratios add up to 100. In the above example, the ",(0,a.kt)("inlineCode",{parentName:"li"},"control")," branch gets 60 out of every (60 + 40) enrollments, i.e. 60%.")),(0,a.kt)("h2",{id:"changing-between-experiments"},"Changing between experiments"),(0,a.kt)("p",null,"To test the app's behaviour in the face of the branches, you'll need one experiment per branch. Each experiment needs the same feature id. They cannot be run in parallel."),(0,a.kt)("h3",{id:"experimenter"},"Experimenter"),(0,a.kt)("p",null,"The experiment can be ended remotely."),(0,a.kt)("h3",{id:"client-side"},"Client side"),(0,a.kt)("p",null,"Once enrolled in an experiment, the user should not be able to enroll in a different branch."),(0,a.kt)("p",null,"Once the experiment has been ended, you can reset the app by clearing app data and caches. The experiment is downloaded on first run after the reset or install, after a few second; and the experiment enrollment will happen on second run."),(0,a.kt)("h2",{id:"alternatives-to-experimenter"},"Alternatives to Experimenter"),(0,a.kt)("p",null,"It may not be desirable to use Experimenter: you should be able to set up a simple file server on your network. It should be able to serve the experiment JSON file directly, which you can edit the JSON directly."),(0,a.kt)("p",null,"This local server should serve the file from the path: ",(0,a.kt)("inlineCode",{parentName:"p"},"/buckets/main/collections/nimbus-mobile-experiments/records"),". Setting the ",(0,a.kt)("inlineCode",{parentName:"p"},"NIMBUS_URL")," to this local server should be done in the same way as above."),(0,a.kt)("h2",{id:"experiment-set-ups-for-testing-branches"},"Experiment set-ups for testing branches"),(0,a.kt)("p",null,"You should have one experiment per branch: "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"they should  have ",(0,a.kt)("inlineCode",{parentName:"li"},"targeting")," = ",(0,a.kt)("inlineCode",{parentName:"li"},'"true"'),", ",(0,a.kt)("inlineCode",{parentName:"li"},"bucketConfig")," to have ",(0,a.kt)("inlineCode",{parentName:"li"},"start")," = ",(0,a.kt)("inlineCode",{parentName:"li"},"0"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"total = 10000")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"count = 10000"),"."),(0,a.kt)("li",{parentName:"ul"},"For the branch under test, set the branch ",(0,a.kt)("inlineCode",{parentName:"li"},"ratio")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"100")," and the others to ",(0,a.kt)("inlineCode",{parentName:"li"},"0"),".")),(0,a.kt)("p",null,"This will ensure that all clients that load the experiment will enroll in it and choose that exact branch."),(0,a.kt)("h2",{id:"testing-the-experiment-document-itself"},"Testing the experiment document itself"),(0,a.kt)("p",null,"The only thing you can test on small scale is the targeting string. You should make an experiment with the same targeting as the experiment brief. You should ensure every client enrolls in a branch which has visible changes (e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"treatment"),")."),(0,a.kt)("p",null,"You can then vary the device (e.g. the locale or language), or by using a small range of phones of different sizes and operating system versions."),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"Much of these will be ameliorated by testing tooling. We appreciate that the current situation is less than ideal."))}u.isMDXComponent=!0}}]);