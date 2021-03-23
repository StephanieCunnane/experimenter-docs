(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{77:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return b}));var i=n(3),a=n(7),o=(n(0),n(90)),r={id:"contributing",title:"Contributing",slug:"/contributing"},l={unversionedId:"contributing",id:"contributing",isDocsHomePage:!1,title:"Contributing",description:"The Experimenter documentation hub is managed in the mozilla/experimenter-docs repository. You will need a GitHub account to contribute, and if you are not already in the Project Nimbus GitHub team, you may need to request write access in the #nimbus-project Slack channel.",source:"@site/docs/contributing.md",slug:"/contributing",permalink:"/experimenter-docs/contributing",editUrl:"https://github.com/mozilla/experimenter-docs/edit/main/docs/contributing.md",version:"current",sidebar:"sidebar",previous:{title:"Welcome",permalink:"/experimenter-docs/"},next:{title:"Root Page",permalink:"/experimenter-docs/experiment-owners"}},c=[{value:"Configuring Your Notifications",id:"configuring-your-notifications",children:[]},{value:"GitHub Workflow",id:"github-workflow",children:[{value:"Editing in the GitHub UI",id:"editing-in-the-github-ui",children:[]},{value:"Pull Request Workflow",id:"pull-request-workflow",children:[]}]},{value:"Create a New Document",id:"create-a-new-document",children:[]},{value:"Modify an Existing Document",id:"modify-an-existing-document",children:[]},{value:"Adding Images",id:"adding-images",children:[]},{value:"Add or Modify Sidebar Links",id:"add-or-modify-sidebar-links",children:[]}],s={toc:c};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(i.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The Experimenter documentation hub is managed in the ",Object(o.b)("a",{parentName:"p",href:"https://github.com/mozilla/experimenter-docs"},"mozilla/experimenter-docs")," repository. You will need a GitHub account to contribute, and if you are not already in the ",Object(o.b)("a",{parentName:"p",href:"https://github.com/orgs/mozilla/teams/project-nimbus/members"},"Project Nimbus GitHub team"),", you may need to request write access in the #nimbus-project Slack channel."),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Please file issues for this repository in ",Object(o.b)("a",{parentName:"p",href:"https://github.com/mozilla/experimenter/issues"},"Experimenter")," and add the ",Object(o.b)("inlineCode",{parentName:"p"},"experimenter-docs")," label."))),Object(o.b)("p",null,"This page will walk you through how to edit an existing document or create a new one, how to display docs in the sidebar where desired, and how to make these changes in GitHub. See the in-page header navigation bar on the right-hand side of this doc for handy quicklinks."),Object(o.b)("p",null,"Documents are written in Markdown (",Object(o.b)("inlineCode",{parentName:"p"},".md"),") files using ",Object(o.b)("a",{parentName:"p",href:"https://github.github.com/gfm/"},"GitHub-flavored Markdown syntax")," and are compiled into static web pages. ",Object(o.b)("a",{parentName:"p",href:"https://mdxjs.com/"},"MDX")," is also supported, meaning you may embed React components in content as needed. Additionally, Docusaurus offers ",Object(o.b)("a",{parentName:"p",href:"https://v2.docusaurus.io/docs/markdown-features/admonitions"},"admonitions")," which can be useful when placing emphasis on pieces of documentation. Refer to Docusaurus ",Object(o.b)("a",{parentName:"p",href:"https://v2.docusaurus.io/docs/markdown-features"},"Markdown features")," for more technical information about these Markdown pages."),Object(o.b)("p",null,"If you need custom CSS styles, you can edit the ",Object(o.b)("inlineCode",{parentName:"p"},"src/css/custom.css")," file. Try to use classes when writing MDX with names that will be easy to reuse later."),Object(o.b)("div",{className:"flex-lg"},Object(o.b)("div",null,Object(o.b)("h3",{id:"configuring-your-notifications"},"Configuring Your Notifications"),Object(o.b)("p",null,'If you would like to subscribe to notifications for this repository, including for when someone requests doc changes with a pull request that you can potentially review and approve, be sure to "Watch" the repository by clicking on the repository\'s "Notification settings" menu and selecting "All Activity."'),Object(o.b)("p",null,"Also, see ",Object(o.b)("a",{parentName:"p",href:"https://docs.github.com/en/github/managing-subscriptions-and-notifications-on-github/configuring-notifications"},"configuring notifications")," in GitHub."),Object(o.b)("p",null,"Alternatively, consider subscribing to this repository in the ",Object(o.b)("a",{parentName:"p",href:"https://slack.github.com/"},"GitHub Slack"),' app by searching for it under "Apps" inside Slack.')),Object(o.b)("img",{src:"/experimenter-docs/img/contributing/github-watch.png",alt:"GitHub Watch",className:"img-xs-right"})),Object(o.b)("h2",{id:"github-workflow"},"GitHub Workflow"),Object(o.b)("p",null,"All documentation edits and additions will require a pull request into the ",Object(o.b)("inlineCode",{parentName:"p"},"main")," branch because merged changes will trigger an automatic deployment, but ",Object(o.b)("strong",{parentName:"p"},"fear not if you don't prefer pulling down repositories locally and editing files - you probably don't need to."),Object(o.b)("sup",{parentName:"p",id:"fnref-1"},Object(o.b)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),Object(o.b)("h3",{id:"editing-in-the-github-ui"},"Editing in the GitHub UI"),Object(o.b)("p",null,"If you aren't familiar with using Git via the command line, we recommend using the GitHub user interface to make changes to docs. See ",Object(o.b)("a",{parentName:"p",href:"https://docs.github.com/en/github/managing-files-in-a-repository/editing-files-in-your-repository"},"the GitHub UI Docs")," if you need further details than what's provided here."),Object(o.b)("p",null,"In the following sections, you'll find corresponding links to the GH UI directly under each section title. If you need to edit a file, you'll click on the \"Edit\" button:"),Object(o.b)("img",{src:"/experimenter-docs/img/contributing/edit-this-file.png",alt:"edit this file",className:"img-sm"}),Object(o.b)("p",null,"You'll be brought to the GitHub editor page for that file. If you're creating a new document, you'll see a similar editor."),Object(o.b)("p",null,'When you\'re satisfied with your changes or new document, at the bottom of the page, enter a commit message and optional description. Be sure to have the option "Create a new branch" selected, the name of which can be anything, but ',Object(o.b)("strong",{parentName:"p"},"if you also need to make edits to the sidebar or add images"),", you'll want to keep the branch name in mind."),Object(o.b)("img",{src:"/experimenter-docs/img/contributing/commit-changes.png",alt:"Commit changes",className:"img-xl"}),Object(o.b)("p",null,"Click ",Object(o.b)("inlineCode",{parentName:"p"},"Commit changes")," and you'll be brought to a pull request view comparing your new branch to ",Object(o.b)("inlineCode",{parentName:"p"},"main"),". If you don't need to make updates to the sidebar, see the ",Object(o.b)("a",{parentName:"p",href:"#pull-request-workflow"},"Pull Request Workflow")," section and click ",Object(o.b)("inlineCode",{parentName:"p"},"Create pull request"),"."),Object(o.b)("h4",{id:"doc-edits--sidebar-edits"},"Doc Edits + Sidebar Edits"),Object(o.b)("p",null,'If you also need to make updates to the sidebar, you will follow the GH UI link under "Adding or Modifying Sidebar Links" but replace "main" in the URL with the name of your branch. For example, if the name of your branch is ',Object(o.b)("inlineCode",{parentName:"p"},"my-flying-nimbus"),", ",Object(o.b)("a",{parentName:"p",href:"https://github.com/mozilla/experimenter-docs/edit/my-flying-nimbus/sidebars.js"},"this would be the link")," you'd use to edit that file. Similarly to the instructions above, after you've made the desire changes, enter a commit message and optional description. However, this time, you will select the option ",Object(o.b)("strong",{parentName:"p"},"commit directly to the ",Object(o.b)("inlineCode",{parentName:"strong"},"my-flying-nimbus")," branch")," instead of creating a new branch."),Object(o.b)("p",null,"After committing your changes, you'll be brought back to a pull request view comparing your new branch to ",Object(o.b)("inlineCode",{parentName:"p"},"main"),". You may need to edit the PR title, but if your files changed look good, click ",Object(o.b)("inlineCode",{parentName:"p"},"Create pull request")," and see the ",Object(o.b)("a",{parentName:"p",href:"#pull-request-workflow"},"Pull Request Workflow")," section."),Object(o.b)("h3",{id:"pull-request-workflow"},"Pull Request Workflow"),Object(o.b)("h4",{id:"pr-template"},"PR Template"),Object(o.b)("p",null,"After clicking ",Object(o.b)("inlineCode",{parentName:"p"},"Create pull request"),", you will be presented with a pull request template specific to this repository."),Object(o.b)("p",null,"Edit the line ",Object(o.b)("inlineCode",{parentName:"p"},"Closes: mozilla/experimenter#0000")," where ",Object(o.b)("inlineCode",{parentName:"p"},"experimenter")," may need to be changed to reflect the repository where the GitHub issue lives and where ",Object(o.b)("inlineCode",{parentName:"p"},"0000")," should be changed to reflect the issue number. Delete this section if merging your pull request won't close an issue."),Object(o.b)("p",null,'Under "Permission Checklist," check the boxes applicable to your pull request that would make this process easier for you. If you have any specific requests regarding the checkboxes or anything else, please note them in the pull request.'),Object(o.b)("h4",{id:"reviewing-and-merging"},"Reviewing and Merging"),Object(o.b)("p",null,"To make sure your pull request is reviewed, either request a specific reviewer to look at your PR, request the ",Object(o.b)("inlineCode",{parentName:"p"},"mozilla/project-nimbus-team"),", or ask the team in the #nimbus-project Slack channel to take a look. Once you've created the pull request, automatic checks will run to ensure the project can build and deploy successfully with your changes, and at least one reviewer will need to approve your PR."),Object(o.b)("p",null,"You may receive feedback or questions on your PR that you can address through editing the file in question locally or in the GH UI. When your PR is approved, unless you granted permission to merge your PR once approved via an option in the PR template, you should go back to merge your own pull request in case you may want to make another edit before the pull request is merged or because you may get a non-blocking suggestion. If that happens, you can make the change and then merge the PR or simply merge the PR if you disagree with the comment."),Object(o.b)("p",null,"Once your PR is merged, you should see your changes reflected ",Object(o.b)("a",{parentName:"p",href:"https://mozilla.github.io/experimenter-docs/"},"at the URL this hub is housed at")," in about 10 minutes."),Object(o.b)("h2",{id:"create-a-new-document"},"Create a New Document"),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"\ud83d\udc49 ",Object(o.b)("a",{parentName:"p",href:"https://github.com/mozilla/experimenter-docs/new/main/docs"},"Click here to this in the GitHub UI")," \ud83d\udc48"))),Object(o.b)("p",null,'Let\'s say you want to create a new document called "My Flying Nimbus" that details how to acquire and guide your very own magical, yellow cloud.'),Object(o.b)("p",null,"In the ",Object(o.b)("a",{parentName:"p",href:"https://github.com/mozilla/experimenter-docs/tree/main/docs"},Object(o.b)("inlineCode",{parentName:"a"},"docs/"))," directory, either locally on your machine or through the GitHub UI link above, create your file, ",Object(o.b)("inlineCode",{parentName:"p"},"my-flying-nimbus.md"),". The name can be whatever you want, but it's a good general rule of thumb to keep the name similar to whatever the doc title will be."),Object(o.b)("p",null,"Paste the following doc metadata, or frontmatter as it's referred to in Docusaurus, at the top of the file:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-md"},"---\nid: my-flying-nimbus\ntitle: My Flying Nimbus\nslug: /my-flying-nimbus\n---\n")),Object(o.b)("p",null,"With this at the top of the MD file, Docusaurus will automatically make your document available for viewing at the slug ",Object(o.b)("inlineCode",{parentName:"p"},"/my-flying-nimbus"),". Write your document in MD/X and once you're satisfied with your new document, commit and push your changes to your branch or follow the instructions in the ",Object(o.b)("a",{parentName:"p",href:"#Github-UI"},"GitHub UI")," section to commit your changes and put in your pull request."),Object(o.b)("h2",{id:"modify-an-existing-document"},"Modify an Existing Document"),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"\ud83d\udc49 ",Object(o.b)("a",{parentName:"p",href:"https://github.com/mozilla/experimenter-docs/tree/main/docs"},"Click here to this in the GitHub UI")," \ud83d\udc48"))),Object(o.b)("p",null,'Editing an existing doc is easy peasy. Click on the link above and choose the document you want to modify, or alternatively, find the "Edit this page" link at the bottom of any document inside the Doc Hub, and follow the instructions in the ',Object(o.b)("a",{parentName:"p",href:"#Github-UI"},"GitHub UI")," section."),Object(o.b)("p",null,"Modifying the ",Object(o.b)("inlineCode",{parentName:"p"},"title")," property at the top of the document will update what the sidebar link displays."),Object(o.b)("p",null,"Note that if you change the ID also found at the top of the document, you will also need to update the matching string in ",Object(o.b)("inlineCode",{parentName:"p"},"sidebars.js")," (it's case-sensitive). See the ",Object(o.b)("a",{parentName:"p",href:"#adding-or-modifying-sidebar-links"},'"Adding or Modifying Sidebar Links"')," section for more details as well as ",Object(o.b)("a",{parentName:"p",href:"#doc-edits--sidebar-edits"},"Doc Edits + Sidebar Edits")," in the GH UI."),Object(o.b)("h2",{id:"adding-images"},"Adding Images"),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"\ud83d\udc49 ",Object(o.b)("a",{parentName:"p",href:"https://github.com/mozilla/experimenter-docs/upload/main/static/img/my-flying-nimbus"},"Click here to this in the GitHub UI")," \ud83d\udc48"))),Object(o.b)("p",null,"Images for your documentation should be located at ",Object(o.b)("inlineCode",{parentName:"p"},"static/img/your-doc-name/image-name.png"),". To upload these in the GH UI, change ",Object(o.b)("inlineCode",{parentName:"p"},"my-flying-nimbus")," in the link given above to the name of your documentation which will reflect a new directory that holds the images for your doc. When you've finished uploading your images, follow the instructions in ",Object(o.b)("a",{parentName:"p",href:"#editing-in-the-github-ui"},"Editing in the GH UI")," to commit this to a new branch or existing branch you've already committed documentation edits to. (Tip: if you've already made a doc change and use this link to commit image changes, make sure \"main\" in the URL is updated to your branch name!)"),Object(o.b)("p",null,"Once you know the name of your image, you can insert the following in your documentation..."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-mdx",metastring:'title="my-flying-nimbus.md"',title:'"my-flying-nimbus.md"'},'<img\n  src="/experimenter-docs/img/my-flying-nimbus/image-name.png"\n  alt="changeme, alt text describing the image"\n  className="img-lg"\n/>\n')),Object(o.b)("p",null,"...where ",Object(o.b)("inlineCode",{parentName:"p"},"my-flying-nimbus")," is the name of the directory (and doc name) and ",Object(o.b)("inlineCode",{parentName:"p"},"image-name")," is the name of the image."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Unfortunately you won't be able to preview the image in the GitHub UI or custom styles you add to it.")," To do this, you will have to follow the ",Object(o.b)("a",{parentName:"p",href:"https://github.com/mozilla/experimenter-docs#working-locally"},"repo front-page instructions")," to run the project locally. This is recommended if you need to right-align or left-align an image, but if you just need to display an image at full-width, you can optionally check the box in the pull request template asking for the reviewer to check into your branch and look at it for you."),Object(o.b)("p",null,"You can add a ",Object(o.b)("inlineCode",{parentName:"p"},"className")," to the image, like ",Object(o.b)("inlineCode",{parentName:"p"},"img-lg"),", to adjust the size. ",Object(o.b)("a",{parentName:"p",href:"https://github.com/mozilla/experimenter-docs/blob/main/src/css/custom.css"},"Click here")," to see our custom CSS file and ",Object(o.b)("a",{parentName:"p",href:"https://github.com/mozilla/experimenter-docs/edit/main/src/css/custom.css"},"edit it in the GH UI here"),"."),Object(o.b)("h2",{id:"add-or-modify-sidebar-links"},"Add or Modify Sidebar Links"),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"\ud83d\udc49 ",Object(o.b)("a",{parentName:"p",href:"https://github.com/mozilla/experimenter-docs/blob/main/sidebars.js"},"Click here to this in the GitHub UI")," \ud83d\udc48"))),Object(o.b)("p",null,"If you'd like to add a new external link, link to a new document, or modify an existing link in the sidebar, you have a few options."),Object(o.b)("p",null,"Note that the ",Object(o.b)("inlineCode",{parentName:"p"},"id")," references in this section are case-sensitive. Also, if you'd like more details than what's provided here, you can check out the ",Object(o.b)("a",{parentName:"p",href:"https://v2.docusaurus.io/docs/sidebar"},"Docusaurus Docs on sidebars"),"."),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Tip: If you just need to update the sidebar label and not the page title (atypical), just add ",Object(o.b)("inlineCode",{parentName:"p"},"sidebar_label: Nimbuses Are Sweet")," to the frontmatter section at the top of the MD file."))),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Create a new top-level internal link to the doc or modify an existing one")),Object(o.b)("img",{src:"/experimenter-docs/img/contributing/top-level-link.png",alt:"top-level link",className:"img-lg"}),Object(o.b)("p",null,"To set this up, you'll have to modify the ",Object(o.b)("inlineCode",{parentName:"p"},"sidebars.js")," file locally or through the GH UI link above - all it needs is the ",Object(o.b)("inlineCode",{parentName:"p"},"id")," that is set at the top of the MD file. It will look something like this to reflect the screenshot:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js",metastring:'title="sidebars.js"',title:'"sidebars.js"'},'module.exports = {\n  sidebar: [\n    "welcome",\n    "my-flying-nimbus", // this doc ID is all you need to add!\n    ... // other unrelated sidebar items\n')),Object(o.b)("hr",null),Object(o.b)("ol",{start:2},Object(o.b)("li",{parentName:"ol"},"Create a new top-level external link to the doc")),Object(o.b)("div",{className:"flex-lg"},Object(o.b)("img",{src:"/experimenter-docs/img/contributing/top-level-external-link.png",alt:"top-level external link",className:"img-sm-left"}),Object(o.b)("div",null,Object(o.b)("p",null,"If you'd like to add a new top-level external link, ",Object(o.b)("code",null,"sidebars.js")," requires an object expecting ",Object(o.b)("code",null,"type"),", ",Object(o.b)("code",null,"label"),", and ",Object(o.b)("code",null,"href")," that will look something like this to reflect the screenshot:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js",metastring:'title="sidebars.js"',title:'"sidebars.js"'},'module.exports = {\n  sidebar: [\n     "welcome",\n   {\n     type: "link",\n     label: "My Flying Nimbus",\n     href: "https://magicalyellowcloud.com",\n   },\n   ... // other unrelated sidebar items\n')),Object(o.b)("p",null,"You'll want to make sure ",Object(o.b)("inlineCode",{parentName:"p"},"type")," is set to ",Object(o.b)("inlineCode",{parentName:"p"},'"link"'),"."))),Object(o.b)("hr",null),Object(o.b)("ol",{start:3},Object(o.b)("li",{parentName:"ol"},"Create a new internal link to the doc in an existing or new category")),Object(o.b)("div",{className:"flex-lg"},Object(o.b)("img",{src:"/experimenter-docs/img/contributing/category-link.png",alt:"category link",className:"img-sm-left order-2-lg"}),Object(o.b)("div",null,Object(o.b)("p",null,'In Docusaurusland, sidebar menu items with a down caret are called "categories."'),Object(o.b)("p",null,"To add your internal page to an existing category, find the category via the ",Object(o.b)("inlineCode",{parentName:"p"},"label")," item in ",Object(o.b)("inlineCode",{parentName:"p"},"sidebars.js")," which will match the category text you see displayed in the sidebar (see code below). Find the ",Object(o.b)("inlineCode",{parentName:"p"},"items")," array for that category and add the doc ID you wish to link internally to."),Object(o.b)("p",null,"To add your internal page to a new category, copy and paste the entire object shown below where you'd like it to show up in the sidebar. Edit your label as desired and change ",Object(o.b)("inlineCode",{parentName:"p"},"items")," to ",Object(o.b)("inlineCode",{parentName:"p"},'items: ["my-flying-nimbus"]')," with your doc ID."))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js",metastring:'title="sidebars.js"',title:'"sidebars.js"'},'module.exports = {\n  sidebar: [\n     ... // other unrelated sidebar items\n    {\n      type: "category",\n      label: "Experiment Owners", // what you\'re looking for, or creating\n      items: ["experiment-owners-root", "my-flying-nimbus"], // doc ID is in this array\n    },\n    ... // other unrelated sidebar items\n')),Object(o.b)("hr",null),Object(o.b)("ol",{start:4},Object(o.b)("li",{parentName:"ol"},"Create a new external link to a doc in an existing or new category")),Object(o.b)("div",{className:"flex-lg mb-16px"},Object(o.b)("img",{src:"/experimenter-docs/img/contributing/category-external-link.png",alt:"category link",className:"img-sm-left"}),Object(o.b)("div",null,Object(o.b)("p",null,"The code changes for this option essentially combine options 2 and 3."),Object(o.b)("p",null,"To add your external link to an existing category, find the category via the ",Object(o.b)("inlineCode",{parentName:"p"},"label")," item in ",Object(o.b)("inlineCode",{parentName:"p"},"sidebars.js")," which will match the category text you see displayed in the sidebar (see code below). Find the ",Object(o.b)("inlineCode",{parentName:"p"},"items")," array for that category and add the object shown below (also shown in option 2) to the array."),Object(o.b)("p",null,"To add your external link to a new category, copy and paste the entire object shown below where you'd like it to show up in the sidebar. Edit your top-level label as desired, remove ",Object(o.b)("inlineCode",{parentName:"p"},'"experiment-owners-root",')," from the ",Object(o.b)("inlineCode",{parentName:"p"},"items")," array, and update the label you'd like to display for the link."))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js",metastring:'title="sidebars.js"',title:'"sidebars.js"'},'module.exports = {\n  sidebar: [\n     ... // other unrelated sidebar items\n    {\n      type: "category",\n      label: "Experiment Owners", // what you\'re looking for, or creating\n      items: ["experiment-owners-root",\n        {\n          type: "link",\n          label: "My Flying Nimbus",\n          href:\n            "https://magicalyellowcloud.com",,\n        },\n      }],\n    },\n    ... // other unrelated sidebar items\n')),Object(o.b)("hr",null),Object(o.b)("div",{className:"footnotes"},Object(o.b)("hr",{parentName:"div"}),Object(o.b)("ol",{parentName:"div"},Object(o.b)("li",{parentName:"ol",id:"fn-1"},"If you'd like to preview your sidebar changes or if you need to preview how a document containing MDX will build, you'll likely want to check into your branch and run ",Object(o.b)("inlineCode",{parentName:"li"},"yarn start")," to see the changes. Please reach out to the Experimenter team if you need help.",Object(o.b)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}b.isMDXComponent=!0},90:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return p}));var i=n(0),a=n.n(i);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),b=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=b(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,r=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=b(n),u=i,p=d["".concat(r,".").concat(u)]||d[u]||m[u]||o;return n?a.a.createElement(p,l(l({ref:t},s),{},{components:n})):a.a.createElement(p,l({ref:t},s))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var s=2;s<o;s++)r[s]=n[s];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);