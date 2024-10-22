import img1 from '../../images/image-1.jpeg';
import img2 from '../../images/image-2.jpg';
import img3 from '../../images/image-3.jpg';
import img4 from '../../images/image-4.png';
import img5 from '../../images/image-5.jpg';
import img6 from '../../images/image-6.jpeg';
import img7 from '../../images/image-7.jpeg';
import img8 from '../../images/image-8.jpeg';
import img9 from '../../images/image-9.jpeg';
import img10 from '../../images/image-10.jpeg';
import img11 from '../../images/image-11.jpeg';
import img12 from '../../images/image-12.jpg';
import auth1 from '../../images/auther-1.png';
import auth2 from '../../images/auther-2.png';

  export  const Page1 = [
        {image:img1,name:"Sam Reaves",info:"I use Udemy for learning specific technologies but chose Builder Book after being impressed with their website being the actual project you build. The up to date, step by step instructions made creating the app a breeze."},
        {image:img2,name:"Salie Lim",info:"Builder Book is by far the best book I have found on the MERN stack. It also covers testing. Very comprehensive book with explanations so that you actually understand what the code does."},
        {image:img3,name:"Earl Lee",info:"As an engineer turned product manager that's a few years removed from writing code, Builder Book has been a quick and convenient way to brush up on full-stack web development and learn React for a side project."},
        {image:img4,name:"Rick Hallett",info:"The authors are particularly receptive to open-source issues and pull-requests; this made my experience very worthwhile. Strongly recommend to those going from junior to middleweight JavaScript developers"},
    ]

    export  const Page2 = [
        {image:img5,name:"Matt Moyles",info:"I found it very useful in Next.js learning. I followed along with the book, then used the async-labs/saas boilerplate to start a new app at my job."},
        {image:img6,name:"Fahad Riaz",info:"I'm a backend developer and was looking for something that brought me up to speed on how to deploy a production ready website. This fit the bill."},
        {image:img7,name:"Pavel Serafimovich",info:"This is a great book. Clear presentation style. The accompanying code is of very high quality. Your anti-monopoly ideology is also inspiring."},
        {image:img8,name:"Andrew Shrout",info:"Thanks again for everything in the book and all the help in GitHub. Really appreciate how much you've all done to make my company come to life."},
    ]

    export  const Page3 = [
        {image:img9,name:"Paul Parks",info:"I am primarily a backend engineer who has not been exposed to too much front end or web development. Builderbook has been a great resource that has allowed me to learn several frameworks and design patterns with ease."},
        {image:img10,name:"Patrick Caughey",info:"The SaaS Boilerplate book has been super helpful. The first few chapters got me up and running very quickly, and as I re-read them I continued to learn more about the 'why' behind the decisions you made. It's been fun and quite informative!"},
        {image:img11,name:"Aleksandrs Savkins",info:"The book is exactly what I was looking for - I needed some guide that will cover the entire processes of creating web apps and saas. I didn't want to waste time and go through many guides, the book is a huge time saver!"},
        {image:img12,name:"Jia Wang",info:"I want to thank you all for your effort to build up this fantastic project. It is really awesome for full-stack beginners! As one of them, I am using this project to build my own thing, during the implementation I learned a lot, and I might have gave up if I did not choose to purchase BUILDER BOOK! Deeply appreciate that!"},
    ]

    export const bookArray = [
        {title:"Robust JavaScript stack",info:"Learn how to build a web app with React.js, Next.js, Material-UI, Express.js, Mongoose, and MongoDB. We regularly update the book with the latest versions of all dependencies."},
        {title:"Popular third-party APIs",info:"Learn how to integrate a web app with Google for user authentication, GitHub for markdown and collaboration, AWS SES for transactional emails, MailChimp for newsletters, and Stripe for selling."},
        {title:"Build a complete web application",info:"We cover every step of building a web app - writing pages/components, creating a server, connecting a database, integrating internal and external API infrastructures, and more. You could spend days or weeks searching these topics on Google. The web app you build in this book can be used to sell your own paywalled content and as a portfolio item."},
        {title:"Public support",info:"If you have questions, search our closed Github issues or create a new one. We are happy to answer beginner to expert-level questions. With the help of our readers, we've made many improvements to our book. If you purchased our book, we typically reply within 1 or 2 days."}
    ]

    export const TableArray = [
        {
            title:"Introduction",
            infos: [
            {info:"What you will learn",subinfo:[]},
            {info:"Why should I pay $49 for this book?",subinfo:[]},
            {info:"Project structure",subinfo:[]},
            {info:"Screenshots",subinfo:[
                {id:0,sub:"Customer pages"},
                {id:1,sub:"Admin pages"}
            ]},
            {info:"Authors",subinfo:[]}
            ]
        },

        {
            title:"Chapter 5: Book data model. Chapter data model. MongoDB index. API infrastructure and user roles. Read chapter API.",
            infos: [
            {info:"Book data model",subinfo: [
                {id:0,sub:"Schema for Book data model"},
                {id:1,sub:"Static methods for Book data model"},
            ]},
            {info:"Chapter data model",subinfo : [
                {id:0,sub:"Schema for Book data model"},
                {id:1,sub:"Static methods for Chepter data model"},
            ]},
            {info:"MongoDB index",subinfo:[]},
            {info:"API infrastructure and user roles",subinfo:[
                {id:0,sub:"Pages and components for user roles"},
                {id:1,sub:"API methods by user roles"},
                {id:2,sub:"Express routes by user roles"},
                {id:3,sub:"Custom routing for pages"}
            ]},
            {info:"Read chapter API",subinfo:[
                {id:0,sub:"ReadChapter page"},
                {id:1,sub:"Testing Read chapter API"},
            ]},
            ]
        },

        {
            title:"Chapter 1: Set up Node.js project. VS code editor and lint. Set up Next.js project. Material-UI integration. Server-side rendering. Custom styles.",
            infos: [
            {info:"Set up Node.js project",subinfo:[
                {id:0,sub:"Installing Node.js and Yarn"},
                {id:1,sub:"package.json"}
            ]},
            {info:"VS code editor and lint",subinfo:[
                {id:0,sub:"VS code editor"},
                {id:1,sub:"ESLint and Prettier"}
            ]},
            {info:"Set up Next.js project",subinfo:[
                {id:0, sub:"Basic structure"},
                {id:1, sub:"Compiling code"},
                {id:2, sub:"Document HOC"},
                {id:3, sub:"App HOC extension"},
                {id:4, sub:"Index page"},
                {id:5, sub:"Header component"},
            ]},
            {info:"Material-UI integration",subinfo:[
                {id:0, sub:"MyDocument component"},
                {id:1, sub:"Spread operator"},
                {id:2, sub:"theme and ThemeProvider"},
                {id:3, sub:"Testing Next.js/Material-UI integration"},
            ]},
            {info:"Server-side rendering",subinfo:[]},
            {info:"Custom styles",subinfo:[]}
            ]
        },

        {
            title:"Chapter 6: Set up Github API infrastructure. Sync content API infrastructure. Missing UI infrastructure for Admin user. Two improvements. Testing.",
            infos: [
            {info:"Book data model",subinfo:[
                {id:0, sub:"Schema for Book data model"},
                {id:1, sub:"Static methods for Book data model"}
            ]},
            {info:"Chapter data model",subinfo:[
                {id:0, sub:"VS code editorSchema for Chapter data model"},
                {id:1, sub:"Static methods for Chapter data model"}
            ]},
            {info:"API infrastructure and user roles",subinfo:[
                {id:0, sub:"Pages and components for user roles"},
                {id:1, sub:"API methods by user roles"},
                {id:2, sub:"Express routes by user roles"},
                {id:3, sub:"Custom routing for pages"},
            ]},
            {info:"Read chapter API",subinfo:[
                {id:0, sub:"ReadChapter page"},
                {id:1, sub:"Testing Read chapter API"},
            ]},
            {info:"Server-side rendering",subinfo:[]},
            ]
        },

        {
            title:"Chapter 2: HTTP. Express server. Next-Express server, nodemon. Index.getInitialProps. User data model and mongoose. MongoDB database and dotenv. Testing server-database connection. Retrieving document. Session and cookie. MenuWithAvatar and Header components.",
            infos: [
            {info:"HTTP",subinfo:[]},
            {info:"Express server",subinfo:[
                {id:0, sub:"Next-Express server, nodemon"},
                {id:1, sub:"Index.getInitialProps"},
                {id:2, sub:"Testing new server"},
            ]},
            {info:"MongoDB database and dotenv",subinfo:[
                {id:0, sub:"Testing server-database connection"},
                {id:1, sub:"Retrieving document"}
            ]},
            {info:"Session",subinfo:[
                {id:0, sub:"Configure session"},
                {id:1, sub:"Save session"},
                {id:2, sub:"Testing session and cookie"},
            ]},
            ]
        },

        {
            title:"Chapter 7: Table of Contents. Sections. Sidebar. Toggle TOC. Highlight for section. Active section. Hide Header. Mobile browser.",
            infos: [
            {info:"Hide Header",subinfo:[]},
            {info:"Table of Contents",subinfo:[
                {id:0, sub:"Sections"},
                {id:1, sub:"Sidebar"},
                {id:2, sub:"Toggle TOC"},
            ]},
            {info:"Highlight for section",subinfo:[
                {id:0, sub:"Active section"},
            ]},
            {info:"Hide Header",subinfo:[]},
            {info:"Mobile browser",subinfo:[]}
            ]
        },


    ]

    const className = {borderRadius:"10px",height:"7rem",width:"7rem"}
    export const auth = [
        {img:auth1,name:"Kelly",className:className},
        {img:auth2,name:"Tim",className:className}
    ]

    export const auther_info = [
        {info:"maintain two popular repos - saas and builderbook (combined: over 6000 stars and 1000 unique visitors per week)."},
        {info:"built and maintain the most popular React/Typescript/Node boilerplate for starting a SaaS business."},
        {info:"built and opensourced Async, open source team communcation web app to separate urgent vs non-urgent conversations."},
        {info:"built Work in biotech, popular job board for small biotech startups."},
        {info:"built AI-cruiter browser extension , free and popular extension for sourcing recruiters that uses LLMs (LLama 3)."},
        {info:"built and building numerous tools and automations for recruiters, including ATS (Applicant Tracking System) for recruiter agencies."},
        {info:"built over a dozen SaaS web applications in the last 10 years for our customers and offer custom development service: async-labs.com"},
        {info:"built Loadflow sophisticated fleet tracking and scheduling software."},
    ]