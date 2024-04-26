"use strict";(self.webpackChunkdataloaf=self.webpackChunkdataloaf||[]).push([[3004],{2634:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var n=a(4848),s=a(8453);const o={sidebar_position:3},i="Exploration of DataLoaf Design and Components",r={id:"case-study/tour-of-dataloaf",title:"Exploration of DataLoaf Design and Components",description:"DataLoaf can be mentally divided into three sections, shown in the figure above. They are: data collection, data storage and data visualization.",source:"@site/docs/case-study/tour-of-dataloaf.md",sourceDirName:"case-study",slug:"/case-study/tour-of-dataloaf",permalink:"/docs/case-study/tour-of-dataloaf",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/case-study/tour-of-dataloaf.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Understanding the Domain of Product Analytics",permalink:"/docs/case-study/product-analytics"},next:{title:"Justification of Design Decisions and Their Tradeoffs",permalink:"/docs/case-study/decisions-and-tradeoffs"}},d={},l=[{value:"The SDK and Data Collection Pipeline",id:"the-sdk-and-data-collection-pipeline",level:2},{value:"Data Storage in Amazon Redshift",id:"data-storage-in-amazon-redshift",level:2},{value:"Data Visualization with the Insights Application",id:"data-visualization-with-the-insights-application",level:2}];function c(e){const t={code:"code",h1:"h1",h2:"h2",img:"img",p:"p",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"exploration-of-dataloaf-design-and-components",children:"Exploration of DataLoaf Design and Components"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://lh7-us.googleusercontent.com/rfvJ-c9fjqJ2XRP50gCF3NOqzs5ThXOLJxL330dTwAY59Uz0VUljmDkZPwCCOS98LdLw8_PpIz85e8LGLQG-UBQ4DBtYKfDK5lYOTOn0xZnJ6csRMc5HqK_K_PmVkChIHcSgRsGl_5-RIT44",alt:""})}),"\n",(0,n.jsx)(t.p,{children:"DataLoaf can be mentally divided into three sections, shown in the figure above. They are: data collection, data storage and data visualization."}),"\n",(0,n.jsx)(t.p,{children:"DataLoaf's infrastructure is deployed to Amazon Web Services (AWS) through the use of a CLI tool. The deployment process is largely automated, and only needs a few pieces of information. The CLI tool makes it easy to provision DataLoaf infrastructure and get started with product analytics. It handles the heavy lifting in deployment and configuration of AWS resources, making self-hosting your product analytics as easy as possible."}),"\n",(0,n.jsx)(t.p,{children:"Data collection is handled by a combination of the SDK, which captures the data, and the infrastructure that moves that data into the database. The data storage section is the database itself. Data visualization encapsulates the insights application and the infrastructure that hosts it."}),"\n",(0,n.jsx)(t.p,{children:"The purpose of this section is only to provide a high-level overview of DataLoaf and its design. It's not meant to explain why certain design decisions were made. Decisions and their associated tradeoffs will be explored in the next section."}),"\n",(0,n.jsx)(t.h2,{id:"the-sdk-and-data-collection-pipeline",children:"The SDK and Data Collection Pipeline"}),"\n",(0,n.jsx)(t.p,{children:"The SDK is an npm package for a Node.js-based back-end server application. It has three actions: creating new event data, creating new user data, and updating existing user data. Event data is immutable, so once it's created, it will never be updated. Once the data is sent from the SDK, it needs a way to be transferred to the database."}),"\n",(0,n.jsx)(t.p,{children:"The figure below shows the infrastructure that represents the data collection pipeline."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://lh7-us.googleusercontent.com/_BnP_3Oth17mRZsybvH7kWl55M5YYamKeZ3-BbP-DthQNydhi6eTIPOZAwzO3Z_BkVYtkJ6MME6GcGXU9YxKhCy7dJvBYQxsJRhfmp3vnupIRPruTdEg8t54UG0aBZKKtvaOknean0qRY1g2",alt:""})}),"\n",(0,n.jsx)(t.p,{children:"Event and user data are sent from the SDK to an AWS API Gateway. An API Gateway is a fully managed interface that allows AWS infrastructure to field requests from a client application. In the context of DataLoaf, the API Gateway is used to receive data from the SDK and forward it to one of two AWS Lambda Functions. AWS Lambda Functions are functions as a service (FaaS). FaaS are single-purpose functions that are invoked in response to an event, such as a request from an API Gateway. One function is responsible for processing new entries and the other handles user updates."}),"\n",(0,n.jsx)(t.p,{children:"The AWS Lambda function that processes new data will format and forward the data to one of two Amazon Data Firehose streams. Firehose is a managed service that is designed to receive large amounts of data and ensure its delivery to a specified destination, such as S3, Redshift and others. New events go to one Firehose instance and new users go to the other. Each Firehose stream will send their data to respective Amazon Simple Storage Service (S3) buckets. S3 is a managed file storage system. Event data is collected in one bucket and user data is collected in a second bucket. From there, the data is batch-copied to the primary data store in a single transaction, which happens once every three minutes.\xa0"}),"\n",(0,n.jsx)(t.p,{children:"The AWS Lambda function that updates existing user data will interact with the database directly. Using a Lambda function allows for partial updates, which is very important. Because existing attributes might not be part of the update data, the operation needs to be able to retain existing data instead of just overwriting it completely with the new information. This function will pull the existing user information from the database, merge the data together and then write the updated data back to the user's entry."}),"\n",(0,n.jsx)(t.h2,{id:"data-storage-in-amazon-redshift",children:"Data Storage in Amazon Redshift"}),"\n",(0,n.jsxs)(t.p,{children:["Amazon Redshift is the primary data store for DataLoaf. It contains two tables that are created when the infrastructure is provisioned with the CLI tool. One ",(0,n.jsx)(t.code,{children:"events"})," table and one ",(0,n.jsx)(t.code,{children:"users"})," table. The following figure shows example entries from both tables.\xa0\n",(0,n.jsx)(t.img,{src:"https://lh7-us.googleusercontent.com/GXAvDMcjSHR4ehJ3QlHXt1iWse2JBhweYvGXQkv9UtYQ7E83tN_pjHn1lpgsURDGwMKozNEl9hoFCNhhoXAKJnqRpFrAFF800L3q0udplu3nl-RW8_idNsp28JIM5iMMCmMLEfVR38_rvPHs",alt:""})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://lh7-us.googleusercontent.com/cnkT9gwpsPP6tX6Ma-w945jcUyhJUXjOCHY11RkeQMufRTf-rsH4VNG43KAEjmtoCF-59WIU65bB1pK3ynmYREGBgn6Q4CbAFQ46fwCQdRDCojE_GJssj5EwDa0xLddJqr9hiTPLNCPCbCFX",alt:""})}),"\n",(0,n.jsx)(t.p,{children:"Redshift is a columnar database built on top of PostgreSQL. columnar databases are ideal for performing analytics workloads due to a number of optimizations that will be covered in a later section. In short, the data storage patterns of columnar databases allow for improved query speeds when doing the aggregations commonly found in analytics (counts, averages, medians, etc.).\xa0"}),"\n",(0,n.jsx)(t.p,{children:"It also integrates with a number of other AWS services, such as Amazon Data Firehose, S3, AWS Glue, Amazon EMR and more. This gave us several options when choosing the necessary components of our data pipeline."}),"\n",(0,n.jsx)(t.p,{children:"Redshift is also fully managed. It provides many features out of the box that traditionally require large engineering efforts to roll out. For one, it is sharded, which allows it to scale across additional nodes as overall storage capacity needs increase. It also provides query caching, meaning that repeated queries on unchanged data return responses almost immediately, increasing the responsiveness of the UI for DataLoaf."}),"\n",(0,n.jsx)(t.h2,{id:"data-visualization-with-the-insights-application",children:"Data Visualization with the Insights Application"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://lh7-us.googleusercontent.com/Q6cgabnYGC9fYtSuBpB3OMYTrVXqB-0SRLuZPAsE_rlCpnHlPMk3o_Jtvm5UGJ1Ss60gtyLYDDxxDCVW5E2ES2vTbx6sHhq-jryvoB7kjDpfSFM62zkrYg_BXmQaWlOHtMtsEmU2H2ChR9Vg",alt:""})}),"\n",(0,n.jsx)(t.p,{children:"The figure above shows the infrastructure of the data visualization section.\xa0"}),"\n",(0,n.jsx)(t.p,{children:"During the provisioning process, an Amazon Elastic Compute Cloud (EC2) instance is deployed. The EC2 instance hosts the back-end and front-end of the insights application. Nginx is used as a web server, and it serves the front-end application. It also forwards requests to the Express back-end. When a new selection is made in the insights application for a new data visualization, a request containing the selections are sent to the back-end."}),"\n",(0,n.jsx)(t.p,{children:"There is an option to add an Amazon Elastic Load Balancer (ELB) to the infrastructure if a valid domain is provided to the CLI. If provided, the CLI will automate the SSL/TLS certificate process to allow for HTTPS requests to hit the Insights application.\xa0"}),"\n",(0,n.jsx)(t.p,{children:"Both our back-end application and Nginx server are deployed via Docker. The use of Docker enabled a simpler deployment process due to the integration of configuration files within our back-end and Nginx containers. This standardization and easy integration allowed for a simpler deployment process within the EC2 instance."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://lh7-us.googleusercontent.com/SlzOeu0H_lTlzbaKutIGDDcu96U0DaeKhf54AcuStn_hB0zudygQU_ZIDJ2RDTDwEeODYCAAgZGPuTEjb1Fyu2kL86nL1faLUJpjGzLgCMj6GY3TXMhr_NxErhCGo3mNIF_hTuRbYdumdofn",alt:""})}),"\n",(0,n.jsx)(t.p,{children:"The figure above showcases how DataLoaf\u2019s insights application can be used to obtain event and user data. The query builder on the left of the interface allows for questions to be constructed. The result is visualized in the \u201cResult Window\u201d on the right side of the interface. A query can be built using up to four components: the event of interest, the aggregation type, the aggregation period and, optionally, any additional filters."})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},8453:(e,t,a)=>{a.d(t,{R:()=>i,x:()=>r});var n=a(6540);const s={},o=n.createContext(s);function i(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);