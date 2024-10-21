/* eslint-disable react/jsx-pascal-case */
import Author from "../author";
import Book_Deatlis from "../bookDetalis";
import Header_Content from "../headerContent";
import Imgcard from "../imgCard";
import Table_Of_Content from "../table_content";
import { auther_info } from "../commonArray";
import { auth } from "../commonArray";
import { Page2 } from "../commonArray";

const Book2 = () => {

    const headerDetalis = [
        {
            title:"Book 2: SaaS Boilerplate",
            text1:"Learn how to build a production-ready, feature-rich SaaS web application from scratch.",
            text2:"Starting a small and independent software business is hard.",
            text3:"Our detailed book on building a ready-to-go saas boilerplate will save you weeks of effort and thousands of dollars.",
            btninfo:"Preview & buy book for $49"
        }
    ]

    const bookArray = [
        {title:"Robust JS/TS stack",info:"Our open source project occasionally trends on GitHub inside the TypeScript category, and we keep our book up-to-date with the latest versions of all dependencies. Build a web app with React.js, Next.js, Material-UI, MobX, WebSockets, Express.js, Node.js, Mongoose, MongoDB. Write with TypeScript."},
        {title:"Popular third-party APIs",info:"In addition to numerous internal API infrastructures, integrate your SaaS web application with external API services. Integrate with Google for user authentication and analytics, AWS SES for transactional emails, AWS S3 for file hosting and serving, MailChimp for newsletters, and Stripe for selling."},
        {title:"Build your own SaaS product and become an owner of your SaaS business",info:"This book is not another to-do list app. You will build a practical web application with must-have features that can become your SaaS business. We take you through every step of building a SaaS web application from scratch."},
        {title:"Public support",info:"If you have questions, search our closed Github issues or create a new one. We are happy to answer beginner to expert-level questions. With the help of our readers, we've made many improvements to our book. If you purchased our book, we typically reply within 1 or 2 days."}
    ]

    return (
        <>
         <div>
            <Header_Content headerDetalis={headerDetalis}/>

            <Imgcard imgarray={Page2}/>

            <Book_Deatlis bookArray={bookArray}/>

            <Table_Of_Content/>

            <Author auther_info={auther_info} authers={auth}/>
         </div>
        </>
    )

}
export default Book2;