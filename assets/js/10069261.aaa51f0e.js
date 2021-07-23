(self.webpackChunkexperimenter_docs=self.webpackChunkexperimenter_docs||[]).push([[230],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return d},kt:function(){return c}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),m=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=m(a),c=r,g=u["".concat(s,".").concat(c)]||u[c]||p[c]||i;return a?n.createElement(g,l(l({ref:t},d),{},{components:a})):n.createElement(g,l({ref:t},d))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var m=2;m<i;m++)l[m]=a[m];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},5780:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return s},toc:function(){return m},default:function(){return p}});var n=a(2122),r=a(9756),i=(a(7294),a(3905)),l={id:"data-products",title:"Jetstream Data Products"},o=void 0,s={unversionedId:"jetstream/data-products",id:"jetstream/data-products",isDocsHomePage:!1,title:"Jetstream Data Products",description:"Jetstream writes analysis results and enrollments information to BigQuery. Statistics data and metadata gets exported to GCS to make it accessible to the Experimenter console.",source:"@site/docs/jetstream/data-products.md",sourceDirName:"jetstream",slug:"/jetstream/data-products",permalink:"/jetstream/data-products",editUrl:"https://github.com/mozilla/experimenter-docs/edit/main/docs/jetstream/data-products.md",version:"current",frontMatter:{id:"data-products",title:"Jetstream Data Products"},sidebar:"sidebar",previous:{title:"Configuring Jetstream",permalink:"/jetstream/configuration"},next:{title:"Jetstream Architecture and Operations",permalink:"/jetstream/operations"}},m=[{value:"BigQuery Datasets",id:"bigquery-datasets",children:[{value:"Results Datasets",id:"results-datasets",children:[]},{value:"Monitoring Datasets",id:"monitoring-datasets",children:[]}]},{value:"GCS Data Export",id:"gcs-data-export",children:[{value:"Statistics Data",id:"statistics-data",children:[]},{value:"Metadata",id:"metadata",children:[]}]}],d={toc:m};function p(e){var t=e.components,a=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Jetstream writes analysis results and enrollments information to BigQuery. Statistics data and metadata gets exported to GCS to make it accessible to the Experimenter console."),(0,i.kt)("h2",{id:"bigquery-datasets"},"BigQuery Datasets"),(0,i.kt)("h3",{id:"results-datasets"},"Results Datasets"),(0,i.kt)("p",null,"The datasets that back the Experimenter results dashboards are available in BigQuery in the ",(0,i.kt)("inlineCode",{parentName:"p"},"mozanalysis")," dataset in ",(0,i.kt)("inlineCode",{parentName:"p"},"moz-fx-data-experiments"),". ",(0,i.kt)("a",{parentName:"p",href:"https://docs.telemetry.mozilla.org/datasets/jetstream.html"},"Technical documentation")," is available in the Mozilla data docs."),(0,i.kt)("h3",{id:"monitoring-datasets"},"Monitoring Datasets"),(0,i.kt)("p",null,"Datasets used for monitoring the operation of Jetstream are part of the ",(0,i.kt)("inlineCode",{parentName:"p"},"monitoring")," dataset in ",(0,i.kt)("inlineCode",{parentName:"p"},"moz-fx-data-experiments"),"."),(0,i.kt)("h4",{id:"error-logs"},"Error Logs"),(0,i.kt)("p",null,"Jetstream logs errors and warning encountered during its analysis runs to ",(0,i.kt)("inlineCode",{parentName:"p"},"monitoring.logs"),". This datasets is used as basis for the ",(0,i.kt)("a",{parentName:"p",href:"https://sql.telemetry.mozilla.org/dashboard/jetstream-errors?p_experiment=%25"},"Jetstream error dashboard")," and for ",(0,i.kt)("a",{parentName:"p",href:"https://sql.telemetry.mozilla.org/alerts/81"},"setting up alerts"),"."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"logs")," table has the following schema:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Column name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"timestamp")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"TIMESTAMP")),(0,i.kt)("td",{parentName:"tr",align:null},"Timestamp of when the log event was recorded")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"experiment")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"STRING")),(0,i.kt)("td",{parentName:"tr",align:null},"Experiment slug for which event was recorded")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"message")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"STRING")),(0,i.kt)("td",{parentName:"tr",align:null},"Log message")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"log_level")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"STRING")),(0,i.kt)("td",{parentName:"tr",align:null},"Log level: ERROR, WARNING")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"exception")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"STRING")),(0,i.kt)("td",{parentName:"tr",align:null},"Raised exception object")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"filename")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"STRING")),(0,i.kt)("td",{parentName:"tr",align:null},"Name the Jetstream code file the exception was raised")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"func_name")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"STRING")),(0,i.kt)("td",{parentName:"tr",align:null},"Name the Jetstream function the exception was raised")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"exception_type")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"STRING")),(0,i.kt)("td",{parentName:"tr",align:null},"Class name the exception raised")))),(0,i.kt)("h4",{id:"query-cost"},"Query Cost"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"monitoring.query_cost_v1")," dataset contains the cost of each query run when analysing experiments. The dataset is updated daily and scrapes the cost information from the BigQuery logs. The query for determining the costs is part of ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mozilla/bigquery-etl/tree/main/sql/moz-fx-data-experiments/monitoring/query_cost_v1"},"bigquery-etl"),". The dataset is basis for the ",(0,i.kt)("a",{parentName:"p",href:"https://sql.telemetry.mozilla.org/dashboard/jetstream-cost"},"jetstream cost monitoring dashboard")," and ",(0,i.kt)("a",{parentName:"p",href:"https://sql.telemetry.mozilla.org/alerts/91"},"alerts set up")," to send notifications when an analysis query exceeds a certain threshold."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"query_cost_v1")," table has the following schema:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Column name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"submission_timestamp")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"TIMESTAMP")),(0,i.kt)("td",{parentName:"tr",align:null},"Timestamp of when the query was executed")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"destination_table")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"STRING")),(0,i.kt)("td",{parentName:"tr",align:null},"Name of the table query was writing data to")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"query")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"STRING")),(0,i.kt)("td",{parentName:"tr",align:null},"SQL of the executed query")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"total_bytes_processed")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"INT64")),(0,i.kt)("td",{parentName:"tr",align:null},"Number of bytes the query processed")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"cost_usd")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"FLOAT")),(0,i.kt)("td",{parentName:"tr",align:null},"Cost of the query in USD based on ",(0,i.kt)("a",{parentName:"td",href:"https://cloud.google.com/bigquery/pricing"},"BigQuery pricing"))))),(0,i.kt)("h4",{id:"experimenter-experiments"},"Experimenter Experiments"),(0,i.kt)("p",null,"For monitoring Nimbus experiments, some common failure cases are exposed as part of the ",(0,i.kt)("a",{parentName:"p",href:"https://grafana.telemetry.mozilla.org/d/XspgvdxZz/experiment-enrollment?orgId=1"},"Experiments Enrollments Grafana dashboard"),". These monitoring rules will require access to collected experiments enrollment data which is available in ",(0,i.kt)("inlineCode",{parentName:"p"},"monitoring.experimenter_experiments_v1"),". This dataset is part of ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mozilla/bigquery-etl/tree/main/sql/moz-fx-data-experiments/monitoring/experimenter_experiments_v1"},"bigquery-etl")," and updated every 10 minutes by fetching data from the Experimenter API."),(0,i.kt)("h2",{id:"gcs-data-export"},"GCS Data Export"),(0,i.kt)("p",null,"Jetstream exports statistics data and metadata of analysed experiments to the ",(0,i.kt)("inlineCode",{parentName:"p"},"mozanalysis")," GCS bucket."),(0,i.kt)("h3",{id:"statistics-data"},"Statistics Data"),(0,i.kt)("p",null,"After each analysis run has completed, Jetstream exports the statistics results of each experiments to the ",(0,i.kt)("inlineCode",{parentName:"p"},"statistics")," sub-directory as JSON. The JSON files follow the naming format:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"statistics_<experiment_slug>_<period>.json")),(0,i.kt)("p",null,"Each file contains a JSON object for every row in the corresponding statistics table. The JSON files are pulled in by Experimenter and used for visualizing results on the Experimenter results page."),(0,i.kt)("h3",{id:"metadata"},"Metadata"),(0,i.kt)("p",null,"Metadata of analyzed experiments contains information about all metrics and outcomes that are computed during any analysis period. Metadata is written to JSON files into the ",(0,i.kt)("inlineCode",{parentName:"p"},"metadata")," sub-directory with the following naming schema:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"metadata_<experiment_slug>.json")),(0,i.kt)("p",null,"Each JSON metadata file contains the following information:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"metrics": {\n    "metric_slug": {\n        "friendly_name": "Friendly metric name",\n        "description": "Metric description defined in mozanalysis or jetstream-config",\n        "bigger_is_better": true\n    }\n    // ...\n},\n"outcomes": {\n    "outcome_slug": {\n        "slug": "outcome_slug",\n        "friendly_name": "Friendly outcome name",\n        "description": "Outcome description defined in jetstream-config",\n        "metrics": [    // metrics computed as part of outcome\n            "metric_slug",\n            "another_metric_slug"\n        ],\n        // commit hash of outcome version that was used in analysis\n        "commit_hash": "74e45eb4c3bf4ea7f1d65f888a70bfa0f6a86c1e" \n    }\n    // ...\n}\n')),(0,i.kt)("p",null,"Metadata of metrics and outcomes is used to show names, descriptions and whether larger numbers are better in the Experimenter results. "))}p.isMDXComponent=!0}}]);